(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{731:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s}));n(1),n(721);var a=n(17),i=function(e){return Object(a.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(a.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(a.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(a.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(a.jsx)("br",{})]})]})},r=function(){return Object(a.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(a.jsx)("br",{})]})},s=function(){return Object(a.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(a.jsx)("h1",{className:"spinner-grow text-success"}),Object(a.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},732:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return h}));var a=" : ",i=function(){window.location.reload()},r=function(e){window.open(e,"_blank")},s=function(e,t){var n=[];return e.forEach((function(e){(o(e.episode,t)||o(e.shortDesc,t))&&n.push(e)})),n},o=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function c(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=t?1e3:1024;if(Math.abs(e)<a)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,s=Math.pow(10,n);do{e/=a,++r}while(Math.round(Math.abs(e)*s)/s>=a&&r<i.length-1);return e.toFixed(n)+" "+i[r]}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,s=e+" - "+t+"() called"+a;n&&(s+=n+a),i?(s+=i+a,console.log(s,r)):console.log(s)},l=function(){window.history.back()},u=function(){window.open("/","_self")},h=function(e,t){var n=e.filter((function(e){return e.id==t}));return 0==n.length?null:n[0]}},742:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return l}));var a="application/json",i=function(){return{method:"GET",headers:{}}},r=function(e){return{method:"POST",headers:{"Content-Type":a},body:e}},s=function(e){return{method:"POST",headers:{},body:e}},o=function(e){return{method:"GET",headers:{Authorization:e}}},c=function(e,t){return{method:"POST",headers:{"Content-Type":a,Authorization:t},body:e}},d=function(e,t){return{method:"PUT",headers:{"Content-Type":a,Authorization:t},body:e}},l=function(e,t){return{method:"DELETE",headers:{"Content-Type":a,Authorization:t},body:e}}},744:function(e,t,n){"use strict";var a=n(204),i=n(205),r=n(206),s=n(207),o=n(1),c=n(1099),d=n(1070),l=n(731),u=n(17),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=Object(u.jsx)("div",{});return e=0==this.props.loadingModalState?Object(u.jsx)(l.b,{}):1==this.props.loadingModalState?Object(u.jsx)(l.c,{}):Object(u.jsx)(l.a,{}),Object(u.jsx)(c.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),n}(o.Component);t.a=h},745:function(e,t,n){"use strict";var a=n(204),i=n(205),r=n(206),s=n(207),o=n(1),c=n(1099),d=n(1070),l=n(1071),u=n(774),h=n(732),b=n(731),j=n(17),f=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(c.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(j.jsx)(d.a,{children:Object(j.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(j.jsx)(b.a,{detailShow:!0})})}),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u.a,{color:"secondary",onClick:h.d,children:"BACK"}),"\xa0\xa0",Object(j.jsx)(u.a,{color:"secondary",onClick:h.h,children:"RELOAD"}),"\xa0\xa0",Object(j.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(j.jsx)(u.a,{color:"primary",onClick:h.e,children:"HOME"})]})]})}}]),n}(o.Component);t.a=f},746:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r}));var a="https://backend.satanlabs.com/auth-chowkidar",i="https://backend.satanlabs.com/nexus/weight",r="https://backend.satanlabs.com/nexus/price_tracker"},758:function(e,t,n){"use strict";var a=n(12),i=n(28),r=n(738),s=n.n(r),o=n(1),c=n.n(o),d=c.a.createContext({});d.Consumer,d.Provider;function l(e,t){var n=Object(o.useContext)(d);return e||n[t]||t}var u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=c.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.striped,d=e.bordered,h=e.borderless,b=e.hover,j=e.size,f=e.variant,O=e.responsive,p=Object(i.a)(e,u),x=l(n,"table"),v=s()(r,x,f&&x+"-"+f,j&&x+"-"+j,o&&x+"-striped",d&&x+"-bordered",h&&x+"-borderless",b&&x+"-hover"),m=c.a.createElement("table",Object(a.a)({},p,{className:v,ref:t}));if(O){var g=x+"-responsive";return"string"===typeof O&&(g=g+"-"+O),c.a.createElement("div",{className:g},m)}return m}));t.a=h},959:function(e,t,n){"use strict";n.r(t);var a=n(204),i=n(205),r=n(206),s=n(207),o=n(1),c=n(751),d=n.n(c),l=n(742),u=n(210),h=n(732),b=n(731),j=n(758),f=n(721),O=n(744),p=n(745),x=n(746),v=n(17),m="WeightList.js",g={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,weightListData:[]},M=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state=JSON.parse(JSON.stringify(g)),i}return Object(i.a)(n,[{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(g)))}},{key:"componentDidMount",value:function(){document.title="Satanlabs - weight general page",this.fetchWeightDataList()}},{key:"fetchWeightDataList",value:function(){var e=this,t=x.c+"/list?offset=0&from=admin-portal",n=Object(u.a)();fetch(t,Object(l.d)(n.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(h.h)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){Object(h.a)(m,"callApi","FETCH_1","result",t),1001===t.code?e.setState({isLoaded:!0,weightListData:t.data}):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(h.a)(m,"callApi","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchWeightDataList()}},{key:"markWeightEntityDeleted",value:function(e){window.confirm("Surely want to DELETE weight.id = "+e+" ?")&&this.callDeletionApi(e)}},{key:"callDeletionApi",value:function(e){var t=this;this.setState({loadingModalVisible:!0,loadingModalState:0});var n=x.c+"/"+e,a=Object(u.a)();fetch(n,Object(l.a)(null,a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(h.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(h.a)(m,"callApi","FETCH_1","result",e),1001===e.code?(t.setState({loadingModalState:1}),setTimeout((function(){t.setState({loadingModalVisible:!1,loadingModalState:0}),t.reloadData()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(h.a)(m,"callApi","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"render",value:function(){var e=this;return Object(h.a)(m,"render","","this.state",this.state),this.state.isLoaded?Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Weight data list : "}),Object(v.jsx)(f.f,{color:"success",className:"px-4",onClick:function(){return e.reloadData()},children:"reloadData"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(j.a,{striped:!0,bordered:!0,hover:!0,color:"success",style:{width:"100%"},children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Value"}),Object(v.jsx)("th",{children:"extraNotes"}),Object(v.jsx)("th",{children:"createdOn"}),Object(v.jsx)("th",{children:"Actions"})]})}),Object(v.jsx)("tbody",{children:this.state.weightListData.map((function(t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t.id}),Object(v.jsx)("td",{children:t.value}),Object(v.jsx)("td",{children:null==t.extraNotes?"N/A":t.extraNotes}),Object(v.jsxs)("td",{children:[t.createdOn," ~ ",d()(t.createdOn).format("YYYY/MM/DD HH:mm ddd")]}),Object(v.jsxs)("td",{children:[Object(v.jsx)(f.f,{color:"success",className:"px-4",type:"submit",children:"UPDATE"}),"\xa0\xa0\xa0\xa0",Object(v.jsx)(f.f,{color:"danger",className:"px-4",onClick:function(){return e.markWeightEntityDeleted(t.id)},children:"DELETE"})]})]},"weight_item_id_"+t.id)}))})]}),Object(v.jsx)(O.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(v.jsx)(p.a,{visible:this.state.failureModalVisible})]}):Object(v.jsx)(b.b,{})}}]),n}(o.Component);t.default=M}}]);
//# sourceMappingURL=24.b6e886ab.chunk.js.map