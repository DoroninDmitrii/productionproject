"use strict";(self.webpackChunkproductionproject=self.webpackChunkproductionproject||[]).push([[812],{8812:function(e,r,a){a.r(r),a.d(r,{default:function(){return b}});var s=a(7294),t=a(9319),n=a(5401),o=a(3007),l=a(5255),u=a(8312),c=a(2327),d=a(4268),i=a(3381),m=a(1283);const v=(0,d.hg)("users/loginByUsername",(async(e,r)=>{let{password:a,username:s}=e;const{extra:t,dispatch:n,rejectWithValue:o}=r;try{const e=await t.api.post("/login",{username:s,password:a});if(!e.data)throw new Error;return localStorage.setItem(m.z,JSON.stringify(e.data)),n(i.ul.setAuthData(e.data)),e.data}catch(e){return console.log(e),o("Error")}})),g=(0,d.oM)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:(e,r)=>{e.username=r.payload},setPassword:(e,r)=>{e.password=r.payload}},extraReducers:e=>{e.addCase(v.pending,((e,r)=>{e.error=void 0,e.isLoading=!0})).addCase(v.fulfilled,((e,r)=>{e.isLoading=!1})).addCase(v.rejected,((e,r)=>{e.isLoading=!1,e.error=r.payload}))}}),{actions:p}=g,{reducer:f}=g;var h=a(1715);const x=e=>{var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.username)||""},j=e=>{var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.password)||""},y=e=>{var r;return(null==e||null===(r=e.loginForm)||void 0===r?void 0:r.isLoading)||!1},w=e=>{var r;return null==e||null===(r=e.loginForm)||void 0===r?void 0:r.error};var N=a(1233),C="PQPa1",S=a(5893);const E={loginForm:f};var b=(0,s.memo)((e=>{let{className:r,onSuccess:a}=e;const{t:d}=(0,c.$)(),i=(0,n.T)(),m=(0,t.v9)(x),g=(0,t.v9)(j),f=(0,t.v9)(y),b=(0,t.v9)(w),k=(0,s.useCallback)((e=>{i(p.setUsername(e))}),[i]),F=(0,s.useCallback)((e=>{i(p.setPassword(e))}),[i]),I=(0,s.useCallback)((async()=>{"fulfilled"===(await i(v({password:g,username:m}))).meta.requestStatus&&a()}),[a,i,g,m]);return(0,S.jsx)(N.W,{removeAfterUnmount:!0,reducers:E,children:(0,S.jsxs)("div",{className:(0,o.A)("xYNEf",{},[r]),children:[(0,S.jsx)(h.xv,{title:d("Authentication form")}),b&&(0,S.jsx)(h.xv,{text:d("Your login or password is not correct"),theme:h.lg.ERROR}),(0,S.jsx)(u.I,{autofocus:!0,placeholder:d("Username"),type:"text",className:C,onChange:k,value:m}),(0,S.jsx)(u.I,{placeholder:d("Password"),type:"text",className:C,onChange:F,value:g}),(0,S.jsx)(l.zx,{theme:l.bn.OUTLINE,className:"Ok_5a",onClick:I,disabled:f,children:d("Log in")})]})})}))},1233:function(e,r,a){a.d(r,{W:function(){return o}});var s=a(7294),t=a(9319),n=a(5893);const o=e=>{const{children:r,reducers:a,removeAfterUnmount:o}=e,l=(0,t.oR)(),u=(0,t.I0)();return(0,s.useEffect)((()=>{const e=l.reducerManager.getMountedReducers();return Object.entries(a).forEach((r=>{let[a,s]=r;e[a]||(l.reducerManager.add(a,s),u({type:`@INIT ${a} reducer`}))})),()=>{o&&Object.entries(a).forEach((e=>{let[r,a]=e;l.reducerManager.remove(r),u({type:`@DESTROY ${r} reducer`})}))}}),[]),(0,n.jsx)(n.Fragment,{children:r})}},8312:function(e,r,a){a.d(r,{I:function(){return o}});var s=a(3007),t=a(7294),n=a(5893);const o=(0,t.memo)((e=>{const{className:r,value:a,onChange:o,type:l="text",placeholder:u,autofocus:c,readonly:d,...i}=e,[m,v]=(0,t.useState)(!1),[g,p]=(0,t.useState)(0),f=(0,t.useRef)(null),h=m&&!d;return(0,t.useEffect)((()=>{var e;c&&(v(!0),null===(e=f.current)||void 0===e||e.focus())}),[c]),(0,n.jsxs)("div",{className:(0,s.A)("yiPAS",{},[r]),children:[u&&(0,n.jsx)("div",{className:"emAQQ",children:`${u}>`}),(0,n.jsxs)("div",{className:"y1GiF",children:[(0,n.jsx)("input",{ref:f,type:l,value:a,onChange:e=>{null==o||o(e.target.value),p(e.target.value.length)},className:"LVdIP",onFocus:()=>{v(!0)},onBlur:()=>{v(!1)},onSelect:e=>{var r;p((null==e||null===(r=e.target)||void 0===r?void 0:r.selectionStart)||0)},readOnly:d,...i}),h&&(0,n.jsx)("span",{className:"lqMFG",style:{left:9*g+"px"}})]})]})}))}}]);