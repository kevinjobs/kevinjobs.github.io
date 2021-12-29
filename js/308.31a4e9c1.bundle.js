(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[308],{9212:(e,t,a)=>{"use strict";a.d(t,{Zb:()=>p,W2:()=>f,h4:()=>s});var l=a(7294),n=a(9163),i=a(4203);const r=n.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${i.Z.white4};
  display: flex;
  align-items: center;
`,o=n.ZP.h3``,c=n.ZP.div``;function d(e){const{children:t}=e;return l.createElement(r,null,t)}d.Title=o,d.Add=c;const s=d,u=n.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,m=n.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,v=n.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function h(e){const[t,a]=l.useState(!1),{width:n=300,height:i=400,p:r,onEdit:o,children:c}=e,d={position:"absolute",top:i/2,left:n/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:t?"visible":"hidden",cursor:"pointer"};return l.createElement(u,{style:{width:n,height:i},onMouseEnter:e=>{e.preventDefault(),a(!0)},onMouseLeave:e=>{e.preventDefault(),a(!1)}},c,l.createElement("div",{style:d,onClick:e=>o(e,r)},l.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),l.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),t?l.createElement(v,null):"")}h.Img=m;const p=h,g=n.ZP.div`
  padding-bottom: 64px;
`;function f(e){const{children:t}=e;return l.createElement(g,null,t)}},5308:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var l=a(7294),n=a(9163),i=a(7484),r=a.n(i),o=a(6486),c=a.n(o),d=a(6682),s=a(107),u=a(7084),m=a.n(u),v=a(9222),h=a.n(v);const p={image:(e,t,a)=>`\n      <div style="display:flex;justify-content:center;flex-wrap:wrap;">\n        <img src="${e}" alt="${a||t}" style="width:80%;" />\n        <div style="width:100%;text-align:center;color:#777777;">${a}</div>\n      </div>\n    `},g=n.ZP.div`
  padding: 16px 32px;
  line-height: 1.5;
  height: 655px;
  width: 900px;
`,f=n.ZP.div`
  width: 300px;
  padding: 16px 32px 0 0;
  .article-item {
    label { width: 40px; }
  }
`;function E(e){const{article:t,visible:a,onSubmit:n,onClose:i}=e,[r,o]=l.useState(),[c,s]=l.useState(),[u,v]=l.useState(),[E,x]=l.useState(),[w,b]=l.useState(),[y,k]=l.useState(),[C,I]=l.useState(),[S,A]=l.useState(),[V,D]=l.useState(),[N,Z]=l.useState(),[P,j]=l.useState(),[M,z]=l.useState(),L=()=>{o(void 0),s(void 0),v(void 0),x(void 0),b(void 0),k(void 0),I(void 0),A(void 0),D(void 0),Z(void 0),j(void 0),z(void 0)};return l.useEffect((()=>{m().use({renderer:p});let e=null;if(e=new(h())("#article-editor"),e.config.onchange=e=>I(e),e.config.height=580,e.create(),t){console.log(t);const{extension:a,content:l}=t;switch(a){case"markdown":e.txt.html(m()(l));break;case"html":e.txt.html(l);break;default:e.txt.html(l)}}return()=>e.destroy()}),[t]),l.createElement(d.Vq,{width:1200,height:700,title:"文件编辑器",visible:a,onCancel:e=>{L(),i(e)},animation:"slide-top-down"},l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(g,{id:"article-editor"}),t&&($=t,l.createElement(f,null,l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"UID",value:r,onChange:e=>o(e.target.value),defaultValue:$.uid})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"ID",value:c,onChange:e=>s(Number(e.target.value)),defaultValue:$.id})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"标题",value:u,onChange:e=>v(e.target.value),defaultValue:$.title})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"作者",value:E,onChange:e=>x(e.target.value),defaultValue:$.author})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"创建",value:w,onChange:e=>b(e.target.value),defaultValue:$.createAt})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"更新",value:y,onChange:e=>k(e.target.value),defaultValue:$.updateAt})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"封面",value:S,onChange:e=>A(e.target.value),defaultValue:$.cover})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"简介",value:V,onChange:e=>D(e.target.value),defaultValue:$.excerpt})),l.createElement("div",{className:"article-item"},l.createElement(d.II,{label:"标签",value:N,onChange:e=>Z(e.target.value),defaultValue:$.tags})),l.createElement("div",{className:"article-item",style:{margin:"8px 0"}},l.createElement("label",{style:{marginRight:16}},"格式"),l.createElement("select",{value:P,onChange:e=>j(e.target.value),defaultValue:$.extension},l.createElement("option",{value:"html"},"HTML"),l.createElement("option",{value:"text"},"纯文本"),l.createElement("option",{value:"markdown"},"Markdown"))),l.createElement("div",{className:"article-item",style:{margin:"8px 0"}},l.createElement("label",{style:{marginRight:16}},"发布"),l.createElement("select",{value:M,onChange:e=>z(e.target.value),defaultValue:$.publish},l.createElement("option",{value:"public"},"公开"),l.createElement("option",{value:"private"},"隐藏"),l.createElement("option",{value:"draft"},"草稿"))),l.createElement("div",{style:{textAlign:"center",marginTop:24}},l.createElement(d.zx,{onClick:e=>((e,t)=>{e.preventDefault();const a={uid:r||t.uid,id:c||t.id,title:u||t.title,author:E||t.author,createAt:w||t.createAt,updateAt:y||t.updateAt,content:C||t.content,cover:S||t.cover,excerpt:V||t.excerpt,tags:N||t.tags,extension:P||t.extension,publish:M||t.publish};n(e,a),L()})(e,$)},$.uid?"更新":"新增"),l.createElement(d.zx,{type:"light",onClick:i},"取消"))))));var $}var x=a(9212);const w=n.ZP.div`
  .options {
    display: flex;
    align-items: center;
  }
`,b=n.ZP.div`
  margin-top: 16px;
  width: 90%;
  .table {
    text-align: center;
  }
  .prev-next {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
`,y={title:"",author:"",updateAt:void 0,createAt:void 0,content:"",cover:"",uid:void 0,id:void 0,excerpt:"",tags:"",extension:"html",publish:"draft"};function k(){const[e,t]=l.useState(),[a,n]=l.useState(""),[i,o]=l.useState(0),[u,m]=l.useState(),[v,h]=l.useState(!1),[p,g]=l.useState(!1),[f,k]=l.useState(0),C=(e=0,a)=>{return n=this,o=void 0,v=function*(){yield s.V.get(`/articles?offset=${e}&limit=${a}&orderBy=createAt`).then((e=>{t((e=>e.map((e=>{const t=c().clone(e);return e.createAt=r()(e.createAt).format("YYYY-MM-DD"),e.updateAt=r()(e.updateAt).format("YYYY-MM-DD"),e.showCover=l.createElement("img",{src:e.cover,alt:e.title,style:{width:100,height:80,objectFit:"cover"}}),e.showTags=""!==e.tags?l.createElement("span",null,e.tags.split("|").map(((e,t)=>l.createElement(d.Vp,{key:t},e)))):"",e.edit=l.createElement("span",null,l.createElement(d.zx,{onClick:e=>((e,t)=>{e.preventDefault(),m(t)})(e,t)},"编辑"),l.createElement(d.zx,{onClick:e=>((e,t)=>{e.preventDefault(),window.confirm("确定要删除吗？")&&s.V.delete(`/article?uid=${t.uid}`).then((e=>{window.alert(e.data.msg),k(Math.random())})).catch((e=>window.alert(e.response.data.msg)))})(e,t),danger:!0},"删除")),delete e.cover,delete e.tags,delete e.content,e})))(e.data.data)),i+6>=e.data.totals?g(!0):g(!1)})).catch((e=>console.log(e)))},new((u=void 0)||(u=Promise))((function(e,t){function a(e){try{i(v.next(e))}catch(e){t(e)}}function l(e){try{i(v.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof u?n:new u((function(e){e(n)}))).then(a,l)}i((v=v.apply(n,o||[])).next())}));var n,o,u,v};return l.useEffect((()=>{h(i<=0),C(i,6)}),[i,f,u]),l.createElement(w,null,l.createElement(x.h4,null,l.createElement(x.h4.Title,null,"文章管理"),l.createElement(x.h4.Add,null,l.createElement(d.zx,{onClick:e=>{e.preventDefault(),m(y)}},"新增"))),l.createElement("div",{className:"options"},l.createElement("span",null,"搜索文章"),l.createElement(d.II,{value:a,onChange:e=>n(e.target.value)}),l.createElement(d.zx,{onClick:e=>e.preventDefault()},"确定")),l.createElement(b,null,l.createElement("div",{className:"table"},e?l.createElement(d.iA,{data:e,heads:[{field:"id",name:"ID"},{field:"uid",name:"UID",width:100,height:20},{field:"createAt",name:"创建日期",width:100},{field:"updateAt",name:"更新日期",width:100},{field:"publish",name:"是否发布"},{field:"title",name:"标题"},{field:"author",name:"作者"},{field:"extension",name:"文档格式"},{field:"excerpt",name:"摘要",width:200},{field:"showCover",name:"封面",width:100},{field:"showTags",name:"标签"},{field:"edit",name:"编辑",width:120}]}):l.createElement(d.yC,null)),l.createElement("div",{className:"prev-next"},l.createElement(d.zx,{onClick:e=>{e.preventDefault(),t(void 0),o(i-6)},disabled:v},"Prev"),l.createElement(d.zx,{onClick:e=>{e.preventDefault(),t(void 0),o(i+6)},disabled:p},"Next"))),l.createElement(E,{article:u,visible:Boolean(u),onSubmit:(e,t)=>((e,t)=>{e.preventDefault(),t.uid?s.V.put(`/article?uid=${t.uid}`,t).then((e=>{window.alert(e.data.msg),m(void 0)})).catch((e=>window.alert(e.response.data.msg))):(delete t.uid,delete t.id,delete t.createAt,delete t.updateAt,s.V.post("/article",t).then((e=>{window.alert(e.data.msg),m(void 0)})).catch((e=>window.alert(e.response.data.msg))))})(e,t),onClose:e=>{e.preventDefault(),m(void 0)}}))}},7218:(e,t,a)=>{"use strict";a.d(t,{V:()=>n});var l=a(9669);const n=a.n(l)().create();let i;i="http://api.kevinjobs.com:5000/v2",n.defaults.baseURL="http://api.kevinjobs.com:5000/v2",n.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))},107:(e,t,a)=>{"use strict";a.d(t,{V:()=>l.V});var l=a(7218)}}]);