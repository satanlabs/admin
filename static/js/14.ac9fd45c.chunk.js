(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[14],{523:function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b}));const r=" : ",o=()=>{window.location.reload()},a=e=>{window.open(e,"_blank")},i=(e,t)=>{let n=[];return e.forEach((e=>{(c(e.episode,t)||c(e.shortDesc,t))&&n.push(e)})),n},c=(e,t)=>(t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t));function s(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const r=t?1e3:1024;if(Math.abs(e)<r)return e+" B";const o=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let a=-1;const i=10**n;do{e/=r,++a}while(Math.round(Math.abs(e)*i)/i>=r&&a<o.length-1);return e.toFixed(n)+" "+o[a]}const l=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"!==localStorage.logsEnabled)return;let i=e+" - "+t+"() called"+r;n&&(i+=n+r),o?(i+=o+r,console.log(i,a)):console.log(i)},d=()=>{window.history.back()},u=()=>{window.open("/","_self")},f=(e,t)=>{const n=e.filter((e=>e.id==t));return 0==n.length?null:n[0]},b=e=>{navigator.clipboard.writeText(e)}},525:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return u})),n.d(t,"p",(function(){return b})),n.d(t,"o",(function(){return h})),n.d(t,"n",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return O})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return N}));var r,o=n(63),a=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function u(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var p="object"===typeof window&&window.Element||function(){};var h=a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),j=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),m={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},v=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function x(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function w(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!x(e))return!1;var t=y(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&v){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function C(e){return null!==e&&(Array.isArray(e)||v&&"number"===typeof e.length)}function E(e,t){var n=w(e);return t?C(n)?n:null===n?[]:[n]:C(n)?n[0]:n}var N=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},531:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return d}));const r="application/json",o=()=>({method:"GET",headers:{}}),a=e=>({method:"POST",headers:{"Content-Type":r},body:e}),i=e=>({method:"POST",headers:{},body:e}),c=e=>({method:"GET",headers:{Authorization:e}}),s=(e,t)=>({method:"POST",headers:{"Content-Type":r,Authorization:t},body:e}),l=(e,t)=>({method:"PUT",headers:{"Content-Type":r,Authorization:t},body:e}),d=(e,t)=>({method:"DELETE",headers:{"Content-Type":r,Authorization:t},body:e})},537:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},542:function(e,t,n){"use strict";n(0);var r=n(513),o=n(10);t.a=()=>Object(o.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(o.jsx)(r.Fb,{color:"success",size:"sm"})})},553:function(e,t,n){"use strict";var r=n(9),o=n(19),a=n(0),i=n.n(a),c=n(63),s=n.n(c),l=n(527),d=n.n(l),u=n(525),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],b={tag:u.n,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.color,c=e.body,s=e.inverse,l=e.outline,b=e.tag,p=e.innerRef,h=Object(o.a)(e,f),j=Object(u.j)(d()(t,"card",!!s&&"text-white",!!c&&"card-body",!!a&&(l?"border":"bg")+"-"+a),n);return i.a.createElement(b,Object(r.a)({},h,{className:j,ref:p}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},563:function(e,t,n){"use strict";var r=n(9),o=n(19),a=n(537),i=n(28),c=n(0),s=n.n(c),l=n(63),d=n.n(l),u=n(527),f=n.n(u),b=n(525),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:b.n,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},j=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],a=e.block,i=e.className,c=e.close,l=e.cssModule,d=e.color,u=e.outline,h=e.size,j=e.tag,m=e.innerRef,g=Object(o.a)(e,p);c&&"undefined"===typeof g.children&&(g.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(u?"-outline":"")+"-"+d,v=Object(b.j)(f()(i,{close:c},c||"btn",c||O,!!h&&"btn-"+h,!!a&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===j&&(j="a");var y=c?"Close":null;return s.a.createElement(j,Object(r.a)({type:"button"===j&&g.onClick?"button":void 0},g,{className:v,ref:m,onClick:this.onClick,"aria-label":n||y}))},t}(s.a.Component);j.propTypes=h,j.defaultProps={color:"secondary",tag:"button"},t.a=j},631:function(e,t,n){"use strict";var r=n(9),o=n(19),a=n(0),i=n.n(a),c=n(63),s=n.n(c),l=n(527),d=n.n(l),u=n(525),f=["className","cssModule","noGutters","tag","form","widths"],b=s.a.oneOfType([s.a.number,s.a.string]),p={tag:u.n,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},h={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,c=e.tag,s=e.form,l=e.widths,b=Object(o.a)(e,f),p=[];l.forEach((function(t,n){var r=e[t];if(delete b[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var h=Object(u.j)(d()(t,a?"no-gutters":null,s?"form-row":"row",p),n);return i.a.createElement(c,Object(r.a)({},b,{className:h}))};j.propTypes=p,j.defaultProps=h,t.a=j},632:function(e,t,n){"use strict";var r=n(9),o=n(19),a=n(0),i=n.n(a),c=n(63),s=n.n(c),l=n(527),d=n.n(l),u=n(525),f=["className","cssModule","widths","tag"],b=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:b,offset:b})]),h={tag:u.n,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,c=e.tag,s=Object(o.a)(e,f),l=[];a.forEach((function(t,r){var o=e[t];if(delete s[t],o||""===o){var a=!r;if(Object(u.h)(o)){var i,c=a?"-":"-"+t+"-",f=m(a,t,o.size);l.push(Object(u.j)(d()(((i={})[f]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var b=m(a,t,o);l.push(b)}}})),l.length||l.push("col");var b=Object(u.j)(d()(t,l),n);return i.a.createElement(c,Object(r.a)({},s,{className:b}))};g.propTypes=h,g.defaultProps=j,t.a=g},746:function(e,t,n){"use strict";var r=n(9),o=n(19),a=n(0),i=n.n(a),c=n(63),s=n.n(c),l=n(527),d=n.n(l),u=n(525),f=["className","cssModule","innerRef","tag"],b={tag:u.n,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,a=e.innerRef,c=e.tag,s=Object(o.a)(e,f),l=Object(u.j)(d()(t,"card-body"),n);return i.a.createElement(c,Object(r.a)({},s,{className:l,ref:a}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},799:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(523),i=n(631),c=n(632),s=n(553),l=n(9),d=n(19),u=n(63),f=n.n(u),b=n(527),p=n.n(b),h=n(525),j=["className","cssModule","tag"],m={tag:h.n,className:f.a.string,cssModule:f.a.object},g=function(e){var t=e.className,n=e.cssModule,r=e.tag,a=Object(d.a)(e,j),i=Object(h.j)(p()(t,"card-header"),n);return o.a.createElement(r,Object(l.a)({},a,{className:i}))};g.propTypes=m,g.defaultProps={tag:"div"};var O=g,v=n(746),y=n(563),x=["className","cssModule","color","innerRef","pill","tag"],w={color:f.a.string,pill:f.a.bool,tag:h.n,innerRef:f.a.oneOfType([f.a.object,f.a.func,f.a.string]),children:f.a.node,className:f.a.string,cssModule:f.a.object},C=function(e){var t=e.className,n=e.cssModule,r=e.color,a=e.innerRef,i=e.pill,c=e.tag,s=Object(d.a)(e,x),u=Object(h.j)(p()(t,"badge","badge-"+r,!!i&&"badge-pill"),n);return s.href&&"span"===c&&(c="a"),o.a.createElement(c,Object(l.a)({},s,{className:u,ref:a}))};C.propTypes=w,C.defaultProps={color:"secondary",pill:!1,tag:"span"};var E=C,N=n(531),T=n(542),D=n(10);const k="File.js",M="http://192.168.1.109/nexus/dirinfo";class A extends r.Component{constructor(e){super(e),this.callApi=e=>{this.setState({currentDir:e,currentDirData:{},isLoaded:!1}),fetch(M,Object(N.e)(e)).then((e=>e.json())).then((e=>{Object(a.a)(k,"callApi","FETCH_1","result",e),this.setState({currentDirData:e.data,isLoaded:!0})}),(e=>{Object(a.a)(k,"callApi","FETCH_1","error",e)}))},this.state={currentDir:"/usr/lib/tomcat/apache-tomcat-9.0.37/webapps/tv_shows",currentDirData:{},isLoaded:!1},this.onDirInputChange=this.onDirInputChange.bind(this)}componentDidMount(){fetch(M,Object(N.e)(this.state.currentDir)).then((e=>e.json())).then((e=>{Object(a.a)(k,"componentDidMount","FETCH_1","result",e),this.setState({currentDirData:e.data,isLoaded:!0})}),(e=>{Object(a.a)(k,"componentDidMount","FETCH_1","error",e)}))}onDirInputChange(e){const t=e.target.value;Object(a.a)(k,"callApi","","changedDir",t),this.setState({currentDir:t})}render(){return Object(a.a)(k,"render","","this",this),Object(D.jsx)("div",{className:"animated fadeIn",children:Object(D.jsx)(i.a,{children:Object(D.jsx)(c.a,{lg:"12",children:Object(D.jsxs)(s.a,{style:{fontSize:"28px",fontFamily:"Courier New"},children:[Object(D.jsx)(O,{className:"bg-primary",children:Object(D.jsx)("h1",{children:"File Iterator"})}),Object(D.jsxs)(v.a,{children:["Current Dir. :",Object(D.jsx)("p",{children:this.state.currentDir}),Object(D.jsx)("input",{type:"text",id:"requestedDir",size:50,value:this.state.currentDir,onChange:this.onDirInputChange,required:!0}),"\xa0\xa0",Object(D.jsx)(y.a,{active:!0,color:"success",onClick:()=>{this.callApi(this.state.currentDir)},children:"Call backend"}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsxs)(y.a,{color:"danger",onClick:()=>{var e=this.state.currentDir.split("/"),t="";e.forEach(((n,r)=>{0!==r&&r<e.length-1&&(t+="/"+n)})),this.callApi(t)},children:["Go up a dir.",Object(D.jsx)("i",{className:"cui-arrow-top icons font-2xl d-block "})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),this.state.isLoaded?Object(D.jsx)(c.a,{lg:"12",children:Object(D.jsxs)(i.a,{children:[Object(D.jsxs)(c.a,{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(E,{color:"primary",children:"Folders "})}),this.state.currentDirData.directories.map(((e,t)=>Object(D.jsxs)("div",{onClick:()=>{this.callApi(e.fullPath)},style:{borderColor:"#2196F3",backgroundColor:"#ddffff",borderLeft:"6px solid",padding:"10px",margin:"5px"},children:[Object(D.jsx)("i",{className:"fa fa-folder","aria-hidden":"true"})," : ",e.name,Object(D.jsx)("button",{children:Object(D.jsx)("i",{className:"cui-action-redo"})})]},"f"+t)))]}),Object(D.jsx)("br",{}),Object(D.jsxs)(c.a,{children:[Object(D.jsx)("h1",{children:Object(D.jsx)(E,{color:"success",children:"Files "})}),this.state.currentDirData.files.map(((e,t)=>Object(D.jsxs)("div",{onClick:()=>{window.open(e.relativePath,"_blank")},style:{borderColor:"#ffb3b3",backgroundColor:"#ffb3b3",borderLeft:"6px solid",padding:"10px",margin:"5px"},children:[Object(D.jsx)("i",{className:"fa fa-file","aria-hidden":"true"})," : ",e.name,e.relativePath.length>0&&Object(D.jsx)(y.a,{color:"",children:Object(D.jsx)("i",{className:"cui-graph icons font-2xl d-block mt-4"})})]},"g"+t)))]})]})}):Object(D.jsx)(T.a,{})]})]})})})})}}t.default=A}}]);
//# sourceMappingURL=14.ac9fd45c.chunk.js.map