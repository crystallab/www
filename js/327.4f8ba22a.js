(self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[]).push([[327],{85990:(e,t,n)=>{"use strict";n.d(t,{v:()=>s});var a=n(7363),l=n(80364),o=n.n(l),r=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function r(e){try{i(a.next(e))}catch(t){o(t)}}function s(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?n(e.value):l(e.value).then(r,s)}i((a=a.apply(e,t||[])).next())}))};const s=(0,a.Q_)("web3",{state:()=>({account:"",web3Instance:new(o()),web3:new(o()),currentNetIndex:0,networks:[{name:"Polygon",icon:"chains/polygon.svg",id:137,tokenName:"Polygon",symbol:"MATIC",rpcUrl:"https://rpc-mainnet.matic.network",wssUrl:"wss://speedy-nodes-nyc.moralis.io/b5f9b7819c4d900487735b6a/polygon/mainnet/ws",explorer:"https://polygonscan.com/"},{name:"Mumbai",icon:"chains/mumbai.svg",id:80001,tokenName:"Polygon Mumbai",symbol:"MATIC",rpcUrl:"https://rpc-mumbai.matic.today",wssUrl:"wss://matic-testnet-archive-ws.bwarelabs.com",explorer:"https://mumbai.polygonscan.com/"}]}),getters:{currentNetwork:e=>e.networks[e.currentNetIndex],accountAddr:e=>e.account},actions:{initWeb3(e){this.currentNetIndex=e;const t={reconnect:{auto:!0,delay:5e3,maxAttempts:5,onTimeout:!1}},n=new(o().providers.WebsocketProvider)(this.networks[e].wssUrl,t);this.web3Instance=new(o())(this.networks[e].rpcUrl),this.web3Instance=new(o())(window.ethereum||this.networks[e].rpcUrl),this.web3Instance.setProvider(n),this.web3=new(o())(window.ethereum||this.networks[e].rpcUrl)},login(e){return r(this,void 0,void 0,(function*(){this.account=e}))}}})},28488:(e,t,n)=>{"use strict";n.d(t,{c4:()=>r,ol:()=>s,sC:()=>o});var a=n(85990);const l=(0,a.v)();function o(e,t=4,n=!1){const a=e.substr(0,2+t),l=e.slice(0-t);return n?a:a+"..."+l}function r(e){navigator.clipboard.writeText(e)}function s(e,t=-1,n="address"){let a=l.currentNetwork.explorer;t>=0&&(a=l.networks[t].explorer);const o=a+n+"/"+e;return o}},3991:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>je});var a=n(59835);const l=(0,a._)("img",{src:"logo.svg"},null,-1),o=(0,a._)("img",{class:"gt-xs",src:"brand.svg",style:{"margin-left":"5px",height:"16px"}},null,-1),r=(0,a.Uk)(" https://Crystal.network "),s={class:"bg-black"},i=(0,a._)("img",{src:"logo.svg"},null,-1),c=(0,a._)("img",{class:"gt-xs",src:"brand.svg",style:{"margin-left":"5px",height:"16px"}},null,-1),u=(0,a.Uk)(" Copyright © "),d=(0,a.Uk)("Crystal.network"),p=(0,a._)("div",null,null,-1);function w(e,t,n,w,m,f){const _=(0,a.up)("q-avatar"),g=(0,a.up)("q-btn"),h=(0,a.up)("q-toolbar-title"),k=(0,a.up)("q-btn-group"),b=(0,a.up)("AccountButton"),y=(0,a.up)("q-toolbar"),W=(0,a.up)("q-header"),v=(0,a.up)("q-item-label"),q=(0,a.up)("EssentialLink"),x=(0,a.up)("q-list"),Z=(0,a.up)("q-drawer"),Q=(0,a.up)("router-view"),A=(0,a.up)("q-page-container"),C=(0,a.up)("q-badge"),I=(0,a.up)("q-page-scroller"),U=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(U,{view:"hHh Lpr lFr"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{reveal:"",elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{class:"bg-black"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{to:"/",flat:"",style:{"padding-left":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"32px"},{default:(0,a.w5)((()=>[l])),_:1}),o])),_:1})])),_:1}),(0,a._)("div",null,[(0,a.Wm)(k,{flat:"",dense:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{flat:"",color:"primary",label:"Try Free",to:"/free"})])),_:1})]),(0,a.Wm)(b)])),_:1})])),_:1}),(0,a.Wm)(Z,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),bordered:"",overlay:""},{default:(0,a.w5)((()=>[(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{header:""},{default:(0,a.w5)((()=>[r])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.essentialLinks,(e=>((0,a.wg)(),(0,a.j4)(q,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(A,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q)])),_:1}),(0,a._)("div",s,[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,{to:"/",flat:"",style:{"padding-left":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"32px"},{default:(0,a.w5)((()=>[i])),_:1}),c])),_:1})])),_:1}),(0,a._)("div",null,[u,(0,a.Wm)(C,{color:"primary"},{default:(0,a.w5)((()=>[d])),_:1})])])),_:1}),p]),(0,a.Wm)(I,{position:"bottom-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{flat:"",fab:"",icon:"las la-chevron-circle-up",color:"white",size:"xs"})])),_:1})])),_:1})}var m=n(60499),f=n(86970);function _(e,t,n,l,o,r){const s=(0,a.up)("q-icon"),i=(0,a.up)("q-item-section"),c=(0,a.up)("q-item-label"),u=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(u,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(i,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,f.zw)(e.title),1)])),_:1}),(0,a.Wm)(c,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,f.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const g=(0,a.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var h=n(11639),k=n(490),b=n(76749),y=n(22857),W=n(33115),v=n(69984),q=n.n(v);const x=(0,h.Z)(g,[["render",_]]),Z=x;q()(g,"components",{QItem:k.Z,QItemSection:b.Z,QIcon:y.Z,QItemLabel:W.Z});const Q=e=>((0,a.dD)("data-v-3ffc48a7"),e=e(),(0,a.Cn)(),e),A={class:"row items-center no-wrap"},C=["src"],I={class:"gt-xs text-center",style:{"padding-left":"5px"}},U=(0,a.Uk)("Select a network"),M=Q((()=>(0,a._)("img",{src:"chains/polygon.svg"},null,-1))),L=(0,a.Uk)("Polygon"),D=(0,a.Uk)("Polygon Mainnet"),P=Q((()=>(0,a._)("img",{src:"chains/mumbai.svg"},null,-1))),j=(0,a.Uk)("Mumbai"),N=(0,a.Uk)("Mumbai Testnet"),S={class:"row items-center no-wrap"},z={key:0,class:"text-center"},B={key:1,class:"text-center"},T=Q((()=>(0,a._)("div",{class:"text-subtitle1"},"Connect a wallet",-1))),O=Q((()=>(0,a._)("div",{class:"text-h6"},"Metamask",-1))),H=Q((()=>(0,a._)("img",{src:"wallets/metamask.png"},null,-1))),V=Q((()=>(0,a._)("div",{class:"text-subtitle1"},"Account",-1))),E={class:"text-h6"},G=Q((()=>(0,a._)("span",{class:"cursor-pointer"},"Copy Address",-1))),F=(0,a.Uk)(" Address Copied "),K=["href"],R=Q((()=>(0,a._)("span",{class:"cursor-pointer"},"View on Explorer",-1))),Y=[R],J=Q((()=>(0,a._)("br",null,null,-1))),X=Q((()=>(0,a._)("br",null,null,-1))),$=Q((()=>(0,a._)("br",null,null,-1))),ee=Q((()=>(0,a._)("br",null,null,-1)));function te(e,t,n,l,o,r){const s=(0,a.up)("q-icon"),i=(0,a.up)("q-item-section"),c=(0,a.up)("q-item"),u=(0,a.up)("q-separator"),d=(0,a.up)("q-avatar"),p=(0,a.up)("q-item-label"),w=(0,a.up)("q-list"),m=(0,a.up)("q-menu"),_=(0,a.up)("q-btn"),g=(0,a.up)("q-chip"),h=(0,a.up)("q-space"),k=(0,a.up)("q-card-section"),b=(0,a.up)("q-card"),y=(0,a.up)("q-banner"),W=(0,a.up)("q-popup-proxy"),v=(0,a.up)("q-dialog"),q=(0,a.Q2)("close-popup"),x=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(g,{size:"16px",style:{"padding-left":"0px","padding-right":"0px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{padding:"sm",rounded:"",flat:"",color:"primary"},{default:(0,a.w5)((()=>[(0,a._)("div",A,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.store.currentNetwork.icon},null,8,C)])),_:1}),(0,a._)("div",I,(0,f.zw)(e.store.currentNetwork.name),1)]),(0,a.Wm)(m,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{style:{"min-width":"100px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[U])),_:1})])),_:1}),(0,a.Wm)(u),(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{clickable:"",onClick:t[0]||(t[0]=t=>e.initWeb3(0))},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{square:""},{default:(0,a.w5)((()=>[M])),_:1})])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[L])),_:1}),(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[D])),_:1})])),_:1}),(0,a.Wm)(i,{side:""},{default:(0,a.w5)((()=>[137==e.store.currentNetwork.id?((0,a.wg)(),(0,a.j4)(s,{key:0,name:"check",color:"amber"})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[q]]),(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{clickable:"",onClick:t[1]||(t[1]=t=>e.initWeb3(1))},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{square:""},{default:(0,a.w5)((()=>[P])),_:1})])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[j])),_:1}),(0,a.Wm)(p,{caption:""},{default:(0,a.w5)((()=>[N])),_:1})])),_:1}),(0,a.Wm)(i,{side:""},{default:(0,a.w5)((()=>[80001==e.store.currentNetwork.id?((0,a.wg)(),(0,a.j4)(s,{key:0,name:"check",color:"amber"})):(0,a.kq)("",!0)])),_:1})])),_:1})),[[q]])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(_,{rounded:"",outline:"","no-caps":"",color:""!==e.store.accountAddr?"primary":"red",onClick:t[2]||(t[2]=t=>e.walletOpen=!0)},{default:(0,a.w5)((()=>[(0,a._)("div",S,[""!==e.store.accountAddr?((0,a.wg)(),(0,a.iD)("div",z,(0,f.zw)(e.shortAddress(e.store.accountAddr,2)),1)):((0,a.wg)(),(0,a.iD)("div",B,"CONNECT")),(0,a.Wm)(s,{name:"account_balance_wallet"})])])),_:1},8,["color"])])),_:1}),(0,a.Wm)(v,{modelValue:e.walletOpen,"onUpdate:modelValue":t[5]||(t[5]=t=>e.walletOpen=t)},{default:(0,a.w5)((()=>[""==e.store.accountAddr?((0,a.wg)(),(0,a.j4)(b,{key:0,dark:"",class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[T,(0,a.Wm)(h),(0,a.wy)((0,a.Wm)(_,{icon:"close",flat:"",round:"",dense:""},null,512),[[q]])])),_:1}),(0,a.Wm)(k,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{bordered:"",class:"rounded-borders",style:{"min-width":"280px"}},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)(c,{clickable:"",onClick:t[3]||(t[3]=t=>e.loginMetamask()),class:"rounded-borders"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[O])),_:1}),(0,a.Wm)(i,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{square:""},{default:(0,a.w5)((()=>[H])),_:1})])),_:1})])),_:1})),[[x]])])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),""!==e.store.accountAddr?((0,a.wg)(),(0,a.j4)(b,{key:1,class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[V,(0,a.Wm)(h),(0,a.wy)((0,a.Wm)(_,{icon:"close",flat:"",round:"",dense:""},null,512),[[q]])])),_:1}),(0,a.Wm)(k,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{bordered:"",class:"rounded-borders",style:{"max-width":"300px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{lines:"1"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"24px","no-caps":"",flat:"",dense:"",icon:"account_balance_wallet"},{default:(0,a.w5)((()=>[(0,a._)("span",E,(0,f.zw)(e.shortAddress(e.store.accountAddr)),1)])),_:1})])),_:1}),(0,a.Wm)(p,{clickable:"",lines:"1",class:"q-mt-xs text-caption text-uppercase text-grey-6"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{size:"10px",flat:"",dense:"",icon:"content_copy",onClick:t[4]||(t[4]=t=>e.copyAddress(e.store.accountAddr))},{default:(0,a.w5)((()=>[G,(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{avatar:(0,a.w5)((()=>[(0,a.Wm)(s,{name:"check",color:"primary"})])),default:(0,a.w5)((()=>[F])),_:1})])),_:1})])),_:1}),(0,a.Wm)(_,{size:"10px",flat:"",dense:"",icon:"open_in_new"},{default:(0,a.w5)((()=>[(0,a._)("a",{href:e.linkAddress(e.store.accountAddr),target:"_blank",class:"text-grey-6"},Y,8,K)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),J,X,$,ee])),_:1})):(0,a.kq)("",!0)])),_:1},8,["modelValue"])])}var ne=n(85990),ae=n(28488),le=n(17779),oe=function(e,t,n,a){function l(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function r(e){try{i(a.next(e))}catch(t){o(t)}}function s(e){try{i(a["throw"](e))}catch(t){o(t)}}function i(e){e.done?n(e.value):l(e.value).then(r,s)}i((a=a.apply(e,t||[])).next())}))};const re=(0,a.aZ)({name:"AccountButton",setup(){const e=(0,ne.v)(),t=(0,m.iH)(!1);return{shortAddress:ae.sC,copyAddress:ae.c4,linkAddress:ae.ol,store:e,walletOpen:t,initWeb3(t){le.log("Init Web3: ",e.networks[t].name,e.networks[t].id),e.initWeb3(t)},login(){le.log("Login"),"undefined"!==typeof window.ethereum&&window.ethereum.selectedAddress&&(e.login(window.ethereum.selectedAddress),window.ethereum.on("accountsChanged",(function(t){le.log(t),t.length>0?e.login(t[0]):e.login("")})))},loginMetamask(){return oe(this,void 0,void 0,(function*(){if(le.log("Login by Metamask"),"undefined"!==typeof window.ethereum){le.log("MetaMask is installed!");var t="";try{t=yield window.ethereum.request({method:"eth_requestAccounts"})}catch(n){le.error(n)}finally{const n=t[0];le.log("account: ",n),e.login(n)}}else le.log("MetaMask is not installed!")}))}}},beforeMount(){this.initWeb3(1),this.login()}});var se=n(57691),ie=n(68879),ce=n(97858),ue=n(13246),de=n(50926),pe=n(61357),we=n(32074),me=n(44458),fe=n(63190),_e=n(90136),ge=n(52765),he=n(47128),ke=n(32045),be=n(62146),ye=n(51136);const We=(0,h.Z)(re,[["render",te],["__scopeId","data-v-3ffc48a7"]]),ve=We;q()(re,"components",{QChip:se.Z,QBtn:ie.Z,QIcon:y.Z,QMenu:ce.Z,QList:ue.Z,QItem:k.Z,QItemSection:b.Z,QSeparator:de.Z,QAvatar:pe.Z,QItemLabel:W.Z,QDialog:we.Z,QCard:me.Z,QCardSection:fe.Z,QSpace:_e.Z,QPopupProxy:ge.Z,QBanner:he.Z,QBtnDropdown:ke.Z}),q()(re,"directives",{ClosePopup:be.Z,Ripple:ye.Z});const qe=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"}],xe=(0,a.aZ)({name:"MainLayout",components:{EssentialLink:Z,AccountButton:ve},setup(){const e=(0,ne.v)(),t=(0,m.iH)(!1),n=(0,m.iH)(!1),a=(0,m.iH)(0);return{store:e,essentialLinks:qe,leftDrawerOpen:t,walletOpen:n,network:a,toggleLeftDrawer(){t.value=!t.value}}}});var Ze=n(77605),Qe=n(16602),Ae=n(51663),Ce=n(81973),Ie=n(67236),Ue=n(36689),Me=n(12133),Le=n(20990),De=n(21237);const Pe=(0,h.Z)(xe,[["render",w]]),je=Pe;q()(xe,"components",{QLayout:Ze.Z,QHeader:Qe.Z,QToolbar:Ae.Z,QBtn:ie.Z,QToolbarTitle:Ce.Z,QAvatar:pe.Z,QBtnGroup:Ie.Z,QBtnDropdown:ke.Z,QList:ue.Z,QItem:k.Z,QItemSection:b.Z,QItemLabel:W.Z,QIcon:y.Z,QSeparator:de.Z,QDrawer:Ue.Z,QPageContainer:Me.Z,QBadge:Le.Z,QPageScroller:De.Z})},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},27790:()=>{},52361:()=>{},94616:()=>{},6567:()=>{}}]);