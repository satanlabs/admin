(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{522:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r}));a(0),a(513);var i=a(10);const s=t=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(i.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(i.jsx)("h2",{children:"We're Sorry."}),t.detailShow&&Object(i.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(i.jsx)("br",{})]})]}),n=()=>Object(i.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(i.jsx)("br",{})]}),r=()=>Object(i.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(i.jsx)("h1",{className:"spinner-grow text-success"}),Object(i.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})},523:function(t,e,a){"use strict";a.d(e,"i",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"h",(function(){return n})),a.d(e,"g",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return h})),a.d(e,"c",(function(){return j})),a.d(e,"b",(function(){return b}));const i=" : ",s=()=>{window.location.reload()},n=t=>{window.open(t,"_blank")},r=(t,e)=>{let a=[];return t.forEach((t=>{(o(t.episode,e)||o(t.shortDesc,e))&&a.push(t)})),a},o=(t,e)=>(e+="",t=(t+="").toUpperCase(),e=e.toUpperCase(),t.includes(e));function c(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const i=e?1e3:1024;if(Math.abs(t)<i)return t+" B";const s=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let n=-1;const r=10**a;do{t/=i,++n}while(Math.round(Math.abs(t)*r)/r>=i&&n<s.length-1);return t.toFixed(a)+" "+s[n]}const l=function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;if("true"!==localStorage.logsEnabled)return;let r=t+" - "+e+"() called"+i;a&&(r+=a+i),s?(r+=s+i,console.log(r,n)):console.log(r)},d=()=>{window.history.back()},h=()=>{window.open("/","_self")},j=(t,e)=>{const a=t.filter((t=>t.id==e));return 0==a.length?null:a[0]},b=t=>{navigator.clipboard.writeText(t)}},531:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"e",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"g",(function(){return l})),a.d(e,"a",(function(){return d}));const i="application/json",s=()=>({method:"GET",headers:{}}),n=t=>({method:"POST",headers:{"Content-Type":i},body:t}),r=t=>({method:"POST",headers:{},body:t}),o=t=>({method:"GET",headers:{Authorization:t}}),c=(t,e)=>({method:"POST",headers:{"Content-Type":i,Authorization:e},body:t}),l=(t,e)=>({method:"PUT",headers:{"Content-Type":i,Authorization:e},body:t}),d=(t,e)=>({method:"DELETE",headers:{"Content-Type":i,Authorization:e},body:t})},533:function(t,e,a){"use strict";var i=a(0),s=a(894),n=a(862),r=a(522),o=a(10);class c extends i.Component{render(){let t=Object(o.jsx)("div",{});return t=0==this.props.loadingModalState?Object(o.jsx)(r.b,{}):1==this.props.loadingModalState?Object(o.jsx)(r.c,{}):Object(o.jsx)(r.a,{}),Object(o.jsx)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(o.jsx)(n.a,{children:Object(o.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:t})})})}}e.a=c},534:function(t,e,a){"use strict";var i=a(0),s=a(894),n=a(862),r=a(863),o=a(563),c=a(523),l=a(522),d=a(10);class h extends i.Component{render(){return Object(d.jsxs)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(d.jsx)(n.a,{children:Object(d.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(d.jsx)(l.a,{detailShow:!0})})}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.a,{color:"secondary",onClick:c.e,children:"BACK"}),"\xa0\xa0",Object(d.jsx)(o.a,{color:"secondary",onClick:c.i,children:"RELOAD"}),"\xa0\xa0",Object(d.jsx)(o.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(d.jsx)(o.a,{color:"primary",onClick:c.f,children:"HOME"})]})]})}}e.a=h},535:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return n}));const i="https://backend.satanlabs.com/auth-chowkidar",s="https://backend.satanlabs.com/nexus/weight",n="https://backend.satanlabs.com/nexus/price_tracker"},754:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a(531),n=a(124),r=a(523),o=a(563),c=a(522),l=a(591),d=a.n(l),h=a(513),j=a(533),b=a(534),u=a(535),p=a(10);const g="WeightGraph.js",O=["red","green","blue","#b59a14","#b514a5","black","orange"],x={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,weightListData:null,graphType:"scatter",graphMode:"lines+markers",dataForPlot_weight:null};class f extends i.Component{constructor(t){super(t),this.plotDataForWeight=()=>{this.setState({isLoaded:!1}),setTimeout((()=>{this.setState({dataForPlot_weight:this.cleanDataForPlotting("weight"),isLoaded:!0})}),200)},this.cleanDataForPlotting=t=>{let e=[];const a=Math.floor(Math.random()*O.length);let i=[],s=[];return this.state.weightListData.forEach((t=>{i.push(t.createdOn),s.push(t.value)})),e.push({x:[...i],y:[...s],type:this.state.graphType,mode:this.state.graphMode,marker:{color:O[a]},name:"".concat(t)}),e},this.state=JSON.parse(JSON.stringify(x))}resetStateToDefault(){this.setState(JSON.parse(JSON.stringify(x)))}componentDidMount(){document.title="Satanlabs - weight graph page",this.fetchWeightDataList()}fetchWeightDataList(t){this.setState({isLoaded:!1});let e=u.c+"/list?offset=0&from=admin-portal";const a=Object(n.a)();fetch(e,Object(s.d)(a.authToken)).then((t=>{if(200===t.status)return t.json();throw 401===t.status?(this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((()=>{Object(n.d)(),Object(r.i)()}),500)):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((t=>{Object(r.a)(g,"callApi","FETCH_1","result",t),1001===t.code?(this.setState({weightListData:t.data}),this.plotDataForWeight()):this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(t=>{Object(r.a)(g,"callApi","FETCH_1","error",t),this.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}reloadData(){this.resetStateToDefault(),this.fetchWeightDataList()}render(){Object(r.a)(g,"render","","this.state",this.state);const t=.85*window.innerWidth,e=.6*window.innerHeight;return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{textAlign:"right"},children:Object(p.jsxs)("select",{onChange:t=>{this.fetchWeightDataList(t.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select no of items"}),Object(p.jsx)("option",{value:0,children:"All items"},"all__a"),Object(p.jsx)("option",{value:10,children:"10"},"10__a"),Object(p.jsx)("option",{value:100,children:"100"},"100__a"),Object(p.jsx)("option",{value:1e3,children:"1000"},"1000__a"),Object(p.jsx)("option",{value:1e4,children:"10000"},"10000__a"),Object(p.jsx)("option",{value:1e5,children:"10000"},"100000__a"),Object(p.jsx)("option",{value:1e6,children:"1000000"},"1000000__a")]})}),this.state.isLoaded?Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Weight data list : "}),Object(p.jsx)(h.f,{color:"success",className:"px-4",onClick:()=>this.reloadData(),children:"reloadData"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Change Type :"}),"\xa0\xa0",Object(p.jsx)(o.a,{color:"primary",size:"lg",onClick:()=>{this.setState({graphType:"scatter"}),this.plotDataForWeight()},children:"scatter TYPE"}),"\xa0\xa0\xa0\xa0",Object(p.jsx)(o.a,{color:"warning",size:"lg",onClick:()=>{this.setState({graphType:"bar"}),this.plotDataForWeight()},children:"bar TYPE"}),"\xa0\xa0\xa0\xa0 CURRENT Type : [ ",this.state.graphType," ]",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)("b",{children:"Change Mode :"}),"\xa0\xa0",Object(p.jsx)(o.a,{color:"primary",size:"lg",onClick:()=>{this.setState({graphMode:"lines"}),this.plotDataForWeight()},children:"lines MODE"}),"\xa0\xa0\xa0\xa0",Object(p.jsx)(o.a,{color:"danger",size:"lg",onClick:()=>{this.setState({graphMode:"lines+markers"}),this.plotDataForWeight()},children:"lines+markers MODE"}),"\xa0\xa0\xa0\xa0",Object(p.jsx)(o.a,{color:"warning",size:"lg",onClick:()=>{this.setState({graphMode:"markers"}),this.plotDataForWeight()},children:"markers MODE"}),"\xa0\xa0\xa0\xa0 CURRENT Mode : [ ",this.state.graphMode," ]",Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]}),Object(p.jsx)(d.a,{showlegend:!1,data:this.state.dataForPlot_weight,layout:{width:t,height:e,title:"Weight data"}}),Object(p.jsx)(j.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(p.jsx)(b.a,{visible:this.state.failureModalVisible})]}):Object(p.jsx)(c.b,{})]})}}e.default=f}}]);
//# sourceMappingURL=23.296416bf.chunk.js.map