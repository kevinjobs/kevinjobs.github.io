(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[159],{9212:(e,t,i)=>{"use strict";i.d(t,{Zb:()=>m,W2:()=>f,h4:()=>u});var a=i(7294),l=i(9163),n=i(4203);const r=l.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${n.Z.white4};
  display: flex;
  align-items: center;
`,o=l.ZP.h3``,s=l.ZP.div``;function d(e){const{children:t}=e;return a.createElement(r,null,t)}d.Title=o,d.Add=s;const u=d,c=l.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,h=l.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,p=l.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function v(e){const[t,i]=a.useState(!1),{width:l=300,height:n=400,p:r,onEdit:o,children:s}=e,d={position:"absolute",top:n/2,left:l/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return a.createElement(c,{style:{width:l,height:n},onMouseEnter:e=>{e.preventDefault(),i(!0)},onMouseLeave:e=>{e.preventDefault(),i(!1)}},s,a.createElement("div",{style:d,onClick:e=>o(e,r)},a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),a.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?a.createElement(p,null):"")}v.Img=h;const m=v,g=l.ZP.div`
  padding-bottom: 64px;
`;function f(e){const{children:t}=e;return a.createElement(g,null,t)}},2159:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var a=i(7294),l=i(9163),n=i(6682),r=i(107),o=i(9212);const s=l.ZP.div``,d=l.ZP.div`
  padding: 32px 0;
`,u=l.ZP.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  label {
    width: 70px;
    text-align: right;
  }
`;function c(){const[e,t]=a.useState(0),[i,l]=a.useState(),[c,h]=a.useState(),[p,v]=a.useState(!0),[m,g]=a.useState(!0),[f,w]=a.useState(),[E,b]=a.useState(),[y,x]=a.useState(),[k,S]=a.useState(),[Z,C]=a.useState(),[I,A]=a.useState(),[P,V]=a.useState(),[j,D]=a.useState(),[L,z]=a.useState(),[W,B]=a.useState(),[M,T]=a.useState(),[$,q]=a.useState(),[H,N]=a.useState(),O=()=>{w(void 0),h(void 0),b(void 0),x(void 0),S(void 0),C(void 0),A(void 0),V(void 0),D(void 0),z(void 0),B(void 0),T(void 0),q(void 0),N(void 0)},U=(e,t)=>{e.preventDefault(),h(t)},G=e=>{e.preventDefault(),O()},J=(e,t,i,l)=>a.createElement(n.II,{label:l,value:e,onChange:e=>t(e.target.value),defaultValue:i,style:{width:350}});return a.useEffect((()=>{r.V.get(`/pictures?limit=12&offset=${e}&orderBy=createAt&order=desc`).then((t=>{l(t.data.data),e+12>=t.data.totals?g(!1):g(!0)})).catch((e=>window.alert(e.response.data.msg))),v(!(e<=0))}),[e]),a.createElement(s,null,a.createElement(o.h4,null,a.createElement(o.h4.Title,null,"Gallery"),a.createElement(o.h4.Add,null,a.createElement("input",{type:"file",onChange:e=>{e.preventDefault();const t=e.target.files[0];console.log(t)}}))),a.createElement(o.W2,null,a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},i?i.map((e=>a.createElement(o.Zb,{width:260,height:210,p:e,onEdit:U,key:e.uid},a.createElement(o.Zb.Img,{src:e.source,alt:e.title,key:e.uid})))):a.createElement(n.gb,null)),a.createElement("div",{style:{textAlign:"center",marginTop:32}},a.createElement(n.zx,{onClick:i=>{i.preventDefault(),t(e-12)},disabled:!p},"Prev"),a.createElement(n.zx,{onClick:i=>{i.preventDefault(),t(e+12)},disabled:!m},"Next"))),a.createElement(n.Vq,{title:"图片编辑器",visible:!!c,width:800,height:850,animation:"slide-top-down",onCancel:G},c&&(R=c,a.createElement(d,null,a.createElement(u,null,a.createElement("img",{src:R.source,alt:R.title,style:{width:"60%",marginBottom:16}}),a.createElement(n.II,{label:"UID",value:f,onChange:e=>w(e.target.value),defaultValue:R.uid,style:{width:700}}),J(E,b,R.title,"图片标题"),J(y,x,R.author,"拍摄者"),a.createElement(n.II,{label:"图片描述",value:P,onChange:e=>V(e.target.value),defaultValue:R.description,style:{width:700}}),J($,q,R.createAt,"创建时间"),J(H,N,R.updateAt,"更新时间"),a.createElement(n.II,{label:"图片地址",value:I,onChange:e=>A(e.target.value),defaultValue:R.source,style:{width:700}}),J(k,S,R.publish,"是否公开"),J(Z,C,R.tags,"图片标签"),J(j,D,R.width,"图片宽度"),J(L,z,R.height,"图片高度"),J(W,B,R.latitude,"纬度"),J(M,T,R.longitude,"经度")),a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:16}},a.createElement(n.zx,{type:"success",onClick:e=>((e,t)=>{e.preventDefault();const i={title:E||t.title,author:y||t.author,publish:k||t.publish,tags:Z||t.tags,source:I||t.source,description:P||t.description,width:j||t.width,height:L||t.height,latitude:W||t.latitude,longitude:M||t.longitude,createAt:$||t.createAt,updateAt:H||t.updateAt},a=f||t.uid;window.confirm("submit?")&&r.V.put(`/picture?uid=${a}`,i).then((e=>{window.alert(e.data.msg),O()})).catch((e=>window.alert(e.response.data.msg)))})(e,R)},"提交"),a.createElement(n.zx,{type:"primary",onClick:G},"取消"))))));var R}},7218:(e,t,i)=>{"use strict";i.d(t,{V:()=>l});var a=i(9669);const l=i.n(a)().create();let n;n="https://api.kevinjobs.com:5000/v2",l.defaults.baseURL="https://api.kevinjobs.com:5000/v2",l.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))},107:(e,t,i)=>{"use strict";i.d(t,{V:()=>a.V});var a=i(7218)}}]);