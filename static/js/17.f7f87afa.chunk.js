(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{522:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return n}));a(0),a(513);var s=a(10);const i=t=>Object(s.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(s.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(s.jsx)("h2",{children:"We're Sorry."}),t.detailShow&&Object(s.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(s.jsx)("br",{})]})]}),l=()=>Object(s.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(s.jsx)("br",{})]}),n=()=>Object(s.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(s.jsx)("h1",{className:"spinner-grow text-success"}),Object(s.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})},523:function(t,e,a){"use strict";a.d(e,"i",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"h",(function(){return l})),a.d(e,"g",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return h})),a.d(e,"c",(function(){return u})),a.d(e,"b",(function(){return b}));const s=" : ",i=()=>{window.location.reload()},l=t=>{window.open(t,"_blank")},n=(t,e)=>{let a=[];return t.forEach((t=>{(r(t.episode,e)||r(t.shortDesc,e))&&a.push(t)})),a},r=(t,e)=>(e+="",t=(t+="").toUpperCase(),e=e.toUpperCase(),t.includes(e));function o(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const s=e?1e3:1024;if(Math.abs(t)<s)return t+" B";const i=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let l=-1;const n=10**a;do{t/=s,++l}while(Math.round(Math.abs(t)*n)/n>=s&&l<i.length-1);return t.toFixed(a)+" "+i[l]}const c=function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"!==localStorage.logsEnabled)return;let n=t+" - "+e+"() called"+s;a&&(n+=a+s),i?(n+=i+s,console.log(n,l)):console.log(n)},d=()=>{window.history.back()},h=()=>{window.open("/","_self")},u=(t,e)=>{const a=t.filter((t=>t.id==e));return 0==a.length?null:a[0]},b=t=>{navigator.clipboard.writeText(t)}},531:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"a",(function(){return d}));const s="application/json",i=()=>({method:"GET",headers:{}}),l=t=>({method:"POST",headers:{"Content-Type":s},body:t}),n=t=>({method:"POST",headers:{},body:t}),r=t=>({method:"GET",headers:{Authorization:t}}),o=(t,e)=>({method:"POST",headers:{"Content-Type":s,Authorization:e},body:t}),c=(t,e)=>({method:"PUT",headers:{"Content-Type":s,Authorization:e},body:t}),d=(t,e)=>({method:"DELETE",headers:{"Content-Type":s,Authorization:e},body:t})},533:function(t,e,a){"use strict";var s=a(0),i=a(894),l=a(862),n=a(522),r=a(10);class o extends s.Component{render(){let t=Object(r.jsx)("div",{});return t=0==this.props.loadingModalState?Object(r.jsx)(n.b,{}):1==this.props.loadingModalState?Object(r.jsx)(n.c,{}):Object(r.jsx)(n.a,{}),Object(r.jsx)(i.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(r.jsx)(l.a,{children:Object(r.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:t})})})}}e.a=o},534:function(t,e,a){"use strict";var s=a(0),i=a(894),l=a(862),n=a(863),r=a(563),o=a(523),c=a(522),d=a(10);class h extends s.Component{render(){return Object(d.jsxs)(i.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(d.jsx)(l.a,{children:Object(d.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(d.jsx)(c.a,{detailShow:!0})})}),Object(d.jsxs)(n.a,{children:[Object(d.jsx)(r.a,{color:"secondary",onClick:o.e,children:"BACK"}),"\xa0\xa0",Object(d.jsx)(r.a,{color:"secondary",onClick:o.i,children:"RELOAD"}),"\xa0\xa0",Object(d.jsx)(r.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(d.jsx)(r.a,{color:"primary",onClick:o.f,children:"HOME"})]})]})}}e.a=h},535:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return i})),a.d(e,"b",(function(){return l}));const s="https://backend.satanlabs.com/auth-chowkidar",i="https://backend.satanlabs.com/nexus/weight",l="https://backend.satanlabs.com/nexus/price_tracker"},543:function(t,e,a){"use strict";a.d(e,"f",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return l})),a.d(e,"g",(function(){return n})),a.d(e,"e",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return c}));const s=[{value:"MILLILITER",label:"MILLILITER \ud83d\udca7"},{value:"GRAM",label:"GRAM \ud83c\udf4e"},{value:"COUNT",label:"COUNT \ud83e\udd5a"}],i=[{value:"ON_DEMAND",label:"ON_DEMAND"},{value:"BILL",label:"BILL"}],l=[{value:"PRODUCT",label:"PRODUCT \ud83c\udf4e"},{value:"SERVICE",label:"SERVICE"}],n=[{value:"YES",label:"YES \u2705",backendValue:!0},{value:"NO",label:"NO \u274c",backendValue:!1}],r=[{value:"UPI",label:"UPI \ud83c\uddee\ud83c\uddf3 \ud83e\uddfe"},{value:"NET_BANKING",label:"NET BANKING \ud83d\udd17"},{value:"CREDIT_CARD",label:"CREDIT CARD \ud83d\udcb3 "},{value:"DEBIT_CARD",label:"DEBIT CARD \ud83d\udcb3 \ud83c\udfe7"},{value:"CASH",label:"CASH \ud83d\udcb0 \ud83d\udcb5"}],o=[{value:"SBI",label:"SBI"},{value:"AXIS",label:"AXIS"}],c=[{value:"ONLINE",label:"ONLINE \ud83d\udd17"},{value:"STORE_BOUGHT",label:"STORE_BOUGHT \ud83c\udfea"}]},544:function(t,e,a){"use strict";var s=a(9),i=a(19),l=a(527),n=a.n(l),r=a(0),o=a.n(r),c=o.a.createContext({});c.Consumer,c.Provider;function d(t,e){var a=Object(r.useContext)(c);return t||a[e]||e}var h=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.a.forwardRef((function(t,e){var a=t.bsPrefix,l=t.className,r=t.striped,c=t.bordered,u=t.borderless,b=t.hover,j=t.size,f=t.variant,O=t.responsive,p=Object(i.a)(t,h),x=d(a,"table"),m=n()(l,x,f&&x+"-"+f,j&&x+"-"+j,r&&x+"-striped",c&&x+"-bordered",u&&x+"-borderless",b&&x+"-hover"),g=o.a.createElement("table",Object(s.a)({},p,{className:m,ref:e}));if(O){var S=x+"-responsive";return"string"===typeof O&&(S=S+"-"+O),o.a.createElement("div",{className:S},g)}return g}));e.a=u},793:function(t,e,a){"use strict";a.r(e);var s=a(0),i=(a(540),a(531)),l=a(124),n=a(523),r=a(522),o=a(544),c=a(513),d=a(524),h=a(533),u=a(534),b=(a(559),a(551)),j=a(543),f=a(535),O=(a(205),a(10));const p="ExpensesView.js",x={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,locationListData:[],storeListData:[],categoryListData:[],productListData:[],expensesListData:[],filterItems:{dateOfPurchaseFilter:null,paymentInstrumentFilter:null,productFilter:null},filtersEngaged:!1,filteredExpensesListData:[]};class m extends s.Component{constructor(t){super(t),this.state=JSON.parse(JSON.stringify(x))}componentDidMount(){document.title="Expenses - view",this.fetchLocationDataList()}resetStateToDefault(){this.setState(JSON.parse(JSON.stringify(x)))}reloadData(){this.resetStateToDefault(),this.fetchLocationDataList()}fetchLocationDataList(){let t=f.b+"/location/list?offset=0&from=admin-portal";const e=Object(l.a)();fetch(t,Object(i.d)(e.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(l.d)(),Object(n.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{Object(n.a)(p,"fetchLocationDataList","FETCH_1","result",t),1001===t.code?(this.setState({locationListData:t.data}),this.fetchStoreDataList()):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(n.a)(p,"fetchLocationDataList","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}fetchStoreDataList(){let t=f.b+"/store/list?offset=0&from=admin-portal";const e=Object(l.a)();fetch(t,Object(i.d)(e.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(l.d)(),Object(n.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{Object(n.a)(p,"fetchStoreDataList","FETCH_1","result",t),1001===t.code?(this.setState({storeListData:t.data}),this.fetchCategoryDataList()):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(n.a)(p,"fetchStoreDataList","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}fetchCategoryDataList(){let t=f.b+"/category/list?offset=0&from=admin-portal";const e=Object(l.a)();fetch(t,Object(i.d)(e.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(l.d)(),Object(n.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{Object(n.a)(p,"fetchCategoryDataList","FETCH_1","result",t),1001===t.code?(this.setState({categoryListData:t.data}),this.fetchProductDataList()):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(n.a)(p,"fetchCategoryDataList","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}fetchProductDataList(){let t=f.b+"/product/list?offset=0&from=admin-portal";const e=Object(l.a)();fetch(t,Object(i.d)(e.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(l.d)(),Object(n.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{if(Object(n.a)(p,"fetchProductDataList","FETCH_1","result",t),1001===t.code){const e=t.data.map((t=>({product:t,value:t.id,label:t.name,category:this.state.categoryListData.find((e=>e.id===t.categoryId))})));this.setState({productListData:t.data,productListDataSelectTagSpecific:e}),this.fetchExpenseDataList()}else this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(n.a)(p,"fetchProductDataList","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}fetchExpenseDataList(){let t=f.b+"/expense/list?offset=0&from=admin-portal";const e=Object(l.a)();fetch(t,Object(i.d)(e.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(l.d)(),Object(n.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{Object(n.a)(p,"fetchExpenseDataList","FETCH_1","result",t),1001===t.code?this.setState({isLoaded:!0,expensesListData:t.data,filteredExpensesListData:t.data}):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(n.a)(p,"fetchExpenseDataList","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}printStoreData(t){const e=this.state.storeListData.find((e=>e.id===t));return e.name+" (\ud83c\udd94 :"+e.id+") "+this.printLocationData(e.locationId)}printLocationData(t){const e=null===t?null:this.state.locationListData.find((e=>e.id===t));return"\ud83d\udccd LOCATION : "+(null===e?"N/A":e.name+"("+e.id+"), "+e.description+", "+e.city)}toggleFilter(){let t=this.state.expensesListData;const e=this.state.filterItems;if(e.dateOfPurchaseFilter=document.getElementById("dateOfPurchaseFilter").value,this.setState({filterItems:e}),(null===this.state.filterItems.dateOfPurchaseFilter||this.state.filterItems.dateOfPurchaseFilter.length<=0)&&null===this.state.filterItems.paymentInstrumentFilter&&null===this.state.filterItems.productFilter)alert("\u2139\ufe0f No filtering-value added.");else{if(null!==this.state.filterItems.dateOfPurchaseFilter&&(t=t.filter((t=>t.dateAndTimeOfPurchase.includes(this.state.filterItems.dateOfPurchaseFilter)))),null!==this.state.filterItems.paymentInstrumentFilter&&(t=t.filter((t=>t.payment.paymentInstrument.includes(this.state.filterItems.paymentInstrumentFilter)))),null!==this.state.filterItems.productFilter){const e=this.state.filterItems.productFilter.product.id;t=t.filter((t=>t.items.filter((t=>t.productId===e)).length>0))}this.setState({filteredExpensesListData:t,filtersEngaged:!this.state.filtersEngaged})}}render(){return Object(n.a)(p,"render","","this.state",this.state),this.state.isLoaded?Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[Object(O.jsx)("u",{children:"EXPENSES VIEW"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{borderStyle:"solid",borderColor:"#ff9100",padding:"10px 10px 10px 10px",margin:"0px 0px 10px 0px"},children:[Object(O.jsx)(c.f,{color:"success",className:"px-4",onClick:()=>this.reloadData(),children:"Reload Data"}),"\xa0\xa0\xa0\xa0\xa0",Object(O.jsx)(c.f,{color:"danger",className:"px-4",onClick:()=>{window.open("./#/price_tracker/expense/create","_self")},children:" \ud83d\udd17 Create a new expense"})]})]}),Object(O.jsxs)("div",{style:{width:"70%",borderStyle:"solid",borderColor:"green",padding:"10px 10px 10px 10px",margin:"0px 0px 10px 0px"},children:[Object(O.jsx)("h3",{children:Object(O.jsx)("u",{children:"Filters"})}),Object(O.jsxs)("p",{children:["Filter applied ? : ",this.state.filtersEngaged?j.g[0].value:j.g[1].value," "]}),Object(O.jsxs)("h4",{children:[Object(O.jsx)(d.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 date of purchase : "]}),Object(O.jsx)(c.R,{placeholder:"Date Of Purchase Filter",autoComplete:"on",type:"date",step:"any",id:"dateOfPurchaseFilter",label:"Date Of Purchase Filter",required:!0}),Object(O.jsxs)("h4",{children:[Object(O.jsx)(d.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 payment Instrument :"]}),Object(O.jsx)(b.a,{onChange:t=>{const e=this.state.filterItems;e.paymentInstrumentFilter=null===t?null:t.value,this.setState({filterItems:e})},options:j.e,isClearable:!0}),Object(O.jsxs)("h4",{children:[Object(O.jsx)(d.a,{size:"lg",name:"cilLocationPin"}),"\xa0\xa0 product :"]}),Object(O.jsx)(b.a,{onChange:t=>{const e=this.state.filterItems;e.productFilter=t,this.setState({filterItems:e})},options:this.state.productListDataSelectTagSpecific,isClearable:!0}),Object(O.jsx)("br",{}),Object(O.jsx)(c.f,{color:"warning",className:"px-4",onClick:()=>this.toggleFilter(),children:"Enable/apply/engage filters ?"})]}),Object(O.jsxs)("h3",{children:["table count : \u03a3 ",this.state.filteredExpensesListData.length]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{style:{maxHeight:"1000px",overflow:"auto"},children:Object(O.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,color:"success",style:{textAlign:"left",position:"relative"},children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{style:{position:"sticky",background:"white",top:0},children:[Object(O.jsx)("th",{children:"DB ID#"}),Object(O.jsx)("th",{children:"dateAndTimeOfPurchase"}),Object(O.jsx)("th",{children:"payment"}),Object(O.jsx)("th",{children:"items"}),Object(O.jsx)("th",{children:"mode"}),Object(O.jsx)("th",{children:"store"}),Object(O.jsx)("th",{children:"location"}),Object(O.jsx)("th",{children:"extraNotes"}),Object(O.jsx)("th",{children:"tags"})]})}),Object(O.jsx)("tbody",{children:this.state.filteredExpensesListData.map((t=>Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t.id}),Object(O.jsx)("td",{children:t.dateAndTimeOfPurchase}),Object(O.jsxs)("td",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"totalAmount"}),Object(O.jsx)("th",{children:"paymentInstrument"}),Object(O.jsx)("th",{children:"bank"})]}),Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:["\u20b9",t.payment.totalAmount]}),Object(O.jsx)("td",{children:t.payment.paymentInstrument}),Object(O.jsx)("td",{children:t.payment.bank})]})]}),Object(O.jsxs)("td",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"product name"}),Object(O.jsx)("th",{children:"quantity"}),Object(O.jsx)("th",{children:"amount"})]}),t.items.map(((t,e)=>{const a=this.state.productListData.find((e=>e.id===t.productId)),s=this.state.categoryListData.find((t=>t.id===a.categoryId));return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e+1}),Object(O.jsxs)("td",{children:[a.name," (",a.id,")"]}),Object(O.jsxs)("td",{children:[t.quantity," ",j.f.find((t=>t.value===s.unitOfMeasurement)).label]}),Object(O.jsxs)("td",{children:["\u20b9 ",t.amount]})]},"expense_item_id_"+t.id)}))]}),Object(O.jsx)("td",{children:t.mode}),Object(O.jsx)("td",{children:this.printStoreData(t.storeId)}),Object(O.jsx)("td",{children:this.printLocationData(t.locationId)}),Object(O.jsx)("td",{children:t.extraNotes}),Object(O.jsx)("td",{children:t.tags})]},"purchase_id_"+t.id)))})]})}),Object(O.jsx)(h.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(O.jsx)(u.a,{visible:this.state.failureModalVisible})]}):Object(O.jsx)(r.b,{})}}e.default=m}}]);
//# sourceMappingURL=17.f7f87afa.chunk.js.map