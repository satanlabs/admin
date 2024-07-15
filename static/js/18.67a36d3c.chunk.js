(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{1004:function(t,e,a){"use strict";a.r(e);var i=a(204),n=a(205),s=a(206),r=a(207),l=a(1),o=(a(754),a(745)),c=a(210),d=a(735),u=a(734),f=a(758),h=a(724),b=a(738),j=a(747),O=a(748),p=(a(774),a(766)),x=a(757),m=a(749),g=(a(421),a(17)),v="ExpensesView.js",S={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,locationListData:[],storeListData:[],categoryListData:[],productListData:[],expensesListData:[],filterItems:{dateOfPurchaseFilter:null,paymentInstrumentFilter:null,productFilter:null},filtersEngaged:!1,filteredExpensesListData:[]},M=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state=JSON.parse(JSON.stringify(S)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.title="Expenses - view",this.fetchLocationDataList()}},{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(S)))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchLocationDataList()}},{key:"fetchLocationDataList",value:function(){var t=this,e=m.b+"/location/list?offset=0&from=admin-portal",a=Object(c.a)();fetch(e,Object(o.d)(a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(c.d)(),Object(d.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(d.a)(v,"fetchLocationDataList","FETCH_1","result",e),1001===e.code?(t.setState({locationListData:e.data}),t.fetchStoreDataList()):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(d.a)(v,"fetchLocationDataList","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"fetchStoreDataList",value:function(){var t=this,e=m.b+"/store/list?offset=0&from=admin-portal",a=Object(c.a)();fetch(e,Object(o.d)(a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(c.d)(),Object(d.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(d.a)(v,"fetchStoreDataList","FETCH_1","result",e),1001===e.code?(t.setState({storeListData:e.data}),t.fetchCategoryDataList()):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(d.a)(v,"fetchStoreDataList","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"fetchCategoryDataList",value:function(){var t=this,e=m.b+"/category/list?offset=0&from=admin-portal",a=Object(c.a)();fetch(e,Object(o.d)(a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(c.d)(),Object(d.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(d.a)(v,"fetchCategoryDataList","FETCH_1","result",e),1001===e.code?(t.setState({categoryListData:e.data}),t.fetchProductDataList()):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(d.a)(v,"fetchCategoryDataList","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"fetchProductDataList",value:function(){var t=this,e=m.b+"/product/list?offset=0&from=admin-portal",a=Object(c.a)();fetch(e,Object(o.d)(a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(c.d)(),Object(d.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){if(Object(d.a)(v,"fetchProductDataList","FETCH_1","result",e),1001===e.code){var a=e.data.map((function(e){return{product:e,value:e.id,label:e.name,category:t.state.categoryListData.find((function(t){return t.id===e.categoryId}))}}));t.setState({productListData:e.data,productListDataSelectTagSpecific:a}),t.fetchExpenseDataList()}else t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(d.a)(v,"fetchProductDataList","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"fetchExpenseDataList",value:function(){var t=this,e=m.b+"/expense/list?offset=0&from=admin-portal",a=Object(c.a)();fetch(e,Object(o.d)(a.authToken)).then((function(e){if(200===e.status)return e.json();throw 401===e.status?(t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(c.d)(),Object(d.h)()}),500)):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+e.status)})).then((function(e){Object(d.a)(v,"fetchExpenseDataList","FETCH_1","result",e),1001===e.code?t.setState({isLoaded:!0,expensesListData:e.data,filteredExpensesListData:e.data}):t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(e){Object(d.a)(v,"fetchExpenseDataList","FETCH_1","error",e),t.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"printStoreData",value:function(t){var e=this.state.storeListData.find((function(e){return e.id===t}));return e.name+" (\ud83c\udd94 :"+e.id+") "+this.printLocationData(e.locationId)}},{key:"printLocationData",value:function(t){var e=null===t?null:this.state.locationListData.find((function(e){return e.id===t}));return"\ud83d\udccd LOCATION : "+(null===e?"N/A":e.name+"("+e.id+"), "+e.description+", "+e.city)}},{key:"toggleFilter",value:function(){var t=this,e=this.state.expensesListData,a=this.state.filterItems;if(a.dateOfPurchaseFilter=document.getElementById("dateOfPurchaseFilter").value,this.setState({filterItems:a}),(null===this.state.filterItems.dateOfPurchaseFilter||this.state.filterItems.dateOfPurchaseFilter.length<=0)&&null===this.state.filterItems.paymentInstrumentFilter&&null===this.state.filterItems.productFilter)alert("\u2139\ufe0f No filtering-value added.");else{if(null!==this.state.filterItems.dateOfPurchaseFilter&&(e=e.filter((function(e){return e.dateAndTimeOfPurchase.includes(t.state.filterItems.dateOfPurchaseFilter)}))),null!==this.state.filterItems.paymentInstrumentFilter&&(e=e.filter((function(e){return e.payment.paymentInstrument.includes(t.state.filterItems.paymentInstrumentFilter)}))),null!==this.state.filterItems.productFilter){var i=this.state.filterItems.productFilter.product.id;e=e.filter((function(t){return t.items.filter((function(t){return t.productId===i})).length>0}))}this.setState({filteredExpensesListData:e,filtersEngaged:!this.state.filtersEngaged})}}},{key:"render",value:function(){var t=this;return Object(d.a)(v,"render","","this.state",this.state),this.state.isLoaded?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{children:["EXPENSES VIEW \xa0\xa0\xa0\xa0\xa0",Object(g.jsx)(h.f,{color:"success",className:"px-4",onClick:function(){return t.reloadData()},children:"Reload Data"})]}),Object(g.jsxs)("div",{style:{width:"70%",borderStyle:"solid",borderColor:"green",padding:"10px 10px 10px 10px",margin:"0px 0px 10px 0px"},children:[Object(g.jsxs)("p",{children:["Filter applied ? : ",this.state.filtersEngaged?x.g[0].value:x.g[1].value," "]}),Object(g.jsxs)("h4",{children:[Object(g.jsx)(b.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 date of purchase : "]}),Object(g.jsx)(h.R,{placeholder:"Date Of Purchase Filter",autoComplete:"on",type:"date",step:"any",id:"dateOfPurchaseFilter",label:"Date Of Purchase Filter",required:!0}),Object(g.jsxs)("h4",{children:[Object(g.jsx)(b.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 payment Instrument :"]}),Object(g.jsx)(p.a,{onChange:function(e){var a=t.state.filterItems;a.paymentInstrumentFilter=null===e?null:e.value,t.setState({filterItems:a})},options:x.e,isClearable:!0}),Object(g.jsxs)("h4",{children:[Object(g.jsx)(b.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 product :"]}),Object(g.jsx)(p.a,{onChange:function(e){var a=t.state.filterItems;a.productFilter=e,t.setState({filterItems:a})},options:this.state.productListDataSelectTagSpecific,isClearable:!0}),Object(g.jsx)("br",{}),Object(g.jsx)(h.f,{color:"warning",className:"px-4",onClick:function(){return t.toggleFilter()},children:"Enable/apply/engage filters ?"})]}),Object(g.jsxs)("h3",{children:["table count : \u03a3 ",this.state.filteredExpensesListData.length]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{style:{maxHeight:"1000px",overflow:"auto"},children:Object(g.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,color:"success",style:{textAlign:"left",position:"relative"},children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{style:{position:"sticky",background:"white",top:0},children:[Object(g.jsx)("th",{children:"DB ID#"}),Object(g.jsx)("th",{children:"dateAndTimeOfPurchase"}),Object(g.jsx)("th",{children:"payment"}),Object(g.jsx)("th",{children:"items"}),Object(g.jsx)("th",{children:"mode"}),Object(g.jsx)("th",{children:"store"}),Object(g.jsx)("th",{children:"location"}),Object(g.jsx)("th",{children:"extraNotes"}),Object(g.jsx)("th",{children:"tags"})]})}),Object(g.jsx)("tbody",{children:this.state.filteredExpensesListData.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.id}),Object(g.jsx)("td",{children:e.dateAndTimeOfPurchase}),Object(g.jsxs)("td",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"totalAmount"}),Object(g.jsx)("th",{children:"paymentInstrument"}),Object(g.jsx)("th",{children:"bank"})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:["\u20b9",e.payment.totalAmount]}),Object(g.jsx)("td",{children:e.payment.paymentInstrument}),Object(g.jsx)("td",{children:e.payment.bank})]})]}),Object(g.jsxs)("td",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"product name"}),Object(g.jsx)("th",{children:"quantity"}),Object(g.jsx)("th",{children:"amount"})]}),e.items.map((function(e,a){var i=t.state.productListData.find((function(t){return t.id===e.productId})),n=t.state.categoryListData.find((function(t){return t.id===i.categoryId}));return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:a+1}),Object(g.jsxs)("td",{children:[i.name," (",i.id,")"]}),Object(g.jsxs)("td",{children:[e.quantity," ",x.f.find((function(t){return t.value===n.unitOfMeasurement})).label]}),Object(g.jsxs)("td",{children:["\u20b9 ",e.amount]})]},"expense_item_id_"+e.id)}))]}),Object(g.jsx)("td",{children:e.mode}),Object(g.jsx)("td",{children:t.printStoreData(e.storeId)}),Object(g.jsx)("td",{children:t.printLocationData(e.locationId)}),Object(g.jsx)("td",{children:e.extraNotes}),Object(g.jsx)("td",{children:e.tags})]},"purchase_id_"+e.id)}))})]})}),Object(g.jsx)(j.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(g.jsx)(O.a,{visible:this.state.failureModalVisible})]}):Object(g.jsx)(u.b,{})}}]),a}(l.Component);e.default=M},734:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return r}));a(1),a(724);var i=a(17),n=function(t){return Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(i.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(i.jsx)("h2",{children:"We're Sorry."}),t.detailShow&&Object(i.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(i.jsx)("br",{})]})]})},s=function(){return Object(i.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(i.jsx)("br",{})]})},r=function(){return Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(i.jsx)("h1",{className:"spinner-grow text-success"}),Object(i.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},735:function(t,e,a){"use strict";a.d(e,"h",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"g",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return d})),a.d(e,"e",(function(){return u})),a.d(e,"b",(function(){return f}));var i=" : ",n=function(){window.location.reload()},s=function(t){window.open(t,"_blank")},r=function(t,e){var a=[];return t.forEach((function(t){(l(t.episode,e)||l(t.shortDesc,e))&&a.push(t)})),a},l=function(t,e){return e+="",t=(t+="").toUpperCase(),e=e.toUpperCase(),t.includes(e)};function o(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=e?1e3:1024;if(Math.abs(t)<i)return t+" B";var n=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=-1,r=Math.pow(10,a);do{t/=i,++s}while(Math.round(Math.abs(t)*r)/r>=i&&s<n.length-1);return t.toFixed(a)+" "+n[s]}var c=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"===localStorage.logsEnabled){var r=t+" - "+e+"() called"+i;a&&(r+=a+i),n?(r+=n+i,console.log(r,s)):console.log(r)}},d=function(){window.history.back()},u=function(){window.open("/","_self")},f=function(t,e){var a=t.filter((function(t){return t.id==e}));return 0==a.length?null:a[0]}},745:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"a",(function(){return d}));var i="application/json",n=function(){return{method:"GET",headers:{}}},s=function(t){return{method:"POST",headers:{"Content-Type":i},body:t}},r=function(t){return{method:"POST",headers:{},body:t}},l=function(t){return{method:"GET",headers:{Authorization:t}}},o=function(t,e){return{method:"POST",headers:{"Content-Type":i,Authorization:e},body:t}},c=function(t,e){return{method:"PUT",headers:{"Content-Type":i,Authorization:e},body:t}},d=function(t,e){return{method:"DELETE",headers:{"Content-Type":i,Authorization:e},body:t}}},747:function(t,e,a){"use strict";var i=a(204),n=a(205),s=a(206),r=a(207),l=a(1),o=a(1101),c=a(1070),d=a(734),u=a(17),f=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var t=Object(u.jsx)("div",{});return t=0==this.props.loadingModalState?Object(u.jsx)(d.b,{}):1==this.props.loadingModalState?Object(u.jsx)(d.c,{}):Object(u.jsx)(d.a,{}),Object(u.jsx)(o.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(c.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:t})})})}}]),a}(l.Component);e.a=f},748:function(t,e,a){"use strict";var i=a(204),n=a(205),s=a(206),r=a(207),l=a(1),o=a(1101),c=a(1070),d=a(1071),u=a(777),f=a(735),h=a(734),b=a(17),j=function(t){Object(s.a)(a,t);var e=Object(r.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(o.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(b.jsx)(c.a,{children:Object(b.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(b.jsx)(h.a,{detailShow:!0})})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{color:"secondary",onClick:f.d,children:"BACK"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"secondary",onClick:f.h,children:"RELOAD"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"primary",onClick:f.e,children:"HOME"})]})]})}}]),a}(l.Component);e.a=j},749:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return s}));var i="https://backend.satanlabs.com/auth-chowkidar",n="https://backend.satanlabs.com/nexus/weight",s="https://backend.satanlabs.com/nexus/price_tracker"},757:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return c}));var i=[{value:"MILLILITER",label:"MILLILITER \ud83d\udca7"},{value:"GRAM",label:"GRAM \ud83c\udf4e"},{value:"COUNT",label:"COUNT \ud83e\udd5a"}],n=[{value:"ON_DEMAND",label:"ON_DEMAND"},{value:"BILL",label:"BILL"}],s=[{value:"PRODUCT",label:"PRODUCT \ud83c\udf4e"},{value:"SERVICE",label:"SERVICE"}],r=[{value:"YES",label:"YES \u2705",backendValue:!0},{value:"NO",label:"NO \u274c",backendValue:!1}],l=[{value:"UPI",label:"UPI \ud83c\uddee\ud83c\uddf3 \ud83e\uddfe"},{value:"NET_BANKING",label:"NET BANKING \ud83d\udd17"},{value:"CREDIT_CARD",label:"CREDIT CARD \ud83d\udcb3 "},{value:"DEBIT_CARD",label:"DEBIT CARD \ud83d\udcb3 \ud83c\udfe7"},{value:"CASH",label:"CASH \ud83d\udcb0 \ud83d\udcb5"}],o=[{value:"SBI",label:"SBI"},{value:"AXIS",label:"AXIS"}],c=[{value:"ONLINE",label:"ONLINE \ud83d\udd17"},{value:"STORE_BOUGHT",label:"STORE_BOUGHT \ud83c\udfea"}]},758:function(t,e,a){"use strict";var i=a(12),n=a(29),s=a(741),r=a.n(s),l=a(1),o=a.n(l),c=o.a.createContext({});c.Consumer,c.Provider;function d(t,e){var a=Object(l.useContext)(c);return t||a[e]||e}var u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],f=o.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.className,l=t.striped,c=t.bordered,f=t.borderless,h=t.hover,b=t.size,j=t.variant,O=t.responsive,p=Object(n.a)(t,u),x=d(a,"table"),m=r()(s,x,j&&x+"-"+j,b&&x+"-"+b,l&&x+"-striped",c&&x+"-bordered",f&&x+"-borderless",h&&x+"-hover"),g=o.a.createElement("table",Object(i.a)({},p,{className:m,ref:e}));if(O){var v=x+"-responsive";return"string"===typeof O&&(v=v+"-"+O),o.a.createElement("div",{className:v},g)}return g}));e.a=f}}]);
//# sourceMappingURL=18.67a36d3c.chunk.js.map