"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[480],{7480:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(9271),o=e(1413),a=e(885),i={container:"login_container__+yLkJ",containerSummary:"login_containerSummary__L7jDI",flexRow:"login_flexRow__gRiyX",form:"login_form__czaXT",btnContainer:"login_btnContainer__6Ch1U",buttonContainer:"login_buttonContainer__rE6DN",btnLogin:"login_btnLogin__u80tl",inputContainer:"login_inputContainer__vxs9c",hidden:"login_hidden__pYSbG",errorMsg:"login_errorMsg__plO4X"},s=e(7650),u=function(n){return{type:s.pd,payload:n}},l=function(n){return function(t){return t({type:s.EM}),fetch("".concat("http://localhost:5000/api/auth"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){if(200===n.status||201===n.status)return sessionStorage.setItem("isAuthenticated",!0),t({type:s.eq,payload:e});var e;if(404===n.status)return t(u("Wrong Email or Password"));throw new Error("HTTP ".concat(n.status))})).catch((function(n){return console.log(n),t(u("Server error"))}))}},c=e(6030),d=e(2791),h=e(4290),f=e(184);var p=function(){var n=(0,c.I0)(),t=(0,c.v9)((function(n){return n.auth.error})),e=(0,c.v9)((function(n){return n.auth.messageText})),s=(0,c.v9)((function(n){return n.auth.isLoading})),u=(0,r.k6)(),p=(0,d.useState)({email:"",password:""}),m=(0,a.Z)(p,2),y=m[0],_=m[1];return s?(0,f.jsx)(h.Z,{type:"ThreeDots",color:"#002147",height:80,width:80}):(0,f.jsx)("section",{className:i.container,children:(0,f.jsx)("div",{className:i.containerSummary,children:(0,f.jsxs)("form",{className:i.form,onSubmit:function(t){t.preventDefault(),n(l(y)).then((function(n){"LOGIN_FULFILLED"===n.type&&u.push("/tasks")}))},children:[(0,f.jsxs)("div",{className:i.inputContainer,children:[(0,f.jsx)("input",{name:"email",placeholder:"Enter your email",onChange:function(n){return _((0,o.Z)((0,o.Z)({},y),{},{email:n.target.value}))},value:y.email}),(0,f.jsx)("input",{name:"password",type:"password",placeholder:"Enter your password",onChange:function(n){return _((0,o.Z)((0,o.Z)({},y),{},{password:n.target.value}))},value:y.password})]}),(0,f.jsx)("div",{className:t?i.hidden:i.visible,children:(0,f.jsx)("span",{className:i.errorMsg,children:t?e:""})}),(0,f.jsx)("div",{className:i.buttonContainer,children:(0,f.jsx)("button",{className:i.btnLogin,type:"submit",children:"SIGN IN"})})]})})})},m=function(){return(0,f.jsx)(r.rs,{children:(0,f.jsx)(r.AW,{path:"/",component:p})})}},885:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(181);function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,a=[],i=!0,s=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==e.return||e.return()}finally{if(s)throw o}}return a}}(n,t)||(0,r.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=480.e0d4488b.chunk.js.map