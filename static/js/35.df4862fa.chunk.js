(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[35],{523:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return m}));const r=" : ",a=()=>{window.location.reload()},i=e=>{window.open(e,"_blank")},o=(e,t)=>{let n=[];return e.forEach((e=>{(c(e.episode,t)||c(e.shortDesc,t))&&n.push(e)})),n},c=(e,t)=>(t+="",e=(e+="").toUpperCase(),t=t.toUpperCase(),e.includes(t));function d(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const r=t?1e3:1024;if(Math.abs(e)<r)return e+" B";const a=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let i=-1;const o=10**n;do{e/=r,++i}while(Math.round(Math.abs(e)*o)/o>=r&&i<a.length-1);return e.toFixed(n)+" "+a[i]}const s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o=e+" - "+t+"() called"+r;n&&(o+=n+r),a?(o+=a+r,console.log(o,i)):console.log(o)},u=()=>{window.history.back()},l=()=>{window.open("/","_self")},p=(e,t)=>{const n=e.filter((e=>e.id==t));return 0==n.length?null:n[0]},h=e=>{navigator.clipboard.writeText(e)},m=(e,t,n)=>{const r=t/e*n;return console.log("quantity = ".concat(e,", amount = ").concat(t,", perQuantity = ").concat(n,", final = ").concat(r)),r}},544:function(e,t,n){"use strict";var r=n(9),a=n(19),i=n(527),o=n.n(i),c=n(0),d=n.n(c),s=d.a.createContext({});s.Consumer,s.Provider;function u(e,t){var n=Object(c.useContext)(s);return e||n[t]||t}var l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],p=d.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.striped,s=e.bordered,p=e.borderless,h=e.hover,m=e.size,b=e.variant,x=e.responsive,j=Object(a.a)(e,l),y=u(n,"table"),f=o()(i,y,b&&y+"-"+b,m&&y+"-"+m,c&&y+"-striped",s&&y+"-bordered",p&&y+"-borderless",h&&y+"-hover"),g=d.a.createElement("table",Object(r.a)({},j,{className:f,ref:t}));if(x){var O=y+"-responsive";return"string"===typeof x&&(O=O+"-"+x),d.a.createElement("div",{className:O},g)}return g}));t.a=p},710:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(544),i=n(553),o=n.n(i),c=n(523),d=n(10);class s extends r.Component{constructor(e){super(e),this.state={categoryListData:[],categoryPaymentHistoryData:[]}}componentDidMount(){document.title="Playground page"}testRenderingLogic(){let e=[],t=[];return[{productId:485,quantity:400,amount:100,expenseDate:"2023-11-10 15:04"},{productId:485,quantity:500,amount:500,expenseDate:"2023-11-12 15:04"},{productId:345,quantity:450,amount:500,expenseDate:"2023-11-15 15:04"},{productId:345,quantity:450,amount:400,expenseDate:"2023-11-20 15:04"},{productId:345,quantity:450,amount:700,expenseDate:"2023-12-15 15:04"},{productId:485,quantity:500,amount:400,expenseDate:"2023-12-23 15:04"},{productId:345,quantity:450,amount:100,expenseDate:"2023-12-25 15:04"}].forEach((n=>{e.push(n.expenseDate),t.push(Object(c.d)(n.quantity,n.amount,100))})),[{x:[...e],y:[...t],type:"scatter",mode:"lines+markers",marker:{color:"red"},name:"price"}]}testRenderingLogicV2(){const e={category:{id:93,name:"paneer - cottage cheese",unit_of_measurement:"GRAM"},products:[{id:485,name:"Mother Dairy Paneer",brand:{id:23,name:"Mother Dairy"}},{id:345,name:"Amul malai paneer",brand:{id:465,name:"miklymist"}}],priceMatrix:[{productId:485,quantity:400,amount:100,expenseDate:"2023-11-10 15:04"},{productId:485,quantity:500,amount:500,expenseDate:"2023-11-12 15:04"},{productId:345,quantity:450,amount:500,expenseDate:"2023-11-15 15:04"},{productId:345,quantity:450,amount:400,expenseDate:"2023-11-20 15:04"},{productId:345,quantity:450,amount:700,expenseDate:"2023-12-15 15:04"},{productId:485,quantity:500,amount:400,expenseDate:"2023-12-23 15:04"},{productId:345,quantity:450,amount:100,expenseDate:"2023-12-25 15:04"}]},t=[],n=["red","green","blue","#b59a14","#b514a5","black","orange"];return e.products.forEach(((r,a)=>{let i=[],o=[];e.priceMatrix.forEach((e=>{e.productId===r.id&&(i.push(e.expenseDate),o.push(this.findCostPer(e.quantity,e.amount,100)))})),t.push({x:[...i],y:[...o],type:"scatter",mode:"lines+markers",marker:{color:n[a]},name:"price"})})),t}render(){const e=.85*window.innerWidth,t=.6*window.innerHeight;return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Hello from Playground !!!"}),Object(d.jsx)(o.a,{showlegend:!1,data:this.testRenderingLogicV2(),layout:{width:e,height:t,title:"Weight data"}}),Object(d.jsx)(o.a,{data:[{x:[1,2,3],y:[2,6,3],type:"scatter",mode:"lines+markers",marker:{color:"red"}}],layout:{width:e,height:t,title:"Weight data"}}),Object(d.jsxs)(a.a,{striped:!0,bordered:!0,hover:!0,color:"success",style:{width:"100%"},children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"name"}),Object(d.jsx)("th",{children:"unitOfMeasurement"}),Object(d.jsx)("th",{children:"metadata"}),Object(d.jsx)("th",{children:"createdAt"}),Object(d.jsx)("th",{children:"updatedAt"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:this.state.categoryListData.map((e=>Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.unitOfMeasurement}),Object(d.jsx)("td",{children:JSON.stringify(e.metadata)}),Object(d.jsx)("td",{children:"UPDATE"})]},"category_item_id_"+e.id)))})]})]})}}t.default=s}}]);
//# sourceMappingURL=35.df4862fa.chunk.js.map