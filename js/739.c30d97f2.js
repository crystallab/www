(self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[]).push([[739],{85990:(e,t,a)=>{"use strict";a.d(t,{v:()=>i});var n=a(7363),l=a(80364),s=a.n(l),o=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function i(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):l(e.value).then(o,i)}r((n=n.apply(e,t||[])).next())}))};const i=(0,n.Q_)("web3",{state:()=>({account:"",web3Instance:new(s()),web3:new(s()),currentNetIndex:0,networks:[{name:"Polygon",icon:"chains/polygon.svg",id:137,tokenName:"Polygon",symbol:"MATIC",rpcUrl:"https://rpc-mainnet.matic.network",wssUrl:"wss://speedy-nodes-nyc.moralis.io/b5f9b7819c4d900487735b6a/polygon/mainnet/ws",explorer:"https://polygonscan.com/"},{name:"Mumbai",icon:"chains/mumbai.svg",id:80001,tokenName:"Polygon Mumbai",symbol:"MATIC",rpcUrl:"https://rpc-mumbai.matic.today",wssUrl:"wss://matic-testnet-archive-ws.bwarelabs.com",explorer:"https://mumbai.polygonscan.com/"}]}),getters:{currentNetwork:e=>e.networks[e.currentNetIndex],accountAddr:e=>e.account},actions:{initWeb3(e){this.currentNetIndex=e;const t={reconnect:{auto:!0,delay:5e3,maxAttempts:5,onTimeout:!1}},a=new(s().providers.WebsocketProvider)(this.networks[e].wssUrl,t);this.web3Instance=new(s())(this.networks[e].rpcUrl),this.web3Instance=new(s())(window.ethereum||this.networks[e].rpcUrl),this.web3Instance.setProvider(a),this.web3=new(s())(window.ethereum||this.networks[e].rpcUrl)},login(e){return o(this,void 0,void 0,(function*(){this.account=e}))}}})},28488:(e,t,a)=>{"use strict";a.d(t,{c4:()=>o,ol:()=>i,sC:()=>s});var n=a(85990);const l=(0,n.v)();function s(e,t=4,a=!1){const n=e.substr(0,2+t),l=e.slice(0-t);return a?n:n+"..."+l}function o(e){navigator.clipboard.writeText(e)}function i(e,t=-1,a="address"){let n=l.currentNetwork.explorer;t>=0&&(n=l.networks[t].explorer);const s=n+a+"/"+e;return s}},4945:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var n=a(59835),l=a(86970);const s=e=>((0,n.dD)("data-v-5b660cba"),e=e(),(0,n.Cn)(),e),o=s((()=>(0,n._)("img",{src:"chains/polygon.svg"},null,-1))),i={style:{"margin-left":"0px",height:"20px"}},r={href:"https://faucet.polygon.technology/",target:"_blank",class:"text-white",style:{"text-decoration":"none"}},u=(0,n.Uk)(" Get more ");function d(e,t,a,s,d,c){const p=(0,n.up)("q-icon"),m=(0,n.up)("q-avatar"),y=(0,n.up)("q-btn"),w=(0,n.up)("q-chip"),b=(0,n.up)("q-page-sticky");return(0,n.wg)(),(0,n.j4)(b,{position:"top-right",offset:[16,0],style:{"z-index":"999"}},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{color:"primary","text-color":"white",dense:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"white","text-color":"white"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[o])),_:1})])),_:1}),(0,n.Wm)(y,{flat:"",dense:"","no-caps":""},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(e.balance+" MATIC"),1)])),_:1})])),_:1}),1==e.store.currentNetIndex?((0,n.wg)(),(0,n.j4)(y,{key:0,flat:"",dense:"",style:{"padding-left":"0px"}},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("a",r,[(0,n.Wm)(p,{name:"las la-plus-circle"}),u])])])),_:1})):(0,n.kq)("",!0)])),_:1})}var c=a(60499),p=a(85990),m=a(17779),y=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function i(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):l(e.value).then(o,i)}r((n=n.apply(e,t||[])).next())}))};const w=(0,n.aZ)({name:"BalanceView",setup(){const e=(0,p.v)(),t=(0,c.iH)("0.00");function a(){return y(this,void 0,void 0,(function*(){const a=e.accountAddr;e.web3.utils.isAddress(a),e.web3.eth.getBalance(a).then((a=>{t.value=parseFloat(e.web3.utils.fromWei(a)).toPrecision(8)})).catch((e=>{m.log("getBalance: ",e)}))}))}return{getBalance:a,store:e,balance:t}},beforeMount(){setInterval(this.getBalance,2e3)}});var b=a(11639),f=a(3388),v=a(57691),h=a(61357),g=a(22857),_=a(68879),x=a(32045),k=a(69984),W=a.n(k);const T=(0,b.Z)(w,[["render",d],["__scopeId","data-v-5b660cba"]]),C=T;W()(w,"components",{QPageSticky:f.Z,QChip:v.Z,QAvatar:h.Z,QIcon:g.Z,QBtn:_.Z,QBtnDropdown:x.Z})},69544:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>et});var n=a(59835),l=a(86970);const s={class:"q-pa-md",style:{width:"100%","max-width":"1439px"}},o=(0,n.Uk)(" Free Dice "),i={class:"no-padding"},r={class:"row justify-center",style:{"max-width":"1439px"}},u={class:"col-auto q-pa-xs"},d={class:"col-auto q-pa-xs"},c={class:"col-auto q-pa-xs"},p={class:"col-auto q-pa-xs"},m={class:"row justify-center",style:{"max-width":"1439px"}},y={class:"col-6 q-pa-xs"},w={class:"row items-center no-wrap"},b={class:"text-center"},f=(0,n.Uk)(" Roll LO"),v=(0,n._)("br",null,null,-1),h={class:"col-6 q-pa-xs"},g={class:"row items-center no-wrap"},_={class:"text-center"},x=(0,n.Uk)(" Roll HI"),k=(0,n._)("br",null,null,-1),W={class:"q-gutter-y-md",style:{"max-width":"1439px"}},T={class:"my-table-details"},C=["href"],B={class:"cursor-pointer"},P={class:"my-table-details"},I={class:"row items-center no-wrap"},M={class:"text-center"},q=(0,n._)("br",null,null,-1),A=["href"],S={class:"cursor-pointer"},H={class:"my-table-details"},Z={class:"row items-center no-wrap"},z={class:"my-table-details"},U={class:"my-table-details"},Q={class:"row items-center no-wrap"},N={class:"my-table-details"},V={class:"text-h5 text-center"},F={class:"text-center",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},j={class:"my-table-details"},O={class:"text-h5 text-left"},D={class:"text-left",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},L={class:"my-table-details"},E=["href"],G={class:"cursor-pointer"},R={class:"my-table-details"},J={class:"row items-center no-wrap"},X={class:"text-center"},Y=(0,n._)("br",null,null,-1),K=["href"],$={class:"cursor-pointer"},ee={class:"my-table-details"},te={class:"row items-center no-wrap"},ae={class:"my-table-details"},ne={class:"my-table-details"},le={class:"row items-center no-wrap"},se={class:"my-table-details"},oe={class:"text-h5 text-center"},ie={class:"text-center",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},re={class:"my-table-details"},ue={class:"text-h5 text-left"},de={class:"text-left",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},ce=(0,n._)("span",{class:"text-h6 q-ml-sm"},"Sign Bet Tx",-1),pe=(0,n._)("span",{class:"q-ml-sm"},"You are currently not connected to the correct network.",-1),me=(0,n._)("span",{class:"text-h6 q-ml-sm"},"Incorrect blockchain",-1),ye=(0,n._)("span",{class:"q-ml-sm"},"You are currently not connected to the correct network.",-1);function we(e,t,a,we,be,fe){const ve=(0,n.up)("q-toolbar-title"),he=(0,n.up)("q-toolbar"),ge=(0,n.up)("q-btn"),_e=(0,n.up)("q-input"),xe=(0,n.up)("q-btn-group"),ke=(0,n.up)("q-tab"),We=(0,n.up)("q-tabs"),Te=(0,n.up)("q-separator"),Ce=(0,n.up)("q-td"),Be=(0,n.up)("q-table"),Pe=(0,n.up)("q-tab-panel"),Ie=(0,n.up)("q-tab-panels"),Me=(0,n.up)("q-card"),qe=(0,n.up)("q-avatar"),Ae=(0,n.up)("q-space"),Se=(0,n.up)("q-card-section"),He=(0,n.up)("q-card-actions"),Ze=(0,n.up)("q-dialog"),ze=(0,n.up)("BalanceView"),Ue=(0,n.up)("q-page"),Qe=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(Ue,{class:"row justify-evenly"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n.Wm)(he,null,{default:(0,n.w5)((()=>[(0,n.Wm)(ve,null,{default:(0,n.w5)((()=>[o])),_:1})])),_:1}),(0,n._)("div",i,[(0,n._)("div",r,[(0,n._)("div",u,[(0,n._)("div",null,[(0,n.Wm)(xe,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{class:"fixed-width-100",color:"brown",label:"Payout"}),(0,n.Wm)(_e,{filled:"",type:"number",modelValue:e.payout,"onUpdate:modelValue":t[0]||(t[0]=t=>e.payout=t),modelModifiers:{number:!0},suffix:"x",dense:"",debounce:"200",onChange:t[1]||(t[1]=t=>e.updateInputs(0))},null,8,["modelValue"])])),_:1})])]),(0,n._)("div",d,[(0,n._)("div",null,[(0,n.Wm)(xe,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{class:"fixed-width-100",color:"brown",label:"Profit"}),(0,n.Wm)(_e,{filled:"",type:"number",modelValue:e.profit,"onUpdate:modelValue":t[2]||(t[2]=t=>e.profit=t),modelModifiers:{number:!0},suffix:e.token,dense:"",debounce:"200",onChange:t[3]||(t[3]=t=>e.updateInputs(1))},null,8,["modelValue","suffix"])])),_:1})])]),(0,n._)("div",c,[(0,n._)("div",null,[(0,n.Wm)(xe,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{class:"fixed-width-100",color:"brown",label:"Chance"}),(0,n.Wm)(_e,{filled:"",type:"number",modelValue:e.chance,"onUpdate:modelValue":t[4]||(t[4]=t=>e.chance=t),modelModifiers:{number:!0},suffix:"%",dense:"",debounce:"200",onChange:t[5]||(t[5]=t=>e.updateInputs(2))},null,8,["modelValue"])])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(xe,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{outline:"",dense:"",color:"brown",label:"MIN",onClick:t[6]||(t[6]=t=>e.setChanceInputs(0))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown","icon-right":"las la-minus",onClick:t[7]||(t[7]=t=>e.setChanceInputs(1))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown","icon-right":"las la-plus",onClick:t[8]||(t[8]=t=>e.setChanceInputs(2))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown",label:"MAX",onClick:t[9]||(t[9]=t=>e.setChanceInputs(3))})])),_:1})])]),(0,n._)("div",p,[(0,n._)("div",null,[(0,n.Wm)(xe,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{class:"fixed-width-100",color:"brown",label:"Wager"}),(0,n.Wm)(_e,{align:"right",filled:"",type:"number",modelValue:e.wager,"onUpdate:modelValue":t[10]||(t[10]=t=>e.wager=t),modelModifiers:{number:!0},suffix:e.token,dense:"",debounce:"200",onChange:t[11]||(t[11]=t=>e.updateInputs(3))},null,8,["modelValue","suffix"])])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(xe,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{outline:"",dense:"",color:"brown",label:"MIN",onClick:t[12]||(t[12]=t=>e.setWagerInputs(0))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown","icon-right":"las la-divide",onClick:t[13]||(t[13]=t=>e.setWagerInputs(1))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown","icon-right":"las la-times",onClick:t[14]||(t[14]=t=>e.setWagerInputs(2))}),(0,n.Wm)(ge,{outline:"",dense:"",color:"brown",label:"MAX",onClick:t[15]||(t[15]=t=>e.setWagerInputs(3))})])),_:1})])])]),(0,n._)("div",m,[(0,n._)("div",y,[(0,n.Wm)(xe,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{outline:"",color:"brown",size:"xl","no-caps":"",dense:"",onClick:t[16]||(t[16]=t=>e.setBet(e.contract,!1))},{default:(0,n.w5)((()=>[(0,n._)("div",w,[(0,n._)("div",b,[f,v,(0,n.Uk)(" <"+(0,l.zw)(e.loThan.toFixed(4)),1)])])])),_:1})])),_:1})]),(0,n._)("div",h,[(0,n.Wm)(xe,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(ge,{outline:"",color:"brown",size:"xl","no-caps":"",dense:"",onClick:t[17]||(t[17]=t=>e.setBet(e.contract,!0))},{default:(0,n.w5)((()=>[(0,n._)("div",g,[(0,n._)("div",_,[x,k,(0,n.Uk)(" >"+(0,l.zw)(e.hiThan.toFixed(4)),1)])])])),_:1})])),_:1})])])]),(0,n._)("div",W,[(0,n.Wm)(Me,null,{default:(0,n.w5)((()=>[(0,n.Wm)(We,{modelValue:e.tab,"onUpdate:modelValue":t[18]||(t[18]=t=>e.tab=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,n.w5)((()=>[(0,n.Wm)(ke,{name:"allBets",label:"All Bets"}),(0,n.Wm)(ke,{name:"myBets",label:"My Bets"})])),_:1},8,["modelValue"]),(0,n.Wm)(Te),(0,n.Wm)(Ie,{modelValue:e.tab,"onUpdate:modelValue":t[19]||(t[19]=t=>e.tab=t),animated:"",class:"no-padding-panel"},{default:(0,n.w5)((()=>[(0,n.Wm)(Pe,{name:"allBets"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(Be,{"virtual-scroll":"","rows-per-page-options":[50],"hide-bottom":"",class:"my-sticky-header-table",rows:e.allBets,columns:e.columns,"row-key":"id",key:e.betsNum,loading:e.loading},{"body-cell-player":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",T,[(0,n.Wm)(ge,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.linkAddress(t.row.account),target:"_blank",class:"text-grey-6"},[(0,n._)("span",B,(0,l.zw)(e.shortAddress(t.row.account,6,!0)),1)],8,C)])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-id":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",P,[(0,n.Wm)(ge,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",I,[(0,n._)("div",M,[(0,n.Uk)((0,l.zw)(t.value),1),q,(0,n._)("a",{href:e.linkAddress(t.row.tx,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",S,(0,l.zw)("tx: "+e.shortAddress(t.row.tx,4,!0)),1)],8,A)])])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-profit":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",H,[(0,n.Wm)(ge,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n._)("div",{class:(0,l.C_)("text-center "+(t.value>0?"texte-white":"text-deep-orange"))},(0,l.zw)(t.value>0?"+ "+parseFloat((t.value-t.row.wager).toPrecision(4)):"- "+parseFloat((t.row.wager-0).toPrecision(4)))+" "+(0,l.zw)(" "+e.token),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",z,(0,l.zw)(parseFloat((t.value-0).toPrecision(4))+" "+e.token),1)])),_:2},1032,["props"])])),"body-cell-symbol":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",U,[(0,n.Wm)(ge,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",Q,[(0,n._)("div",{class:(0,l.C_)("text-center "+(e.row.profit>0?"texte-white":"text-deep-orange"))},(0,l.zw)(e.value),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-lucky":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",N,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",V,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",F,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",j,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",O,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",D,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])),(0,n._)("li",null,"Last bet: "+(0,l.zw)(e.allBets.length>0?e.allBets[0].id:"?"),1)])),_:1}),(0,n.Wm)(Pe,{name:"myBets"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(Be,{"virtual-scroll":"","rows-per-page-options":[50],"hide-bottom":"",class:"my-sticky-header-table",rows:e.myBets,columns:e.columns,"row-key":"id",key:e.betsNum,loading:e.loading},{"body-cell-player":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",L,[(0,n.Wm)(ge,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.linkAddress(t.row.account),target:"_blank",class:"text-grey-6"},[(0,n._)("span",G,(0,l.zw)(e.shortAddress(t.row.account,6,!0)),1)],8,E)])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-id":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",R,[(0,n.Wm)(ge,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",J,[(0,n._)("div",X,[(0,n.Uk)((0,l.zw)(t.value),1),Y,(0,n._)("a",{href:e.linkAddress(t.row.tx,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",$,(0,l.zw)("tx: "+e.shortAddress(t.row.tx,4,!0)),1)],8,K)])])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-profit":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",ee,[(0,n.Wm)(ge,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",te,[(0,n._)("div",{class:(0,l.C_)("text-center "+(t.value>0?"texte-white":"text-deep-orange"))},(0,l.zw)(t.value>0?"+ "+parseFloat((t.value-t.row.wager).toPrecision(4)):"- "+parseFloat((t.row.wager-0).toPrecision(4)))+" "+(0,l.zw)(" "+e.token),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(Ce,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",ae,(0,l.zw)(parseFloat((t.value-0).toPrecision(4))+" "+e.token),1)])),_:2},1032,["props"])])),"body-cell-symbol":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",ne,[(0,n.Wm)(ge,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",le,[(0,n._)("div",{class:(0,l.C_)("text-center "+(e.row.profit>0?"texte-white":"text-deep-orange"))},(0,l.zw)(e.value),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-lucky":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",se,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",oe,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",ie,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(Ce,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",re,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",ue,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",de,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])),(0,n._)("li",null,"Last bet: "+(0,l.zw)(e.myBets.length>0?e.myBets[0].id:"?"),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})]),(0,n.Wm)(Ze,{modelValue:e.signBet,"onUpdate:modelValue":t[20]||(t[20]=t=>e.signBet=t),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Me,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Se,{class:"row items-center q-pb-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(qe,{icon:"signal_wifi_off",color:"primary","text-color":"white",size:"xs"}),ce,(0,n.Wm)(Ae),(0,n.wy)((0,n.Wm)(ge,{icon:"close",flat:"",round:"",dense:""},null,512),[[Qe]])])),_:1}),(0,n.Wm)(Se,{class:"row items-center"},{default:(0,n.w5)((()=>[pe])),_:1}),(0,n.Wm)(He,{align:"right"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(ge,{class:"full-width",label:"Switch",color:"primary",onClick:e.switchNetwork},null,8,["onClick"]),[[Qe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(Ze,{modelValue:e.switchNet,"onUpdate:modelValue":t[21]||(t[21]=t=>e.switchNet=t),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Me,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Se,{class:"row items-center q-pb-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(qe,{icon:"signal_wifi_off",color:"primary","text-color":"white",size:"xs"}),me,(0,n.Wm)(Ae),(0,n.wy)((0,n.Wm)(ge,{icon:"close",flat:"",round:"",dense:""},null,512),[[Qe]])])),_:1}),(0,n.Wm)(Se,{class:"row items-center"},{default:(0,n.w5)((()=>[ye])),_:1}),(0,n.Wm)(He,{align:"right"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(ge,{class:"full-width",label:"Switch",color:"primary",onClick:e.switchNetwork},null,8,["onClick"]),[[Qe]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(ze)])])),_:1})}var be=a(60499),fe=a(85990),ve=a(19302),he=a(65457),ge=a(28488),_e=a(4945),xe=a(17779),ke=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function o(e){try{r(n.next(e))}catch(t){s(t)}}function i(e){try{r(n["throw"](e))}catch(t){s(t)}}function r(e){e.done?a(e.value):l(e.value).then(o,i)}r((n=n.apply(e,t||[])).next())}))};const We=a(57841),Te={title:"Crystal - Free Dice"},Ce=[{name:"player",label:"Player",field:"player",align:"center"},{name:"id",label:"Bet ID",field:"id",align:"center"},{name:"profit",label:"Profit",field:"profit",align:"center"},{name:"wager",label:"Wager",field:"wager",align:"center"},{name:"lucky",label:"Lucky",field:"lucky",align:"center"},{name:"symbol",label:"",field:"symbol",align:"center"},{name:"target",label:"Target",field:"target",align:"center"},{name:"end",label:"",field:"end",align:"center"}];function Be(e){xe.log("Switch network: ",(0,fe.v)().networks[e].name,(0,fe.v)().networks[e].id),(0,fe.v)().initWeb3(e)}const Pe=(0,n.aZ)({name:"DicePage",components:{BalanceView:_e.Z},setup(){const e=(0,ve.Z)();e.dark.set(!0),(0,he.Z)(Te);const t=(0,be.iH)(256e5),a=(0,be.iH)(1),n=(0,fe.v)(),l=(0,be.iH)(!1),s=(0,be.iH)(!1),o=(0,be.iH)(0);let i=[],r=[];const u=(0,be.iH)(.01),d=(0,be.iH)(1e3),c=(0,be.iH)(2),p=(0,be.iH)(1),m=(0,be.iH)(49.5),y=(0,be.iH)(1),w=(0,be.iH)(49.5),b=(0,be.iH)(50.4999),f=(0,be.iH)(!1),v=(0,be.iH)(!1);function h(e){switch(e){case 0:c.value>99e4&&(c.value=99e4),c.value<1&&(c.value=1),p.value=parseFloat((y.value*(c.value-1)).toPrecision(8)),p.value<0&&(p.value=0),m.value=parseFloat((99/c.value).toPrecision(8)),w.value=m.value,b.value=100-m.value-1e-4;break;case 1:p.value<0&&(p.value=0),p.value=parseFloat(p.value.toPrecision(8)),y.value=parseFloat((p.value/(c.value-1)).toPrecision(8)),h(3);break;case 2:m.value>99.9998&&(m.value=99.9998),m.value<1e-4&&(m.value=1e-4),c.value=parseFloat((99/m.value).toPrecision(8)),p.value=parseFloat((99*y.value/m.value-y.value).toPrecision(8)),p.value<0&&(p.value=0),w.value=m.value,b.value=100-m.value-1e-4;break;case 3:y.value>d.value&&(y.value=d.value),y.value<u.value&&(y.value=u.value),p.value=parseFloat((99*y.value/m.value-y.value).toPrecision(8)),p.value<0&&(p.value=0);break;default:break}}function g(e){switch(e){case 0:m.value=1e-4;break;case 1:m.value=Math.round(m.value+.4999),m.value-=1;break;case 2:m.value=Math.round(m.value-.4999),m.value+=1;break;case 3:m.value=99.9998;break;default:break}h(2)}function _(e){switch(e){case 0:y.value=u.value;break;case 1:y.value/=2;break;case 2:y.value*=2;break;case 3:y.value=d.value;break;default:break}h(3)}function x(){return ke(this,void 0,void 0,(function*(){const e=yield(0,fe.v)().web3.eth.net.getId().then((e=>(xe.log(e),e))).catch((e=>(xe.log("checkNetwork: ",e),-1)));return e}))}function k(e,t){return ke(this,void 0,void 0,(function*(){if(!(0,fe.v)().web3.utils.isAddress((0,fe.v)().accountAddr))return void alert("Need Connect Wallet!");const n=yield x();if(n!=(0,fe.v)().networks[a.value].id)return xe.log(n,"!=",(0,fe.v)().networks[a.value].id),void(f.value=!0);const l=(0,fe.v)().web3,s=new l.eth.Contract(We,e),o=t,i=o?b.value:w.value,r=(1e4*i).toFixed(0).toString();xe.log("setBet(",e,",",r,",",o,")"),v.value=!0;let u=s.methods.placeBet(l.utils.toHex(r.toString()),o),d=u.encodeABI();l.eth.estimateGas({from:(0,fe.v)().account,to:e,value:l.utils.toWei(y.value.toString(),"ether"),data:d}).then((function(t){xe.log("gasAmount: ",t),l.eth.sendTransaction({from:(0,fe.v)().account,to:e,value:l.utils.toWei(y.value.toString(),"ether"),gas:parseInt((1.05*t).toString()),gasPrice:36e8,data:d}).on("transactionHash",(e=>{xe.log("transactionHash: ",e)})).on("receipt",(e=>{xe.log("receipt: ",e)})).on("error",(e=>{xe.log("tx placeBet ",e)}))})).catch((function(e){xe.log("estimateGas: ",e);let t=e.message.toString(),a=t.split(".")[1],n=JSON.parse(a),l=n.message.split(":");alert(l[0]+": "+l[1])}))}))}function W(){return ke(this,void 0,void 0,(function*(){const e=(0,fe.v)().networks[a.value].id,t=(0,fe.v)().networks[a.value].name,n=(0,fe.v)().networks[a.value].tokenName,l=(0,fe.v)().networks[a.value].symbol,s=(0,fe.v)().networks[a.value].rpcUrl,o=(0,fe.v)().networks[a.value].explorer,i="0x"+e.toString(16);if("undefined"!==typeof window.ethereum)try{yield window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),location.reload()}catch(r){if(xe.log(r),4902===r.code){xe.log("Add Chain");try{yield window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t,nativeCurrency:{name:n,symbol:l,decimals:18},rpcUrls:[s],blockExplorerUrls:[o]}]}),location.reload()}catch(u){alert(u.message)}}else alert(r.message)}}))}function T(e){return ke(this,void 0,void 0,(function*(){let t=[],n={anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"betId",type:"uint256"},{indexed:!0,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"target",type:"uint256"},{indexed:!1,internalType:"bool",name:"isHigher",type:"bool"},{indexed:!1,internalType:"uint256",name:"result",type:"uint256"},{indexed:!1,internalType:"uint256",name:"wager",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bonus",type:"uint256"}],name:"BetSettled",type:"event"};const l=(0,fe.v)().networks[a.value].id.toString(16);let s="https://deep-index.moralis.io/api/v2/"+e+"/events?chain=0x"+l+"&topic=0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91&limit=50";const o="P7uumCBPmmsUQpBtobMA5wALqy3Pfiem11L0D7siP8G4zlcmSqpjmZo3MOiHdz51";return yield fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":o},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{t=e.result})).catch((e=>{xe.error("Error:",e)})),t}))}function C(e,t){return ke(this,void 0,void 0,(function*(){let n=[];const l=(0,fe.v)().networks[a.value].id.toString(16);let s="https://deep-index.moralis.io/api/v2/"+e+"/logs?chain=0x"+l+"&topic0=0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91";if(t.length>0){const e=(0,fe.v)().web3.eth.abi.encodeParameter("address",t);s=s+"&topic2="+e}s+="&limit=50";const o="P7uumCBPmmsUQpBtobMA5wALqy3Pfiem11L0D7siP8G4zlcmSqpjmZo3MOiHdz51";return yield fetch(s,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":o}}).then((e=>e.json())).then((e=>{n=e.result})).catch((e=>{xe.error("Error:",e)})),n}))}return{shortAddress:ge.sC,copyAddress:ge.c4,linkAddress:ge.ol,store:n,network:a,switchNet:f,signBet:v,fromBlock:t,contract:"0xaFd60D54A52174D142c930c6031b983e81902158",token:"MATIC",minBet:u,maxBet:d,columns:Ce,tab:(0,be.iH)("allBets"),loading:l,myloading:s,betsNum:o,allBets:i,myBets:r,payout:c,profit:p,chance:m,wager:y,loThan:w,hiThan:b,updatebets(e){return ke(this,void 0,void 0,(function*(){const t=(0,fe.v)().web3Instance,a=(new t.eth.Contract(We,e),[{name:"target",type:"uint256"},{name:"isHigher",type:"bool"},{name:"result",type:"uint256"},{name:"wager",type:"uint256"},{name:"bonus",type:"uint256"}]);l.value=!0,s.value=!0,t.utils.isAddress((0,fe.v)().accountAddr)&&(yield C(e,(0,fe.v)().accountAddr).then((e=>{for(let n=0;n<e.length;n++){const l=e[n],s=t.eth.abi.decodeParameters(a,l.data),i=t.eth.abi.decodeParameter("uint256",l.topic1),u=s.result,d=s.target,c={player:"Player",account:(0,fe.v)().accountAddr,id:"#"+i,tx:l.transaction_hash,profit:t.utils.fromWei(s.bonus,"ether"),wager:t.utils.fromWei(s.wager,"ether"),lucky:u.padStart(6,"0"),symbol:s.isHigher?">":"<",target:d.padStart(6,"0"),end:""};r.push(c),o.value++}s.value=!1})).catch((e=>{xe.error("Error:",e)}))),yield T(e).then((e=>{for(let a=0;a<e.length;a++){const n=e[a],l=n.data,s=l.result,r=l.target,u={player:"Player",account:l.player,id:"#"+l.betId,tx:n.transaction_hash,profit:t.utils.fromWei(l.bonus,"ether"),wager:t.utils.fromWei(l.wager,"ether"),lucky:s.padStart(6,"0"),symbol:l.isHigher?">":"<",target:r.padStart(6,"0"),end:""};i.push(u),o.value++}l.value=!1})).catch((e=>{xe.error("Error:",e)})),t.eth.subscribe("logs",{address:e,topics:["0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91"]},(function(e,a){if(e)xe.log(e);else{const e=[{name:"target",type:"uint256"},{name:"isHigher",type:"bool"},{name:"result",type:"uint256"},{name:"wager",type:"uint256"},{name:"bonus",type:"uint256"}];var n=t.eth.abi.decodeParameters(e,a.data);const l=t.eth.abi.decodeParameter("address",a.topics[2]).toString();let s={player:"Player",account:l,id:"#"+t.eth.abi.decodeParameter("uint256",a.topics[1]),tx:a.transactionHash,profit:t.utils.fromWei(n.bonus.toString(),"ether"),wager:t.utils.fromWei(n.wager.toString(),"ether"),lucky:n.result.toString().padStart(6,"0"),symbol:n.isHigher?">":"<",target:n.target.toString().padStart(6,"0"),end:""};i.unshift(s);let u=(0,fe.v)().accountAddr;l.toUpperCase()===u.toUpperCase()&&(r.unshift(s),xe.log(t.eth.abi.decodeParameter("address",a.topics[2])),xe.log("#",t.eth.abi.decodeParameter("uint256",a.topics[1])," Bet ",t.utils.fromWei(n.wager.toString(),"ether")," on",n.isHigher?" HI > ":" LO < ",n.target),xe.log("RESULT: ",n.result," BONUS: ",t.utils.fromWei(n.bonus.toString(),"ether"))),o.value++}}))}))},updateInputs:h,setChanceInputs:g,setWagerInputs:_,setBet:k,switchNetwork:W,getHistory:T,getUserHistory:C}},beforeMount(){Be(this.network),this.updatebets(this.contract)}});var Ie=a(11639),Me=a(69885),qe=a(51663),Ae=a(81973),Se=a(67236),He=a(68879),Ze=a(66611),ze=a(44458),Ue=a(47817),Qe=a(70900),Ne=a(50926),Ve=a(89800),Fe=a(84106),je=a(5648),Oe=a(67220),De=a(20990),Le=a(32074),Ee=a(63190),Ge=a(61357),Re=a(90136),Je=a(11821),Xe=a(62146),Ye=a(69984),Ke=a.n(Ye);const $e=(0,Ie.Z)(Pe,[["render",we]]),et=$e;Ke()(Pe,"components",{QPage:Me.Z,QToolbar:qe.Z,QToolbarTitle:Ae.Z,QBtnGroup:Se.Z,QBtn:He.Z,QInput:Ze.Z,QCard:ze.Z,QTabs:Ue.Z,QTab:Qe.Z,QSeparator:Ne.Z,QTabPanels:Ve.Z,QTabPanel:Fe.Z,QTable:je.Z,QTd:Oe.Z,QBadge:De.Z,QDialog:Le.Z,QCardSection:Ee.Z,QAvatar:Ge.Z,QSpace:Re.Z,QCardActions:Je.Z}),Ke()(Pe,"directives",{ClosePopup:Xe.Z})},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},27790:()=>{},52361:()=>{},94616:()=>{},6567:()=>{},57841:e=>{"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rand","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"member","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"rollUnder","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"choice","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isBonus","type":"bool"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetRefunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"target","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isHigher","type":"bool"},{"indexed":false,"internalType":"uint256","name":"result","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wager","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"BetSettled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"added","type":"address"}],"name":"CertifiedAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removed","type":"address"}],"name":"CertifiedRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"bool","name":"_higher","type":"bool"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setHouseEdgeBP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setMaxBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setMembership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMinBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setRandomNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"settleBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleGameIsLive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"betDetail","outputs":[{"components":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"result","type":"uint256"},{"internalType":"uint256","name":"wager","type":"uint256"},{"internalType":"uint256","name":"bonus","type":"uint256"},{"internalType":"uint168","name":"blockNum","type":"uint168"},{"internalType":"address","name":"player","type":"address"},{"internalType":"bool","name":"isHigher","type":"bool"},{"internalType":"bool","name":"isSettled","type":"bool"}],"internalType":"struct GameBase.Bet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"certifieds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isCertified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);