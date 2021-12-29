(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[392],{495:(e,t,n)=>{"use strict";n.d(t,{sv:()=>c,$Y:()=>f});var i=n(7294),o=n(9163),r=n(6682);const s=o.ZP.div`
  width: 100%;
`,l=o.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,a=o.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function c(){const[e,t]=i.useState([]);return i.createElement(s,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(l,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:"",updateAt:"",content:i.innerText,id:void 0,uid:void 0,user:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(r.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(r.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(a,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.user),i.createElement("div",null,e.content)))):"还没有评论"))}o.ZP.div`
position: relative;
  display: inline-block;
  cursor: pointer;
  width: 44px;
  height: 44px;
  //overflow: hidden;
  .triple-menu-line {
    position: absolute;
    width: 88px;
    left: 0;
    top: 0;
    border: none;
    border-top: 2px solid #000;
  }
`;var d=n(1607);const h=(0,d.a1)("menu-unfold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H42",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M36.3433 29.6569L42.0001 24L36.3433 18.3431",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),p=(0,d.a1)("menu-fold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M13.6567 29.6569L7.99988 24L13.6567 18.3431",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var m=n(5977);const u=o.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,k=o.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,g=o.ZP.div`
  padding: 32px 0;
  text-align: center;
  .right-navi-menu-item {
    padding: 16px 0;
    transition: all .1s ease-in-out;
    &.actived {
      background-color: #777;
      a { color: #f1f1f1; }
    }
    &:hover {
      background-color: #333;
      a { color: #f1f1f1; }
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;function f(e){const{isOpen:t,onClick:n,menus:o}=e,r=(0,m.TH)(),s=e=>e.paths.join("/")===r.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",l=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(k,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(h,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(p,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(g,{style:{visibility:t?"visible":"hidden"}},o.map((e=>{if(2===e.paths.length)return i.createElement("div",{className:s(e),key:e.key},i.createElement("a",{href:l(e)},e.title))})))),t&&i.createElement(u,{style:{zIndex:998}}))}},2392:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var i=n(7294),o=n(9954),r=n(6486),s=n.n(r);const l=i.createContext({width:0,height:0,toTop:0,toBottom:0}),a=e=>{const{children:t}=e,[n,o]=i.useState(window.innerWidth),[r,a]=i.useState(window.innerHeight),[c,d]=i.useState(0),[h,p]=i.useState(0);function m(){o(window.innerWidth),a(window.innerHeight)}let u;return u=()=>{const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t=document.documentElement.clientHeight||document.body.clientHeight||0,n=(document.documentElement.scrollHeight||document.body.scrollHeight||0)-e-t;d(e),p(n)},i.useEffect((()=>(window.addEventListener("resize",m),window.addEventListener("scroll",s().debounce(u,500)),()=>{window.removeEventListener("resize",m),window.removeEventListener("scroll",s().debounce(u,500))})),[]),i.createElement(l.Provider,{value:{width:n,height:r,toTop:c,toBottom:h}},t)};var c=n(495),d=n(4203),h=n(9163);const p=h.ZP.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
`,m=h.ZP.div`
  position: absolute;
  font-size: 48px;
  top: 10%;
  right: 5%;
  color: ${d.Z.white1};
  opacity: 0.25;
  writing-mode: vertical-rl;
  line-height: 1;
  letter-spacing: 16px;
  p {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 64px;
    }
  }
`;function u(e){const{cover:t,verse:n}=e;return i.createElement(p,{style:{backgroundImage:`url(${t})`},className:"gallery-cover"},i.createElement(m,null,n&&n.content.map(((e,t)=>i.createElement("p",{key:t},e)))))}var k=n(7484),g=n.n(k),f=n(1607);const v=(0,f.a1)("calendar-thirty-two",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("rect",{x:"4",y:"8",width:"40",height:"36",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 20V34H36V20H28Z",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M17 4V12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M31 4V12",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M12 20H20V34H12",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M20 27H14",stroke:e.colors[2],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),E=(0,f.a1)("cross-ring-two",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M19.4545 26.4444C17.6364 28.2222 15.8182 30 12.1818 30C8.54545 30 4 27.3333 4 22C4 16.6667 8.54545 14 12.1818 14C17.6364 14 20.3636 17.5556 24 22C27.6364 26.4444 30.3636 30 35.8182 30C39.4545 30 44 27.3333 44 22C44 16.6667 39.4545 14 35.8182 14C32.1818 14 29.4545 16.6667 28.5455 17.5556",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var w=n(107),L=n(6682);const x=h.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,y=h.ZP.div`
  margin: 48px 0;
`,b=h.ZP.div``,j=h.ZP.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .mask-desc-item {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    margin: 8px;
  }
  .i-icon {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
`,W={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255,249,247,1)",zIndex:10,transition:"all .3s ease-in-out",filter:"opacity(98%)"};function C(){const[e,t]=i.useState(0),[n,o]=i.useState([]),[r,s]=i.useState(!1),[a,c]=i.useState(),[d,h]=i.useState(),[p,m]=i.useState(0),{clientWidth:u,clientHeight:k,device:f}=(()=>{let e="desktop";const{width:t,height:n}=i.useContext(l);return e=t<1080?"mobile":"desktop",{device:e,clientWidth:t,clientHeight:n}})(),{toBottom:C}=(()=>{const{toTop:e,toBottom:t}=i.useContext(l);return{toTop:e,toBottom:t}})(),H=i.useRef(),M=(e,t=12)=>{w.V.get(`/pictures?offset=${e}&limit=${t}&orderBy=createAt&order=desc`).then((e=>{if(1===e.data.code){const t=e.data.limit,i=e.data.offset,r=e.data.totals,l=e.data.data;o(n.concat(z(l))),s(!(i+t>r))}}))};i.useEffect((()=>{M(e,12)}),[]),i.useEffect((()=>{r&&C<500&&(M(e+12,12),t(e+12))}),[C]);const B=e=>{d&&e.preventDefault(d)};return i.useEffect((()=>(window.addEventListener("wheel",B,{passive:!1}),()=>{window.removeEventListener("wheel",B)})),[d]),i.createElement(x,null,i.createElement(y,null,0!==n.length?i.createElement(L.Rk,{data:n,cols:"mobile"===f?2:3,colWidth:"mobile"===f?u/2:320,gutter:"mobile"===f?4:24,onPreview:(e,t)=>{e.preventDefault();const n=H.current,i=e.target.parentNode.dataset.index,o=void 0!==n?n.children[i]:"",r=o.cloneNode(!0),s=o.getBoundingClientRect().width,l=o.getBoundingClientRect().height,a=o.getBoundingClientRect().top,d=o.getBoundingClientRect().left,{finalWidth:p,finalHeight:g,finalTop:f,finalLeft:v}=((e,t,n)=>{const i=e.width/e.height;let o;const r=.8*n;o=e.height>r?r:e.height;let s=o*i;return s>t&&(s=t,o=t/i),{finalWidth:s,finalHeight:o,finalTop:50,finalLeft:(t-s)/2}})(t,u,k);r.style.transition="all 0.3s ease-in-out",r.style.position="fixed",r.style.boxShadow="4px 4px 16px 8px rgba(0,0,0,0.35)",r.style.zIndex=999999,r.style.width=s+"px",r.style.height=l+"px",r.style.left=d+"px",r.style.top=a+"px",o.style.display="none",n.append(r),c(t),h(i),m(g+f),setTimeout((()=>{r.style.width=p+"px",r.style.height=g+"px",r.style.left=v+"px",r.style.top=f+"px"}),20),r.onclick=e=>{e.preventDefault(),r.style.width=s+"px",r.style.height=l+"px",r.style.left=d+"px",r.style.top=a+"px",setTimeout((()=>{n.removeChild(r),o.style.display="block"}),300),h(void 0),c(void 0)}},ref:H,shadow:!0}):i.createElement(L.gb,null),i.createElement(b,{style:d&&W},i.createElement(j,{style:{visibility:d?"visible":"hidden",position:"absolute",top:p+8,left:"50%",transform:"translateX(-50%)",flexWrap:"wrap"}},a?i.createElement(i.Fragment,null,i.createElement("div",{style:{width:"100%",textAlign:"center"}},i.createElement("h3",null,a.title)),i.createElement("span",{className:"mask-desc-item"},i.createElement(v,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},g()(a.createAt).format("YYYY-MM-DD"))),i.createElement("span",{className:"mask-desc-item"},i.createElement(E,{theme:"outline",size:"20",fill:"#333",strokeWidth:2}),i.createElement("span",{style:{margin:"0 8px"}},a.description||"还没有图片说明"))):""))),r&&i.createElement(L.gb,null))}const z=e=>e.map(((e,t)=>{const n=e,o=e.source.toLowerCase();return n.key=e.uid,n.child=i.createElement("img",{src:o,"data-index":t,alt:e.title,style:{width:"100%",height:"100%"}}),n}));function H(){const[e,t]=i.useState(!1);return i.createElement(a,null,i.createElement(u,{cover:"\n    https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/background/kayle-kaupanger.jpg\n  ",verse:{createAt:"2021-08-02",updateAt:"2021-02-02",id:1,uid:"4646aeraedfladlfhadiofag",title:"soso",author:"yiming",content:["纵潮望海阔","一览似无余"]}}),i.createElement(C,null),i.createElement(c.$Y,{isOpen:e,onClick:n=>{n.preventDefault(),t(!e)},menus:o.ps}))}},7218:(e,t,n)=>{"use strict";n.d(t,{V:()=>o});var i=n(9669);const o=n.n(i)().create();let r;r="https://api.kevinjobs.com:5000/v2",o.defaults.baseURL="https://api.kevinjobs.com:5000/v2",o.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))},107:(e,t,n)=>{"use strict";n.d(t,{V:()=>i.V});var i=n(7218)}}]);