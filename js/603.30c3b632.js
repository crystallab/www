(self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[]).push([[603],{85990:(e,t,a)=>{"use strict";a.d(t,{v:()=>i});var n=a(7363),l=a(80364),s=a.n(l),r=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function r(e){try{o(n.next(e))}catch(t){s(t)}}function i(e){try{o(n["throw"](e))}catch(t){s(t)}}function o(e){e.done?a(e.value):l(e.value).then(r,i)}o((n=n.apply(e,t||[])).next())}))};const i=(0,n.Q_)("web3",{state:()=>({account:"",web3Instance:new(s()),web3:new(s()),currentNetIndex:0,networks:[{name:"Polygon",icon:"chains/polygon.svg",id:137,tokenName:"Polygon",symbol:"MATIC",rpcUrl:"https://rpc-mainnet.matic.network",wssUrl:"wss://speedy-nodes-nyc.moralis.io/b5f9b7819c4d900487735b6a/polygon/mainnet/ws",explorer:"https://polygonscan.com/"},{name:"Mumbai",icon:"chains/mumbai.svg",id:80001,tokenName:"Polygon Mumbai",symbol:"MATIC",rpcUrl:"https://rpc-mumbai.matic.today",wssUrl:"wss://matic-testnet-archive-ws.bwarelabs.com",explorer:"https://mumbai.polygonscan.com/"}]}),getters:{currentNetwork:e=>e.networks[e.currentNetIndex],accountAddr:e=>e.account},actions:{initWeb3(e){this.currentNetIndex=e;const t={reconnect:{auto:!0,delay:5e3,maxAttempts:5,onTimeout:!1}},a=new(s().providers.WebsocketProvider)(this.networks[e].wssUrl,t);this.web3Instance=new(s())(this.networks[e].rpcUrl),this.web3Instance=new(s())(window.ethereum||this.networks[e].rpcUrl),this.web3Instance.setProvider(a),this.web3=new(s())(window.ethereum||this.networks[e].rpcUrl)},login(e){return r(this,void 0,void 0,(function*(){this.account=e}))}}})},28488:(e,t,a)=>{"use strict";a.d(t,{c4:()=>r,ol:()=>i,sC:()=>s});var n=a(85990);const l=(0,n.v)();function s(e,t=4,a=!1){const n=e.substr(0,2+t),l=e.slice(0-t);return a?n:n+"..."+l}function r(e){navigator.clipboard.writeText(e)}function i(e,t=-1,a="address"){let n=l.currentNetwork.explorer;t>=0&&(n=l.networks[t].explorer);const s=n+a+"/"+e;return s}},4945:(e,t,a)=>{"use strict";a.d(t,{Z:()=>T});var n=a(59835),l=a(86970);const s=e=>((0,n.dD)("data-v-5b660cba"),e=e(),(0,n.Cn)(),e),r=s((()=>(0,n._)("img",{src:"chains/polygon.svg"},null,-1))),i={style:{"margin-left":"0px",height:"20px"}},o={href:"https://faucet.polygon.technology/",target:"_blank",class:"text-white",style:{"text-decoration":"none"}},u=(0,n.Uk)(" Get more ");function d(e,t,a,s,d,c){const p=(0,n.up)("q-icon"),m=(0,n.up)("q-avatar"),y=(0,n.up)("q-btn"),w=(0,n.up)("q-chip"),b=(0,n.up)("q-page-sticky");return(0,n.wg)(),(0,n.j4)(b,{position:"top-right",offset:[16,0],style:{"z-index":"999"}},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{color:"primary","text-color":"white",dense:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"white","text-color":"white"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1}),(0,n.Wm)(y,{flat:"",dense:"","no-caps":""},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,l.zw)(e.balance+" MATIC"),1)])),_:1})])),_:1}),1==e.store.currentNetIndex?((0,n.wg)(),(0,n.j4)(y,{key:0,flat:"",dense:"",style:{"padding-left":"0px"}},{default:(0,n.w5)((()=>[(0,n._)("div",i,[(0,n._)("a",o,[(0,n.Wm)(p,{name:"las la-plus-circle"}),u])])])),_:1})):(0,n.kq)("",!0)])),_:1})}var c=a(60499),p=a(85990),m=a(17779),y=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function r(e){try{o(n.next(e))}catch(t){s(t)}}function i(e){try{o(n["throw"](e))}catch(t){s(t)}}function o(e){e.done?a(e.value):l(e.value).then(r,i)}o((n=n.apply(e,t||[])).next())}))};const w=(0,n.aZ)({name:"BalanceView",setup(){const e=(0,p.v)(),t=(0,c.iH)("0.00");function a(){return y(this,void 0,void 0,(function*(){const a=e.accountAddr;e.web3.utils.isAddress(a),e.web3.eth.getBalance(a).then((a=>{t.value=parseFloat(e.web3.utils.fromWei(a)).toPrecision(8)})).catch((e=>{m.log("getBalance: ",e)}))}))}return{getBalance:a,store:e,balance:t}},beforeMount(){setInterval(this.getBalance,2e3)}});var b=a(11639),f=a(30627),g=a(57691),v=a(61357),h=a(22857),_=a(68879),x=a(32045),k=a(69984),W=a.n(k);const B=(0,b.Z)(w,[["render",d],["__scopeId","data-v-5b660cba"]]),T=B;W()(w,"components",{QPageSticky:f.Z,QChip:g.Z,QAvatar:v.Z,QIcon:h.Z,QBtn:_.Z,QBtnDropdown:x.Z})},15347:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ct});var n=a(59835),l=a(86970);const s={class:"q-pa-md",style:{width:"100%","max-width":"1439px"}},r=(0,n._)("br",null,null,-1),i={class:"no-padding"},o={class:"row justify-center",style:{"max-width":"1439px"}},u={class:"col-auto q-pa-xs"},d={class:"col-auto q-pa-xs"},c={class:"col-auto q-pa-xs"},p={class:"col-auto q-pa-xs"},m={class:"row justify-center",style:{"max-width":"1439px"}},y={class:"col-6 q-pa-xs"},w={class:"row items-center no-wrap"},b={class:"text-center"},f=(0,n.Uk)(" Roll LO"),g=(0,n._)("br",null,null,-1),v={class:"col-6 q-pa-xs"},h={class:"row items-center no-wrap"},_={class:"text-center"},x=(0,n.Uk)(" Roll HI"),k=(0,n._)("br",null,null,-1),W={class:"q-gutter-y-md",style:{"max-width":"1439px"}},B={class:"my-table-details"},T=["href"],C={class:"cursor-pointer"},I={class:"my-table-details"},P={class:"row items-center no-wrap"},S={class:"text-center"},q=["href"],A={class:"cursor-pointer"},H={class:"my-table-details"},z={class:"row items-center no-wrap"},M={class:"my-table-details"},Z={class:"my-table-details"},Q={class:"row items-center no-wrap"},U={class:"my-table-details"},V={class:"text-h5 text-center"},N={class:"text-center",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},F={class:"my-table-details"},R={class:"text-h5 text-left"},D={class:"text-left",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},E={class:"my-table-details"},O={class:"row items-center no-wrap"},j={class:"text-center"},L=(0,n._)("br",null,null,-1),G=["href"],J={class:"cursor-pointer"},X={class:"my-table-details"},K={class:"row items-center no-wrap"},Y={class:"my-table-details"},$={class:"my-table-details"},ee={class:"row items-center no-wrap"},te={class:"my-table-details"},ae={class:"text-h5 text-center"},ne={class:"text-center",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},le={class:"my-table-details"},se={class:"text-h5 text-left"},re={class:"text-left",style:{"padding-top":"10px","padding-left":"30px",position:"absolute"}},ie=(0,n._)("span",{class:"text-h6 q-ml-sm"},"Crystal Dice",-1),oe={class:"q-pa-xs"},ue=(0,n._)("img",{src:"chains/polygon.svg"},null,-1),de={class:"text-primary text-h3"},ce={class:"text-primary"},pe={key:0,class:"text-h5 text-left"},me={key:1,class:"text-left text-red"},ye=["href"],we={class:"cursor-pointer"},be={class:"cursor-pointer"},fe=(0,n._)("br",null,null,-1),ge=["href"],ve={class:"cursor-pointer"},he=(0,n._)("br",null,null,-1),_e=(0,n._)("a",null,[(0,n._)("span",{class:"cursor-pointer"}," You can close this dialog and when the dice result is available it will appear in your betting history table. ")],-1),xe={class:"cursor-pointer"},ke=(0,n._)("span",{class:"cursor-pointer"},(0,l.zw)(" Result: "),-1),We={class:"text-h5 cursor-pointer"},Be={class:"text-subtitle cursor-pointer"},Te=(0,n._)("br",null,null,-1),Ce=["href"],Ie={class:"cursor-pointer"},Pe=(0,n._)("br",null,null,-1),Se=["href"],qe={class:"cursor-pointer"},Ae=(0,n._)("span",{class:"text-h6 q-ml-sm"},"Incorrect blockchain",-1),He=(0,n._)("span",{class:"q-ml-sm"},"You are currently not connected to the correct network.",-1);function ze(e,t,a,ze,Me,Ze){const Qe=(0,n.up)("q-btn"),Ue=(0,n.up)("q-input"),Ve=(0,n.up)("q-btn-group"),Ne=(0,n.up)("q-tab"),Fe=(0,n.up)("q-tabs"),Re=(0,n.up)("q-separator"),De=(0,n.up)("q-td"),Ee=(0,n.up)("q-table"),Oe=(0,n.up)("q-tab-panel"),je=(0,n.up)("q-tab-panels"),Le=(0,n.up)("q-card"),Ge=(0,n.up)("q-space"),Je=(0,n.up)("q-card-section"),Xe=(0,n.up)("q-icon"),Ke=(0,n.up)("q-breadcrumbs-el"),Ye=(0,n.up)("q-breadcrumbs"),$e=(0,n.up)("q-step"),et=(0,n.up)("q-linear-progress"),tt=(0,n.up)("q-stepper-navigation"),at=(0,n.up)("q-stepper"),nt=(0,n.up)("q-dialog"),lt=(0,n.up)("q-avatar"),st=(0,n.up)("q-card-actions"),rt=(0,n.up)("BalanceView"),it=(0,n.up)("q-page"),ot=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(it,{class:"row justify-evenly"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[r,(0,n._)("div",i,[(0,n._)("div",o,[(0,n._)("div",u,[(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{class:"fixed-width-100",color:"brown",label:"Payout"}),(0,n.Wm)(Ue,{filled:"",type:"number",modelValue:e.payout,"onUpdate:modelValue":t[0]||(t[0]=t=>e.payout=t),modelModifiers:{number:!0},suffix:"x",dense:"",debounce:"200",onChange:t[1]||(t[1]=t=>e.updateInputs(0))},null,8,["modelValue"])])),_:1})])]),(0,n._)("div",d,[(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{class:"fixed-width-100",color:"brown",label:"Profit"}),(0,n.Wm)(Ue,{filled:"",type:"number",modelValue:e.profit,"onUpdate:modelValue":t[2]||(t[2]=t=>e.profit=t),modelModifiers:{number:!0},suffix:e.token,dense:"",debounce:"200",onChange:t[3]||(t[3]=t=>e.updateInputs(1))},null,8,["modelValue","suffix"])])),_:1})])]),(0,n._)("div",c,[(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{class:"fixed-width-100",color:"brown",label:"Chance"}),(0,n.Wm)(Ue,{filled:"",type:"number",modelValue:e.chance,"onUpdate:modelValue":t[4]||(t[4]=t=>e.chance=t),modelModifiers:{number:!0},suffix:"%",dense:"",debounce:"200",onChange:t[5]||(t[5]=t=>e.updateInputs(2))},null,8,["modelValue"])])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown",label:"MIN",onClick:t[6]||(t[6]=t=>e.setChanceInputs(0))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown","icon-right":"las la-minus",onClick:t[7]||(t[7]=t=>e.setChanceInputs(1))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown","icon-right":"las la-plus",onClick:t[8]||(t[8]=t=>e.setChanceInputs(2))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown",label:"MAX",onClick:t[9]||(t[9]=t=>e.setChanceInputs(3))})])),_:1})])]),(0,n._)("div",p,[(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{class:"fixed-width-100",color:"brown",label:"Wager"}),(0,n.Wm)(Ue,{align:"right",filled:"",type:"number",modelValue:e.wager,"onUpdate:modelValue":t[10]||(t[10]=t=>e.wager=t),modelModifiers:{number:!0},suffix:e.token,dense:"",debounce:"200",onChange:t[11]||(t[11]=t=>e.updateInputs(3))},null,8,["modelValue","suffix"])])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(Ve,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown",label:"MIN",onClick:t[12]||(t[12]=t=>e.setWagerInputs(0))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown","icon-right":"las la-divide",onClick:t[13]||(t[13]=t=>e.setWagerInputs(1))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown","icon-right":"las la-times",onClick:t[14]||(t[14]=t=>e.setWagerInputs(2))}),(0,n.Wm)(Qe,{outline:"",dense:"",color:"brown",label:"MAX",onClick:t[15]||(t[15]=t=>e.setWagerInputs(3))})])),_:1})])])]),(0,n._)("div",m,[(0,n._)("div",y,[(0,n.Wm)(Ve,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{outline:"",color:"brown",size:"xl","no-caps":"",dense:"",onClick:t[16]||(t[16]=t=>e.setBet(e.contract,!1))},{default:(0,n.w5)((()=>[(0,n._)("div",w,[(0,n._)("div",b,[f,g,(0,n.Uk)(" <"+(0,l.zw)(e.loThan.toFixed(4)),1)])])])),_:1})])),_:1})]),(0,n._)("div",v,[(0,n.Wm)(Ve,{outline:"",spread:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{outline:"",color:"brown",size:"xl","no-caps":"",dense:"",onClick:t[17]||(t[17]=t=>e.setBet(e.contract,!0))},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n._)("div",_,[x,k,(0,n.Uk)(" >"+(0,l.zw)(e.hiThan.toFixed(4)),1)])])])),_:1})])),_:1})])])]),(0,n._)("div",W,[(0,n.Wm)(Le,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Fe,{modelValue:e.tab,"onUpdate:modelValue":t[18]||(t[18]=t=>e.tab=t),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,n.w5)((()=>[(0,n.Wm)(Ne,{name:"allBets",label:"All Bets"}),(0,n.Wm)(Ne,{name:"myBets",label:"My Bets"})])),_:1},8,["modelValue"]),(0,n.Wm)(Re),(0,n.Wm)(je,{modelValue:e.tab,"onUpdate:modelValue":t[19]||(t[19]=t=>e.tab=t),animated:"",class:"no-padding-panel"},{default:(0,n.w5)((()=>[(0,n.Wm)(Oe,{name:"allBets"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(Ee,{"virtual-scroll":"","rows-per-page-options":[50],"hide-bottom":"",class:"my-sticky-header-table",rows:e.allBets,columns:e.columns,"row-key":"id",key:e.betsNum,loading:e.loading},{"body-cell-player":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",B,[(0,n.Wm)(Qe,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.linkAddress(t.row.account),target:"_blank",class:"text-grey-6"},[(0,n._)("span",C,(0,l.zw)(e.shortAddress(t.row.account,6,!0)),1)],8,T)])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-id":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",I,[(0,n.Wm)(Qe,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",P,[(0,n._)("div",S,[(0,n._)("a",{href:e.linkAddress(t.row.tx,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",A,(0,l.zw)("tx: "+e.shortAddress(t.row.tx,4,!0)),1)],8,q)])])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-profit":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",H,[(0,n.Wm)(Qe,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",z,[(0,n._)("div",{class:(0,l.C_)("text-center "+(t.value>0?"texte-white":"text-deep-orange"))},(0,l.zw)(t.value>0?"+ "+parseFloat((t.value-t.row.wager).toPrecision(4)):"- "+parseFloat((t.row.wager-0).toPrecision(4)))+" "+(0,l.zw)(" "+e.token),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",M,(0,l.zw)(parseFloat((t.value-0).toPrecision(4))+" "+e.token),1)])),_:2},1032,["props"])])),"body-cell-symbol":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n.Wm)(Qe,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",Q,[(0,n._)("div",{class:(0,l.C_)("text-center "+(e.row.profit>0?"texte-white":"text-deep-orange"))},(0,l.zw)(e.value),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-lucky":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",U,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",V,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",N,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",F,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",R,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",D,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])),(0,n._)("li",null,"Last bet: "+(0,l.zw)(e.allBets.length>0?e.allBets[0].id:"?"),1)])),_:1}),(0,n.Wm)(Oe,{name:"myBets"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(Ee,{"virtual-scroll":"","rows-per-page-options":[50],"hide-bottom":"",class:"my-sticky-header-table",rows:e.myBets,columns:e.mycolumns,"row-key":"id",key:e.betsNum,loading:e.loading},{"body-cell-id":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",E,[(0,n.Wm)(Qe,{color:"deep-orange",flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",O,[(0,n._)("div",j,[(0,n.Uk)((0,l.zw)(t.value),1),L,(0,n._)("a",{href:e.linkAddress(t.row.tx,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",J,(0,l.zw)("tx: "+e.shortAddress(t.row.tx,4,!0)),1)],8,G)])])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-profit":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",X,[(0,n.Wm)(Qe,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",K,[(0,n._)("div",{class:(0,l.C_)("text-center "+(t.value>0?"texte-white":"text-deep-orange"))},(0,l.zw)(t.value>0?"+ "+parseFloat((t.value-t.row.wager).toPrecision(4)):"- "+parseFloat((t.row.wager-0).toPrecision(4)))+" "+(0,l.zw)(" "+e.token),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-wager":(0,n.w5)((t=>[(0,n.Wm)(De,{props:t},{default:(0,n.w5)((()=>[(0,n._)("div",Y,(0,l.zw)(parseFloat((t.value-0).toPrecision(4))+" "+e.token),1)])),_:2},1032,["props"])])),"body-cell-symbol":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",$,[(0,n.Wm)(Qe,{flat:"","no-caps":"",dense:""},{default:(0,n.w5)((()=>[(0,n._)("div",ee,[(0,n._)("div",{class:(0,l.C_)("text-center "+(e.row.profit>0?"texte-white":"text-deep-orange"))},(0,l.zw)(e.value),3)])])),_:2},1024)])])),_:2},1032,["props"])])),"body-cell-lucky":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",te,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",ae,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",ne,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),"body-cell-target":(0,n.w5)((e=>[(0,n.Wm)(De,{props:e},{default:(0,n.w5)((()=>[(0,n._)("div",le,[(0,n._)("div",{class:(0,l.C_)("row text-center "+(e.row.profit>0?"texte-white":"text-deep-orange")),style:{"align-items":"baseline"}},[(0,n._)("div",se,(0,l.zw)(e.value.substring(0,2)),1),(0,n._)("div",re,(0,l.zw)("."+e.value.substring(2,6)),1)],2)])])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])),(0,n._)("li",null,"Last bet: "+(0,l.zw)(e.myBets.length>0?e.myBets[0].id:"?"),1)])),_:1})])),_:1},8,["modelValue"])])),_:1})]),(0,n.Wm)(nt,{modelValue:e.signBet,"onUpdate:modelValue":t[22]||(t[22]=t=>e.signBet=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(Le,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Je,{class:"q-pa-xs row items-center q-pb-none"},{default:(0,n.w5)((()=>[ie,(0,n.Wm)(Ge),(0,n.wy)((0,n.Wm)(Qe,{icon:"close",flat:"",round:"",dense:""},null,512),[[ot]])])),_:1}),(0,n.Wm)(Je,{class:"row items-center q-pa-xs"},{default:(0,n.w5)((()=>[(0,n._)("div",oe,[(0,n.Wm)(Ye,null,{separator:(0,n.w5)((()=>[(0,n.Wm)(Xe,{size:"1.5em",name:"las la-dice",color:"primary"})])),default:(0,n.w5)((()=>[(0,n.Wm)(Ke,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{flat:"",dense:"","no-caps":""},{default:(0,n.w5)((()=>[(0,n.Wm)(Xe,{left:""},{default:(0,n.w5)((()=>[ue])),_:1}),(0,n._)("div",null,(0,l.zw)(e.wager+" MATIC"),1)])),_:1})])),_:1}),(0,n.Wm)(Ke,null,{default:(0,n.w5)((()=>[(0,n._)("div",de,(0,l.zw)(e.betToSign.substring(0,3)),1),(0,n._)("div",ce,(0,l.zw)(e.betToSign.substring(3,8)),1)])),_:1})])),_:1}),(0,n.Wm)(at,{modelValue:e.betStep,"onUpdate:modelValue":t[21]||(t[21]=t=>e.betStep=t),vertical:"",color:"primary",animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)($e,{name:1,title:"Sign Transaction",icon:"las la-wallet",done:e.betStep>1,error:e.signBetErr.length>0},{default:(0,n.w5)((()=>[""==e.signBetErr?((0,n.wg)(),(0,n.iD)("div",pe)):((0,n.wg)(),(0,n.iD)("div",me,(0,l.zw)(e.signBetErr),1))])),_:1},8,["done","error"]),(0,n.Wm)($e,{name:2,title:"Send Transaction",icon:"las la-receipt",done:e.betStep>2},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.linkAddress(e.signBetHash,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",we,(0,l.zw)("tx hash: "+e.shortAddress(e.signBetHash,6,!1)),1)],8,ye),(0,n.Wm)(et,{dark:"",rounded:"",indeterminate:"",color:"secondary",class:"q-mt-sm"})])),_:1},8,["done"]),(0,n.Wm)($e,{name:3,title:"Waiting for Result",icon:"las la-hourglass-half",done:e.betStep>3},{default:(0,n.w5)((()=>[(0,n._)("a",null,[(0,n._)("span",be,(0,l.zw)("BetID: #"+e.currentBetID),1)]),fe,(0,n._)("a",{href:e.linkAddress(e.signBetHash,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",ve,(0,l.zw)("tx hash: "+e.shortAddress(e.signBetHash,6,!1)),1)],8,ge),(0,n.Wm)(et,{dark:"",rounded:"",indeterminate:"",color:"secondary",class:"q-mt-sm"}),he,_e])),_:1},8,["done"]),(0,n.Wm)($e,{name:4,title:"Dice Result",icon:"las la-trophy"},{default:(0,n.w5)((()=>[(0,n._)("span",xe,(0,l.zw)("Bet ID: "+e.currentBetResult[0].id),1),(0,n._)("div",null,[ke,(0,n._)("span",We,(0,l.zw)(e.currentBetResult[0].lucky.substring(0,2)),1),(0,n._)("span",Be,(0,l.zw)("."+e.currentBetResult[0].lucky.substring(2,6)),1)]),(0,n._)("div",{class:(0,l.C_)(" "+(parseFloat(e.currentBetResult[0].profit)>0?"texte-white":"text-deep-orange"))},(0,l.zw)(parseFloat(e.currentBetResult[0].profit)>0?"+ "+parseFloat((parseFloat(e.currentBetResult[0].profit)-parseFloat(e.currentBetResult[0].wager)).toPrecision(4)):"- "+parseFloat((parseFloat(e.currentBetResult[0].wager)-0).toPrecision(4)))+" "+(0,l.zw)(" "+e.token),3),Te,(0,n._)("a",{href:e.linkAddress(e.signBetHash,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",Ie,(0,l.zw)("Bet tx hash: "+e.shortAddress(e.signBetHash,4,!1)),1)],8,Ce),Pe,(0,n._)("a",{href:e.linkAddress(e.currentBetResult[0].tx,e.network,"tx"),target:"_blank",class:"text-grey-6"},[(0,n._)("span",qe,(0,l.zw)("Dice tx hash: "+e.shortAddress(e.currentBetResult[0].tx,4,!1)),1)],8,Se),(0,n.Wm)(tt,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Qe,{onClick:t[20]||(t[20]=t=>e.signBet=!1),color:"primary",label:"OK",class:"q-ml-sm full-width"})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(nt,{modelValue:e.switchNet,"onUpdate:modelValue":t[23]||(t[23]=t=>e.switchNet=t),persistent:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Le,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Je,{class:"row items-center q-pb-none"},{default:(0,n.w5)((()=>[(0,n.Wm)(lt,{icon:"signal_wifi_off",color:"primary","text-color":"white",size:"xs"}),Ae,(0,n.Wm)(Ge),(0,n.wy)((0,n.Wm)(Qe,{icon:"close",flat:"",round:"",dense:""},null,512),[[ot]])])),_:1}),(0,n.Wm)(Je,{class:"row items-center"},{default:(0,n.w5)((()=>[He])),_:1}),(0,n.Wm)(st,{align:"right"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(Qe,{class:"full-width",label:"Switch",color:"primary",onClick:e.switchNetwork},null,8,["onClick"]),[[ot]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,n.Wm)(rt)])),_:1})}var Me=a(60499),Ze=a(85990),Qe=a(19302),Ue=a(65457),Ve=a(28488),Ne=a(4945),Fe=a(17779),Re=function(e,t,a,n){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,s){function r(e){try{o(n.next(e))}catch(t){s(t)}}function i(e){try{o(n["throw"](e))}catch(t){s(t)}}function o(e){e.done?a(e.value):l(e.value).then(r,i)}o((n=n.apply(e,t||[])).next())}))};const De=a(57841),Ee={title:"Crystal - Dice"},Oe=[{name:"player",label:"Player",field:"player",align:"center"},{name:"id",label:"Bet ID",field:"id",align:"center"},{name:"profit",label:"Profit",field:"profit",align:"center"},{name:"wager",label:"Wager",field:"wager",align:"center"},{name:"lucky",label:"Lucky",field:"lucky",align:"center"},{name:"symbol",label:"",field:"symbol",align:"center"},{name:"target",label:"Target",field:"target",align:"center"},{name:"end",label:"",field:"end",align:"center"}],je=[{name:"profit",label:"Profit",field:"profit",align:"center"},{name:"wager",label:"Wager",field:"wager",align:"center"},{name:"lucky",label:"Lucky",field:"lucky",align:"center"},{name:"symbol",label:"",field:"symbol",align:"center"},{name:"target",label:"Target",field:"target",align:"center"},{name:"end",label:"",field:"end",align:"center"},{name:"id",label:"Bet ID",field:"id",align:"center"}];function Le(e){Fe.log("Switch network: ",(0,Ze.v)().networks[e].name,(0,Ze.v)().networks[e].id),(0,Ze.v)().initWeb3(e)}const Ge=(0,n.aZ)({name:"DicePage",components:{BalanceView:Ne.Z},setup(){const e=(0,Qe.Z)();e.dark.set(!0),(0,Ue.Z)(Ee);const t=(0,Me.iH)(256e5),a=(0,Me.iH)(0),n=(0,Ze.v)(),l=(0,Me.iH)(!1),s=(0,Me.iH)(!1),r=(0,Me.iH)(0);let i=[],o=[];const u=(0,Me.iH)(.1),d=(0,Me.iH)(9999),c=(0,Me.iH)(2),p=(0,Me.iH)(1),m=(0,Me.iH)(49.5),y=(0,Me.iH)(1),w=(0,Me.iH)(49.5),b=(0,Me.iH)(50.4999),f=(0,Me.iH)(!1),g=(0,Me.iH)(!1),v=(0,Me.iH)(""),h=(0,Me.iH)(""),_=(0,Me.iH)(1),x=(0,Me.iH)(""),k=(0,Me.iH)(""),W=[];function B(e){switch(e){case 0:c.value>99e4&&(c.value=99e4),c.value<1&&(c.value=1),p.value=parseFloat((y.value*(c.value-1)).toPrecision(8)),p.value<0&&(p.value=0),m.value=parseFloat((99/c.value).toPrecision(8)),w.value=m.value,b.value=100-m.value-1e-4;break;case 1:p.value<0&&(p.value=0),p.value=parseFloat(p.value.toPrecision(8)),y.value=parseFloat((p.value/(c.value-1)).toPrecision(8)),B(3);break;case 2:m.value>99.9998&&(m.value=99.9998),m.value<1e-4&&(m.value=1e-4),c.value=parseFloat((99/m.value).toPrecision(8)),p.value=parseFloat((99*y.value/m.value-y.value).toPrecision(8)),p.value<0&&(p.value=0),w.value=m.value,b.value=100-m.value-1e-4;break;case 3:y.value>d.value&&(y.value=d.value),y.value<u.value&&(y.value=u.value),p.value=parseFloat((99*y.value/m.value-y.value).toPrecision(8)),p.value<0&&(p.value=0);break;default:break}}function T(e){switch(e){case 0:m.value=1e-4;break;case 1:m.value=Math.round(m.value+.4999),m.value-=1;break;case 2:m.value=Math.round(m.value-.4999),m.value+=1;break;case 3:m.value=99.9998;break;default:break}B(2)}function C(e){switch(e){case 0:y.value=u.value;break;case 1:y.value/=2;break;case 2:y.value*=2;break;case 3:y.value=d.value;break;default:break}B(3)}function I(e,t){var a="0";for(let n=0;n<e.length;n++){const l=e[n];if(l.address==t){Fe.log(l),a=(0,Ze.v)().web3.eth.abi.decodeParameter("uint256",l.topics[1]).toString(),Fe.log("betId: #",a),k.value=a.toString();break}}return parseInt(a)}function P(){return Re(this,void 0,void 0,(function*(){const e=yield(0,Ze.v)().web3.eth.net.getId().then((e=>(Fe.log(e),e))).catch((e=>(Fe.log("checkNetwork: ",e),-1)));return e}))}function S(e,t){return Re(this,void 0,void 0,(function*(){if(!(0,Ze.v)().web3.utils.isAddress((0,Ze.v)().accountAddr))return void alert("Need Connect Wallet!");const n=yield P();if(n!=(0,Ze.v)().networks[a.value].id)return Fe.log(n,"!=",(0,Ze.v)().networks[a.value].id),void(f.value=!0);const l=(0,Ze.v)().web3,s=new l.eth.Contract(De,e),r=t,i=r?b.value:w.value,o=(1e4*i).toFixed(0).toString();Fe.log("setBet(",e,",",o,",",r,")"),v.value="",h.value="",_.value=1,g.value=!0,x.value=r?">"+b.value.toFixed(4).toString().padStart(7,"0"):"<"+w.value.toFixed(4).toString().padStart(7,"0");let u=s.methods.placeBet(l.utils.toHex(o.toString()),r),d=u.encodeABI();l.eth.estimateGas({from:(0,Ze.v)().account,to:e,value:l.utils.toWei(y.value.toString(),"ether"),data:d}).then((function(t){Fe.log("gasAmount: ",t),l.eth.sendTransaction({from:(0,Ze.v)().account,to:e,value:l.utils.toWei(y.value.toString(),"ether"),gas:parseInt((1.05*t).toString()),gasPrice:36e9,data:d}).on("transactionHash",(e=>{Fe.log("transactionHash: ",e),_.value=2,h.value=e})).on("receipt",(t=>{const a=I(t.logs,e);A(e,a),_.value=3})).on("error",(e=>{Fe.log("tx placeBet ",e),v.value=e.message}))})).catch((function(e){Fe.log("estimateGas: ",e);let t=e.message.toString(),a=t.split(".")[1],n=JSON.parse(a),l=n.message.split(":");v.value=l[0]+": "+l[1]}))}))}function q(){return Re(this,void 0,void 0,(function*(){const e=(0,Ze.v)().networks[a.value].id,t=(0,Ze.v)().networks[a.value].name,n=(0,Ze.v)().networks[a.value].tokenName,l=(0,Ze.v)().networks[a.value].symbol,s=(0,Ze.v)().networks[a.value].rpcUrl,r=(0,Ze.v)().networks[a.value].explorer,i="0x"+e.toString(16);if("undefined"!==typeof window.ethereum)try{yield window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]}),location.reload()}catch(o){if(Fe.log(o),4902===o.code){Fe.log("Add Chain");try{yield window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:t,nativeCurrency:{name:n,symbol:l,decimals:18},rpcUrls:[s],blockExplorerUrls:[r]}]}),location.reload()}catch(u){alert(u.message)}}else alert(o.message)}}))}function A(e,t){return Re(this,void 0,void 0,(function*(){Fe.log(t);const a=(0,Ze.v)().web3Instance,n=new a.eth.Contract(De,e);n.once("BetSettled",{filter:{betId:[t]},fromBlock:0},(function(e,n){if(e)Fe.log(e);else{Fe.log(n);const e=n.returnValues,l=e.result,s=e.target,r={player:"Player",account:(0,Ze.v)().accountAddr,id:"#"+t,tx:n.transactionHash,profit:a.utils.fromWei(e.bonus,"ether"),wager:a.utils.fromWei(e.wager,"ether"),lucky:l.padStart(6,"0"),symbol:e.isHigher?">":"<",target:s.padStart(6,"0"),end:""};W[0]=r,_.value=4}}))}))}function H(e){return Re(this,void 0,void 0,(function*(){let t=[],n={anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"betId",type:"uint256"},{indexed:!0,internalType:"address",name:"player",type:"address"},{indexed:!1,internalType:"uint256",name:"target",type:"uint256"},{indexed:!1,internalType:"bool",name:"isHigher",type:"bool"},{indexed:!1,internalType:"uint256",name:"result",type:"uint256"},{indexed:!1,internalType:"uint256",name:"wager",type:"uint256"},{indexed:!1,internalType:"uint256",name:"bonus",type:"uint256"}],name:"BetSettled",type:"event"};const l=(0,Ze.v)().networks[a.value].id.toString(16);let s="https://deep-index.moralis.io/api/v2/"+e+"/events?chain=0x"+l+"&topic=0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91&limit=50";const r="P7uumCBPmmsUQpBtobMA5wALqy3Pfiem11L0D7siP8G4zlcmSqpjmZo3MOiHdz51";return yield fetch(s,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":r},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{t=e.result})).catch((e=>{Fe.error("Error:",e)})),t}))}function z(e,t){return Re(this,void 0,void 0,(function*(){let n=[];const l=(0,Ze.v)().networks[a.value].id.toString(16);let s="https://deep-index.moralis.io/api/v2/"+e+"/logs?chain=0x"+l+"&topic0=0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91";if(t.length>0){const e=(0,Ze.v)().web3.eth.abi.encodeParameter("address",t);s=s+"&topic2="+e}s+="&limit=50";const r="P7uumCBPmmsUQpBtobMA5wALqy3Pfiem11L0D7siP8G4zlcmSqpjmZo3MOiHdz51";return yield fetch(s,{method:"GET",headers:{"Content-Type":"application/json","x-api-key":r}}).then((e=>e.json())).then((e=>{n=e.result})).catch((e=>{Fe.error("Error:",e)})),n}))}return{shortAddress:Ve.sC,copyAddress:Ve.c4,linkAddress:Ve.ol,store:n,network:a,switchNet:f,signBet:g,signBetErr:v,signBetHash:h,betToSign:x,betStep:_,currentBetID:k,currentBetResult:W,fromBlock:t,contract:"0xe5831dE9aaC7b578E9a944c0AfE84948a27799a4",token:"MATIC",minBet:u,maxBet:d,columns:Oe,mycolumns:je,tab:(0,Me.iH)("allBets"),loading:l,myloading:s,betsNum:r,allBets:i,myBets:o,payout:c,profit:p,chance:m,wager:y,loThan:w,hiThan:b,updatebets(e){return Re(this,void 0,void 0,(function*(){const t=(0,Ze.v)().web3Instance,a=[{name:"target",type:"uint256"},{name:"isHigher",type:"bool"},{name:"result",type:"uint256"},{name:"wager",type:"uint256"},{name:"bonus",type:"uint256"}];l.value=!0,s.value=!0,t.utils.isAddress((0,Ze.v)().accountAddr)&&(yield z(e,(0,Ze.v)().accountAddr).then((e=>{for(let n=0;n<e.length;n++){const l=e[n],s=t.eth.abi.decodeParameters(a,l.data),i=t.eth.abi.decodeParameter("uint256",l.topic1),u=s.result,d=s.target,c={player:"Player",account:(0,Ze.v)().accountAddr,id:"#"+i,tx:l.transaction_hash,profit:t.utils.fromWei(s.bonus,"ether"),wager:t.utils.fromWei(s.wager,"ether"),lucky:u.padStart(6,"0"),symbol:s.isHigher?">":"<",target:d.padStart(6,"0"),end:""};let p=!1;for(let e=o.length>50?50-o.length:0;e<o.length;e++){const t=o[e];if(t==c){p=!0;break}}p||(o.push(c),r.value++)}s.value=!1})).catch((e=>{Fe.error("Error:",e)}))),yield H(e).then((e=>{for(let a=0;a<e.length;a++){const n=e[a],l=n.data,s=l.result,o=l.target,u={player:"Player",account:l.player,id:"#"+l.betId,tx:n.transaction_hash,profit:t.utils.fromWei(l.bonus,"ether"),wager:t.utils.fromWei(l.wager,"ether"),lucky:s.padStart(6,"0"),symbol:l.isHigher?">":"<",target:o.padStart(6,"0"),end:""};let d=!1;for(let e=i.length>50?50-i.length:0;e<i.length;e++){const t=i[e];if(t==u){d=!0;break}}d||(i.push(u),r.value++)}l.value=!1})).catch((e=>{Fe.error("Error:",e)})),t.eth.subscribe("logs",{address:e,topics:["0x69ef50ac9d3697aab720ade98001b12f84b799e9ee63436fd5e2f11b0441fb91"]},(function(e,a){if(e)Fe.log(e);else{const e=[{name:"target",type:"uint256"},{name:"isHigher",type:"bool"},{name:"result",type:"uint256"},{name:"wager",type:"uint256"},{name:"bonus",type:"uint256"}];var n=t.eth.abi.decodeParameters(e,a.data);const l=t.eth.abi.decodeParameter("address",a.topics[2]).toString();let s={player:"Player",account:l,id:"#"+t.eth.abi.decodeParameter("uint256",a.topics[1]),tx:a.transactionHash,profit:t.utils.fromWei(n.bonus.toString(),"ether"),wager:t.utils.fromWei(n.wager.toString(),"ether"),lucky:n.result.toString().padStart(6,"0"),symbol:n.isHigher?">":"<",target:n.target.toString().padStart(6,"0"),end:""};i.unshift(s);let u=(0,Ze.v)().accountAddr;l.toUpperCase()===u.toUpperCase()&&(o.unshift(s),Fe.log(t.eth.abi.decodeParameter("address",a.topics[2])),Fe.log("#",t.eth.abi.decodeParameter("uint256",a.topics[1])," Bet ",t.utils.fromWei(n.wager.toString(),"ether")," on",n.isHigher?" HI > ":" LO < ",n.target),Fe.log("RESULT: ",n.result," BONUS: ",t.utils.fromWei(n.bonus.toString(),"ether"))),r.value++}}))}))},dealReceipt:I,updateInputs:B,setChanceInputs:T,setWagerInputs:C,setBet:S,switchNetwork:q,getBetById:A,getHistory:H,getUserHistory:z}},beforeMount(){Le(this.network),this.updatebets(this.contract)}});var Je=a(11639),Xe=a(69885),Ke=a(51663),Ye=a(81973),$e=a(67236),et=a(68879),tt=a(66611),at=a(44458),nt=a(47817),lt=a(70900),st=a(50926),rt=a(89800),it=a(84106),ot=a(5648),ut=a(67220),dt=a(20990),ct=a(32074),pt=a(63190),mt=a(90136),yt=a(72605),wt=a(22857),bt=a(28052),ft=a(8225),gt=a(98335),vt=a(21992),ht=a(8289),_t=a(61357),xt=a(11821),kt=a(62146),Wt=a(69984),Bt=a.n(Wt);const Tt=(0,Je.Z)(Ge,[["render",ze]]),Ct=Tt;Bt()(Ge,"components",{QPage:Xe.Z,QToolbar:Ke.Z,QToolbarTitle:Ye.Z,QBtnGroup:$e.Z,QBtn:et.Z,QInput:tt.Z,QCard:at.Z,QTabs:nt.Z,QTab:lt.Z,QSeparator:st.Z,QTabPanels:rt.Z,QTabPanel:it.Z,QTable:ot.Z,QTd:ut.Z,QBadge:dt.Z,QDialog:ct.Z,QCardSection:pt.Z,QSpace:mt.Z,QBreadcrumbs:yt.Z,QIcon:wt.Z,QBreadcrumbsEl:bt.Z,QStepper:ft.Z,QStep:gt.Z,QStepperNavigation:vt.Z,QLinearProgress:ht.Z,QAvatar:_t.Z,QCardActions:xt.Z}),Bt()(Ge,"directives",{ClosePopup:kt.Z})},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},27790:()=>{},52361:()=>{},94616:()=>{},6567:()=>{},57841:e=>{"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"rand","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"member","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"rollUnder","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"choice","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isBonus","type":"bool"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetRefunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"betId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"target","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isHigher","type":"bool"},{"indexed":false,"internalType":"uint256","name":"result","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wager","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"BetSettled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"added","type":"address"}],"name":"CertifiedAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removed","type":"address"}],"name":"CertifiedRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_target","type":"uint256"},{"internalType":"bool","name":"_higher","type":"bool"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setHouseEdgeBP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setMaxBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setMembership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMinBetAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setRandomNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"settleBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleGameIsLive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"betDetail","outputs":[{"components":[{"internalType":"uint256","name":"target","type":"uint256"},{"internalType":"uint256","name":"result","type":"uint256"},{"internalType":"uint256","name":"wager","type":"uint256"},{"internalType":"uint256","name":"bonus","type":"uint256"},{"internalType":"uint168","name":"blockNum","type":"uint168"},{"internalType":"address","name":"player","type":"address"},{"internalType":"bool","name":"isHigher","type":"bool"},{"internalType":"bool","name":"isSettled","type":"bool"}],"internalType":"struct GameBase.Bet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"certifieds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isCertified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);