(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[29],{1010:function(e,t,n){"use strict";n.r(t);var o=n(204),r=n(205),i=n(206),a=n(207),c=n(1),s=n.n(c),d=n(766),u=n(12),l=n(28),f=n(209),p=n(45),b=n(93),h=n.n(b),v=n(739),j=n.n(v),y=n(737),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:h.a.node,type:h.a.string,size:h.a.oneOfType([h.a.number,h.a.string]),bsSize:h.a.string,valid:h.a.bool,invalid:h.a.bool,tag:y.n,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),plaintext:h.a.bool,addon:h.a.bool,className:h.a.string,cssModule:h.a.object},O=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(f.a)(n)),n.focus=n.focus.bind(Object(f.a)(n)),n}Object(p.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,a=e.invalid,c=e.tag,d=e.addon,f=e.plaintext,p=e.innerRef,b=Object(l.a)(e,m),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),g=c||("select"===o||"textarea"===o?o:"input"),O="form-control";f?(O+="-plaintext",g=c||"input"):"file"===o?O+="-file":"range"===o?O+="-range":h&&(O=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(y.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var x=Object(y.j)(j()(t,a&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),n);return("input"===g||c&&"function"===typeof c)&&(b.type=o),b.children&&!f&&"select"!==o&&"string"===typeof g&&"select"!==g&&(Object(y.p)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),s.a.createElement(g,Object(u.a)({},b,{ref:p,className:x,"aria-invalid":a}))},t}(s.a.Component);O.propTypes=g,O.defaultProps={type:"text"};var x=O,w=n(775),E=n(756),k=n(733),C=n(743),T=n(17),z="TaarakMehta.js",M=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).openEpisode=function(e){},r.searchEpisodes=function(e){r.setState({isLoaded:!1});var t=e.target.value;r.setState({visibleEpisodes:Object(k.c)(r.state.apiRawData,t)}),r.setState({isLoaded:!0})},r.state={apiRawData:[],visibleEpisodes:[],isLoaded:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/assets/json/all_apisodes_tmkoc_v2.json",Object(C.c)()).then((function(e){return e.json()})).then((function(t){Object(k.a)(z,"componentDidMount","FETCH_1","result",t),e.setState({apiRawData:t,visibleEpisodes:t,isLoaded:!0})}),(function(e){Object(k.a)(z,"componentDidMount","FETCH_1","error",e)}))}},{key:"render",value:function(){var e=this;return Object(k.a)(z,"render","","this.state",this.state),Object(T.jsxs)(d.a,{children:[Object(T.jsxs)("h3",{children:[" Hello from Taarak - Mehta ~~~~ !!!!",Object(T.jsx)(x,{bsSize:"lg",placeholder:" Search here ...  \ud83d\udd0e",type:"text",id:"searchString",onChange:function(t){e.searchEpisodes(t)}}),Object(T.jsx)("br",{})]}),this.state.isLoaded&&Object(T.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"episode"}),Object(T.jsx)("th",{children:"id"}),Object(T.jsx)("th",{children:"shortDesc"}),Object(T.jsx)("th",{children:"releaseDate"}),Object(T.jsx)("th",{children:"duration"}),Object(T.jsx)("th",{children:"Link"})]})}),Object(T.jsx)("tbody",{children:this.state.visibleEpisodes.map((function(e,t){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:e.episode}),Object(T.jsx)("td",{children:e.id}),Object(T.jsx)("td",{children:e.shortDesc}),Object(T.jsx)("td",{children:e.releaseDate}),Object(T.jsxs)("td",{children:[parseInt(e.duration/1e3/60),"min. ",parseInt(e.duration/1e3%60),"sec."]}),Object(T.jsx)("td",{children:Object(T.jsx)(w.a,{onClick:function(){Object(k.g)("https://www.sonyliv.com/details/episodes/"+e.id+"/")},children:Object(T.jsx)("img",{alt:"cccc",height:"50px",src:"https://upload.wikimedia.org/wikipedia/en/f/f9/Tmkoc.jpg"})})})]},t+"__EPISODE")}))})]})]})}}]),n}(c.Component);t.default=M},733:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return f}));var o=" : ",r=function(){window.location.reload()},i=function(e){window.open(e,"_blank")},a=function(e,t){var n=[];return e.forEach((function(e){(c(e.episode,t)||c(e.shortDesc,t))&&n.push(e)})),n},c=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=t?1e3:1024;if(Math.abs(e)<o)return e+" B";var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1,a=Math.pow(10,n);do{e/=o,++i}while(Math.round(Math.abs(e)*a)/a>=o&&i<r.length-1);return e.toFixed(n)+" "+r[i]}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,a=e+" - "+t+"() called"+o;n&&(a+=n+o),r?(a+=r+o,console.log(a,i)):console.log(a)},u=function(){window.history.back()},l=function(){window.open("/","_self")},f=function(e,t){var n=e.filter((function(e){return e.id==t}));return 0==n.length?null:n[0]}},737:function(e,t,n){"use strict";n.d(t,"m",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"p",(function(){return p})),n.d(t,"o",(function(){return h})),n.d(t,"n",(function(){return v})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return y})),n.d(t,"i",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return k})),n.d(t,"e",(function(){return C}));var o,r=n(93),i=n.n(r);function a(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&a(n+e)}function d(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n}function l(e,t){for(var n,o=Array.isArray(t)?t:[t],r=o.length,i={};r>0;)i[n=o[r-=1]]=e[n];return i}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var b="object"===typeof window&&window.Element||function(){};var h=i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),v=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),j={Fade:150,Collapse:350,Modal:300,Carousel:600},y=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],m={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},g=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function x(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function w(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!x(e))return!1;var t=O(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function E(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function k(e,t){var n=w(e);return t?E(n)?n:null===n?[]:[n]:E(n)?n[0]:n}var C=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},743:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return u}));var o="application/json",r=function(){return{method:"GET",headers:{}}},i=function(e){return{method:"POST",headers:{"Content-Type":o},body:e}},a=function(e){return{method:"POST",headers:{},body:e}},c=function(e){return{method:"GET",headers:{Authorization:e}}},s=function(e,t){return{method:"POST",headers:{"Content-Type":o,Authorization:t},body:e}},d=function(e,t){return{method:"PUT",headers:{"Content-Type":o,Authorization:t},body:e}},u=function(e,t){return{method:"DELETE",headers:{"Content-Type":o,Authorization:t},body:e}}},756:function(e,t,n){"use strict";var o=n(12),r=n(28),i=n(739),a=n.n(i),c=n(1),s=n.n(c),d=s.a.createContext({});d.Consumer,d.Provider;function u(e,t){var n=Object(c.useContext)(d);return e||n[t]||t}var l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.striped,d=e.bordered,f=e.borderless,p=e.hover,b=e.size,h=e.variant,v=e.responsive,j=Object(r.a)(e,l),y=u(n,"table"),m=a()(i,y,h&&y+"-"+h,b&&y+"-"+b,c&&y+"-striped",d&&y+"-bordered",f&&y+"-borderless",p&&y+"-hover"),g=s.a.createElement("table",Object(o.a)({},j,{className:m,ref:t}));if(v){var O=y+"-responsive";return"string"===typeof v&&(O=O+"-"+v),s.a.createElement("div",{className:O},g)}return g}));t.a=f},766:function(e,t,n){"use strict";var o=n(12),r=n(28),i=n(1),a=n.n(i),c=n(93),s=n.n(c),d=n(739),u=n.n(d),l=n(737),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:l.n,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},b=function(e){var t=e.className,n=e.cssModule,i=e.color,c=e.body,s=e.inverse,d=e.outline,p=e.tag,b=e.innerRef,h=Object(r.a)(e,f),v=Object(l.j)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!i&&(d?"border":"bg")+"-"+i),n);return a.a.createElement(p,Object(o.a)({},h,{className:v,ref:b}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},775:function(e,t,n){"use strict";var o=n(12),r=n(28),i=n(209),a=n(45),c=n(1),s=n.n(c),d=n(93),u=n.n(d),l=n(739),f=n.n(l),p=n(737),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.n,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],i=e.block,a=e.className,c=e.close,d=e.cssModule,u=e.color,l=e.outline,h=e.size,v=e.tag,j=e.innerRef,y=Object(r.a)(e,b);c&&"undefined"===typeof y.children&&(y.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(l?"-outline":"")+"-"+u,g=Object(p.j)(f()(a,{close:c},c||"btn",c||m,!!h&&"btn-"+h,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),d);y.href&&"button"===v&&(v="a");var O=c?"Close":null;return s.a.createElement(v,Object(o.a)({type:"button"===v&&y.onClick?"button":void 0},y,{className:g,ref:j,onClick:this.onClick,"aria-label":n||O}))},t}(s.a.Component);v.propTypes=h,v.defaultProps={color:"secondary",tag:"button"},t.a=v}}]);
//# sourceMappingURL=29.eb59377b.chunk.js.map