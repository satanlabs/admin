(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[28],{1069:function(e,t,n){"use strict";n.r(t);var a=n(204),r=n(205),c=n(206),i=n(207),o=n(1),s=n(724),d=n(738),l=n(745),u=n(735),j=n(747),b=n(748),h=n(210),f=n(749),O=n(17),p="Login.js",x=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).submitForm=function(e){e.preventDefault();var t={username:e.target.inputUsername.value,password:e.target.inputPazzword.value};r.setState({loadingModalVisible:!0,loadingModalState:0});var n=f.a+"/token/generate";fetch(n,Object(l.e)(JSON.stringify(t))).then((function(e){return e.json()})).then((function(e){Object(u.a)(p,"callApi","FETCH_1","result",e),1001===e.code?(Object(h.c)(e.data.token,e.data.validTill,t.username),r.setState({loadingModalState:1}),setTimeout((function(){Object(u.e)()}),200)):1003===e.code?(r.setState({loadingModalState:2}),setTimeout((function(){r.setState({loadingModalVisible:!1})}),500)):r.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(u.a)(p,"callApi","FETCH_1","error",e),r.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))},r.state={isLoaded:!1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.title="Satanlabs - login page",this.setState({isLoaded:!0}),Object(h.d)()}},{key:"render",value:function(){return Object(u.a)(p,"render","render","this.state",this.state),Object(O.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",style:{backgroundColor:"#1e81b0"},children:[Object(O.jsx)(s.w,{children:Object(O.jsx)(s.vb,{className:"justify-content-center",children:Object(O.jsx)(s.u,{md:"8",children:Object(O.jsx)(s.m,{children:Object(O.jsx)(s.j,{className:"p-4",children:Object(O.jsx)(s.k,{children:Object(O.jsxs)(s.J,{onSubmit:this.submitForm,children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(O.jsxs)(s.U,{className:"mb-3",children:[Object(O.jsx)(s.W,{children:Object(O.jsx)(s.X,{children:Object(O.jsx)(d.a,{name:"cil-user"})})}),Object(O.jsx)(s.R,{placeholder:"Username",autoComplete:"on",type:"text",id:"inputUsername",label:"Username",required:!0})]}),Object(O.jsxs)(s.U,{className:"mb-4",children:[Object(O.jsx)(s.W,{children:Object(O.jsx)(s.X,{children:Object(O.jsx)(d.a,{name:"cil-lock-locked"})})}),Object(O.jsx)(s.R,{placeholder:"Paxxword",autoComplete:"on",type:"password",id:"inputPazzword",label:"Pazzword",required:!0})]}),Object(O.jsxs)(s.vb,{children:[Object(O.jsx)(s.u,{xs:"6",children:Object(O.jsx)(s.f,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),Object(O.jsx)(s.u,{xs:"6",className:"text-right",children:Object(O.jsx)(s.f,{color:"link",className:"px-0",children:"Forgot pazzword?"})})]})]})})})})})})}),Object(O.jsx)(j.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(O.jsx)(b.a,{visible:this.state.failureModalVisible})]})}}]),n}(o.Component);t.default=x},734:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i}));n(1),n(724);var a=n(17),r=function(e){return Object(a.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(a.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(a.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(a.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(a.jsx)("br",{})]})]})},c=function(){return Object(a.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(a.jsx)("br",{})]})},i=function(){return Object(a.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(a.jsx)("h1",{className:"spinner-grow text-success"}),Object(a.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},735:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return j}));var a=" : ",r=function(){window.location.reload()},c=function(e){window.open(e,"_blank")},i=function(e,t){var n=[];return e.forEach((function(e){(o(e.episode,t)||o(e.shortDesc,t))&&n.push(e)})),n},o=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=t?1e3:1024;if(Math.abs(e)<a)return e+" B";var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],c=-1,i=Math.pow(10,n);do{e/=a,++c}while(Math.round(Math.abs(e)*i)/i>=a&&c<r.length-1);return e.toFixed(n)+" "+r[c]}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"===localStorage.logsEnabled){var i=e+" - "+t+"() called"+a;n&&(i+=n+a),r?(i+=r+a,console.log(i,c)):console.log(i)}},l=function(){window.history.back()},u=function(){window.open("/","_self")},j=function(e,t){var n=e.filter((function(e){return e.id==t}));return 0==n.length?null:n[0]}},745:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return l}));var a="application/json",r=function(){return{method:"GET",headers:{}}},c=function(e){return{method:"POST",headers:{"Content-Type":a},body:e}},i=function(e){return{method:"POST",headers:{},body:e}},o=function(e){return{method:"GET",headers:{Authorization:e}}},s=function(e,t){return{method:"POST",headers:{"Content-Type":a,Authorization:t},body:e}},d=function(e,t){return{method:"PUT",headers:{"Content-Type":a,Authorization:t},body:e}},l=function(e,t){return{method:"DELETE",headers:{"Content-Type":a,Authorization:t},body:e}}},747:function(e,t,n){"use strict";var a=n(204),r=n(205),c=n(206),i=n(207),o=n(1),s=n(1101),d=n(1070),l=n(734),u=n(17),j=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(u.jsx)("div",{});return e=0==this.props.loadingModalState?Object(u.jsx)(l.b,{}):1==this.props.loadingModalState?Object(u.jsx)(l.c,{}):Object(u.jsx)(l.a,{}),Object(u.jsx)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),n}(o.Component);t.a=j},748:function(e,t,n){"use strict";var a=n(204),r=n(205),c=n(206),i=n(207),o=n(1),s=n(1101),d=n(1070),l=n(1071),u=n(777),j=n(735),b=n(734),h=n(17),f=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(h.jsx)(d.a,{children:Object(h.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(h.jsx)(b.a,{detailShow:!0})})}),Object(h.jsxs)(l.a,{children:[Object(h.jsx)(u.a,{color:"secondary",onClick:j.d,children:"BACK"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"secondary",onClick:j.h,children:"RELOAD"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"primary",onClick:j.e,children:"HOME"})]})]})}}]),n}(o.Component);t.a=f},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a="https://backend.satanlabs.com/auth-chowkidar",r="https://backend.satanlabs.com/nexus/weight",c="https://backend.satanlabs.com/nexus/price_tracker"}}]);
//# sourceMappingURL=28.587fca26.chunk.js.map