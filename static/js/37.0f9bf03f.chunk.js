(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[37],{517:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var c=t(0),n=t.n(c),s=t(513),o=t(10);const a=e=>{const{name:r,text:t,...c}=e,n=r?"https://coreui.io/react/docs/components/".concat(r):e.href;return Object(o.jsx)("div",{className:"card-header-actions",children:Object(o.jsx)(s.cb,{...c,href:n,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-muted",children:t||"docs"})})})};var i=n.a.memo(a)},545:function(e,r){!function(e,r){for(var t in r)e[t]=r[t]}(r,function(e){var r={};function t(c){if(r[c])return r[c].exports;var n=r[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,c){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(c,n,function(r){return e[r]}.bind(null,n));return c},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t.d(r,"deepObjectsMerge",(function(){return c})),t.d(r,"getColor",(function(){return s})),t.d(r,"getStyle",(function(){return n})),t.d(r,"hexToRgb",(function(){return o})),t.d(r,"hexToRgba",(function(){return a})),t.d(r,"makeUid",(function(){return i})),t.d(r,"omitByKeys",(function(){return l})),t.d(r,"pickByKeys",(function(){return d})),t.d(r,"rgbToHex",(function(){return j}));var c=function e(r,t){for(var c=0,n=Object.keys(t);c<n.length;c++){var s=n[c];t[s]instanceof Object&&Object.assign(t[s],e(r[s],t[s]))}return Object.assign(r||{},t),r},n=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(function(e){return e.match(/^--.*/i)}(e)&&Boolean(document.documentMode)&&document.documentMode>=10){var c=function(){for(var e={},r=document.styleSheets,t="",c=r.length-1;c>-1;c--){for(var n=r[c].cssRules,s=n.length-1;s>-1;s--)if(".ie-custom-properties"===n[s].selectorText){t=n[s].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(r){if(r){var t=r.split(": ")[0],c=r.split(": ")[1];t&&c&&(e["--".concat(t.trim())]=c.trim())}})),e}();r=c[e]}else r=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return r},s=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e);return n(t,r)||e},o=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var r,t,c;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(t,", ").concat(c,")")},a=function(e){var r,t,c,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(t,", ").concat(c,", ").concat(n/100,")")},i=function(){return"uid-"+Math.random().toString(36).substr(2)},l=function(e,r){for(var t={},c=Object.keys(e),n=0;n<c.length;n++)!r.includes(c[n])&&(t[c[n]]=e[c[n]]);return t},d=function(e,r){for(var t={},c=0;c<r.length;c++)t[r[c]]=e[r[c]];return t},j=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(r[1],10).toString(16)),c="0".concat(parseInt(r[2],10).toString(16)),n="0".concat(parseInt(r[3],10).toString(16));return"#".concat(t.slice(-2)).concat(c.slice(-2)).concat(n.slice(-2))},b={deepObjectsMerge:c,getColor:s,getStyle:n,hexToRgb:o,hexToRgba:a,makeUid:i,omitByKeys:l,pickByKeys:d,rgbToHex:j};r.default=b}]))},703:function(e,r,t){"use strict";t.r(r);var c=t(0),n=t(527),s=t.n(n),o=t(513),a=t(545),i=t(517),l=t(10);const d=()=>{const[e,r]=Object(c.useState)("rgb(255, 255, 255)"),t=Object(c.createRef)();return Object(c.useEffect)((()=>{const e=t.current.parentNode.firstChild,c=window.getComputedStyle(e).getPropertyValue("background-color");r(c)}),[t]),Object(l.jsx)("table",{className:"table w-100",ref:t,children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-muted",children:"HEX:"}),Object(l.jsx)("td",{className:"font-weight-bold",children:Object(a.rgbToHex)(e)})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-muted",children:"RGB:"}),Object(l.jsx)("td",{className:"font-weight-bold",children:e})]})]})})},j=e=>{let{className:r,children:t}=e;const c=s()(r,"theme-color w-75 rounded mb-3");return Object(l.jsxs)(o.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4",children:[Object(l.jsx)("div",{className:c,style:{paddingTop:"75%"}}),t,Object(l.jsx)(d,{})]})};r.default=()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(o.j,{children:[Object(l.jsxs)(o.n,{children:["Theme colors",Object(l.jsx)(i.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(l.jsx)(o.k,{children:Object(l.jsxs)(o.vb,{children:[Object(l.jsx)(j,{className:"bg-primary",children:Object(l.jsx)("h6",{children:"Brand Primary Color"})}),Object(l.jsx)(j,{className:"bg-secondary",children:Object(l.jsx)("h6",{children:"Brand Secondary Color"})}),Object(l.jsx)(j,{className:"bg-success",children:Object(l.jsx)("h6",{children:"Brand Success Color"})}),Object(l.jsx)(j,{className:"bg-danger",children:Object(l.jsx)("h6",{children:"Brand Danger Color"})}),Object(l.jsx)(j,{className:"bg-warning",children:Object(l.jsx)("h6",{children:"Brand Warning Color"})}),Object(l.jsx)(j,{className:"bg-info",children:Object(l.jsx)("h6",{children:"Brand Info Color"})}),Object(l.jsx)(j,{className:"bg-light",children:Object(l.jsx)("h6",{children:"Brand Light Color"})}),Object(l.jsx)(j,{className:"bg-dark",children:Object(l.jsx)("h6",{children:"Brand Dark Color"})})]})})]}),Object(l.jsxs)(o.j,{children:[Object(l.jsx)(o.n,{children:"Grays"}),Object(l.jsx)(o.k,{children:Object(l.jsxs)(o.vb,{className:"mb-3",children:[Object(l.jsx)(j,{className:"bg-gray-100",children:Object(l.jsx)("h6",{children:"Gray 100 Color"})}),Object(l.jsx)(j,{className:"bg-gray-200",children:Object(l.jsx)("h6",{children:"Gray 200 Color"})}),Object(l.jsx)(j,{className:"bg-gray-300",children:Object(l.jsx)("h6",{children:"Gray 300 Color"})}),Object(l.jsx)(j,{className:"bg-gray-400",children:Object(l.jsx)("h6",{children:"Gray 400 Color"})}),Object(l.jsx)(j,{className:"bg-gray-500",children:Object(l.jsx)("h6",{children:"Gray 500 Color"})}),Object(l.jsx)(j,{className:"bg-gray-600",children:Object(l.jsx)("h6",{children:"Gray 600 Color"})}),Object(l.jsx)(j,{className:"bg-gray-700",children:Object(l.jsx)("h6",{children:"Gray 700 Color"})}),Object(l.jsx)(j,{className:"bg-gray-800",children:Object(l.jsx)("h6",{children:"Gray 800 Color"})}),Object(l.jsx)(j,{className:"bg-gray-900",children:Object(l.jsx)("h6",{children:"Gray 900 Color"})})]})})]})]})}}]);
//# sourceMappingURL=37.0f9bf03f.chunk.js.map