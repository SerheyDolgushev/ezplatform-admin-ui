<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageElement;

use Exception;
use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use PHPUnit\Framework\Assert;

class UserNotificationPopup extends Element
{
    public const ELEMENT_NAME = 'UserNotificationPopup';

    public function __construct(UtilityContext $context)
    {
        parent::__construct($context);
        $this->fields = [
            'notificationsPopupTitle' => '#view-notifications .modal-title',
            'notificationItem' => '.ez-notifications-modal__item',
            'notificationType' => '.ez-notifications-modal__type',
            'notificationDescription' => '.ez-notifications-modal__description',
        ];
    }

    public function verifyVisibility(): void
    {
        $this->context->waitUntilElementIsVisible($this->fields['notificationsPopupTitle']);
        Assert::assertNotNull($this->context->getElementByTextFragment('Notifications', $this->fields['notificationsPopupTitle']));
    }

    public function clickItem($type, $description)
    {
        $notifications = $this->context->findAllElements($this->fields['notificationItem']);
        foreach ($notifications as $notification) {
            $currentType = $this->context->findElement($this->fields['notificationType'], $this->defaultTimeout, $notification)->getText();
            if ($currentType !== $type) {
                continue;
            }

            $currentDescription = $this->context->findElement($this->fields['notificationDescription'])->getText();

            if ($currentDescription === $description) {
                $notification->click();

                return;
            }
        }

        throw new Exception(sprintf('Notification with type: %s and description: %d not found', $type, $description));
    }
}
