(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{522:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o}));a(0),a(513);var i=a(10);const s=e=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(i.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(i.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(i.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(i.jsx)("br",{})]})]}),n=()=>Object(i.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(i.jsx)("br",{})]}),o=()=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(i.jsx)("h1",{className:"spinner-grow text-success"}),Object(i.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})},523:function(e,t,a){"use strict";a.d(t,"i",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"h",(function(){return n})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return d})),a.d(t,"f",(function(){return j})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return u}));const i=" : ",s=()=>{window.location.reload()},n=e=>{window.open(e,"_blank")},o=(e,t)=>{let a=[];return e.forEach((e=>{(c(e.episode,t)||c(e.shortDesc,t))&&a.push(e)})),a},c=(e,t)=>(t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t));function l(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const i=t?1e3:1024;if(Math.abs(e)<i)return e+" B";const s=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const o=10**a;do{e/=i,++n}while(Math.round(Math.abs(e)*o)/o>=i&&n<s.length-1);return e.toFixed(a)+" "+s[n]}const r=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"!==localStorage.logsEnabled)return;let o=e+" - "+t+"() called"+i;a&&(o+=a+i),s?(o+=s+i,console.log(o,n)):console.log(o)},d=()=>{window.history.back()},j=()=>{window.open("/","_self")},b=(e,t)=>{const a=e.filter((e=>e.id==t));return 0==a.length?null:a[0]},u=e=>{navigator.clipboard.writeText(e)}},531:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"f",(function(){return l})),a.d(t,"g",(function(){return r})),a.d(t,"a",(function(){return d}));const i="application/json",s=()=>({method:"GET",headers:{}}),n=e=>({method:"POST",headers:{"Content-Type":i},body:e}),o=e=>({method:"POST",headers:{},body:e}),c=e=>({method:"GET",headers:{Authorization:e}}),l=(e,t)=>({method:"POST",headers:{"Content-Type":i,Authorization:t},body:e}),r=(e,t)=>({method:"PUT",headers:{"Content-Type":i,Authorization:t},body:e}),d=(e,t)=>({method:"DELETE",headers:{"Content-Type":i,Authorization:t},body:e})},533:function(e,t,a){"use strict";var i=a(0),s=a(896),n=a(864),o=a(522),c=a(10);class l extends i.Component{render(){let e=Object(c.jsx)("div",{});return e=0==this.props.loadingModalState?Object(c.jsx)(o.b,{}):1==this.props.loadingModalState?Object(c.jsx)(o.c,{}):Object(c.jsx)(o.a,{}),Object(c.jsx)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(c.jsx)(n.a,{children:Object(c.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}t.a=l},534:function(e,t,a){"use strict";var i=a(0),s=a(896),n=a(864),o=a(865),c=a(563),l=a(523),r=a(522),d=a(10);class j extends i.Component{render(){return Object(d.jsxs)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(d.jsx)(n.a,{children:Object(d.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(d.jsx)(r.a,{detailShow:!0})})}),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(c.a,{color:"secondary",onClick:l.e,children:"BACK"}),"\xa0\xa0",Object(d.jsx)(c.a,{color:"secondary",onClick:l.i,children:"RELOAD"}),"\xa0\xa0",Object(d.jsx)(c.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(d.jsx)(c.a,{color:"primary",onClick:l.f,children:"HOME"})]})]})}}t.a=j},535:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return n}));const i="https://backend.satanlabs.com/auth-chowkidar",s="https://backend.satanlabs.com/nexus/weight",n="https://backend.satanlabs.com/nexus/price_tracker"},792:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(540),n=a.n(s),o=a(531),c=a(124),l=a(523),r=a(522),d=a(513),j=a(524),b=a(533),u=a(534),h=a(559),p=a(535),x=a(10);const O="Location.js",m={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,locationListData:[]},f=[{accessorKey:"id",header:"ID",enableEditing:!1},{accessorKey:"name",header:"Name",enableEditing:!0},{accessorKey:"description",header:"Description",enableEditing:!0},{accessorKey:"latLong",header:"Lat-Long",enableEditing:!0},{accessorKey:"googlePlusCode",header:"Google Plus Code",enableEditing:!0},{accessorKey:"city",header:"city",enableEditing:!0},{accessorKey:"state",header:"state",enableEditing:!0},{accessorKey:"country",header:"country",enableEditing:!0},{accessorKey:"createdAt",header:"Created At",enableEditing:!1,Cell:e=>{let{renderedCellValue:t,row:a}=e;return n()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}},{accessorKey:"updatedAt",header:"Updated At",enableEditing:!1,Cell:e=>{let{renderedCellValue:t,row:a}=e;return n()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}}];class g extends i.Component{constructor(e){super(e),this.submitCreateLocationForm=e=>{e.preventDefault();let t={name:e.target.inputName.value,description:e.target.inputDescription.value,latLong:e.target.inputLatLong.value,googlePlusCode:e.target.inputGooglePlusCode.value,city:e.target.inputCity.value,state:e.target.inputState.value,country:e.target.inputCountry.value};this.setState({loadingModalVisible:!0,loadingModalState:0}),this.callCreateLocationApi(t)},this.state=JSON.parse(JSON.stringify(m))}resetStateToDefault(){this.setState(JSON.parse(JSON.stringify(m)))}reloadData(){this.resetStateToDefault(),this.fetchLocationDataList()}componentDidMount(){document.title="Expenses - Location",this.fetchLocationDataList()}fetchLocationDataList(){let e=p.b+"/location/list?offset=0&from=admin-portal";const t=Object(c.a)();fetch(e,Object(o.d)(t.authToken)).then((e=>{if(200===e.status)return e.json();throw 401===e.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(c.d)(),Object(l.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((e=>{Object(l.a)(O,"fetchLocationDataList","FETCH_1","result",e),1001===e.code?this.setState({isLoaded:!0,locationListData:e.data}):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(e=>{Object(l.a)(O,"fetchLocationDataList","FETCH_1","error",e),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}callCreateLocationApi(e){let t=p.b+"/location/save?offset=0&from=admin-portal";const a=Object(c.a)();fetch(t,Object(o.f)(JSON.stringify(e),a.authToken)).then((e=>{if(200===e.status)return e.json();throw 401===e.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(c.d)(),Object(l.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((e=>{Object(l.a)(O,"callCreateLocationApi","FETCH_1","result",e),1001===e.code?(this.setState({loadingModalState:1}),setTimeout((()=>{this.reloadData()}),200)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(e=>{Object(l.a)(O,"callCreateLocationApi","FETCH_1","error",e),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}render(){return Object(l.a)(O,"render","","this.state",this.state),this.state.isLoaded?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["LOCATION \xa0\xa0\xa0\xa0\xa0",Object(x.jsx)(d.f,{color:"success",className:"px-4",onClick:()=>this.reloadData(),children:"Reload Data"})]}),Object(x.jsx)("br",{}),this.state.isLoaded?Object(x.jsx)(h.a,{initialState:{density:"compact"},columns:f,data:this.state.locationListData,enablePagination:!0,editingMode:"row",enableEditing:!0,onEditingRowSave:e=>this.handleSaveRowEdits(e)}):Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(d.w,{children:Object(x.jsx)(d.vb,{className:"justify-content-center",children:Object(x.jsx)(d.u,{md:"8",children:Object(x.jsx)(d.m,{children:Object(x.jsx)(d.j,{className:"p-4",children:Object(x.jsx)(d.k,{children:Object(x.jsxs)(d.J,{onSubmit:this.submitCreateLocationForm,children:[Object(x.jsx)("h1",{children:"Save a new Location"}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"Location Name",autoComplete:"on",type:"text",step:"any",id:"inputName",label:"Location Name",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"Location Description",autoComplete:"on",type:"text",step:"any",id:"inputDescription",label:"Location Description",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"LatLong",autoComplete:"on",type:"text",step:"any",id:"inputLatLong",label:"LatLong",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"Google Plus Code",autoComplete:"on",type:"text",step:"any",id:"inputGooglePlusCode",label:"Google Plus Code",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"city",autoComplete:"on",type:"text",step:"any",id:"inputCity",label:"city",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"state",autoComplete:"on",type:"text",step:"any",id:"inputState",label:"state",required:!0})]}),Object(x.jsxs)(d.U,{className:"mb-3",children:[Object(x.jsx)(d.W,{children:Object(x.jsx)(d.X,{children:Object(x.jsx)(j.a,{name:"cilPencil"})})}),Object(x.jsx)(d.R,{placeholder:"country",autoComplete:"on",type:"text",step:"any",id:"inputCountry",label:"country",required:!0})]}),Object(x.jsxs)(d.vb,{children:[Object(x.jsx)(d.u,{xs:"6",children:Object(x.jsx)(d.f,{color:"success",className:"px-4",type:"submit",children:"SAVE"})}),Object(x.jsx)(d.u,{xs:"6",className:"text-right",children:Object(x.jsx)(d.f,{color:"danger",className:"px-0",onClick:()=>this.reloadData(),children:"\xa0Reset values\xa0"})})]})]})})})})})})}),Object(x.jsx)(b.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(x.jsx)(u.a,{visible:this.state.failureModalVisible})]}):Object(x.jsx)(r.b,{})}}t.default=g}}]);
//# sourceMappingURL=27.2a847418.chunk.js.map