(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{634:function(t,e,a){"use strict";a.d(e,"g",(function(){return r})),a.d(e,"b",(function(){return c})),a.d(e,"f",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"a",(function(){return d})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return h}));var n=" : ",i="called",r=function(){window.location.reload()},o=function(t){window.open(t,"_blank")},c=function(t,e){var a=[];return t.forEach((function(t){(s(t.episode,e)||s(t.shortDesc,e))&&a.push(t)})),a},s=function(t,e){return e+="",t=(t+="").toUpperCase(),e=e.toUpperCase(),t.includes(e)};function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(t)<n)return t+" B";var i=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,o=Math.pow(10,a);do{t/=n,++r}while(Math.round(Math.abs(t)*o)/o>=n&&r<i.length-1);return t.toFixed(a)+" "+i[r]}var d=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,c=t+" - "+e+"() "+i+n;a&&(c+=a+n),r?(c+=r+n,console.log(c,o)):console.log(c)},u=function(){window.history.back()},h=function(){window.open("/","_self")}},635:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o}));a(1);var n=a(16),i=function(t){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center text-danger",children:[Object(n.jsx)("i",{className:"fa fa-warning",style:{color:"red",fontSize:"40px"}}),Object(n.jsx)("h2",{children:"We're Sorry."}),t.detailShow&&Object(n.jsxs)("div",{children:["An Error has occurred, please refresh / reload the page.",Object(n.jsx)("br",{})]})]})},r=function(){return Object(n.jsxs)("div",{className:"animated fadeIn text-center",children:[Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"spinner-grow text-primary",role:"status"}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"text-primary",children:"L O A D I N G"}),Object(n.jsx)("br",{})]})},o=function(){return Object(n.jsxs)("div",{className:"animated fadeIn pt-3 text-center",children:[Object(n.jsx)("h1",{className:"spinner-grow text-success"}),Object(n.jsx)("p",{className:"text-success",children:"S U C C E S S"})]})}},637:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"f",(function(){return s})),a.d(e,"a",(function(){return l}));var n="application/json",i=function(){return{method:"GET",headers:{}}},r=function(t){return{method:"POST",headers:{"Content-Type":n},body:t}},o=function(t){return{method:"POST",headers:{},body:t}},c=function(t){return{method:"GET",headers:{Authorization:t}}},s=function(t,e){return{method:"POST",headers:{"Content-Type":n,Authorization:e},body:t}},l=function(t,e){return{method:"DELETE",headers:{"Content-Type":n,Authorization:e},body:t}}},639:function(t,e,a){"use strict";var n=a(158),i=a(159),r=a(161),o=a(160),c=a(1),s=a(799),l=a(790),d=a(635),u=a(16),h=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=Object(u.jsx)("div",{});return t=0==this.props.loadingModalState?Object(u.jsx)(d.b,{}):1==this.props.loadingModalState?Object(u.jsx)(d.c,{}):Object(u.jsx)(d.a,{}),Object(u.jsx)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-primary",children:Object(u.jsx)(l.a,{children:Object(u.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:t})})})}}]),a}(c.Component);e.a=h},640:function(t,e,a){"use strict";var n=a(158),i=a(159),r=a(161),o=a(160),c=a(1),s=a(799),l=a(790),d=a(791),u=a(646),h=a(634),j=a(635),b=a(16),f=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(s.a,{isOpen:this.props.visible,backdrop:"static",className:"modal-danger",children:[Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(b.jsx)(j.a,{detailShow:!0})})}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(u.a,{color:"secondary",onClick:h.c,children:"BACK"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"secondary",onClick:h.g,children:"RELOAD"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"secondary",children:"LOGOUT"}),"\xa0\xa0",Object(b.jsx)(u.a,{color:"primary",onClick:h.d,children:"HOME"})]})]})}}]),a}(c.Component);e.a=f},777:function(t,e,a){"use strict";a.r(e);var n=a(158),i=a(159),r=a(161),o=a(160),c=a(1),s=a(637),l=a(165),d=a(634),u=a(646),h=a(635),j=a(656),b=a.n(j),f=a(625),p=a(639),O=a(640),g=a(16),x="WeightGraph.js",v=["red","green","blue","#b59a14","#b514a5","black","orange"],m={isLoaded:!1,loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!1,weightListData:null,graphType:"scatter",graphMode:"lines+markers",dataForPlot_weight:null},M=function(t){Object(r.a)(a,t);var e=Object(o.a)(a);function a(t){var i;return Object(n.a)(this,a),(i=e.call(this,t)).plotDataForWeight=function(){i.setState({isLoaded:!1}),setTimeout((function(){i.setState({dataForPlot_weight:i.cleanDataForPlotting("weight"),isLoaded:!0})}),200)},i.cleanDataForPlotting=function(t){var e=[],a=Math.floor(Math.random()*v.length),n=[],r=[];return i.state.weightListData.forEach((function(t){n.push(t.createdOn),r.push(t.value)})),e.push({x:[].concat(n),y:[].concat(r),type:i.state.graphType,mode:i.state.graphMode,marker:{color:v[a]},name:"".concat(t)}),e},i.state=JSON.parse(JSON.stringify(m)),i}return Object(i.a)(a,[{key:"resetStateToDefault",value:function(){this.setState(JSON.parse(JSON.stringify(m)))}},{key:"componentDidMount",value:function(){document.title="Satanlabs - weight graph page",this.fetchWeightDataList()}},{key:"fetchWeightDataList",value:function(t){var e=this;this.setState({isLoaded:!1});var a=Object(l.a)();fetch("https://backend.satanlabs.com/nexus/weight/list?offset=0&from=admin-portal",Object(s.d)(a.authToken)).then((function(t){if(200===t.status)return t.json();throw 401===t.status?(e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),setTimeout((function(){Object(l.d)(),Object(d.g)()}),500)):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0}),new Error("HTTP status is "+t.status)})).then((function(t){Object(d.a)(x,"callApi","FETCH_1","result",t),1001===t.code?(e.setState({weightListData:t.data}),e.plotDataForWeight()):e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}),(function(t){Object(d.a)(x,"callApi","FETCH_1","error",t),e.setState({loadingModalVisible:!1,loadingModalState:0,failureModalVisible:!0})}))}},{key:"reloadData",value:function(){this.resetStateToDefault(),this.fetchWeightDataList()}},{key:"render",value:function(){var t=this;Object(d.a)(x,"render","","this.state",this.state);var e=.85*window.innerWidth,a=.6*window.innerHeight;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:{textAlign:"right"},children:Object(g.jsxs)("select",{onChange:function(e){t.fetchWeightDataList(e.target.value)},children:[Object(g.jsx)("option",{value:"",children:"Select no of items"}),Object(g.jsx)("option",{value:0,children:"All items"},"all__a"),Object(g.jsx)("option",{value:10,children:"10"},"10__a"),Object(g.jsx)("option",{value:100,children:"100"},"100__a"),Object(g.jsx)("option",{value:1e3,children:"1000"},"1000__a"),Object(g.jsx)("option",{value:1e4,children:"10000"},"10000__a"),Object(g.jsx)("option",{value:1e5,children:"10000"},"100000__a"),Object(g.jsx)("option",{value:1e6,children:"1000000"},"1000000__a")]})}),this.state.isLoaded?Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Weight data list : "}),Object(g.jsx)(f.f,{color:"success",className:"px-4",onClick:function(){return t.reloadData()},children:"reloadData"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("b",{children:"Change Type :"}),"\xa0\xa0",Object(g.jsx)(u.a,{color:"primary",size:"lg",onClick:function(){t.setState({graphType:"scatter"}),t.plotDataForWeight()},children:"scatter TYPE"}),"\xa0\xa0\xa0\xa0",Object(g.jsx)(u.a,{color:"warning",size:"lg",onClick:function(){t.setState({graphType:"bar"}),t.plotDataForWeight()},children:"bar TYPE"}),"\xa0\xa0\xa0\xa0 CURRENT Type : [ ",this.state.graphType," ]",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("b",{children:"Change Mode :"}),"\xa0\xa0",Object(g.jsx)(u.a,{color:"primary",size:"lg",onClick:function(){t.setState({graphMode:"lines"}),t.plotDataForWeight()},children:"lines MODE"}),"\xa0\xa0\xa0\xa0",Object(g.jsx)(u.a,{color:"danger",size:"lg",onClick:function(){t.setState({graphMode:"lines+markers"}),t.plotDataForWeight()},children:"lines+markers MODE"}),"\xa0\xa0\xa0\xa0",Object(g.jsx)(u.a,{color:"warning",size:"lg",onClick:function(){t.setState({graphMode:"markers"}),t.plotDataForWeight()},children:"markers MODE"}),"\xa0\xa0\xa0\xa0 CURRENT Mode : [ ",this.state.graphMode," ]",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})]}),Object(g.jsx)(b.a,{showlegend:!1,data:this.state.dataForPlot_weight,layout:{width:e,height:a,title:"Weight data"}}),Object(g.jsx)(p.a,{visible:this.state.loadingModalVisible,loadingModalState:this.state.loadingModalState}),Object(g.jsx)(O.a,{visible:this.state.failureModalVisible})]}):Object(g.jsx)(h.b,{})]})}}]),a}(c.Component);e.default=M}}]);
//# sourceMappingURL=19.fd591b4a.chunk.js.map