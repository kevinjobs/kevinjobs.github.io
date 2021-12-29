(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[941],{8941:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(7294),o=n(5977),l=n(9163),i=n(7218),r=n(6682);const c=l.ZP.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  .container {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .version {
      margin-right: 16px;
    }
  }
`,s=l.ZP.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  label {
    width: 50px;
    text-align: right;
  }
`;function m(e){const{isLogin:t,isLoginDialogVisible:n,onSubmit:o,onCancel:l,onLogin:i,onLogout:m}=e,[d,p]=a.useState(""),[h,g]=a.useState(""),[k,u]=a.useState("");return a.createElement(c,{className:"admin-navbar"},a.createElement("div",{className:"logo"},a.createElement("h2",null,"后台管理系统")),a.createElement("div",{className:"container"},a.createElement("div",{className:"version"},"v1.1.0"),a.createElement("div",{className:"search"},a.createElement(r.II,{value:d,onChange:e=>p(e.target.value)})),a.createElement("div",{className:"user-status"},t?a.createElement("div",{className:"user"},a.createElement("div",{className:"avatar"}),a.createElement("div",{className:"name"}),a.createElement("div",{className:"level"}),a.createElement("div",{className:"logout"},a.createElement(r.zx,{onClick:e=>{e.preventDefault(),window.confirm("确定要登出吗？")&&m(e)},type:"light"},"登出"))):a.createElement(r.zx,{className:"login",type:"primary",onClick:i},"登录"))),a.createElement(r.Vq,{title:"登录界面",visible:n,onCancel:l,animation:"slide-top-down",width:400,height:400},a.createElement(s,null,a.createElement("div",{style:{width:250}},a.createElement("form",null,a.createElement(r.II,{label:"账号",value:h,name:"username",onChange:e=>g(e.target.value)}),a.createElement(r.II,{type:"password",label:"密码",value:k,name:"password",onChange:e=>u(e.target.value),autoComplete:"on"}))),a.createElement("div",{style:{width:"100%",textAlign:"center",marginTop:24}},a.createElement(r.zx,{type:"primary",onClick:e=>((e,t)=>{e.preventDefault(),o(e,t)})(e,{name:h,password:k})},"登录"),a.createElement(r.zx,{onClick:l},"取消")))))}var d=n(4203),p=n(1607);const h=(0,p.a1)("blocks-and-arrows",!0,(function(e){return a.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},a.createElement("rect",{x:"6",y:"6",width:"14",height:"14",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),a.createElement("rect",{x:"6",y:"28",width:"14",height:"14",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),a.createElement("rect",{x:"28",y:"6",width:"14",height:"14",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),a.createElement("path",{d:"M28 28H42M28 28V42M28 28L42 42",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),g=(0,p.a1)("config",!1,(function(e){return a.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48"},a.createElement("g",{stroke:"none",strokeWidth:e.strokeWidth,fill:"none",fillRule:"evenodd",strokeLinejoin:e.strokeLinejoin},a.createElement("g",{transform:"translate(4.000000, 4.000000)",fillRule:"nonzero",strokeWidth:e.strokeWidth},a.createElement("polygon",{stroke:e.colors[0],fill:e.colors[1],points:"20 1.74860126e-15 14 6 6 6 6 14 1.74860126e-15 20 6 26 6 34 14 34 20 40 26 34 34 34 34 26 40 20 34 14 34 6 26 6"}),a.createElement("circle",{stroke:e.colors[2],fill:e.colors[3],cx:"20",cy:"20",r:"6"}))))}));var k=n(9954);const u=l.ZP.div`
  margin-top: 10px;
  height: calc(100vh - 70px);
  width: 250px;
  min-width: 250px;
  background-color: ${d.Z.white};
  a.active {
    color: ${d.Z.blue};
  }
`;function v(){const e=e=>a.createElement(r.v2.Item,{icon:e.icon,key:e.key},a.createElement(r.rU,{to:e.paths.join("/")},e.title));return a.createElement(u,{className:"admin-navigator"},a.createElement(r.v2,{mode:"inline"},a.createElement(r.v2.Item,{icon:k.Ge.icon},a.createElement(r.rU,{to:k.Ge.paths.join("/")},k.Ge.title)),a.createElement(r.v2.SubMenu,{title:"概览",isOpen:!0,icon:a.createElement(h,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},k._J.map(e)),a.createElement(r.v2.SubMenu,{title:"管理",isOpen:!0,icon:a.createElement(g,{theme:"outline",size:"20",fill:"#333",strokeWidth:2})},k.Ih.map(e))))}const f=k._J.concat(k.Ge).concat(k.Ih),E=l.ZP.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .main-container {
    width: 100vw;
    display: flex;
    .admin-content {
      background-color: #ffffff;
      margin: 10px 0 0 10px;
      padding: 16px 32px;
      height: calc(100vh - 70px);
      overflow-y: scroll;
      flex-grow: 1;
    }
  }
`;function w(){const[e,t]=a.useState(!1),[n,l]=a.useState(!1),c=(0,o.k6)();return a.useEffect((()=>{const{token:e,name:n}={token:localStorage.getItem("token"),name:localStorage.getItem("name")};e&&n&&t(!0)}),[]),a.createElement(E,{className:"admin"},a.createElement(m,{isLogin:e,isLoginDialogVisible:n,onSubmit:(e,n)=>((e,n)=>{i.V.post("/token",n).then((e=>{var a,o;a=e.data.token,o=n.name,localStorage.setItem("token",a),localStorage.setItem("name",o),l(!1),t(!0),c.go(0)})).catch((e=>console.log(e)))})(0,n),onLogin:e=>{e.preventDefault(),l(!0)},onLogout:e=>{e.preventDefault(),t(!1),localStorage.removeItem("token"),localStorage.removeItem("name"),c.go(0)},onCancel:e=>{e.preventDefault(),l(!1)}}),a.createElement("div",{className:"main-container"},a.createElement(v,null),a.createElement("div",{className:"admin-content"},a.createElement(a.Suspense,{fallback:a.createElement(r.gb,null)},a.createElement(o.rs,null,f.map((e=>a.createElement(o.AW,{exact:e.exact,path:e.paths.join("/"),component:e.component,key:e.key}))),a.createElement(o.l_,{from:"/admin",to:"/admin/home"}))))))}},7218:(e,t,n)=>{"use strict";n.d(t,{V:()=>o});var a=n(9669);const o=n.n(a)().create();let l;l="https://api.kevinjobs.com:5000/v2",o.defaults.baseURL="https://api.kevinjobs.com:5000/v2",o.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))}}]);