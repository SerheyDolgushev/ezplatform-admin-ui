!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnLinkEdit=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnLinkEdit=t(e.React,e.AlloyEditor))}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=49)}({0:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function o(){m&&p&&(m=!1,p.length?y=p.concat(y):v=-1,y.length&&l())}function l(){if(!m){var e=i(o);m=!0;for(var t=y.length;t;){for(p=y,y=[];++v<t;)p&&p[v].run();v=-1,t=y.length}p=null,m=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,y=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new u(e,t)),1!==y.length||m||i(l)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},1:function(e,t,n){"use strict";function r(e){return function(){return e}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},10:function(e,t,n){"use strict";(function(t){function r(e,n,r,u,c){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var f;try{i("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",u||"React class",r,s,typeof e[s]),f=e[s](n,s,u,r,null,o)}catch(e){f=e}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",r,s,typeof f),f instanceof Error&&!(f.message in l)){l[f.message]=!0;var d=c?c():"";a(!1,"Failed %s type: %s%s",r,f.message,null!=d?d:"")}}}if("production"!==t.env.NODE_ENV)var i=n(2),a=n(6),o=n(3),l={};e.exports=r}).call(t,n(0))},11:function(e,t,n){"use strict";var r=n(1),i=n(2),a=n(3);e.exports=function(){function e(e,t,n,r,o,l){l!==a&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},2:function(e,t,n){"use strict";(function(t){function n(e,t,n,i,a,o,l,u){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,i,a,o,l,u],f=0;c=new Error(t.replace(/%s/g,function(){return s[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},3:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4:function(t,n){t.exports=e},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(4),c=r(u),s=n(5),f=(r(s),n(7)),d=r(f),p=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.getInitialState(),n}return o(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(this.getInitialState())}},{key:"componentWillUnmount",value:function(){!this.state.discoveringContent&&this.state.isTemporary&&this.removeLink()}},{key:"getInitialState",value:function(){var e=new CKEDITOR.Link(this.props.editor.get("nativeEditor"),{appendProtocol:!1}),t=e.getFromSelection(),n="",r="",i="",a=!1;return t?(n=t.getAttribute("href"),r=t.hasAttribute("target")?t.getAttribute("target"):r,i=t.getAttribute("title"),a=t.hasAttribute("data-ez-temporary-link")):(e.create(n,{"data-ez-temporary-link":!0}),t=e.getFromSelection(),a=!0),{element:t,linkHref:n,linkTarget:r,linkTitle:i,isTemporary:a}}},{key:"selectContent",value:function(){var e=this,t=function(){var t=(e.props.udwIsSelectableMethod,document.querySelector("#react-udw")),n=document.querySelector('meta[name="CSRF-Token"]').content,r=document.querySelector('meta[name="SiteAccess"]').content,i=function(n){e.state.element.setAttribute("href","ezlocation://"+n[0].id),e.focusEditedLink(),t.innerHTML=""};ReactDOM.render(c.default.createElement(eZ.modules.UniversalDiscovery,{onConfirm:i,onCancel:function(){return t.innerHTML=""},confirmLabel:"Select content",title:"Select content",multiple:!1,startingLocationId:"1",restInfo:{token:n,siteaccess:r}}),t)};this.setState({discoveringContent:!0},t.bind(this))}},{key:"focusEditedLink",value:function(){var e=this.props.editor.get("nativeEditor");e.focus(),e.eZ.moveCaretToElement(e,this.state.element),e.fire("actionPerformed",this)}},{key:"renderUDWRow",value:function(){return c.default.createElement("div",{className:"ez-ae-edit-link__row"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--udw"},c.default.createElement("button",{className:"ez-ae-button ez-btn-ae ez-btn-ae--udw btn btn-gray",onClick:this.selectContent.bind(this)},"Select content")),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--separator"},c.default.createElement("span",{className:"ez-ae-edit-link__text"},"or")),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--url"},c.default.createElement("label",{className:"ez-ae-edit-link__label"},"Link to"),c.default.createElement("input",{className:"ae-input ez-ae-edit-link__input",onChange:this.setHref.bind(this),onKeyDown:this.handleKeyDown.bind(this),placeholder:"Type or paste link here",type:"text",value:this.state.linkHref}),c.default.createElement("button",{"aria-label":d.default.Strings.clearInput,className:"ez-btn-ae ez-btn-ae--clear-link ae-button ae-icon-remove",onClick:this.clearLink.bind(this),title:d.default.Strings.clear})))}},{key:"renderInfoRow",value:function(){var e=this.state.linkTarget;return c.default.createElement("div",{className:"ez-ae-edit-link__row"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--title"},c.default.createElement("label",{className:"ez-ae-edit-link__label"},"Title"),c.default.createElement("input",{type:"text",className:"ae-input ez-ae-edit-link__input",onChange:this.setTitle.bind(this),value:this.state.linkTitle})),c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--target"},c.default.createElement("span",{className:"ez-ae-edit-link__text"},"Open in:"),c.default.createElement("div",{className:"ez-ae-edit-link__choice"},c.default.createElement("label",{htmlFor:"ez-ae-link-target-same",className:"ez-ae-edit-link__label ez-ae-edit-link__label--same-tab"},c.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-same",value:"",defaultChecked:""===e,onChange:this.setTarget.bind(this)}),c.default.createElement("span",null,"Same tab")),c.default.createElement("label",{htmlFor:"ez-ae-link-target-blank",className:"ez-ae-edit-link__label ez-ae-edit-link__label--new-tab"},c.default.createElement("input",{type:"radio",name:"target",id:"ez-ae-link-target-blank",value:"_blank",defaultChecked:"_blank"===e,onChange:this.setTarget.bind(this)}),c.default.createElement("span",null,"New tab")))))}},{key:"renderActionRow",value:function(){return c.default.createElement("div",{className:"ez-ae-edit-link__row ez-ae-edit-link__row--actions"},c.default.createElement("div",{className:"ez-ae-edit-link__block ez-ae-edit-link__block--actions"},c.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--remove-link btn btn-gray",disabled:this.state.isTemporary,onClick:this.removeLink.bind(this)},"Remove"),c.default.createElement("button",{className:"ez-btn-ae ez-btn-ae--save-link btn btn-secondary",disabled:!this.state.linkHref,onClick:this.saveLink.bind(this)},"Save")))}},{key:"render",value:function(){var e="ez-ae-edit-link";return this.state.linkHref&&(e+=" is-linked"),c.default.createElement("div",{className:e},this.renderUDWRow(),this.renderInfoRow(),this.renderActionRow())}},{key:"clearLink",value:function(){this.setState({linkHref:""})}},{key:"handleKeyDown",value:function(e){if(13!==e.keyCode&&27!==e.keyCode||e.preventDefault(),13===e.keyCode&&e.target.value)this.saveLink();else if(27===e.keyCode){var t=this.props.editor.get("nativeEditor");new CKEDITOR.Link(t).advanceSelection(),t.fire("actionPerformed",this)}}},{key:"setHref",value:function(e){this.setState({linkHref:e.target.value})}},{key:"setTitle",value:function(e){this.setState({linkTitle:e.target.value})}},{key:"setTarget",value:function(e){this.setState({linkTarget:e.target.value})}},{key:"removeLink",value:function(){var e=this.props.editor.get("nativeEditor"),t=new CKEDITOR.Link(e),n=e.getSelection(),r=n.createBookmarks();t.remove(this.state.element,{advance:!0}),n.selectBookmarks(r),this.props.cancelExclusive(),e.fire("actionPerformed",this)}},{key:"saveLink",value:function(){var e=this;this.setState({isTemporary:!1},function(){return e.updateLink()})}},{key:"updateLink",value:function(){var e=this.props.editor.get("nativeEditor"),t=new CKEDITOR.Link(e),n={target:this.state.linkTarget,title:this.state.linkTitle,"data-ez-temporary-link":!!this.state.isTemporary||null},r={advance:!0};this.state.linkHref&&(n.href=this.state.linkHref,t.update(n,this.state.element,r),e.fire("actionPerformed",this)),this.props.cancelExclusive()}}],[{key:"key",get:function(){return"ezlinkedit"}}]),t}(u.Component);t.default=p,d.default.Buttons[p.key]=d.default.ButtonLinkEdit=p},5:function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(8)(i,!0)}else e.exports=n(11)()}).call(t,n(0))},6:function(e,t,n){"use strict";(function(t){var r=n(1),i=r;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,a="Warning: "+e.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};i=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];a.apply(void 0,[t].concat(r))}}}e.exports=i}).call(t,n(0))},7:function(e,n){e.exports=t},8:function(e,t,n){"use strict";(function(t){var r=n(1),i=n(2),a=n(6),o=n(9),l=n(3),u=n(10);e.exports=function(e,n){function c(e){var t=e&&(x&&e[x]||e[z]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function d(e){function r(r,c,s,d,p,y,m){if(d=d||j,y=y||s,m!==l)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=d+":"+s;!o[v]&&u<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,d),o[v]=!0,u++)}return null==c[s]?r?new f(null===c[s]?"The "+p+" `"+y+"` is marked as required in `"+d+"`, but its value is `null`.":"The "+p+" `"+y+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(c,s,d,p,y)}if("production"!==t.env.NODE_ENV)var o={},u=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,i,a,o){var l=t[n];if(w(l)!==e)return new f("Invalid "+i+" `"+a+"` of type `"+T(l)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function y(e){function t(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var o=t[n];if(!Array.isArray(o)){return new f("Invalid "+i+" `"+a+"` of type `"+w(o)+"` supplied to `"+r+"`, expected an array.")}for(var u=0;u<o.length;u++){var c=e(o,u,r,i,a+"["+u+"]",l);if(c instanceof Error)return c}return null}return d(t)}function m(e){function t(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||j;return new f("Invalid "+i+" `"+a+"` of type `"+N(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}return d(t)}function v(e){function n(t,n,r,i,a){for(var o=t[n],l=0;l<e.length;l++)if(s(o,e[l]))return null;return new f("Invalid "+i+" `"+a+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function h(e){function t(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var o=t[n],u=w(o);if("object"!==u)return new f("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var c in o)if(o.hasOwnProperty(c)){var s=e(o,c,r,i,a+"."+c,l);if(s instanceof Error)return s}return null}return d(t)}function b(e){function n(t,n,r,i,a){for(var o=0;o<e.length;o++){if(null==(0,e[o])(t,n,r,i,a,l))return null}return new f("Invalid "+i+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var i=0;i<e.length;i++){var o=e[i];if("function"!=typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",O(o),i),r.thatReturnsNull}return d(n)}function k(e){function t(t,n,r,i,a){var o=t[n],u=w(o);if("object"!==u)return new f("Invalid "+i+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var s=e[c];if(s){var d=s(o,c,r,i,a+"."+c,l);if(d)return d}}return null}return d(t)}function g(e){function t(t,n,r,i,a){var u=t[n],c=w(u);if("object"!==c)return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var s=o({},t[n],e);for(var d in s){var p=e[d];if(!p)return new f("Invalid "+i+" `"+a+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(u,d,r,i,a+"."+d,l);if(y)return y}return null}return d(t)}function E(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(E);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,i=n.call(t);if(n!==t.entries){for(;!(r=i.next()).done;)if(!E(r.value))return!1}else for(;!(r=i.next()).done;){var a=r.value;if(a&&!E(a[1]))return!1}return!0;default:return!1}}function _(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function w(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":_(t,e)?"symbol":t}function T(e){if(void 0===e||null===e)return""+e;var t=w(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function O(e){var t=T(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function N(e){return e.constructor&&e.constructor.name?e.constructor.name:j}var x="function"==typeof Symbol&&Symbol.iterator,z="@@iterator",j="<<anonymous>>",S={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return d(r.thatReturnsNull)}(),arrayOf:y,element:function(){function t(t,n,r,i,a){var o=t[n];if(!e(o)){return new f("Invalid "+i+" `"+a+"` of type `"+w(o)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:m,node:function(){function e(e,t,n,r,i){return E(e[t])?null:new f("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:h,oneOf:v,oneOfType:b,shape:k,exact:g};return f.prototype=Error.prototype,S.checkPropTypes=u,S.PropTypes=S,S}}).call(t,n(0))},9:function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,u=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var s in n)a.call(n,s)&&(u[s]=n[s]);if(i){l=i(n);for(var f=0;f<l.length;f++)o.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}}}).default});
//# sourceMappingURL=ezBtnLinkEdit.js.map