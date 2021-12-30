(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[503],{7484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",o="hour",s="day",a="week",c="month",u="quarter",l="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},k={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,c),o=n-r<0,s=t.clone().add(i+(o?-1:1),c);return+(-(i+(n-r)/(o?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:a,d:s,D:d,h:o,m:r,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",$={};$[g]=m;var y=function(e){return e instanceof M},w=function(e,t,n){var i;if(!e)return g;if("string"==typeof e)$[e]&&(i=e),t&&($[e]=t,i=e);else{var r=e.name;$[r]=e,i=r}return!n&&i&&(g=i),i||!n&&g},x=function(e,t){if(y(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},E=k;E.l=w,E.i=y,E.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e)}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(E.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,o=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return E},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return x(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<x(e)},v.$g=function(e,t,n){return E.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,u=!!E.u(t)||t,h=E.p(e),f=function(e,t){var i=E.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(s)},p=function(e,t){return E.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,k=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case l:return u?f(1,0):f(31,11);case c:return u?f(1,v):f(0,v+1);case a:var $=this.$locale().weekStart||0,y=(m<$?m+7:m)-$;return f(u?k-y:k+(6-y),v);case s:case d:return p(g+"Hours",0);case o:return p(g+"Minutes",1);case r:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var a,u=E.p(e),h="set"+(this.$u?"UTC":""),f=(a={},a[s]=h+"Date",a[d]=h+"Date",a[c]=h+"Month",a[l]=h+"FullYear",a[o]=h+"Hours",a[r]=h+"Minutes",a[i]=h+"Seconds",a[n]=h+"Milliseconds",a)[u],p=u===s?this.$D+(t-this.$W):t;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[E.p(e)]()},v.add=function(n,u){var d,h=this;n=Number(n);var f=E.p(u),p=function(e){var t=x(h);return E.w(t.date(t.date()+Math.round(e*n)),h)};if(f===c)return this.set(c,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===s)return p(1);if(f===a)return p(7);var m=(d={},d[r]=e,d[o]=t,d[i]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return E.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=E.z(this),o=this.$H,s=this.$m,a=this.$M,c=n.weekdays,u=n.months,l=function(e,n,r,o){return e&&(e[n]||e(t,i))||r[n].substr(0,o)},d=function(e){return E.s(o%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:E.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:E.s(o,2,"0"),h:d(1),hh:d(2),a:f(o,s,!0),A:f(o,s,!1),m:String(s),mm:E.s(s,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:r};return i.replace(p,(function(e,t){return t||m[e]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,p=E.p(d),m=x(n),v=(m.utcOffset()-this.utcOffset())*e,k=this-m,g=E.m(this,m);return g=(f={},f[l]=g/12,f[c]=g,f[u]=g/3,f[a]=(k-v)/6048e5,f[s]=(k-v)/864e5,f[o]=k/t,f[r]=k/e,f[i]=k/1e3,f)[p]||k,h?g:E.a(g)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=w(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return E.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),L=M.prototype;return x.prototype=L,[["$ms",n],["$s",i],["$m",r],["$H",o],["$W",s],["$M",c],["$y",l],["$D",d]].forEach((function(e){L[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,M,x),e.$i=!0),x},x.locale=w,x.isDayjs=y,x.unix=function(e){return x(1e3*e)},x.en=$[g],x.Ls=$,x.p={},x}()},495:(e,t,n)=>{"use strict";n.d(t,{sv:()=>u,$Y:()=>k});var i=n(7294),r=n(9163),o=n(6682);const s=r.ZP.div`
  width: 100%;
`,a=r.ZP.div`
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  border-radius: 4px;
  div {
    outline: none;
  }
`,c=r.ZP.div`
  max-width: 100%;
  border-top: 1px solid #d1d1d1;
  padding: 16px;
  div {
    padding: 4px 0;
  }
`;function u(){const[e,t]=i.useState([]);return i.createElement(s,null,i.createElement("div",null,i.createElement("h3",null,"评论")),i.createElement(a,null,i.createElement("div",{contentEditable:!0,onKeyDown:n=>{const i=n.target;"Enter"===n.key&&(n.preventDefault(),t(e.concat([{createAt:"",updateAt:"",content:i.innerText,id:void 0,uid:void 0,user:"匿名"}])))},style:{margin:8,height:84}})),i.createElement("div",{style:{marginTop:16,textAlign:"right",width:"100%"}},i.createElement(o.zx,{onClick:e=>e.preventDefault()},"提交"),i.createElement(o.zx,{onClick:e=>e.preventDefault(),danger:!0},"清空")),i.createElement("div",null,i.createElement("h4",null,"热门评论")),i.createElement("div",null,e.length?e.map((e=>i.createElement(c,{key:e.uid},i.createElement("div",{style:{color:"#777"}},e.user),i.createElement("div",null,e.content)))):"还没有评论"))}r.ZP.div`
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
`;function k(e){const{isOpen:t,onClick:n,menus:r}=e,o=(0,f.TH)(),s=e=>e.paths.join("/")===o.pathname&&t?"right-navi-menu-item actived":"right-navi-menu-item",a=e=>"hash"===e.type?"/#"+e.paths.join("/"):e.paths.join("/");return i.useEffect((()=>{const e=e=>{t&&e.preventDefault()};return window.addEventListener("wheel",e,{passive:!1}),()=>{window.removeEventListener("wheel",e)}}),[t]),i.createElement(i.Fragment,null,i.createElement(m,{className:"page-article-right-navi",style:{width:300,right:t?0:-256,backgroundColor:t?"#fff":"transparent"}},i.createElement("div",{style:{marginLeft:t?16:0,transition:"all .5s ease-in-out",cursor:"pointer"}},t?i.createElement(d,{theme:"outline",size:"32",fill:"#555555",strokeWidth:2,onClick:n}):i.createElement(h,{theme:"outline",size:"32",fill:"#d1d1d1",strokeWidth:2,onClick:n})),i.createElement(v,{style:{visibility:t?"visible":"hidden"}},r.map((e=>{if(2===e.paths.length)return i.createElement("div",{className:s(e),key:e.key},i.createElement("a",{href:a(e)},e.title))})))),t&&i.createElement(p,{style:{zIndex:998}}))}},7503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$});var i=n(7294),r=n(9163),o=n(5977),s=n(7484),a=n.n(s),c=n(107),u=n(4203),l=n(6682),d=n(495),h=n(9954);const f=r.ZP.div`
  padding: 48px 0;
`,p=r.ZP.div`
  margin: 0 auto;
  max-width: 820px;
`,m=r.ZP.div`
  width: 100%;
  margin: 16px 0;
  border-radius: 4px;
  position: relative;
  transition: all .3s ease-in-out;
  display: flex;
`,v=r.ZP.div`
  width: 44%;
  min-height: 160px;
  max-height: 300px;
  transition: all .3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
  }
  &:hover {
    width: 42%;
  }
`,k=r.ZP.div`
  position: relative;
  width: 56%;
  background-color: #fff;
  color: ${u.Z.dark};
  border-radius: 0 4px 4px 0;
  flex-grow: 1;
  h3.info-item {
    cursor: pointer;
    &:hover {
      color: ${u.Z.blue};
    }
  }
  .info-author-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-size: 12px;
    color: ${u.Z.dark};
    .info-author,.info-date {
      display: inline-block;
      margin-right: 16px;
    }
    .info-date {
      color: ${u.Z.white6};
    }
  }
`,g=r.ZP.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 16px 0;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
`,$=function(){const[e,t]=i.useState(!1),[n,r]=i.useState(),[s,$]=i.useState(0),y=(0,o.k6)(),w=(e,t)=>{e.preventDefault(),y.push(`/article/${t.uid}`)};return i.useEffect((()=>{c.V.get(`/articles?offset=${s}&limit=9&order=desc&orderBy=updateAt`).then((e=>r(e.data.data))).catch((e=>window.alert(e.response.data.msg)))}),[]),i.createElement(f,null,i.createElement(p,null,n?n.map((e=>i.createElement(m,null,i.createElement(v,{onClick:t=>w(t,e)},i.createElement("img",{src:e.cover,alt:e.title})),i.createElement(k,null,i.createElement("div",{style:{margin:16}},i.createElement("h3",{className:"info-item",onClick:t=>w(t,e)},e.title),i.createElement("div",{className:"info-item",style:{color:u.Z.white7}},e.excerpt),i.createElement("div",{className:"info-author-date info-item"},i.createElement("div",{className:"info-author"},e.author),i.createElement("div",{className:"info-date"},a()(e.updateAt).format("YYYY年M月D日")))))))):i.createElement(l.gb,null)),i.createElement(g,{role:"button",onClick:e=>{e.preventDefault(),c.V.get(`/articles?offset=${s+9}&limit=9`).then((e=>{r(n.concat(e.data.data)),$(s+9)})).catch((e=>window.alert(e.response.data.msg)))}},"Load More"),i.createElement(d.$Y,{isOpen:e,onClick:n=>{n.preventDefault(),t(!e)},menus:h.ps}))}},7218:(e,t,n)=>{"use strict";n.d(t,{V:()=>s});var i=n(9669),r=n.n(i),o=n(4901);const s=r().create();let a;a="https://api.kevinjobs.com:5000/v2",s.defaults.baseURL="https://api.kevinjobs.com:5000/v2",s.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e))),(0,o.ZP)(s,{retries:3})},107:(e,t,n)=>{"use strict";n.d(t,{V:()=>i.V});var i=n(7218)}}]);