(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[27],{731:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));a(1),a(721);var n=a(17),i=function(e){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(n.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(n.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(n.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(n.jsx)("br",{})]})]})},c=function(){return Object(n.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(n.jsx)("br",{})]})},o=function(){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(n.jsx)("h1",{className:"spinner-grow text-success"}),Object(n.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},732:function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return u}));var n=" : ",i=function(){window.location.reload()},c=function(e){window.open(e,"_blank")},o=function(e,t){var a=[];return e.forEach((function(e){(s(e.episode,t)||s(e.shortDesc,t))&&a.push(e)})),a},s=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],c=-1,o=Math.pow(10,a);do{e/=n,++c}while(Math.round(Math.abs(e)*o)/o>=n&&c<i.length-1);return e.toFixed(a)+" "+i[c]}var l=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o=e+" - "+t+"() called"+n;a&&(o+=a+n),i?(o+=i+n,console.log(o,c)):console.log(o)},d=function(){window.history.back()},u=function(){window.open("/","_self")}},741:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return r})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d}));var n="application/json",i=function(){return{method:"GET",headers:{}}},c=function(e){return{method:"POST",headers:{"Content-Type":n},body:e}},o=function(e){return{method:"POST",headers:{},body:e}},s=function(e){return{method:"GET",headers:{Authorization:e}}},r=function(e,t){return{method:"POST",headers:{"Content-Type":n,Authorization:t},body:e}},l=function(e,t){return{method:"PUT",headers:{"Content-Type":n,Authorization:t},body:e}},d=function(e,t){return{method:"DELETE",headers:{"Content-Type":n,Authorization:t},body:e}}},744:function(e,t,a){"use strict";var n=a(204),i=a(205),c=a(206),o=a(207),s=a(1),r=a(1095),l=a(1068),d=a(731),u=a(17),b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(u.jsx)("div",{});return e=0==this.props.loadingModalState?Object(u.jsx)(d.b,{}):1==this.props.loadingModalState?Object(u.jsx)(d.c,{}):Object(u.jsx)(d.a,{}),Object(u.jsx)(r.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),a}(s.Component);t.a=b},745:function(e,t,a){"use strict";var n=a(204),i=a(205),c=a(206),o=a(207),s=a(1),r=a(1095),l=a(1068),d=a(1069),u=a(774),b=a(732),j=a(731),h=a(17),f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(r.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(h.jsx)(j.a,{detailShow:!0})})}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{color:"secondary",onClick:b.c,children:"BACK"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"secondary",onClick:b.g,children:"RELOAD"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(h.jsx)(u.a,{color:"primary",onClick:b.d,children:"HOME"})]})]})}}]),a}(s.Component);t.a=f},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return c}));var n="https://backend.satanlabs.com/auth-chowkidar",i="https://backend.satanlabs.com/nexus/weight",c="https://backend.satanlabs.com/nexus/price_tracker"},999:function(e,t,a){"use strict";a.r(t);var n=a(204),i=a(205),c=a(206),o=a(207),s=a(1),r=a(751),l=a.n(r),d=a(741),u=a(210),b=a(732),j=a(731),h=a(721),f=a(735),O=a(744),p=a(745),x=a(771),m=a(746),g=a(17),y="Location.js",v={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,locationListData:[]},S=[{accessorKey:"id",header:"ID",enableEditing:!1},{accessorKey:"name",header:"Name",enableEditing:!0},{accessorKey:"description",header:"Description",enableEditing:!0},{accessorKey:"latLong",header:"Lat-Long",enableEditing:!0},{accessorKey:"googlePlusCode",header:"Google Plus Code",enableEditing:!0},{accessorKey:"city",header:"city",enableEditing:!0},{accessorKey:"state",header:"state",enableEditing:!0},{accessorKey:"country",header:"country",enableEditing:!0},{accessorKey:"createdAt",header:"Created At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return l()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}},{accessorKey:"updatedAt",header:"Updated At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return l()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}}],C=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).submitCreateLocationForm=function(e){e.preventDefault();var t={name:e.target.inputName.value,description:e.target.inputDescription.value,latLong:e.target.inputLatLong.value,googlePlusCode:e.target.inputGooglePlusCode.value,city:e.target.inputCity.value,state:e.target.inputState.value,country:e.target.inputCountry.value};i.setState({loadingModalVisible:!0,loadingModalState:0}),i.callCreateLocationApi(t)},i.state=JSON.parse(JSON.stringify(v)),i}return Object(i.a)(a,[{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(v)))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchLocationDataList()}},{key:"componentDidMount",value:function(){document.title="Satanlabs - expenses - Location page",this.fetchLocationDataList()}},{key:"fetchLocationDataList",value:function(){var e=this,t=m.b+"/location/list?offset=0&from=admin-portal",a=Object(u.a)();fetch(t,Object(d.d)(a.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.g)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){Object(b.a)(y,"fetchLocationDataList","FETCH_1","result",t),1001===t.code?e.setState({isLoaded:!0,locationListData:t.data}):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(b.a)(y,"fetchLocationDataList","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"callCreateLocationApi",value:function(e){var t=this,a=m.b+"/location/save?offset=0&from=admin-portal",n=Object(u.a)();fetch(a,Object(d.f)(JSON.stringify(e),n.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.g)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(b.a)(y,"callCreateLocationApi","FETCH_1","result",e),1001===e.code?(t.setState({loadingModalState:1}),setTimeout((function(){t.reloadData()}),200)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(b.a)(y,"callCreateLocationApi","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"render",value:function(){var e=this;return Object(b.a)(y,"render","","this.state",this.state),this.state.isLoaded?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{children:["LOCATION \xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(h.f,{color:"success",className:"px-4",onClick:function(){return e.reloadData()},children:"Reload Data"})]}),Object(g.jsx)("br",{}),Object(g.jsx)(h.u,{md:"5",children:Object(g.jsx)(h.m,{children:Object(g.jsx)(h.j,{className:"p-4",children:Object(g.jsx)(h.k,{children:Object(g.jsxs)(h.J,{onSubmit:this.submitCreateLocationForm,children:[Object(g.jsx)("h1",{children:"Save a new Location"}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"Location Name",autoComplete:"on",type:"text",step:"any",id:"inputName",label:"Location Name",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"Location Description",autoComplete:"on",type:"text",step:"any",id:"inputDescription",label:"Location Description",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"LatLong",autoComplete:"on",type:"text",step:"any",id:"inputLatLong",label:"LatLong",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"Google Plus Code",autoComplete:"on",type:"text",step:"any",id:"inputGooglePlusCode",label:"Google Plus Code",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"city",autoComplete:"on",type:"text",step:"any",id:"inputCity",label:"city",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"state",autoComplete:"on",type:"text",step:"any",id:"inputState",label:"state",required:!0})]}),Object(g.jsxs)(h.V,{className:"mb-3",children:[Object(g.jsx)(h.X,{children:Object(g.jsx)(h.Y,{children:Object(g.jsx)(f.a,{name:"cilPencil"})})}),Object(g.jsx)(h.S,{placeholder:"country",autoComplete:"on",type:"text",step:"any",id:"inputCountry",label:"country",required:!0})]}),Object(g.jsxs)(h.wb,{children:[Object(g.jsx)(h.u,{xs:"6",children:Object(g.jsx)(h.f,{color:"success",className:"px-4",type:"submit",children:"SAVE"})}),Object(g.jsx)(h.u,{xs:"6",className:"text-right",children:Object(g.jsx)(h.f,{color:"danger",className:"px-0",onClick:function(){return e.reloadData()},children:"\xa0Reset values\xa0"})})]})]})})})})}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),this.state.isLoaded?Object(g.jsx)(x.a,{initialState:{density:"compact"},columns:S,data:this.state.locationListData,enablePagination:!0,editingMode:"row",enableEditing:!0,onEditingRowSave:function(t){return e.handleSaveRowEdits(t)}}):Object(g.jsx)("br",{}),Object(g.jsx)(O.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(g.jsx)(p.a,{visible:this.state.failureModalVisible})]}):Object(g.jsx)(j.b,{})}}]),a}(s.Component);t.default=C}}]);
//# sourceMappingURL=27.544e56f1.chunk.js.map