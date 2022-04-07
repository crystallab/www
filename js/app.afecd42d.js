(()=>{"use strict";var e={76893:(e,t,r)=>{r(18964),r(40702);var n=r(61957),o=r(68266),a=r(59835);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var l=r(11639);const c=(0,l.Z)(s,[["render",i]]),u=c;var d=r(23340),p=r(7363);const f=(0,d.h)((()=>{const e=(0,p.WB)();return e}));var h=r(18910);const m=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(855)]).then(r.bind(r,99855)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(754)]).then(r.bind(r,754))},{path:"/games",component:()=>Promise.all([r.e(736),r.e(64),r.e(709)]).then(r.bind(r,99709))},{path:"/dice",component:()=>Promise.all([r.e(736),r.e(64),r.e(229)]).then(r.bind(r,99723))},{path:"/diceFaq",component:()=>Promise.all([r.e(736),r.e(64),r.e(847)]).then(r.bind(r,9847))},{path:"/invest",component:()=>Promise.all([r.e(736),r.e(64),r.e(958)]).then(r.bind(r,9735))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(431)]).then(r.bind(r,39431))}],v=m,b=(0,d.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("/")});return t}));async function g(e,t){const r=e(u);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const a="function"===typeof b?await b({store:n}):b;return n.use((()=>({router:a}))),{app:r,store:n,router:a}}var y=r(86229);const w={config:{},plugins:{Meta:y.ZP}};var P=r(17779);const O="/";async function k({app:e,router:t,store:r},n){let o=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:O})}catch(l){return l&&l.url?void i(l.url):void P.error("[Quasar] boot error:",l)}!0!==o&&(e.use(t),e.mount("#q-app"))}g(n.ri,w).then((e=>Promise.all([Promise.resolve().then(r.bind(r,73612)),Promise.resolve().then(r.bind(r,34136))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,r)}))))},34136:(e,t,r)=>{r.r(t),r.d(t,{api:()=>i,default:()=>s});var n=r(23340),o=r(39981),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},73612:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(23340),o=r(27712);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},s=(0,n.xr)((({app:e})=>{const t=(0,o.o)({locale:"en-US",messages:i});e.use(t)}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"2ed50f5f",229:"cc89aecb",431:"312816a6",709:"98118354",754:"20c1837e",847:"35892e53",855:"2cd71c2f",958:"157f8f73"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",229:"0a34a170",736:"c24c493d",754:"5ab1292c",855:"f75ebb42",958:"0a34a170"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crystal-dapp:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={229:1,754:1,855:1,958:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(76893)));n=r.O(n)})();