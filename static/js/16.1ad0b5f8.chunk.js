(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{522:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return r}));s(0),s(513);var i=s(10);const n=e=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(i.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(i.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(i.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(i.jsx)("br",{})]})]}),c=()=>Object(i.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(i.jsx)("br",{})]}),r=()=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(i.jsx)("h1",{className:"spinner-grow text-success"}),Object(i.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})},523:function(e,t,s){"use strict";s.d(t,"j",(function(){return n})),s.d(t,"e",(function(){return r})),s.d(t,"i",(function(){return c})),s.d(t,"h",(function(){return o})),s.d(t,"a",(function(){return l})),s.d(t,"f",(function(){return d})),s.d(t,"g",(function(){return h})),s.d(t,"c",(function(){return j})),s.d(t,"b",(function(){return u})),s.d(t,"d",(function(){return b}));const i=" : ",n=()=>{window.location.reload()},c=e=>{window.open(e,"_blank")},r=(e,t)=>{let s=[];return e.forEach((e=>{(a(e.episode,t)||a(e.shortDesc,t))&&s.push(e)})),s},a=(e,t)=>(t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t));function o(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const i=t?1e3:1024;if(Math.abs(e)<i)return e+" B";const n=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let c=-1;const r=10**s;do{e/=i,++c}while(Math.round(Math.abs(e)*r)/r>=i&&c<n.length-1);return e.toFixed(s)+" "+n[c]}const l=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"!==localStorage.logsEnabled)return;let r=e+" - "+t+"() called"+i;s&&(r+=s+i),n?(r+=n+i,console.log(r,c)):console.log(r)},d=()=>{window.history.back()},h=()=>{window.open("/","_self")},j=(e,t)=>{const s=e.filter((e=>e.id==t));return 0==s.length?null:s[0]},u=e=>{navigator.clipboard.writeText(e)},b=(e,t,s)=>{const i=t/e*s;return console.log("quantity = ".concat(e,", amount = ").concat(t,", perQuantity = ").concat(s,", final = ").concat(i)),i}},531:function(e,t,s){"use strict";s.d(t,"c",(function(){return n})),s.d(t,"e",(function(){return c})),s.d(t,"b",(function(){return r})),s.d(t,"d",(function(){return a})),s.d(t,"f",(function(){return o})),s.d(t,"g",(function(){return l})),s.d(t,"a",(function(){return d}));const i="application/json",n=()=>({method:"GET",headers:{}}),c=e=>({method:"POST",headers:{"Content-Type":i},body:e}),r=e=>({method:"POST",headers:{},body:e}),a=e=>({method:"GET",headers:{Authorization:e}}),o=(e,t)=>({method:"POST",headers:{"Content-Type":i,Authorization:t},body:e}),l=(e,t)=>({method:"PUT",headers:{"Content-Type":i,Authorization:t},body:e}),d=(e,t)=>({method:"DELETE",headers:{"Content-Type":i,Authorization:t},body:e})},533:function(e,t,s){"use strict";var i=s(0),n=s(896),c=s(864),r=s(522),a=s(10);class o extends i.Component{render(){let e=Object(a.jsx)("div",{});return e=0==this.props.loadingModalState?Object(a.jsx)(r.b,{}):1==this.props.loadingModalState?Object(a.jsx)(r.c,{}):Object(a.jsx)(r.a,{}),Object(a.jsx)(n.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(a.jsx)(c.a,{children:Object(a.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}t.a=o},534:function(e,t,s){"use strict";var i=s(0),n=s(896),c=s(864),r=s(865),a=s(564),o=s(523),l=s(522),d=s(10);class h extends i.Component{render(){return Object(d.jsxs)(n.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(d.jsx)(c.a,{children:Object(d.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(d.jsx)(l.a,{detailShow:!0})})}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(a.a,{color:"secondary",onClick:o.f,children:"BACK"}),"\xa0\xa0",Object(d.jsx)(a.a,{color:"secondary",onClick:o.j,children:"RELOAD"}),"\xa0\xa0",Object(d.jsx)(a.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(d.jsx)(a.a,{color:"primary",onClick:o.g,children:"HOME"})]})]})}}t.a=h},542:function(e,t,s){"use strict";s(0);var i=s(513),n=s(10);t.a=()=>Object(n.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(n.jsx)(i.Fb,{color:"success",size:"sm"})})},745:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(554),c=s(564),r=s(523),a=s(531),o=(s(542),s(635)),l=(s(747),s(533)),d=s(534),h=s(10);const j="Filevault.js";class u extends i.Component{constructor(e){super(e),this.uploadMultipleFiles=()=>{const e=new FormData;for(let t=0;t<this.state.files.length;t++)e.append("files",this.state.files[t]);this.setState({loadingModalVisible:!0,loadingModalState:0}),fetch("http://192.168.1.109/filevault/uploadMultipleFiles",Object(a.b)(e)).then((e=>{200!=e.status&&this.setState({failureModalVisible:!0})})).then((e=>{Object(r.a)(j,"uploadFile","Fetch","result",e),this.setState({loadingModalState:1}),setTimeout((()=>{this.setState({loadingModalVisible:!1}),Object(r.j)()}),2e3)}),(e=>{Object(r.a)(j,"uploadFile","Fetch","error",e),this.setState({loadingModalState:2}),setTimeout((()=>{this.setState({loadingModalVisible:!1,failureModalVisible:!0})}),2e3)}))},this.getAllDroppedFiles=e=>{const t=e.concat(this.state.files);this.setState({files:t})},this.state={files:[],loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1}}render(){return Object(r.a)(j,"render","","this.state",this.state),Object(h.jsxs)(n.a,{id:"FileUpload",children:[Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(o.a,{onDrop:this.getAllDroppedFiles,children:e=>{let{getRootProps:t,getInputProps:s}=e;return Object(h.jsx)("section",{children:Object(h.jsxs)(n.a,{...t(),children:[Object(h.jsx)("input",{...s(),webkitdirectory:!0,mozdirectory:!0,directory:!0,multiple:!0}),Object(h.jsx)("div",{className:"upload",children:Object(h.jsxs)("p",{children:["Drag 'N Drop the files here or ",Object(h.jsx)("span",{className:"upload__button",children:"Browse"})]})})]})})}}),Object(h.jsx)(c.a,{onClick:this.uploadMultipleFiles,children:"UPLOAD FILES"}),Object(h.jsx)("h1",{children:"Dropped file(s) : "}),Object(h.jsxs)("table",{border:"1",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"NAME"}),Object(h.jsx)("td",{children:"DIR-path"}),Object(h.jsx)("td",{children:"SIZE"})]})}),Object(h.jsx)("tbody",{children:this.state.files.length>0&&this.state.files.map(((e,t)=>Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.path}),Object(h.jsx)("td",{children:Object(r.h)(e.size)})]},"df_"+t)))})]})]}),Object(h.jsx)(l.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(h.jsx)(d.a,{visible:this.state.failureModalVisible})]})}}t.default=u},747:function(e,t,s){}}]);
//# sourceMappingURL=16.1ad0b5f8.chunk.js.map