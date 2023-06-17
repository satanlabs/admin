(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{1001:function(e,t,a){"use strict";a.r(t);var n=a(204),i=a(205),o=a(206),r=a(207),l=a(1),s=a(751),c=a.n(s),d=a(742),u=a(210),b=a(732),j=a(731),f=a(721),h=a(735),O=a(744),S=a(745),p=a(771),m=a(763),v=a(757),x=a(746),g=a(17),C="Store.js",M={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,storeListData:[],locationListData:[],locationListDataSelectTagSpecific:[],newStoreData:{isCloudStore:null,locationId:null}},T=[{accessorKey:"id",header:"ID",enableEditing:!1},{accessorKey:"name",header:"name",enableEditing:!0},{accessorKey:"type",header:"type",enableEditing:!0,Cell:function(e){var t=e.renderedCellValue;e.row;return null===t?"N/A":t}},{accessorKey:"isCloudStore",header:"isCloudStore",enableEditing:!0,Cell:function(e){var t=e.renderedCellValue;e.row;return t?"YES":"NO"}},{accessorKey:"location",header:"location",enableEditing:!0,Cell:function(e){var t=e.renderedCellValue;e.row;return null===t?"N/A":t.name+" ["+t.description+"]["+t.id+"]"}},{accessorKey:"createdAt",header:"Created At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return c()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}},{accessorKey:"updatedAt",header:"Updated At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return c()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}}],D=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).submitCreateStoreForm=function(e){e.preventDefault();var t={name:e.target.inputName.value,type:e.target.inputType.value},a=i.doesStateContainAllRequiredStoreParams();null===a?(t.isCloudStore="YES"===i.state.newStoreData.isCloudStore,t.locationId=i.state.newStoreData.locationId,i.setState({loadingModalVisible:!0,loadingModalState:0}),i.callCreateStoreApi(t)):alert(a+" . \u2139\ufe0f Form validation failed.")},i.state=JSON.parse(JSON.stringify(M)),i}return Object(i.a)(a,[{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(M)))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchLocationDataList()}},{key:"componentDidMount",value:function(){document.title="Satanlabs - expenses - Store page",this.fetchLocationDataList()}},{key:"fetchLocationDataList",value:function(){var e=this,t=x.b+"/location/list?offset=0&from=admin-portal",a=Object(u.a)();fetch(t,Object(d.d)(a.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.h)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){if(Object(b.a)(C,"fetchLocationDataList","FETCH_1","result",t),1001===t.code){var a=t.data.map((function(e){return{value:e.id,label:e.name+" [**"+e.description+"]"}}));e.setState({locationListData:t.data,locationListDataSelectTagSpecific:a}),e.fetchStoreDataList()}else e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(b.a)(C,"fetchLocationDataList","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"fetchStoreDataList",value:function(){var e=this,t=x.b+"/store/list?offset=0&from=admin-portal",a=Object(u.a)();fetch(t,Object(d.d)(a.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.h)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){if(Object(b.a)(C,"fetchStoreDataList","FETCH_1","result",t),1001===t.code){var a=t.data.map((function(t){return t.location=Object(b.b)(e.state.locationListData,t.locationId),t}));e.setState({isLoaded:!0,storeListData:a})}else e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(b.a)(C,"fetchStoreDataList","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"doesStateContainAllRequiredStoreParams",value:function(){return null===this.state.newStoreData.isCloudStore?"isCloudStore NOT selected":"NO"===this.state.newStoreData.isCloudStore&&null===this.state.newStoreData.locationId?"location is MANTORY for non-cloud stores":void 0}},{key:"callCreateStoreApi",value:function(e){var t=this,a=x.b+"/store/save?offset=0&from=admin-portal",n=Object(u.a)();fetch(a,Object(d.f)(JSON.stringify(e),n.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(b.a)(C,"callCreateStoreApi","FETCH_1","result",e),1001===e.code?(t.setState({loadingModalState:1}),setTimeout((function(){t.reloadData()}),200)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(b.a)(C,"callCreateStoreApi","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"render",value:function(){var e=this;return Object(b.a)(C,"render","","this.state",this.state),this.state.isLoaded?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{children:["STORE \xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(f.f,{color:"success",className:"px-4",onClick:function(){return e.reloadData()},children:"Reload Data"})]}),Object(g.jsx)("br",{}),this.state.isLoaded?Object(g.jsx)(p.a,{initialState:{density:"compact"},columns:T,data:this.state.storeListData,enablePagination:!0,editingMode:"row",enableEditing:!0,onEditingRowSave:function(t){return e.handleSaveRowEdits(t)}}):Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(f.u,{md:"5",children:Object(g.jsx)(f.m,{children:Object(g.jsx)(f.j,{className:"p-4",children:Object(g.jsx)(f.k,{children:Object(g.jsxs)(f.J,{onSubmit:this.submitCreateStoreForm,children:[Object(g.jsx)("h1",{children:"Save a new Store"}),Object(g.jsxs)(f.V,{className:"mb-3",children:[Object(g.jsx)(f.X,{children:Object(g.jsx)(f.Y,{children:Object(g.jsx)(h.a,{name:"cilPencil"})})}),Object(g.jsx)(f.S,{placeholder:"Store Name",autoComplete:"on",type:"text",step:"any",id:"inputName",label:"Store Name",required:!0})]}),Object(g.jsxs)(f.V,{className:"mb-3",children:[Object(g.jsx)(f.X,{children:Object(g.jsx)(f.Y,{children:Object(g.jsx)(h.a,{name:"cilPencil"})})}),Object(g.jsx)(f.S,{placeholder:"Store Type",autoComplete:"on",type:"text",step:"any",id:"inputType",label:"Store Type",required:!0})]}),Object(g.jsx)(h.a,{name:"cilPencil"})," ",Object(g.jsx)("b",{children:"Is Cloud Store ? :"}),Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{onChange:function(t){var a=e.state.newStoreData;a.isCloudStore=null===t?null:t.value,e.setState({newStoreData:a})},options:v.g,isClearable:!0}),Object(g.jsx)("br",{}),Object(g.jsx)(h.a,{name:"cilPencil"}),"\xa0\xa0 ",Object(g.jsx)("b",{children:"Location :"})," ","YES"===this.state.newStoreData.isCloudStore?"\u26d4\ufe0f \u2139\ufe0f Not reqd. for online store":"",Object(g.jsx)("br",{}),Object(g.jsx)(m.a,{onChange:function(t){var a=e.state.newStoreData;a.locationId=null===t?null:t.value,e.setState({newStoreData:a})},options:this.state.locationListDataSelectTagSpecific,isClearable:!0}),Object(g.jsx)("br",{}),Object(g.jsxs)(f.wb,{children:[Object(g.jsx)(f.u,{xs:"6",children:Object(g.jsx)(f.f,{color:"success",className:"px-4",type:"submit",children:"SAVE"})}),Object(g.jsx)(f.u,{xs:"6",className:"text-right",children:Object(g.jsx)(f.f,{color:"danger",className:"px-0",onClick:function(){return e.reloadData()},children:"\xa0Reset values\xa0"})})]})]})})})})}),Object(g.jsx)(O.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(g.jsx)(S.a,{visible:this.state.failureModalVisible})]}):Object(g.jsx)(j.b,{})}}]),a}(l.Component);t.default=D},731:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r}));a(1),a(721);var n=a(17),i=function(e){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(n.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(n.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(n.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(n.jsx)("br",{})]})]})},o=function(){return Object(n.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(n.jsx)("br",{})]})},r=function(){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(n.jsx)("h1",{className:"spinner-grow text-success"}),Object(n.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},732:function(e,t,a){"use strict";a.d(t,"h",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"g",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return b}));var n=" : ",i=function(){window.location.reload()},o=function(e){window.open(e,"_blank")},r=function(e,t){var a=[];return e.forEach((function(e){(l(e.episode,t)||l(e.shortDesc,t))&&a.push(e)})),a},l=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1,r=Math.pow(10,a);do{e/=n,++o}while(Math.round(Math.abs(e)*r)/r>=n&&o<i.length-1);return e.toFixed(a)+" "+i[o]}var c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,r=e+" - "+t+"() called"+n;a&&(r+=a+n),i?(r+=i+n,console.log(r,o)):console.log(r)},d=function(){window.history.back()},u=function(){window.open("/","_self")},b=function(e,t){var a=e.filter((function(e){return e.id==t}));return 0==a.length?null:a[0]}},742:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"a",(function(){return d}));var n="application/json",i=function(){return{method:"GET",headers:{}}},o=function(e){return{method:"POST",headers:{"Content-Type":n},body:e}},r=function(e){return{method:"POST",headers:{},body:e}},l=function(e){return{method:"GET",headers:{Authorization:e}}},s=function(e,t){return{method:"POST",headers:{"Content-Type":n,Authorization:t},body:e}},c=function(e,t){return{method:"PUT",headers:{"Content-Type":n,Authorization:t},body:e}},d=function(e,t){return{method:"DELETE",headers:{"Content-Type":n,Authorization:t},body:e}}},744:function(e,t,a){"use strict";var n=a(204),i=a(205),o=a(206),r=a(207),l=a(1),s=a(1099),c=a(1070),d=a(731),u=a(17),b=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(u.jsx)("div",{});return e=0==this.props.loadingModalState?Object(u.jsx)(d.b,{}):1==this.props.loadingModalState?Object(u.jsx)(d.c,{}):Object(u.jsx)(d.a,{}),Object(u.jsx)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(c.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),a}(l.Component);t.a=b},745:function(e,t,a){"use strict";var n=a(204),i=a(205),o=a(206),r=a(207),l=a(1),s=a(1099),c=a(1070),d=a(1071),u=a(774),b=a(732),j=a(731),f=a(17),h=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(f.jsx)(c.a,{children:Object(f.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(f.jsx)(j.a,{detailShow:!0})})}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(u.a,{color:"secondary",onClick:b.d,children:"BACK"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"secondary",onClick:b.h,children:"RELOAD"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"primary",onClick:b.e,children:"HOME"})]})]})}}]),a}(l.Component);t.a=h},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var n="https://backend.satanlabs.com/auth-chowkidar",i="https://backend.satanlabs.com/nexus/weight",o="https://backend.satanlabs.com/nexus/price_tracker"},757:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"c",(function(){return c}));var n=[{value:"MILLILITER",label:"MILLILITER \ud83d\udca7"},{value:"GRAM",label:"GRAM \ud83c\udf4e"},{value:"COUNT",label:"COUNT \ud83e\udd5a"}],i=[{value:"ON_DEMAND",label:"ON_DEMAND"},{value:"BILL",label:"BILL"}],o=[{value:"PRODUCT",label:"PRODUCT \ud83c\udf4e"},{value:"SERVICE",label:"SERVICE"}],r=[{value:"YES",label:"YES \u2705",backendValue:!0},{value:"NO",label:"NO \u274c",backendValue:!1}],l=[{value:"UPI",label:"UPI \ud83c\uddee\ud83c\uddf3 \ud83e\uddfe"},{value:"NET_BANKING",label:"NET_BANKING \ud83d\udd17"},{value:"CREDIT_CARD",label:"CREDIT_CARD \ud83d\udcb3"},{value:"CASH",label:"CASH \ud83d\udcb0 \ud83d\udcb5"}],s=[{value:"SBI",label:"SBI"},{value:"AXIS",label:"AXIS"}],c=[{value:"ONLINE",label:"ONLINE \ud83d\udd17"},{value:"STORE_BOUGHT",label:"STORE_BOUGHT \ud83c\udfea"}]}}]);
//# sourceMappingURL=23.690302fe.chunk.js.map