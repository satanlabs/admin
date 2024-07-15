(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{542:function(e,t,a){"use strict";a(0);var s=a(513),r=a(10);t.a=()=>Object(r.jsx)("div",{className:"animated fadeIn pt-3 text-center",children:Object(r.jsx)(s.Fb,{color:"success",size:"sm"})})},553:function(e,t,a){"use strict";var s=a(9),r=a(19),i=a(0),n=a.n(i),o=a(63),h=a.n(o),l=a(527),c=a.n(l),d=a(525),j=["className","cssModule","color","body","inverse","outline","tag","innerRef"],u={tag:d.n,inverse:h.a.bool,color:h.a.string,body:h.a.bool,outline:h.a.bool,className:h.a.string,cssModule:h.a.object,innerRef:h.a.oneOfType([h.a.object,h.a.string,h.a.func])},b=function(e){var t=e.className,a=e.cssModule,i=e.color,o=e.body,h=e.inverse,l=e.outline,u=e.tag,b=e.innerRef,g=Object(r.a)(e,j),p=Object(d.j)(c()(t,"card",!!h&&"text-white",!!o&&"card-body",!!i&&(l?"border":"bg")+"-"+i),a);return n.a.createElement(u,Object(s.a)({},g,{className:p,ref:b}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},745:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(591),i=a.n(r),n=a(553),o=a(746),h=a(563),l=(a(573),a(542)),c=a(10);const d=["humidity","pressure","temperature"],j={200:"thunderstorm with light rain",201:"thunderstorm with rain",202:"thunderstorm with heavy rain",210:"light thunderstorm",211:"thunderstorm",212:"heavy thunderstorm",221:"ragged thunderstorm",230:"thunderstorm with light drizzle",231:"thunderstorm with drizzle",232:"thunderstorm with heavy drizzle",300:"light intensity drizzle",301:"drizzle",302:"heavy intensity drizzle",310:"light intensity drizzle rain",311:"drizzle rain",312:"heavy intensity drizzle rain",313:"shower rain and drizzle",314:"heavy shower rain and drizzle",321:"shower drizzle",500:"light rain",501:"moderate rain",502:"heavy intensity rain",503:"very heavy rain",504:"extreme rain",511:"freezing rain",520:"light intensity shower rain",521:"shower rain",522:"heavy intensity shower rain",531:"ragged shower rain",600:"light snow",601:"snow",602:"heavy snow",611:"sleet",612:"shower sleet",615:"light rain and snow",616:"rain and snow",620:"light shower snow",621:"shower snow",622:"heavy shower snow",701:"mist",711:"smoke",721:"haze",731:"sand,dust whirls",741:"fog",751:"sand",761:"dust",762:"volcanic ash",771:"squalls",781:"tornado",800:"clear sky",801:"few clouds",802:"scattered clouds",803:"broken clouds",804:"overcast clouds",900:"tornado",901:"tropical storm",902:"hurricane",903:"cold",904:"hot",905:"windy",906:"hail",950:"setting",951:"calm",952:"light breeze",953:"gentle breeze",954:"moderate breeze",955:"fresh breeze",956:"strong breeze",957:"high wind, near gale",958:"gale",959:"severe gale",960:"storm",961:"violent storm",962:"hurricane"},u=["scatter","bar"],b=["lines","lines+markers","markers"],g=["red","green","blue","#b59a14","#b514a5","black","orange"];class p extends s.Component{constructor(e){super(e),this.getRawWeatherDataFromApi=e=>{this.setState({isLoaded:!1}),fetch("http://192.168.1.109/nexus/weather-data?data=123&offset="+e).then((e=>e.json())).then((e=>{this.setState({rawData:e.data}),this.plotDataForWeather(),this.showLatestData()}),(e=>{console.log("ERROR :",e)}))},this.showLatestData=()=>{const e=this.state.rawData[this.state.rawData.length-1],t=JSON.parse(e.rawData);this.setState({latestWeatherConditions:e,latestRawData:t})},this.cleanDataForPlotting=e=>{let t=[];const a=Math.floor(Math.random()*g.length);let s=[],r=[];return this.state.rawData.forEach((t=>{s.push(new Date(parseInt(t.timestamp))),r.push(t[e])})),t.push({x:[...s],y:[...r],type:this.state.graphType,mode:this.state.graphMode,marker:{color:g[a]},name:"".concat(e)}),t},this.plotDataForWeather=()=>{this.setState({isLoaded:!1}),setTimeout((()=>{this.setState({dataForPlot_humidity:this.cleanDataForPlotting(d[0]),dataForPlot_pressure:this.cleanDataForPlotting(d[1]),dataForPlot_temperature:this.cleanDataForPlotting(d[2]),isLoaded:!0})}),250)},this.degToCompass=e=>["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][parseInt(e/22.5+.5)%16],this.state={isLoaded:!1,graphType:u[0],graphMode:b[1],latestWeatherConditions:null,latestRawData:null,offset:240}}componentDidMount(){this.getRawWeatherDataFromApi(this.state.offset),setTimeout((()=>{console.log("reloading page after every 2.5 min :",new Date),window.location.reload()}),15e4)}render(){console.log("WeatherGraph.js render() : this.state :",this.state);const e=.94*window.innerWidth,t=.94*window.innerHeight;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{textAlign:"right"},children:Object(c.jsxs)("select",{onChange:e=>{this.getRawWeatherDataFromApi(e.target.value)},children:[Object(c.jsx)("option",{value:"",children:"Select no of items"}),Object(c.jsx)("option",{value:0,children:"All items"},"all__a"),Object(c.jsx)("option",{value:10,children:"10"},"10__a"),Object(c.jsx)("option",{value:100,children:"100"},"100__a"),Object(c.jsx)("option",{value:1e3,children:"1000"},"1000__a"),Object(c.jsx)("option",{value:1e4,children:"10000"},"10000__a"),Object(c.jsx)("option",{value:1e5,children:"10000"},"100000__a"),Object(c.jsx)("option",{value:1e6,children:"1000000"},"1000000__a")]})}),this.state.isLoaded?Object(c.jsx)(n.a,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsxs)("h2",{children:["Temperature : ",Number(this.state.latestWeatherConditions.temperature).toFixed(2)," \xba C"]}),Object(c.jsxs)("h2",{children:["Humidity : ",this.state.latestWeatherConditions.humidity," % "]}),Object(c.jsxs)("h2",{children:["Pressure : ",this.state.latestWeatherConditions.pressure," hPa "]}),Object(c.jsxs)("h2",{children:["Cloudiness : ",this.state.latestRawData.clouds.all," % "]}),Object(c.jsxs)("h2",{children:["Sunrise : ",new Date(1e3*this.state.latestRawData.sys.sunrise).toLocaleTimeString()," AM"]}),Object(c.jsxs)("h2",{children:["Sunset : ",new Date(1e3*this.state.latestRawData.sys.sunset).toLocaleTimeString()," PM"]}),Object(c.jsxs)("h2",{children:["Visibility : ",this.state.latestRawData.visibility," meters "]}),Object(c.jsxs)("h2",{children:["Wind -speed : ",(3.6*this.state.latestRawData.wind.speed).toFixed(2)," kmph "]}),Object(c.jsxs)("h2",{children:["Wind -direction : ",this.degToCompass(this.state.latestRawData.wind.deg)]}),Object(c.jsxs)("h2",{children:[this.state.latestRawData.weather[0].main," ",j[this.state.latestRawData.weather[0].id],Object(c.jsx)("img",{height:"60px",src:"https://openweathermap.org/img/wn/".concat(this.state.latestRawData.weather[0].icon,"@4x.png")})]}),Object(c.jsxs)("h5",{children:["last updated : ",this.state.latestWeatherConditions.dateAndTime]})]})}):Object(c.jsx)(l.a,{}),this.state.isLoaded?Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"Change Type :"}),"\xa0\xa0",Object(c.jsx)(h.a,{color:"primary",size:"lg",onClick:()=>{this.setState({graphType:"scatter"}),this.plotDataForWeather()},children:"scatter TYPE"}),"\xa0\xa0\xa0\xa0",Object(c.jsx)(h.a,{color:"warning",size:"lg",onClick:()=>{this.setState({graphType:"bar"}),this.plotDataForWeather()},children:"bar TYPE"}),"\xa0\xa0\xa0\xa0 CURRENT Type : [ ",this.state.graphType," ]",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsxs)("span",{children:[Object(c.jsx)("b",{children:"Change Mode :"}),"\xa0\xa0",Object(c.jsx)(h.a,{color:"primary",size:"lg",onClick:()=>{this.setState({graphMode:"lines"}),this.plotDataForWeather()},children:"lines MODE"}),"\xa0\xa0\xa0\xa0",Object(c.jsx)(h.a,{color:"danger",size:"lg",onClick:()=>{this.setState({graphMode:"lines+markers"}),this.plotDataForWeather()},children:"lines+markers MODE"}),"\xa0\xa0\xa0\xa0",Object(c.jsx)(h.a,{color:"warning",size:"lg",onClick:()=>{this.setState({graphMode:"markers"}),this.plotDataForWeather()},children:"markers MODE"}),"\xa0\xa0\xa0\xa0 CURRENT Mode : [ ",this.state.graphMode," ]",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsx)(i.a,{showlegend:!1,data:this.state.dataForPlot_temperature,layout:{width:e,height:t,title:"Temperature - Celsius"}}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)(i.a,{showlegend:!1,data:this.state.dataForPlot_humidity,layout:{width:e,height:t,title:"Humidity - percent"}}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{}),Object(c.jsx)(i.a,{showlegend:!1,data:this.state.dataForPlot_pressure,layout:{width:e,height:t,title:"Pressure - Bar"}})]}):Object(c.jsx)(l.a,{})]})}}t.default=p},746:function(e,t,a){"use strict";var s=a(9),r=a(19),i=a(0),n=a.n(i),o=a(63),h=a.n(o),l=a(527),c=a.n(l),d=a(525),j=["className","cssModule","innerRef","tag"],u={tag:d.n,className:h.a.string,cssModule:h.a.object,innerRef:h.a.oneOfType([h.a.object,h.a.string,h.a.func])},b=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,o=e.tag,h=Object(r.a)(e,j),l=Object(d.j)(c()(t,"card-body"),a);return n.a.createElement(o,Object(s.a)({},h,{className:l,ref:i}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=34.4482fe54.chunk.js.map