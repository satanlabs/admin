(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{739:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"p",(function(){return b})),n.d(t,"o",(function(){return m})),n.d(t,"n",(function(){return j})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return x})),n.d(t,"i",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"h",(function(){return y})),n.d(t,"g",(function(){return k})),n.d(t,"e",(function(){return E}));var o,a=n(93),r=n.n(a);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n}function d(e,t){for(var n,o=Array.isArray(t)?t:[t],a=o.length,r={};a>0;)r[n=o[a-=1]]=e[n];return r}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var p="object"===typeof window&&window.Element||function(){};var m=r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]),j=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},g=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function y(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function w(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!y(e))return!1;var t=v(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function k(e,t){var n=w(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},777:function(e,t,n){"use strict";var o=n(12),a=n(29),r=n(209),i=n(45),c=n(1),s=n.n(c),l=n(93),u=n.n(l),d=n(741),f=n.n(d),b=n(739),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,m=e.size,j=e.tag,h=e.innerRef,x=Object(a.a)(e,p);c&&"undefined"===typeof x.children&&(x.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(d?"-outline":"")+"-"+u,g=Object(b.j)(f()(i,{close:c},c||"btn",c||O,!!m&&"btn-"+m,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);x.href&&"button"===j&&(j="a");var v=c?"Close":null;return s.a.createElement(j,Object(o.a)({type:"button"===j&&x.onClick?"button":void 0},x,{className:g,ref:h,onClick:this.onClick,"aria-label":n||v}))},t}(s.a.Component);j.propTypes=m,j.defaultProps={color:"secondary",tag:"button"},t.a=j},844:function(e,t,n){"use strict";var o=n(12),a=n(29),r=n(1),i=n.n(r),c=n(93),s=n.n(c),l=n(741),u=n.n(l),d=n(739),f=["className","cssModule","noGutters","tag","form","widths"],b=s.a.oneOfType([s.a.number,s.a.string]),p={tag:d.n,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},m={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,l=e.widths,b=Object(a.a)(e,f),p=[];l.forEach((function(t,n){var o=e[t];if(delete b[t],o){var a=!n;p.push(a?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var m=Object(d.j)(u()(t,r?"no-gutters":null,s?"form-row":"row",p),n);return i.a.createElement(c,Object(o.a)({},b,{className:m}))};j.propTypes=p,j.defaultProps=m,t.a=j},845:function(e,t,n){"use strict";var o=n(12),a=n(29),r=n(1),i=n.n(r),c=n(93),s=n.n(c),l=n(741),u=n.n(l),d=n(739),f=["className","cssModule","widths","tag"],b=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:b,offset:b})]),m={tag:d.n,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},x=function(e){var t=e.className,n=e.cssModule,r=e.widths,c=e.tag,s=Object(a.a)(e,f),l=[];r.forEach((function(t,o){var a=e[t];if(delete s[t],a||""===a){var r=!o;if(Object(d.h)(a)){var i,c=r?"-":"-"+t+"-",f=h(r,t,a.size);l.push(Object(d.j)(u()(((i={})[f]=a.size||""===a.size,i["order"+c+a.order]=a.order||0===a.order,i["offset"+c+a.offset]=a.offset||0===a.offset,i)),n))}else{var b=h(r,t,a);l.push(b)}}})),l.length||l.push("col");var b=Object(d.j)(u()(t,l),n);return i.a.createElement(c,Object(o.a)({},s,{className:b}))};x.propTypes=m,x.defaultProps=j,t.a=x},958:function(e,t,n){"use strict";n.r(t);var o=n(204),a=n(205),r=n(206),i=n(207),c=n(1),s=n(777),l=n(844),u=n(845),d=n(17),f=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"animated fadeIn",children:[Object(d.jsx)(s.a,{color:"danger",size:"lg",block:!0,onClick:function(){window.open("./filevault","_blank")},children:Object(d.jsxs)("div",{style:{margin:"50px",fontSize:"50px"},children:[Object(d.jsx)("i",{className:"fa fa-file-archive-o mt-4 "}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-audio-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-code-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-image-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-movie-o mt-4"}),"\xa0 File Vault\xa0",Object(d.jsx)("i",{className:"fa fa-file-pdf-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-picture-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-powerpoint-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-sound-o mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-file-word-o mt-4"})]})}),Object(d.jsx)(s.a,{color:"success",size:"lg",block:!0,onClick:function(){window.open("./notes","_blank")},children:Object(d.jsxs)("div",{style:{margin:"50px",fontSize:"50px"},children:[Object(d.jsx)("i",{className:"fa fa-file mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-pencil mt-4"}),"\xa0 NOTES\xa0",Object(d.jsx)("i",{className:"fa fa-edit mt-4"}),"\xa0",Object(d.jsx)("i",{className:"fa fa-clipboard mt-4"})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(u.a,{children:Object(d.jsx)(s.a,{color:"primary",size:"lg",block:!0,onClick:function(){window.open("#/qr-generator","_blank")},children:Object(d.jsxs)("div",{style:{margin:"50px",fontSize:"50px"},children:[Object(d.jsx)("i",{className:"fa fa-pencil mt-4"}),"\xa0 QR-code GENERATOR\xa0",Object(d.jsx)("i",{className:"fa fa-clipboard mt-4"})]})})}),Object(d.jsx)(u.a,{children:Object(d.jsx)(s.a,{color:"warning",size:"lg",block:!0,onClick:function(){window.open("#/qr-reader","_blank")},children:Object(d.jsxs)("div",{style:{margin:"50px",fontSize:"50px"},children:[Object(d.jsx)("i",{className:"fa fa-file mt-4"}),"\xa0 QR-code reader\xa0",Object(d.jsx)("i",{className:"fa fa-edit mt-4"}),"\xa0"]})})})]}),Object(d.jsx)("br",{})]})}}]),n}(c.Component);t.default=f}}]);
//# sourceMappingURL=46.2068433e.chunk.js.map