!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("AlloyEditor")):"function"==typeof define&&define.amd?define(["react","AlloyEditor"],t):"object"==typeof exports?exports.ezBtnCustomTagEdit=t(require("react"),require("AlloyEditor")):(e.eZ=e.eZ||{},e.eZ.ezAlloyEditor=e.eZ.ezAlloyEditor||{},e.eZ.ezAlloyEditor.ezBtnCustomTagEdit=t(e.React,e.AlloyEditor))}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}({0:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){b&&d&&(b=!1,d.length?y=d.concat(y):v=-1,y.length&&a())}function a(){if(!b){var e=o(u);b=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,b=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var s,l,p=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,y=[],b=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||b||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},1:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},10:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(3)),s=(r(f),n(9)),l=r(s),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"getWidget",value:function(){var e=this.props.editor.get("nativeEditor"),t=e.getSelection().getStartElement();return e.widgets.getByElement(t)}}]),t}(l.default);t.default=p},2:function(t,n){t.exports=e},3:function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(o,!0)}else e.exports=n(8)()}).call(t,n(0))},4:function(e,n){e.exports=t},5:function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(6),i=n(1),u=n(7),a=function(){};"production"!==t.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function c(e){var t=e&&(x&&e[x]||e[P]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function s(e){this.message=e,this.stack=""}function l(e){function r(r,c,f,l,p,d,y){if(l=l||k,d=d||f,y!==i){if(n){var b=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=l+":"+f;!o[v]&&u<3&&(a("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[v]=!0,u++)}}return null==c[f]?r?new s(null===c[f]?"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(c,f,l,p,d)}if("production"!==t.env.NODE_ENV)var o={},u=0;var c=r.bind(null,!1);return c.isRequired=r.bind(null,!0),c}function p(e){function t(t,n,r,o,i,u){var a=t[n];if(E(a)!==e)return new s("Invalid "+o+" `"+i+"` of type `"+j(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return l(t)}function d(e){function t(t,n,r,o,u){if("function"!=typeof e)return new s("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a)){return new s("Invalid "+o+" `"+u+"` of type `"+E(a)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<a.length;c++){var f=e(a,c,r,o,u+"["+c+"]",i);if(f instanceof Error)return f}return null}return l(t)}function y(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||k;return new s("Invalid "+o+" `"+i+"` of type `"+T(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return l(t)}function b(e){function n(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(f(u,e[a]))return null;return new s("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?l(n):("production"!==t.env.NODE_ENV&&a("Invalid argument supplied to oneOf, expected an instance of array."),r)}function v(e){function t(t,n,r,o,u){if("function"!=typeof e)return new s("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=t[n],c=E(a);if("object"!==c)return new s("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in a)if(a.hasOwnProperty(f)){var l=e(a,f,r,o,u+"."+f,i);if(l instanceof Error)return l}return null}return l(t)}function h(e){function n(t,n,r,o,u){for(var a=0;a<e.length;a++){if(null==(0,e[a])(t,n,r,o,u,i))return null}return new s("Invalid "+o+" `"+u+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+_(u)+" at index "+o+"."),r}return l(n)}function m(e){function t(t,n,r,o,u){var a=t[n],c=E(a);if("object"!==c)return new s("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var p=l(a,f,r,o,u+"."+f,i);if(p)return p}}return null}return l(t)}function g(e){function t(t,n,r,u,a){var c=t[n],f=E(c);if("object"!==f)return new s("Invalid "+u+" `"+a+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var p in l){var d=e[p];if(!d)return new s("Invalid "+u+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,r,u,a+"."+p,i);if(y)return y}return null}return l(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function _(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var x="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",k="<<anonymous>>",N={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return l(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var u=t[n];if(!e(u)){return new s("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return l(t)}(),instanceOf:y,node:function(){function e(e,t,n,r,o){return O(e[t])?null:new s("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return l(e)}(),objectOf:v,oneOf:b,oneOfType:h,shape:m,exact:g};return s.prototype=Error.prototype,N.checkPropTypes=u,N.PropTypes=N,N}}).call(t,n(0))},51:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),l=n(3),p=r(l),d=n(4),y=r(d),b=n(10),v=r(b),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"getValues",value:function(){var e=this;return Object.keys(this.attributes).reduce(function(t,n){var r=e.getWidget().getConfig(n);return"boolean"===e.attributes[n].type&&(r="true"===r),t[n]={value:r},t},{})}},{key:"getContent",value:function(){return this.getWidget().getContent()}},{key:"render",value:function(){if(this.props.renderExclusive){var e="ezBtn"+(this.customTagName.charAt(0).toUpperCase()+this.customTagName.slice(1))+"Update",t=y.default[e];return s.default.createElement(t,a({values:this.getValues(),content:this.getContent()},this.props))}var n="ae-button ez-btn-ae ez-btn-ae--"+this.customTagName+"-edit";return s.default.createElement("button",{className:n,onClick:this.props.requestExclusive,tabIndex:this.props.tabIndex},s.default.createElement("svg",{className:"ez-icon ez-btn-ae__icon"},s.default.createElement("use",{xlinkHref:"/bundles/ezplatformadminui/img/ez-icons.svg#edit"})))}}]),t}(v.default);t.default=h,h.propTypes={editor:p.default.object.isRequired,label:p.default.string.isRequired,tabIndex:p.default.number.isRequired}},6:function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)i.call(n,s)&&(c[s]=n[s]);if(o){a=o(n);for(var l=0;l<a.length;l++)u.call(n,a[l])&&(c[a[l]]=n[a[l]])}}return c}},7:function(e,t,n){"use strict";(function(t){function r(e,n,r,a,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var s;try{if("function"!=typeof e[f]){var l=Error((a||"React class")+": "+r+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.");throw l.name="Invariant Violation",l}s=e[f](n,f,a,r,null,i)}catch(e){s=e}if(!s||s instanceof Error||o((a||"React class")+": type specification of "+r+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in u)){u[s.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+s.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),u={};o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},8:function(e,t,n){"use strict";function r(){}var o=n(1);e.exports=function(){function e(e,t,n,r,i,u){if(u!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},9:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),c=(r(a),n(3)),f=(r(c),n(4)),s=r(f),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStateClasses=s.default.ButtonStateClasses.getStateClasses,n.execCommand=s.default.ButtonCommand.execCommand.bind(n),n}return u(t,e),t}(a.Component);t.default=l}}).default});
//# sourceMappingURL=ezBtnCustomTagEdit.js.map