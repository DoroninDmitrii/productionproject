"use strict";(self.webpackChunkproductionproject=self.webpackChunkproductionproject||[]).push([[40],{9035:function(e,a,t){t.r(a),t.d(a,{ArticleDetailsPage:function(){return Q},default:function(){return T}});var s=t(3007),i=t(2327),r=t(7294),n=t(622),l=t(9250),c=t(1233),d=t(8979),o=t(7779),m=t(4268);const u=(0,m.hg)("articleDetails/fetchCommentsByArticleId",(async(e,a)=>{const{extra:t,rejectWithValue:s}=a;if(!e)return s("error");try{const a=await t.api.get("/comments",{params:{articleId:e,_expand:"user"}});if(!a.data)throw new Error;return a.data}catch(e){return console.log(e),s("Error")}})),g=(0,m.HF)({selectId:e=>e.id}),x=g.getSelectors((e=>{var a;return(null===(a=e.articleDetailsPage)||void 0===a?void 0:a.comments)||g.getInitialState()})),h=(0,m.oM)({name:"articleDetailsCommentsSlice",initialState:g.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:e=>{e.addCase(u.pending,((e,a)=>{e.error=void 0,e.isLoading=!0})).addCase(u.fulfilled,((e,a)=>{e.isLoading=!1,g.setAll(e,a.payload)})).addCase(u.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}}),{reducer:j}=h,v=(0,m.hg)("articleDetailsPage/fetchArticleRecommendations",(async(e,a)=>{const{extra:t,rejectWithValue:s}=a;try{const e=await t.api.get("/articles",{params:{_limit:4}});if(!e.data)throw new Error;return e.data}catch(e){return console.log(e),s("Error")}})),p=(0,m.HF)({selectId:e=>e.id}),C=(p.getSelectors((e=>{var a;return(null===(a=e.articleDetailsPage)||void 0===a?void 0:a.recommendations)||p.getInitialState()})),(0,m.oM)({name:"articleDetaisPageRecommendationsSlice",initialState:p.getInitialState({isLoading:!1,error:void 0,ids:[],entities:{}}),reducers:{},extraReducers:e=>{e.addCase(v.pending,((e,a)=>{e.error=void 0,e.isLoading=!0})).addCase(v.fulfilled,((e,a)=>{e.isLoading=!1,p.setAll(e,a.payload)})).addCase(v.rejected,((e,a)=>{e.isLoading=!1,e.error=a.payload}))}})),{reducer:N}=C,L=(0,o.UY)({recommendations:N,comments:j});var f=t(9319),w=t(3694),y=t(5255),A=t(3381);const I=(0,t(2222).P1)(n.wq,A.m5,((e,a)=>!(!e||!a)&&e.user.id===a.id));var D=t(2047),S=t(5893),b=(0,r.memo)((e=>{const{className:a}=e,{t:t,i18n:c}=(0,i.$)("article-details"),d=(0,l.s0)(),o=((0,f.v9)(A.m5),(0,f.v9)(n.wq)),m=(0,f.v9)(I),u=(0,r.useCallback)((()=>{d(w.h3.articles)}),[d]),g=(0,r.useCallback)((()=>{d(`${w.h3.articles_details}/${null==o?void 0:o.id}/edit`)}),[d,null==o?void 0:o.id]);return(0,S.jsxs)(D.U,{max:!0,justify:"between",className:(0,s.A)("",{},[a]),children:[(0,S.jsx)(y.zx,{theme:y.bn.OUTLINE,onClick:u,children:t("Back to list")}),m&&(0,S.jsx)(y.zx,{theme:y.bn.OUTLINE,onClick:g,children:t("Edit")})]})})),k=t(1715);const E=t(6628).p.injectEndpoints({endpoints:e=>({getArticleRecommendationsList:e.query({query:e=>({url:"/articles",params:{_limit:e}})})})}).useGetArticleRecommendationsListQuery,$=(0,r.memo)((e=>{const{className:a}=e,{t:t,i18n:r}=(0,i.$)(),{isLoading:l,data:c,error:d}=E(3);return l||d||!c?null:(0,S.jsxs)(D.g,{gap:"8",className:(0,s.A)("",{},[a]),children:[(0,S.jsx)(k.xv,{size:k.yH.L,title:t("Recommendations")}),(0,S.jsx)(n.wD,{articles:c,target:"_blank"})]})})),P=(0,r.lazy)((async()=>await t.e(933).then(t.bind(t,1933))));var R=t(2949),q=t(3312),z=t(6897),H={CommentCard:"xIHBy",header:"dsH_3",username:"dw82W",loading:"V0iZ1"},O=(0,r.memo)((e=>{const{className:a,comment:t,isLoading:i}=e;return i?(0,S.jsxs)("div",{className:(0,s.A)(H.CommentCard,{},[a,H.loading]),children:[(0,S.jsxs)("div",{className:H.header,children:[(0,S.jsx)(q.O,{width:30,height:30,border:"50%"}),(0,S.jsx)(q.O,{height:16,width:100,className:H.username})]}),(0,S.jsx)(q.O,{className:H.text,width:"100%",height:50})]}):t?(0,S.jsxs)(D.g,{gap:"8",max:!0,className:(0,s.A)(H.CommentCard,{},[a]),children:[(0,S.jsxs)(z.F,{to:`${w.h3.profile}/${t.user.id}`,className:H.header,children:[t.user.avatar?(0,S.jsx)(R.q,{size:30,src:t.user.avatar}):null,(0,S.jsx)(k.xv,{className:H.username,title:t.user.username})]}),(0,S.jsx)(k.xv,{className:H.text,text:t.text})]}):null}));const U=(0,r.memo)((e=>{const{className:a,comments:t,isLoading:r}=e,{t:n,i18n:l}=(0,i.$)();return r?(0,S.jsxs)(D.g,{gap:"16",max:!0,className:(0,s.A)("",{},[a]),children:[(0,S.jsx)(O,{isLoading:!0}),(0,S.jsx)(O,{isLoading:!0}),(0,S.jsx)(O,{isLoading:!0})]}):(0,S.jsx)(D.g,{gap:"16",max:!0,className:(0,s.A)("",{},[a]),children:null!=t&&t.length?t.map((e=>(0,S.jsx)(O,{isLoading:r,comment:e},e.id))):(0,S.jsx)(k.xv,{text:n("No comments")})})}));var _=t(9970);const W=e=>{var a,t;return null===(a=e.articleDetailsPage)||void 0===a||null===(t=a.comments)||void 0===t?void 0:t.isLoading};var F=t(3986);const V=(0,m.hg)("articleDetails/addCommentForArticle",(async(e,a)=>{const{extra:t,rejectWithValue:s,getState:i,dispatch:r}=a,n=(0,A.m5)(i()),l=(0,F.wq)(i());if(!n||!e||!l)return s("no data");try{const a=await t.api.post("/comments",{articleId:l.id,userId:n.id,text:e});if(!a.data)throw new Error;return r(u(l.id)),a.data}catch(e){return s("Error")}}));var B=(0,r.memo)((e=>{const{className:a,id:t}=e,{t:n,i18n:l}=(0,i.$)("article-details"),c=(0,f.I0)(),d=(0,f.v9)(x.selectAll),o=(0,f.v9)(W),m=(0,r.useCallback)((e=>{c(V(e))}),[c]);return(0,_.Q)((()=>{c(u(t))})),(0,S.jsxs)(D.g,{gap:"16",max:!0,className:(0,s.A)("",{},[a]),children:[(0,S.jsx)(k.xv,{size:k.yH.L,className:"",title:n("Comments")}),(0,S.jsx)(P,{onSendComment:m}),(0,S.jsx)(U,{isLoading:o,comments:d})]})}));const M={articleDetailsPage:L},Q=e=>{let{className:a}=e;const{t:t,i18n:r}=(0,i.$)("article-details"),{id:o}=(0,l.UO)();return(0,S.jsx)(c.W,{reducers:M,removeAfterUnmount:!0,children:(0,S.jsx)(d.Z,{className:(0,s.A)("adu8f",{},[a]),children:(0,S.jsxs)(D.g,{gap:"16",max:!0,children:[(0,S.jsx)(b,{}),(0,S.jsx)(n.D0,{id:o}),(0,S.jsx)($,{}),(0,S.jsx)(B,{id:o})]})})})};var T=(0,r.memo)(Q)}}]);