"use strict";(self.webpackChunkproductionproject=self.webpackChunkproductionproject||[]).push([[311],{1396:function(e,a,t){t.r(a),t.d(a,{ArticlesPage:function(){return X},default:function(){return K}});var r=t(2327),s=t(9655),l=t(7294),i=t(3007),n=t(1233),o=t(5401),c=t(9970),d=t(8979),v=t(4268),u=t(622),g=t(1283);const h=e=>{var a;return null===(a=e.articlePage)||void 0===a?void 0:a.isLoading},p=e=>{var a;return null===(a=e.articlePage)||void 0===a?void 0:a.error},m=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.view)||u.GA.SMALL},y=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.page)||1},w=e=>{var a;return null===(a=e.articlePage)||void 0===a?void 0:a.hasMore},f=e=>{var a;return null===(a=e.articlePage)||void 0===a?void 0:a._inited},S=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.order)??"asc"},P=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.sort)??u.$B.CREATED},j=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.search)??""},x=e=>{var a;return(null===(a=e.articlePage)||void 0===a?void 0:a.type)??u.Iq.ALL},A=(0,v.hg)("articlePage/fetchArticlesList",(async(e,a)=>{const{extra:t,rejectWithValue:r,getState:s}=a,l=(null===(i=s().articlePage)||void 0===i?void 0:i.limit)||9;var i;const n=P(s()),o=S(s()),c=j(s()),d=y(s()),v=x(s());try{g={sort:n,order:o,search:c,type:v},window.history.pushState(null,"",function(e){const a=new URLSearchParams(window.location.search);return Object.entries(e).forEach((e=>{let[t,r]=e;void 0!==r&&a.set(t,r)})),`?${a.toString()}`}(g));const e=await t.api.get("/articles",{params:{_expand:"user",_limit:l,_page:d,_sort:n,_order:o,q:c,type:v===u.Iq.ALL?void 0:v}});if(!e.data)throw new Error;return e.data}catch(e){return console.log(e),r("Error")}var g})),C=(0,v.HF)({selectId:e=>e.id}),b=C.getSelectors((e=>e.articlePage||C.getInitialState())),L=(0,v.oM)({name:"articlePageSlice",initialState:C.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{},view:u.GA.SMALL,page:1,hasMore:!0,_inited:!1,limit:9,sort:u.$B.CREATED,search:"",order:"asc",type:u.Iq.ALL}),reducers:{setView:(e,a)=>{e.view=a.payload,localStorage.setItem(g.f,a.payload)},setPage:(e,a)=>{e.page=a.payload},setOrder:(e,a)=>{e.order=a.payload},setSort:(e,a)=>{e.sort=a.payload},setType:(e,a)=>{e.type=a.payload},setSearch:(e,a)=>{e.search=a.payload},initState:e=>{const a=localStorage.getItem(g.f);e.view=a,e.limit=a===u.GA.BIG?4:9,e._inited=!0}},extraReducers:e=>{e.addCase(A.pending,((e,a)=>{e.error=void 0,e.isLoading=!0,a.meta.arg.replace&&C.removeAll(e)})).addCase(A.fulfilled,((e,a)=>{e.isLoading=!1,e.hasMore=a.payload.length>=e.limit,a.meta.arg.replace?C.setAll(e,a.payload):C.addMany(e,a.payload)})).addCase(A.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{reducer:N,actions:k}=L,O=(0,v.hg)("articlePage/fetchNextArticlesPage",(async(e,a)=>{const{getState:t,dispatch:r}=a,s=w(t()),l=y(t()),i=h(t());s&&!i&&(r(k.setPage(l+1)),r(A({})))})),E=(0,v.hg)("articlePage/initArticlesPage",(async(e,a)=>{const{getState:t,dispatch:r}=a;if(!f(t())){const a=e.get("order"),t=e.get("sort"),s=e.get("search"),l=e.get("type");a&&r(k.setOrder(a)),t&&r(k.setSort(t)),s&&r(k.setSearch(s)),l&&r(k.setType(l)),r(k.initState()),r(A({}))}}));var I,M=t(9319);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},T.apply(this,arguments)}var V;function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)}var G=t(5255),R=t(3895),$={notSelected:"daqv5"},_=t(5893);const q=[{view:u.GA.SMALL,icon:e=>l.createElement("svg",Z({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",role:"img"},e),V||(V=l.createElement("path",{d:"M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm7 9v5h5v-5h-5Zm-7 0v5h5v-5H6Zm7-7v5h5V6h-5ZM6 6v5h5V6H6Z"})))},{view:u.GA.BIG,icon:e=>l.createElement("svg",T({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",role:"img"},e),I||(I=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.75 18a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0-6a.75.75 0 0 1 .75-.75h15a.75.75 0 1 1 0 1.5h-15A.75.75 0 0 1 3.75 6Z"})))}],B=(0,l.memo)((e=>{const{className:a,view:t,onViewClick:s}=e,{t:l,i18n:n}=(0,r.$)();return(0,_.jsx)("div",{className:(0,i.A)($.ArticleViewSelector,{},[a]),children:q.map((e=>{return(0,_.jsx)(G.zx,{theme:G.bn.CLEAR,onClick:(a=e.view,()=>{null==s||s(a)}),children:(0,_.jsx)(R.J,{Svg:e.icon,className:(0,i.A)("",{[$.notSelected]:e.view!==t})})},e.view);var a}))})}));var F=t(6425),H=t(8312),Q={sortWrapper:"pyOjo",search:"QkNSe",tabs:"JHbc4"};const W=(0,l.memo)((e=>{const{className:a}=e,{t:t,i18n:s}=(0,r.$)("article"),n=(0,o.T)(),c=(0,M.v9)(m),d=(0,M.v9)(P),v=(0,M.v9)(S),g=(0,M.v9)(j),h=(0,M.v9)(x),p=(0,l.useCallback)((()=>{n(A({replace:!0}))}),[n]),y=function(e,a){const t=(0,l.useRef)();return(0,l.useCallback)((function(){for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{e(...r)}),500)}),[e,500])}(p),w=(0,l.useCallback)((e=>{n(k.setView(e)),n(k.setPage(1))}),[n]),f=(0,l.useCallback)((e=>{n(k.setSort(e)),n(k.setPage(1)),p()}),[n,p]),C=(0,l.useCallback)((e=>{n(k.setOrder(e)),n(k.setPage(1)),p()}),[n,p]),b=(0,l.useCallback)((e=>{n(k.setSearch(e)),n(k.setPage(1)),y()}),[n,y]),L=(0,l.useCallback)((e=>{n(k.setType(e)),n(k.setPage(1)),p()}),[n,p]);return(0,_.jsxs)("div",{className:(0,i.A)(Q.ArticlesPageFilters,{},[a]),children:[(0,_.jsxs)("div",{className:Q.sortWrapper,children:[(0,_.jsx)(u.xT,{order:v,sort:d,onChangeOrder:C,onChangeSort:f}),(0,_.jsx)(B,{view:c,onViewClick:w})]}),(0,_.jsx)(F.ZP,{className:Q.search,children:(0,_.jsx)(H.I,{value:g,onChange:b,placeholder:t("Search")})}),(0,_.jsx)(u.XL,{className:Q.tabs,value:h,onChangeType:L})]})}));var D=W,J=t(1715),U=(0,l.memo)((e=>{const{className:a}=e,{t:t,i18n:s}=(0,r.$)("article"),l=((0,o.T)(),(0,M.v9)(b.selectAll)),i=(0,M.v9)(h),n=(0,M.v9)(m),c=(0,M.v9)(p);return(0,M.v9)(y),(0,M.v9)(w),(0,M.v9)(f),c?(0,_.jsx)(J.xv,{text:t("Mistake is happened")}):(0,_.jsx)(u.wD,{isLoading:i,view:n,articles:l,className:a})}));const z={articlePage:N},X=e=>{let{className:a}=e;const{t:t,i18n:v}=(0,r.$)("article"),u=(0,o.T)(),[g]=(0,s.lr)(),h=(0,l.useCallback)((()=>{u(O())}),[u]);return(0,c.Q)((()=>{u(E(g))})),(0,_.jsx)(n.W,{reducers:z,removeAfterUnmount:!1,children:(0,_.jsxs)(d.Z,{onScrollEnd:h,className:(0,i.A)("",{},[a]),children:[(0,_.jsx)(D,{}),(0,_.jsx)(U,{className:"Qvnph"})]})})};var K=(0,l.memo)(X)},8312:function(e,a,t){t.d(a,{I:function(){return i}});var r=t(3007),s=t(7294),l=t(5893);const i=(0,s.memo)((e=>{const{className:a,value:t,onChange:i,type:n="text",placeholder:o,autofocus:c,readonly:d,...v}=e,[u,g]=(0,s.useState)(!1),[h,p]=(0,s.useState)(0),m=(0,s.useRef)(null),y=u&&!d;return(0,s.useEffect)((()=>{var e;c&&(g(!0),null===(e=m.current)||void 0===e||e.focus())}),[c]),(0,l.jsxs)("div",{className:(0,r.A)("yiPAS",{},[a]),children:[o&&(0,l.jsx)("div",{className:"emAQQ",children:`${o}>`}),(0,l.jsxs)("div",{className:"y1GiF",children:[(0,l.jsx)("input",{ref:m,type:n,value:t,onChange:e=>{null==i||i(e.target.value),p(e.target.value.length)},className:"LVdIP",onFocus:()=>{g(!0)},onBlur:()=>{g(!1)},onSelect:e=>{var a;p((null==e||null===(a=e.target)||void 0===a?void 0:a.selectionStart)||0)},readOnly:d,...v}),y&&(0,l.jsx)("span",{className:"lqMFG",style:{left:9*h+"px"}})]})]})}))}}]);