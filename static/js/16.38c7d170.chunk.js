(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{634:function(e,t,n){"use strict";n(1);var i=n(624),c=n(20);t.a=function(){return Object(c.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(c.jsx)(i.Gb,{color:"success",size:"sm"})})}},639:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return u}));var i=" : ",c="called",a=function(){window.location.reload()},r=function(e){window.open(e,"_blank")},s=function(e,t){var n=[];return e.forEach((function(e){(o(e.episode,t)||o(e.shortDesc,t))&&n.push(e)})),n},o=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=t?1e3:1024;if(Math.abs(e)<i)return e+" B";var c=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,r=Math.pow(10,n);do{e/=i,++a}while(Math.round(Math.abs(e)*r)/r>=i&&a<c.length-1);return e.toFixed(n)+" "+c[a]}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,s=e+" - "+t+"() "+c+i;n&&(s+=n+i),a?(s+=a+i,console.log(s,r)):console.log(s)},j=function(){window.history.back()},u=function(){window.open("/","_self")}},642:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var i=function(){return{method:"GET",headers:{}}},c=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:e}},a=function(e){return{method:"POST",headers:{},body:e}}},757:function(e,t,n){},771:function(e,t,n){"use strict";n.r(t);var i=n(43),c=n(159),a=n(160),r=n(162),s=n(161),o=n(1),l=n(638),d=n(645),j=n(639),u=n(642),b=(n(634),n(672)),h=(n(757),n(789)),O=n(786),p=n(20),f=function(e){return Object(p.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(p.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(p.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(p.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(p.jsx)("br",{})]})]})},x=function(){return Object(p.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(p.jsx)("br",{})]})},m=function(){return Object(p.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(p.jsx)("h1",{className:"spinner-grow text-success"}),Object(p.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})},v=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=Object(p.jsx)("div",{});return e=0==this.props.loadingModalState?Object(p.jsx)(x,{}):1==this.props.loadingModalState?Object(p.jsx)(m,{}):Object(p.jsx)(f,{}),Object(p.jsx)(h.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(p.jsx)(O.a,{children:Object(p.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),n}(o.Component),g=n(787),M=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(h.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(p.jsx)(O.a,{children:Object(p.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(p.jsx)(f,{detailShow:!0})})}),Object(p.jsxs)(g.a,{children:[Object(p.jsx)(d.a,{color:"secondary",onClick:j.c,children:"BACK"}),"\xa0\xa0",Object(p.jsx)(d.a,{color:"secondary",onClick:j.g,children:"RELOAD"}),"\xa0\xa0",Object(p.jsx)(d.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(p.jsx)(d.a,{color:"primary",onClick:j.d,children:"HOME"})]})]})}}]),n}(o.Component),S="Filevault.js",y=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).uploadMultipleFiles=function(){for(var e=new FormData,t=0;t<i.state.files.length;t++)e.append("files",i.state.files[t]);i.setState({loadingModalVisible:!0,loadingModalState:0}),fetch("http://192.168.1.109/filevault/uploadMultipleFiles",Object(u.a)(e)).then((function(e){200!=e.status&&i.setState({failureModalVisible:!0})})).then((function(e){Object(j.a)(S,"uploadFile","Fetch","result",e),i.setState({loadingModalState:1}),setTimeout((function(){i.setState({loadingModalVisible:!1}),Object(j.g)()}),2e3)}),(function(e){Object(j.a)(S,"uploadFile","Fetch","error",e),i.setState({loadingModalState:2}),setTimeout((function(){i.setState({loadingModalVisible:!1,failureModalVisible:!0})}),2e3)}))},i.getAllDroppedFiles=function(e){var t=e.concat(i.state.files);i.setState({files:t})},i.state={files:[],loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1},i}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.a)(S,"render","","this.state",this.state),Object(p.jsxs)(l.a,{id:"FileUpload",children:[Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(b.a,{onDrop:this.getAllDroppedFiles,children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(p.jsx)("section",{children:Object(p.jsxs)(l.a,Object(i.a)(Object(i.a)({},t()),{},{children:[Object(p.jsx)("input",Object(i.a)(Object(i.a)({},n()),{},{webkitdirectory:!0,mozdirectory:!0,directory:!0,multiple:!0})),Object(p.jsx)("div",{className:"upload",children:Object(p.jsxs)("p",{children:["Drag 'N Drop the files here or ",Object(p.jsx)("span",{className:"upload__button",children:"Browse"})]})})]}))})}}),Object(p.jsx)(d.a,{onClick:this.uploadMultipleFiles,children:"UPLOAD FILES"}),Object(p.jsx)("h1",{children:"Dropped file(s) : "}),Object(p.jsxs)("table",{border:"1",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"NAME"}),Object(p.jsx)("td",{children:"DIR-path"}),Object(p.jsx)("td",{children:"SIZE"})]})}),Object(p.jsx)("tbody",{children:this.state.files.length>0&&this.state.files.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.path}),Object(p.jsx)("td",{children:Object(j.e)(e.size)})]},"df_"+t)}))})]})]}),Object(p.jsx)(v,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(p.jsx)(M,{visible:this.state.failureModalVisible})]})}}]),n}(o.Component);t.default=y}}]);
//# sourceMappingURL=16.38c7d170.chunk.js.map