(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{731:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));a(1),a(721);var n=a(17),i=function(e){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(n.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(n.jsx)("h2",{children:"We're Sorry."}),e.detailShow&&Object(n.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(n.jsx)("br",{})]})]})},r=function(){return Object(n.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(n.jsx)("br",{})]})},o=function(){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(n.jsx)("h1",{className:"spinner-grow text-success"}),Object(n.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},732:function(e,t,a){"use strict";a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return u}));var n=" : ",i=function(){window.location.reload()},r=function(e){window.open(e,"_blank")},o=function(e,t){var a=[];return e.forEach((function(e){(s(e.episode,t)||s(e.shortDesc,t))&&a.push(e)})),a},s=function(e,t){return t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t)};function c(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,o=Math.pow(10,a);do{e/=n,++r}while(Math.round(Math.abs(e)*o)/o>=n&&r<i.length-1);return e.toFixed(a)+" "+i[r]}var l=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o=e+" - "+t+"() called"+n;a&&(o+=a+n),i?(o+=i+n,console.log(o,r)):console.log(o)},d=function(){window.history.back()},u=function(){window.open("/","_self")}},741:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d}));var n="application/json",i=function(){return{method:"GET",headers:{}}},r=function(e){return{method:"POST",headers:{"Content-Type":n},body:e}},o=function(e){return{method:"POST",headers:{},body:e}},s=function(e){return{method:"GET",headers:{Authorization:e}}},c=function(e,t){return{method:"POST",headers:{"Content-Type":n,Authorization:t},body:e}},l=function(e,t){return{method:"PUT",headers:{"Content-Type":n,Authorization:t},body:e}},d=function(e,t){return{method:"DELETE",headers:{"Content-Type":n,Authorization:t},body:e}}},744:function(e,t,a){"use strict";var n=a(204),i=a(205),r=a(206),o=a(207),s=a(1),c=a(1095),l=a(1068),d=a(731),u=a(17),b=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=Object(u.jsx)("div",{});return e=0==this.props.loadingModalState?Object(u.jsx)(d.b,{}):1==this.props.loadingModalState?Object(u.jsx)(d.c,{}):Object(u.jsx)(d.a,{}),Object(u.jsx)(c.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:e})})})}}]),a}(s.Component);t.a=b},745:function(e,t,a){"use strict";var n=a(204),i=a(205),r=a(206),o=a(207),s=a(1),c=a(1095),l=a(1068),d=a(1069),u=a(774),b=a(732),j=a(731),f=a(17),h=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(c.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(f.jsx)(l.a,{children:Object(f.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(f.jsx)(j.a,{detailShow:!0})})}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(u.a,{color:"secondary",onClick:b.c,children:"BACK"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"secondary",onClick:b.g,children:"RELOAD"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(f.jsx)(u.a,{color:"primary",onClick:b.d,children:"HOME"})]})]})}}]),a}(s.Component);t.a=h},746:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return r}));var n="https://backend.satanlabs.com/auth-chowkidar",i="https://backend.satanlabs.com/nexus/weight",r="https://backend.satanlabs.com/nexus/price_tracker"},757:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"g",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return l}));var n=[{value:"MILLILITER",label:"MILLILITER \ud83d\udca7"},{value:"GRAM",label:"GRAM \ud83c\udf4e"},{value:"COUNT",label:"COUNT \ud83e\udd5a"}],i=[{value:"ON_DEMAND",label:"ON_DEMAND"},{value:"BILL",label:"BILL"}],r=[{value:"PRODUCT",label:"PRODUCT \ud83c\udf4e"},{value:"SERVICE",label:"SERVICE"}],o=[{value:"YES",label:"YES \u2705",backendValue:!0},{value:"NO",label:"NO \u274c",backendValue:!1}],s=[{value:"UPI",label:"UPI \ud83c\uddee\ud83c\uddf3 \ud83e\uddfe"},{value:"NET_BANKING",label:"NET_BANKING \ud83d\udd17"},{value:"CREDIT_CARD",label:"CREDIT_CARD \ud83d\udcb3"},{value:"CASH",label:"CASH \ud83d\udcb0 \ud83d\udcb5"}],c=[{value:"SBI",label:"SBI"},{value:"AXIS",label:"AXIS"}],l=[{value:"ONLINE",label:"ONLINE \ud83d\udd17"},{value:"STORE_BOUGHT",label:"STORE_BOUGHT \ud83c\udfea"}]},998:function(e,t,a){"use strict";a.r(t);var n=a(204),i=a(205),r=a(206),o=a(207),s=a(1),c=a(751),l=a.n(c),d=a(741),u=a(210),b=a(732),j=a(731),f=a(744),h=a(745),O=a(721),g=a(735),y=a(771),m=a(763),p=a(757),x=a(746),C=a(17),v="Category.js",S={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,categoryListData:[],newCategoryData:{unitOfMeasurement:null,categoryType:null,commodityType:null,yesAndNo:null}},M=[{accessorKey:"id",header:"ID",enableEditing:!1},{accessorKey:"name",header:"Name",enableEditing:!0},{accessorKey:"unitOfMeasurement",header:"Unit Of Measurement",enableEditing:!0},{accessorKey:"metadata.type",header:"Category Type",enableEditing:!0},{accessorKey:"metadata.commodityType",header:"Commodity Type",enableEditing:!0},{accessorKey:"metadata.eligibleForNoBrand",header:"Eligible For NoBrand ?",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return t?"YES":"NO"}},{accessorKey:"createdAt",header:"Created At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return l()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}},{accessorKey:"updatedAt",header:"Updated At",enableEditing:!1,Cell:function(e){var t=e.renderedCellValue;e.row;return l()(t).zone("IST").format("YYYY/MM/DD HH:mm:ss ddd")}}],T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).submitCreateCategoryForm=function(e){e.preventDefault();var t={name:e.target.inputName.value};!1!==i.doesStateContainAllRequiredCategoryParams()?(t.unitOfMeasurement=i.state.newCategoryData.unitOfMeasurement,t.metadata={type:i.state.newCategoryData.categoryType,commodityType:i.state.newCategoryData.commodityType,eligibleForNoBrand:"YES"===i.state.newCategoryData.yesAndNo},i.setState({loadingModalVisible:!0,loadingModalState:0}),i.callCreateCategoryApi(t)):alert("Please fill all unfilled items in the form")},i.state=JSON.parse(JSON.stringify(S)),i}return Object(i.a)(a,[{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(S)))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchCategoryDataList()}},{key:"componentDidMount",value:function(){document.title="Satanlabs - expenses - Category page",this.fetchCategoryDataList()}},{key:"fetchCategoryDataList",value:function(){var e=this,t=x.b+"/category/list?offset=0&from=admin-portal",a=Object(u.a)();fetch(t,Object(d.d)(a.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.g)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){Object(b.a)(v,"fetchCategoryDataList","FETCH_1","result",t),1001===t.code?e.setState({isLoaded:!0,categoryListData:t.data}):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(b.a)(v,"fetchCategoryDataList","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"doesStateContainAllRequiredCategoryParams",value:function(){return null!==this.state.newCategoryData.unitOfMeasurement&&null!==this.state.newCategoryData.categoryType&&null!==this.state.newCategoryData.commodityType&&null!==this.state.newCategoryData.yesAndNo}},{key:"callCreateCategoryApi",value:function(e){var t=this,a=x.b+"/category/save?offset=0&from=admin-portal",n=Object(u.a)();fetch(a,Object(d.f)(JSON.stringify(e),n.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(u.d)(),Object(b.g)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(b.a)(v,"callCreateCategoryApi","FETCH_1","result",e),1001===e.code?(t.setState({loadingModalState:1}),setTimeout((function(){t.reloadData()}),200)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(b.a)(v,"callCreateCategoryApi","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"render",value:function(){var e=this;return Object(b.a)(v,"render","","this.state",this.state),this.state.isLoaded?Object(C.jsxs)("div",{children:[Object(C.jsxs)("h1",{children:["CATEGORY \xa0\xa0\xa0\xa0\xa0",Object(C.jsx)(O.f,{color:"success",className:"px-4",onClick:function(){return e.reloadData()},children:"Reload Data"})]}),Object(C.jsx)("br",{}),Object(C.jsx)(O.u,{md:"5",children:Object(C.jsx)(O.m,{children:Object(C.jsx)(O.j,{className:"p-4",children:Object(C.jsx)(O.k,{children:Object(C.jsxs)(O.J,{onSubmit:this.submitCreateCategoryForm,children:[Object(C.jsx)("h1",{children:"Save a new category"}),Object(C.jsxs)(O.V,{className:"mb-3",children:[Object(C.jsx)(O.X,{children:Object(C.jsx)(O.Y,{children:Object(C.jsx)(g.a,{name:"cilPencil"})})}),Object(C.jsx)(O.S,{placeholder:"Category Name",autoComplete:"on",type:"text",step:"any",id:"inputName",label:"Category Name",required:!0})]}),Object(C.jsx)(g.a,{name:"cilPencil"})," ",Object(C.jsx)("b",{children:"Unit of measurement :"}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{onChange:function(t){var a=e.state.newCategoryData;a.unitOfMeasurement=t.value,e.setState({newCategoryData:a})},options:p.f}),Object(C.jsx)("br",{}),Object(C.jsx)(g.a,{name:"cilPencil"})," ",Object(C.jsx)("b",{children:"Category Type :"}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{onChange:function(t){var a=e.state.newCategoryData;a.categoryType=t.value,e.setState({newCategoryData:a})},options:p.a}),Object(C.jsx)("br",{}),Object(C.jsx)(g.a,{name:"cilPencil"})," ",Object(C.jsx)("b",{children:"Commodity Type :"}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{onChange:function(t){var a=e.state.newCategoryData;a.commodityType=t.value,e.setState({newCategoryData:a})},options:p.b}),Object(C.jsx)("br",{}),Object(C.jsx)(g.a,{name:"cilPencil"})," ",Object(C.jsx)("b",{children:"Eligible For NoBrand ?"}),Object(C.jsx)("br",{}),Object(C.jsx)(m.a,{onChange:function(t){var a=e.state.newCategoryData;a.yesAndNo=t.value,e.setState({newCategoryData:a})},options:p.g}),Object(C.jsx)("br",{}),Object(C.jsxs)(O.wb,{children:[Object(C.jsx)(O.u,{xs:"6",children:Object(C.jsx)(O.f,{color:"success",className:"px-4",type:"submit",children:"SAVE"})}),Object(C.jsx)(O.u,{xs:"6",className:"text-right",children:Object(C.jsx)(O.f,{color:"danger",className:"px-0",onClick:function(){return e.reloadData()},children:"\xa0Reset values\xa0"})})]})]})})})})}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),this.state.isLoaded?Object(C.jsx)(y.a,{initialState:{density:"compact"},columns:M,data:this.state.categoryListData,enablePagination:!0,editingMode:"row",enableEditing:!0,onEditingRowSave:function(t){return e.handleSaveRowEdits(t)}}):Object(C.jsx)("br",{}),Object(C.jsx)(f.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(C.jsx)(h.a,{visible:this.state.failureModalVisible})]}):Object(C.jsx)(j.b,{})}}]),a}(s.Component);t.default=T}}]);
//# sourceMappingURL=21.4bab4355.chunk.js.map