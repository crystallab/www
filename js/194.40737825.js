(self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[]).push([[194],{85990:(t,e,n)=>{"use strict";n.d(e,{v:()=>l});var s=n(7363),a=n(80364),o=n.n(a),r=function(t,e,n,s){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function r(t){try{i(s.next(t))}catch(e){o(e)}}function l(t){try{i(s["throw"](t))}catch(e){o(e)}}function i(t){t.done?n(t.value):a(t.value).then(r,l)}i((s=s.apply(t,e||[])).next())}))};const l=(0,s.Q_)("web3",{state:()=>({account:"",web3Instance:new(o()),web3:new(o()),currentNetIndex:0,networks:[{name:"Polygon",icon:"chains/polygon.svg",id:137,tokenName:"Polygon",symbol:"MATIC",rpcUrl:"https://rpc-mainnet.matic.network",wssUrl:"wss://speedy-nodes-nyc.moralis.io/b5f9b7819c4d900487735b6a/polygon/mainnet/ws",explorer:"https://polygonscan.com/"},{name:"Mumbai",icon:"chains/mumbai.svg",id:80001,tokenName:"Polygon Mumbai",symbol:"MATIC",rpcUrl:"https://rpc-mumbai.matic.today",wssUrl:"wss://matic-testnet-archive-ws.bwarelabs.com",explorer:"https://mumbai.polygonscan.com/"}],games:[{name:"MATIC DICE",game:"dice",token:"MATIC",erc20:!1,minbet:.1,maxbet:9999,network:"polygon",networkId:0,contract:"0xe5831dE9aaC7b578E9a944c0AfE84948a27799a4"},{name:"Free DICE",game:"dice",token:"MATIC",erc20:!1,minbet:.001,maxbet:888,network:"mumbai",networkId:1,contract:"0xc08Bd2f05fAD674c88986F1259476996FAF31E8C"}]}),getters:{currentNetwork:t=>t.networks[t.currentNetIndex],accountAddr:t=>t.account,gameList:t=>t.games},actions:{initWeb3(t){this.currentNetIndex=t;const e={reconnect:{auto:!0,delay:5e3,maxAttempts:5,onTimeout:!1}},n=new(o().providers.WebsocketProvider)(this.networks[t].wssUrl,e);this.web3Instance=new(o())(this.networks[t].rpcUrl),this.web3Instance=new(o())(window.ethereum||this.networks[t].rpcUrl),this.web3Instance.setProvider(n),this.web3=new(o())(window.ethereum||this.networks[t].rpcUrl)},login(t){return r(this,void 0,void 0,(function*(){this.account=t}))}}})},28488:(t,e,n)=>{"use strict";n.d(e,{c4:()=>r,ol:()=>l,sC:()=>o});var s=n(85990);const a=(0,s.v)();function o(t,e=4,n=!1){const s=t.substr(0,2+e),a=t.slice(0-e);return n?s:s+"..."+a}function r(t){navigator.clipboard.writeText(t)}function l(t,e=-1,n="address"){let s=a.currentNetwork.explorer;e>=0&&(s=a.networks[e].explorer);const o=s+n+"/"+t;return o}},88871:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>st});var s=n(59835);const a={style:{width:"100%",height:"500px"}},o=(0,s._)("img",{src:"logo.svg"},null,-1),r=(0,s._)("img",{class:"gt-xs",src:"brand.svg",style:{"margin-left":"5px",height:"48px"}},null,-1),l=(0,s._)("img",{src:"brand.svg",style:{"margin-left":"5px",height:"48px"}},null,-1),i=(0,s.Uk)(" Next Generation of GameFi ");function c(t,e,n,c,u,m){const d=(0,s.up)("q-avatar"),w=(0,s.up)("q-btn"),p=(0,s.up)("q-chip"),g=(0,s.up)("q-parallax"),f=(0,s.up)("GamesOverview"),h=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(h,{class:"row justify-evenly"},{default:(0,s.w5)((()=>[(0,s._)("div",a,[(0,s.Wm)(g,{class:"hero",src:"https://images.unsplash.com/photo-1498736297812-3a08021f206f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2271&q=80",height:640},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{to:"/",flat:"",style:{"padding-left":"0px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{size:"96px"},{default:(0,s.w5)((()=>[o])),_:1}),r])),_:1}),(0,s.Wm)(w,{class:"xs",to:"/",flat:"",style:{"padding-bottom":"30px"}},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(p,{outline:"",class:"text-h6 text-white text-center"},{default:(0,s.w5)((()=>[i])),_:1})])),_:1})]),(0,s.Wm)(f)])),_:1})}var u=n(19302),m=n(86970);const d={class:"q-pa-md",style:{width:"100%","max-width":"1439px"}},w=(0,s.Uk)(" Crystal Games "),p={class:"gt-xs"},g=["src"],f=(0,s.Uk)(" Polygon "),h=["src"],x=(0,s.Uk)(" Mumbai "),b={key:0,class:"row q-pa-md"},v={class:"q-gutter-x-sm",style:{"z-index":"2"}},_=["src"],y={class:"q-gutter-x-sm",style:{"z-index":"1",position:"absolute",top:"0px",left:"0px"}},k=["src"],W=["href"],q={class:"cursor-pointer"},Z=(0,s.Uk)("PLAY"),I=(0,s.Uk)("INVEST");function Q(t,e,n,a,o,r){const l=(0,s.up)("q-icon"),i=(0,s.up)("q-btn-toggle"),c=(0,s.up)("q-toolbar-title"),u=(0,s.up)("q-avatar"),Q=(0,s.up)("q-chip"),A=(0,s.up)("q-toolbar"),C=(0,s.up)("q-item-section"),U=(0,s.up)("q-item-label"),G=(0,s.up)("q-btn"),T=(0,s.up)("q-item"),M=(0,s.up)("q-card-section"),P=(0,s.up)("q-separator"),z=(0,s.up)("q-btn-group"),D=(0,s.up)("q-card-actions"),N=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(A,null,{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(i,{modelValue:t.isGrid,"onUpdate:modelValue":e[0]||(e[0]=e=>t.isGrid=e),flat:"",dense:"",disable:"","toggle-color":"white",color:"grey",options:[{value:!0,slot:"one"},{value:!1,slot:"two"}]},{one:(0,s.w5)((()=>[(0,s.Wm)(l,{right:"",name:"view_module"})])),two:(0,s.w5)((()=>[(0,s.Wm)(l,{right:"",name:"view_list"})])),_:1},8,["modelValue"])]),(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[w])),_:1}),(0,s._)("div",p,[(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{size:"30px",color:"white"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:"chains/polygon.svg",style:{width:"60%"}},null,8,g)])),_:1}),f])),_:1}),(0,s.Wm)(Q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{size:"30px",color:"white"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:"chains/mumbai.svg",style:{width:"60%"}},null,8,h)])),_:1}),x])),_:1})])])),_:1}),t.isGrid?((0,s.wg)(),(0,s.iD)("div",b,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.games,((e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"q-pa-md col-3 col-md-4 col-sm-6 col-xs-12",key:e.contract},[(0,s.Wm)(N,{class:"my-card"},{default:(0,s.w5)((()=>[(0,s.Wm)(M,{class:"bg-primary text-white"},{default:(0,s.w5)((()=>[(0,s.Wm)(T,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{avatar:""},{default:(0,s.w5)((()=>[(0,s._)("div",v,[(0,s.Wm)(u,{size:"64px"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:"tokens/"+e.token+".png"},null,8,_)])),_:2},1024)]),(0,s._)("div",y,[(0,s.Wm)(u,{size:"30px",color:"white"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:"chains/"+e.network+".svg",style:{width:"60%"}},null,8,k)])),_:2},1024)])])),_:2},1024),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"text-h6"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,m.zw)(e.name),1)])),_:2},1024),(0,s.Wm)(U,{caption:""},{default:(0,s.w5)((()=>[(0,s.Wm)(G,{size:"10px",flat:"",dense:"",icon:"open_in_new"},{default:(0,s.w5)((()=>[(0,s._)("a",{href:t.linkAddress(e.contract,1),target:"_blank",class:"text-white"},[(0,s._)("span",q,(0,m.zw)(t.shortAddress(e.contract)),1)],8,W)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,s.Wm)(P),(0,s.Wm)(D,{class:"row",align:"around"},{default:(0,s.w5)((()=>[(0,s.Wm)(z,{outline:"",spread:"",class:"full-width"},{default:(0,s.w5)((()=>[(0,s.Wm)(G,{outline:"",class:"col-5",to:e.game+"?game="+n},{default:(0,s.w5)((()=>[Z])),_:2},1032,["to"]),(0,s.Wm)(P,{vertical:""}),(0,s.Wm)(G,{outline:"",disable:"",class:"col-5"},{default:(0,s.w5)((()=>[I])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))])):(0,s.kq)("",!0)])}var A=n(60499),C=n(28488),U=n(85990);const G=(0,s.aZ)({name:"GamesOverview",setup(){const t=(0,U.v)(),e=(0,A.iH)(!0);return{shortAddress:C.sC,copyAddress:C.c4,linkAddress:C.ol,isGrid:e,games:t.gameList}}});var T=n(11639),M=n(51663),P=n(1389),z=n(22857),D=n(81973),N=n(57691),B=n(61357),E=n(44458),F=n(63190),H=n(490),V=n(76749),L=n(33115),S=n(68879),j=n(50926),O=n(11821),Y=n(67236),K=n(69984),J=n.n(K);const R=(0,T.Z)(G,[["render",Q]]),X=R;J()(G,"components",{QToolbar:M.Z,QBtnToggle:P.Z,QIcon:z.Z,QToolbarTitle:D.Z,QChip:N.Z,QAvatar:B.Z,QCard:E.Z,QCardSection:F.Z,QItem:H.Z,QItemSection:V.Z,QItemLabel:L.Z,QBtn:S.Z,QSeparator:j.Z,QCardActions:O.Z,QBtnGroup:Y.Z});const $=(0,s.aZ)({name:"IndexPage",components:{GamesOverview:X},setup(){const t=(0,u.Z)();return t.dark.set(!0),{}}});var tt=n(69885),et=n(96536);const nt=(0,T.Z)($,[["render",c]]),st=nt;J()($,"components",{QPage:tt.Z,QParallax:et.Z,QBtn:S.Z,QAvatar:B.Z,QChip:N.Z})},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},27790:()=>{},52361:()=>{},94616:()=>{},6567:()=>{}}]);