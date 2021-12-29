(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[573],{7484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",s="hour",o="day",a="week",u="month",c="quarter",l="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},g={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,u),s=n-r<0,o=t.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:l,w:a,d:o,D:d,h:s,m:r,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},k="en",$={};$[k]=m;var y=function(e){return e instanceof x},M=function(e,t,n){var i;if(!e)return k;if("string"==typeof e)$[e]&&(i=e),t&&($[e]=t,i=e);else{var r=e.name;$[r]=e,i=r}return!n&&i&&(k=i),i||!n&&k},E=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},w=g;w.l=M,w.i=y,w.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function m(e){this.$L=M(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return E(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<E(e)},v.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!w.u(t)||t,h=w.p(e),f=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(o)},p=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,g=this.$D,k="set"+(this.$u?"UTC":"");switch(h){case l:return c?f(1,0):f(31,11);case u:return c?f(1,v):f(0,v+1);case a:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return f(c?g-y:g+(6-y),v);case o:case d:return p(k+"Hours",0);case s:return p(k+"Minutes",1);case r:return p(k+"Seconds",2);case i:return p(k+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var a,c=w.p(e),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[d]=h+"Date",a[u]=h+"Month",a[l]=h+"FullYear",a[s]=h+"Hours",a[r]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(t-this.$W):t;if(c===u||c===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[w.p(e)]()},v.add=function(n,c){var d,h=this;n=Number(n);var f=w.p(c),p=function(e){var t=E(h);return w.w(t.date(t.date()+Math.round(e*n)),h)};if(f===u)return this.set(u,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var m=(d={},d[r]=e,d[s]=t,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].substr(0,s)},d=function(e){return w.s(s%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,o,!0),A:f(s,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(e,t){return t||m[e]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,p=w.p(d),m=E(n),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,k=w.m(this,m);return k=(f={},f[l]=k/12,f[u]=k,f[c]=k/3,f[a]=(g-v)/6048e5,f[o]=(g-v)/864e5,f[s]=g/t,f[r]=g/e,f[i]=g/1e3,f)[p]||g,h?k:w.a(k)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),L=x.prototype;return E.prototype=L,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",o],["$M",u],["$y",l],["$D",d]].forEach((function(e){L[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,x,E),e.$i=!0),E},E.locale=M,E.isDayjs=y,E.unix=function(e){return E(1e3*e)},E.en=$[k],E.Ls=$,E.p={},E}()},495:(e,t,n)=>{"use strict";n.d(t,{sv:()=>c,$Y:()=>g});var i=n(7294),r=n(9163),s=n(6682);const o=r.ZP.div`
  width: 100%;
`,a=r.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,u=r.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function c(){const[e,t]=i.useState([]);return i.createElement(o,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(a,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:"",updateAt:"",content:i.innerText,id:void 0,uid:void 0,user:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(s.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(s.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(u,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.user),i.createElement("div",null,e.content)))):"还没有评论"))}r.ZP.div`
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
`;var l=n(1607);const d=(0,l.a1)("menu-unfold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H42",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M36.3433 29.6569L42.0001 24L36.3433 18.3431",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))})),h=(0,l.a1)("menu-fold",!0,(function(e){return i.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M8 11H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 24H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M8 37H40",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),i.createElement("path",{d:"M13.6567 29.6569L7.99988 24L13.6567 18.3431",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}));var f=n(5977);const p=r.ZP.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.75);
`,m=r.ZP.div`
  transition: all .5s ease-in-out;
  position: fixed;
  top: 0;
  height: 100vh;
  padding: 8px 0;
  z-index: 999;
`,v=r.ZP.div`
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
`;function g(e){const{isOpen:t,onClick:n,menus:r}=e,s=(0,f.TH)(),o=e=>e.paths.join("/")===s.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",a=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(m,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(d,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(h,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(v,{style:{visibility:t?"visible":"hidden"}},r.map((e=>{if(2===e.paths.length)return i.createElement("div",{className:o(e),key:e.key},i.createElement("a",{href:a(e)},e.title))})))),t&&i.createElement(p,{style:{zIndex:998}}))}},5392:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var i=n(7294),r=n(9163),s=n(7484),o=n.n(s),a=n(5977),u=n(107),c=n(6682),l=n(495),d=n(9954),h=n(4203);const f=r.ZP.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
`,p=r.ZP.div`
  width: 100%;
  height: fit-content;
  padding: 16px 0;
  h2,.date,.author {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 16px;
  }
  .author {
    padding: 16px 0 0 16px;
    color: ${h.Z.white7};
    font-size: 0.9rem;
  }
  .date {
    padding: 16px 16px 0 16px;
    color: ${h.Z.white7};
    font-size: 0.9rem;
  }
`,m=r.ZP.div`
  line-height: 1.8;
  padding: 0 16px 32px 16px;
`;function v(){const[e,t]=i.useState(),[n,r]=i.useState(!1),s=(0,a.UO)();return i.useEffect((()=>{const{uid:e}=s;u.V.get(`/article?uid=${e}`).then((e=>t(e.data.data))).catch((e=>console.error(e)))}),[]),i.createElement(f,null,e?i.createElement(i.Fragment,null,i.createElement(p,{className:"article-page-header"},i.createElement("h2",null,e.title),i.createElement("div",{className:"author"},e.author),i.createElement("div",{className:"date"},o()(e.createAt).format("YYYY年M月D日"))),i.createElement(m,null,i.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))):i.createElement(c.gb,null),i.createElement("div",{style:{marginTop:64,maxWidth:1e3,padding:16}},i.createElement(l.sv,null)),i.createElement(l.$Y,{menus:d.ps,isOpen:n,onClick:e=>{e.preventDefault(),r(!n)}}))}},7218:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var i=n(9669);const r=n.n(i)().create();let s;s="http://api.kevinjobs.com:5000/v2",r.defaults.baseURL="http://api.kevinjobs.com:5000/v2",r.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))},107:(e,t,n)=>{"use strict";n.d(t,{V:()=>i.V});var i=n(7218)}}]);