(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[70],{758:function(e,t,r){"use strict";var c=r(12),n=r(29),s=r(741),a=r.n(s),i=r(1),d=r.n(i),o=d.a.createContext({});o.Consumer,o.Provider;function j(e,t){var r=Object(i.useContext)(o);return e||r[t]||t}var l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],b=d.a.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,i=e.striped,o=e.bordered,b=e.borderless,h=e.hover,u=e.size,O=e.variant,f=e.responsive,m=Object(n.a)(e,l),x=j(r,"table"),v=a()(s,x,O&&x+"-"+O,u&&x+"-"+u,i&&x+"-striped",o&&x+"-bordered",b&&x+"-borderless",h&&x+"-hover"),p=d.a.createElement("table",Object(c.a)({},m,{className:v,ref:t}));if(f){var y=x+"-responsive";return"string"===typeof f&&(y=y+"-"+f),d.a.createElement("div",{className:y},p)}return p}));t.a=b},921:function(e,t,r){"use strict";r.r(t);var c=r(204),n=r(205),s=r(206),a=r(207),i=r(1),d=r(758),o=r(17),j=function(e){Object(s.a)(r,e);var t=Object(a.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={categoryListData:[]},n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){document.title="Playground page"}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Hello from Playground !!!"}),Object(o.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,color:"success",style:{width:"100%"},children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"name"}),Object(o.jsx)("th",{children:"unitOfMeasurement"}),Object(o.jsx)("th",{children:"metadata"}),Object(o.jsx)("th",{children:"createdAt"}),Object(o.jsx)("th",{children:"updatedAt"}),Object(o.jsx)("th",{children:"Actions"})]})}),Object(o.jsx)("tbody",{children:this.state.categoryListData.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.unitOfMeasurement}),Object(o.jsx)("td",{children:JSON.stringify(e.metadata)}),Object(o.jsx)("td",{children:"UPDATE"})]},"category_item_id_"+e.id)}))})]})]})}}]),r}(i.Component);t.default=j}}]);
//# sourceMappingURL=70.111681b1.chunk.js.map