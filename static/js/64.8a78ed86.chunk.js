(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[64],{517:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(0),o=c.n(s),a=c(513),i=c(10);const n=e=>{const{name:t,text:c,...s}=e,o=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(a.cb,{...s,href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})})})};var r=o.a.memo(n)},674:function(e,t,c){"use strict";c.r(t);var s=c(0),o=c(513),a=c(517),i=c(10);t.default=()=>{const[e,t]=Object(s.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),[c,n]=Object(s.useState)("top-right"),[r,h]=Object(s.useState)(!0),[j,l]=Object(s.useState)(5e3),[b,d]=Object(s.useState)(!0),[u,m]=Object(s.useState)(!0),x=e.reduce(((e,t)=>(e[t.position]=e[t.position]||[],e[t.position].push(t),e)),{});return Object(i.jsxs)(o.j,{children:[Object(i.jsxs)(o.n,{children:["Toasts.",Object(i.jsx)(a.a,{name:"-Toast"})]}),Object(i.jsx)(o.k,{children:Object(i.jsx)(o.w,{children:Object(i.jsxs)(o.vb,{children:[Object(i.jsx)(o.u,{sm:"12",lg:"6",children:Object(i.jsxs)(o.J,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(o.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(o.S,{id:"autohide",checked:r,onChange:e=>{h(e.target.checked)},custom:!0}),Object(i.jsx)(o.bb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),r&&Object(i.jsxs)(o.K,{className:"my-2",children:[Object(i.jsx)(o.bb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(o.R,{type:"number",value:j,onChange:e=>{l(Number(e.target.value))}})]}),Object(i.jsxs)(o.K,{className:"my-2",children:[Object(i.jsx)(o.bb,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:c,onChange:e=>{n(e.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map(((e,t)=>Object(i.jsx)("option",{children:e},t)))})]}),Object(i.jsxs)(o.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(o.S,{id:"fade",checked:u,onChange:e=>{m(e.target.checked)},custom:!0}),Object(i.jsx)(o.bb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(o.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(o.S,{id:"close",custom:!0,checked:b,onChange:e=>{d(e.target.checked)}}),Object(i.jsx)(o.bb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(o.f,{className:"mr-1 w-25",color:"success",onClick:()=>{t([...e,{position:c,autohide:r&&j,closeButton:b,fade:u}])},children:"Add toast"})]})}),Object(i.jsx)(o.u,{sm:"12",lg:"6",children:Object.keys(x).map((e=>Object(i.jsx)(o.Ob,{position:e,children:x[e].map(((t,c)=>Object(i.jsxs)(o.Lb,{show:!0,autohide:t.autohide,fade:t.fade,children:[Object(i.jsx)(o.Nb,{closeButton:t.closeButton,children:"Toast title"}),Object(i.jsx)(o.Mb,{children:"This is a toast in ".concat(e," positioned toaster number ").concat(c+1,".")})]},"toast"+c)))},"toaster"+e)))})]})})})]})}}}]);
//# sourceMappingURL=64.8a78ed86.chunk.js.map