"use strict";(self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[]).push([[922],{77922:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var a=n(59835),i=n(86970);const s=e=>((0,a.dD)("data-v-242165a3"),e=e(),(0,a.Cn)(),e),r={class:"row items-center justify-evenly",style:{width:"100%",position:"fixed"}},o=s((()=>(0,a._)("div",{class:"min-width-320 text-white text-h6 text-bold text-center"}," Dig Your Crystal ",-1))),l=s((()=>(0,a._)("div",{class:"min-width-320 text-white text-center"},"Coming soon...",-1))),u=s((()=>(0,a._)("div",{class:"self-center full-width no-outline",tabindex:"0"}," Member Points: ",-1))),d=s((()=>(0,a._)("div",{class:"self-center full-width no-outline",tabindex:"0"}," Points/Stone: ",-1))),c=(0,a.Uk)(" Go back "),p=s((()=>(0,a._)("span",{class:"text-h6 q-ml-sm"},"Incorrect blockchain",-1))),m=s((()=>(0,a._)("span",{class:"q-ml-sm"},"You are currently not connected to the correct network.",-1)));function y(e,t,n,s,y,f){const w=(0,a.up)("CrystalGem"),v=(0,a.up)("q-field"),b=(0,a.up)("q-btn"),h=(0,a.up)("q-card-section"),g=(0,a.up)("q-card"),k=(0,a.up)("q-avatar"),T=(0,a.up)("q-space"),_=(0,a.up)("q-card-actions"),x=(0,a.up)("q-dialog"),C=(0,a.up)("q-page"),M=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(C,{class:"row items-center justify-evenly"},{default:(0,a.w5)((()=>[(0,a._)("div",r,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(999,(e=>(0,a.Wm)(w,{key:e,nft:e-1,level:Math.floor(16*Math.random()),color:Math.floor(6*Math.random()),size:60,scale:.64*Math.random()+.36},null,8,["nft","level","color","scale"]))),64))]),(0,a.Wm)(g,{class:"bg-glass",style:{"max-width":"340px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"row q-gutter-sm justify-evenly"},{default:(0,a.w5)((()=>[o,l,(0,a.Wm)(v,{outlined:"","stack-label":"",label:"Play game to get more",readonly:"",class:"min-width-320"},{control:(0,a.w5)((()=>[u])),append:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.memberInfo.score.value),1)])),_:1}),(0,a.Wm)(v,{outlined:"",dense:"","stack-label":"",label:"The cost of digging once",readonly:"",class:"min-width-320"},{control:(0,a.w5)((()=>[d])),append:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.minerInfo.price.value),1)])),_:1}),(0,a._)("div",null," You Can Dig "+(0,i.zw)(Math.floor(parseInt(e.memberInfo.score.value)/parseInt(e.minerInfo.price.value)))+" Times ",1),(0,a.Wm)(b,{unelevated:"",color:"primary",class:"min-width-320",to:"/"},{default:(0,a.w5)((()=>[c])),_:1})])),_:1})])),_:1}),(0,a.Wm)(x,{modelValue:e.switchNet,"onUpdate:modelValue":t[1]||(t[1]=t=>e.switchNet=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"bg-glass"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{icon:"signal_wifi_off",color:"primary","text-color":"white",size:"xs"}),p,(0,a.Wm)(T),(0,a.wy)((0,a.Wm)(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[M]])])),_:1}),(0,a.Wm)(h,{class:"row items-center"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(_,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(b,{class:"full-width",label:"Switch",color:"primary",onClick:t[0]||(t[0]=t=>e.switchNetwork(e.netIndex))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var f=n(60499),w=n(19302),v=n(65457);const b=e=>((0,a.dD)("data-v-7c5023bd"),e=e(),(0,a.Cn)(),e),h=b((()=>(0,a._)("img",{class:"gem",src:"/gems/shine.png",alt:"shine"},null,-1))),g=[h];function k(e,t,n,s,r,o){return(0,a.wg)(),(0,a.iD)("div",{style:(0,i.j5)(e.imgStyle)},g,4)}const T=(0,a.aZ)({name:"CrystalGem",props:{nft:{type:Number,required:!0},level:{type:Number,required:!0},color:{type:Number,required:!0},size:{type:Number,required:!1},scale:{type:Number,required:!1}},setup(e){const t=(0,f.iH)("#f0f0f0"),n=(0,f.iH)("gems/15.png"),a=(0,f.iH)("");switch(e.color){case 1:t.value="#c31d1d";break;case 2:t.value="#91b33c";break;case 3:t.value="#0f21ab";break;case 4:t.value="#ffbf00";break;case 5:t.value="#622f5e";break;default:break}return n.value="gems/"+e.level.toString()+".png",a.value="transform: scale("+(e.scale||.5).toString()+"); height: "+(e.size||64).toString()+"px; width: "+(e.size||64).toString()+"px; background-blend-mode: hard-light; -webkit-mask-mode: alpha; mask-mode: alpha; background-image: url('"+n.value+"'), linear-gradient("+t.value+", "+t.value+"); -webkit-mask-image: url('"+n.value+"'); mask-image: url('"+n.value+"'); background-size: cover; -webkit-mask-size: 100%; mask-size: 100%;",{imgColor:t,imgUrl:n,imgStyle:a}}});var _=n(11639);const x=(0,_.Z)(T,[["render",k],["__scopeId","data-v-7c5023bd"]]),C=x;var M=n(85990),I=n(17779),q=function(e,t,n,a){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function r(e){try{l(a.next(e))}catch(t){s(t)}}function o(e){try{l(a["throw"](e))}catch(t){s(t)}}function l(e){e.done?n(e.value):i(e.value).then(r,o)}l((a=a.apply(e,t||[])).next())}))};const N=n(94428);function S(e){I.log("Switch network: ",(0,M.v)().networks[e].name,(0,M.v)().networks[e].id),(0,M.v)().initWeb3(e)}const W={title:"Crystal - NFT"},Z=(0,a.aZ)({name:"NftClaimPage",components:{CrystalGem:C},setup(){const e=(0,w.Z)();e.dark.set(!0),(0,v.Z)(W);const t=(0,f.iH)(!1),n=(0,f.iH)(0),a=(0,f.iH)("0xf18a1FEf4823Ce5ddb20B71D82FA06470DF84B17"),i={bets:(0,f.iH)("0"),score:(0,f.iH)("0"),name:(0,f.iH)("n/a")},s={price:(0,f.iH)("10000")};function r(){return q(this,void 0,void 0,(function*(){const e=yield(0,M.v)().web3.eth.net.getId().then((e=>(I.log(e),e))).catch((e=>(I.log("checkNetwork: ",e),-1)));return e}))}function o(e){return q(this,void 0,void 0,(function*(){const t=(0,M.v)().networks[e].id,n=(0,M.v)().networks[e].name,a=(0,M.v)().networks[e].tokenName,i=(0,M.v)().networks[e].symbol,s=(0,M.v)().networks[e].rpcUrl,r=(0,M.v)().networks[e].explorer,o="0x"+t.toString(16);if("undefined"!==typeof window.ethereum)try{yield window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]}),location.reload()}catch(l){if(I.log(l),4902===l.code){I.log("Add Chain");try{yield window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:n,nativeCurrency:{name:a,symbol:i,decimals:18},rpcUrls:[s],blockExplorerUrls:[r]}]}),location.reload()}catch(u){alert(u.message)}}else alert(l.message)}}))}function l(e){return q(this,void 0,void 0,(function*(){const t=(0,M.v)().web3Instance;if(t.utils.isAddress((0,M.v)().accountAddr)){const n=new t.eth.Contract(N,e);n.methods.userDetail((0,M.v)().accountAddr).call().then((function(e){I.log("getMemberInfo: ",e),i.bets.value=e.bets,i.score.value=e.score,i.name.value="0"==e.name?"N/a":e.name})).catch((function(e){I.log("getMemberInfo: ",e)}))}}))}return{netIndex:n,switchNet:t,memberContract:a,memberInfo:i,minerInfo:s,checkNetwork:r,switchNetwork:o,getMemberInfo:l,initGame(){return q(this,void 0,void 0,(function*(){const e=n.value;S(e);const i=yield r();if(i!=(0,M.v)().networks[e].id)return I.log(i,"!=",(0,M.v)().networks[e].id),void(t.value=!0);l(a.value)}))},updateInputs(e){I.log("updateInputs: ",e)}}},beforeMount(){this.initGame()}});var z=n(69885),D=n(44458),H=n(63190),Q=n(18149),U=n(68879),A=n(32074),O=n(61357),P=n(90136),G=n(11821),j=n(62146),F=n(69984),B=n.n(F);const E=(0,_.Z)(Z,[["render",y],["__scopeId","data-v-242165a3"]]),Y=E;B()(Z,"components",{QPage:z.Z,QCard:D.Z,QCardSection:H.Z,QField:Q.Z,QBtn:U.Z,QDialog:A.Z,QAvatar:O.Z,QSpace:P.Z,QCardActions:G.Z}),B()(Z,"directives",{ClosePopup:j.Z})},94428:e=>{e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"added","type":"address"}],"name":"CertifiedAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"removed","type":"address"}],"name":"CertifiedRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"addCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"score","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"addScore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"certifieds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"isCertified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"removeCertified","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"nameIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"setName","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"score","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"subScore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userDetail","outputs":[{"components":[{"internalType":"uint256","name":"bets","type":"uint256"},{"internalType":"uint256","name":"score","type":"uint256"},{"internalType":"uint256","name":"name","type":"uint256"}],"internalType":"struct Membership.User","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userNameIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userScore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}}]);