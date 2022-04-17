(()=>{"use strict";var e={76893:(e,t,o)=>{o(18964),o(40702);var a=o(61957),r=o(68266),n=o(59835);function s(e,t,o,a,r,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}const i=(0,n.aZ)({name:"App"});var l=o(11639);const u=(0,l.Z)(i,[["render",s]]),c=u;var h=o(23340),d=o(7363);const p=(0,h.h)((()=>{const e=(0,d.WB)();return e}));var m=o(18910);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(64),o.e(619)]).then(o.bind(o,1619)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(64),o.e(301)]).then(o.bind(o,67105))},{path:"/games",component:()=>Promise.all([o.e(736),o.e(64),o.e(77)]).then(o.bind(o,92111))},{path:"/dice",component:()=>Promise.all([o.e(736),o.e(64),o.e(125)]).then(o.bind(o,68109))},{path:"/diceFaq",component:()=>Promise.all([o.e(736),o.e(64),o.e(465)]).then(o.bind(o,70465))},{path:"/invest",component:()=>Promise.all([o.e(736),o.e(64),o.e(91)]).then(o.bind(o,5506))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(431)]).then(o.bind(o,39431))}],y=f,g=(0,h.BC)((function(){const e=m.PO,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:y,history:e("/")});return t}));async function v(e,t){const o=e(c);o.use(r.Z,t);const a="function"===typeof p?await p({}):p;o.use(a);const n="function"===typeof g?await g({store:a}):g;return a.use((()=>({router:n}))),{app:o,store:a,router:n}}var b=o(86229);const w={config:{},plugins:{Meta:b.ZP}};var k=o(17779);const q="/";async function _({app:e,router:t,store:o},a){let r=!1;const n=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},s=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===r&&u<a.length;u++)try{await a[u]({app:e,router:t,store:o,ssrContext:null,redirect:s,urlPath:i,publicPath:q})}catch(l){return l&&l.url?void s(l.url):void k.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}v(a.ri,w).then((e=>Promise.all([Promise.resolve().then(o.bind(o,93662)),Promise.resolve().then(o.bind(o,34136))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));_(e,o)}))))},34136:(e,t,o)=>{o.r(t),o.d(t,{api:()=>s,default:()=>i});var a=o(23340),r=o(39981),n=o.n(r);const s=n().create({baseURL:"https://api.example.com"}),i=(0,a.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=s}))},93662:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var a=o(23340),r=o(9991);const n={failed:"Action failed",success:"Action was successful",language:"Language",games:"Games",play:"Play",invest:"Invest",divest:"Divest",houseEdge:"House Edge",rake:"Rake",profit:"Profit",APR:"APR",invested:"Invested",value:"Value",payout:"Payout",chance:"Chance",wager:"Wager",rollLo:"Roll LO",rollHi:"Roll HI",player:"Player",betId:"Bet ID",lucky:"Lucky",target:"Target",howToPlay:"How to play",allBets:"All Bets",myBets:"My Bets",randomNumVRF:"We use blockchain oracle such as",randomNumVRF2:"to create SAFE and FAIR random number, everyone can easily verify the generation process.",diceFaqs:{faq:"Dice Game FAQ",ask1:"What is this Dice Game?",qus1_1:'Crystal Dice gmae is a crypto casino where you can play a blockchain dice game with a low(1%) house edge and gamble with your crypto currencies. Pick your chance to win and how much to bet, then select "HI or LO" to roll the dice and get an instant result, win or lose.',qus1_2:"Alternatively you can invest in the game's bankroll, and share in the game's profits (or losses), while helping us offer bigger maximum bets to the players.",ask2:"What does 1% house edge mean?",qus2:"Some people have been confused by this. They ask when we take the 1% off, is it after each win. It is not that. The house edge is built in to the payouts. When you play the 50% game and win, you receive 1.98 times your stake as your payout. If there was no house edge, you would receive 2 times your stake. 1.98 is 1% less than 2. That is the house edge.",ask3:"How does the Dice game work?",toPlay:"To Play:",qus3_1:{1:"Select a",2:"to win"},qus3_2:{1:"Set the",2:"size"},qus3_3:{1:"Click",2:"or",3:"depending on whether you think your roll will be high or low"},qus3_4:"Each time you roll the dice, you get a number between 0 and 100.",qus3_5:{1:"When rolling low, you need to roll less than the",2:"you selected. When rolling high, you need to roll",3:"or over."},qus3_6:"So with a 25% chance to win, low rolls win with less than 25.0000, and high rolls win with 75.0000 or more.",qus3_7:{1:"Alternatively, you can select the",2:"multiplier and the",3:"to win will be calculated for you."},qus3_8:{1:"Also, you can select the",2:"you want to make if you win, and the",3:"size will be calculated for you."},ask4:"What is the max profit?",qus4:"The max profit indicator tells you how much the house is prepared to risk per roll, and is based on the size of the house bankroll. This amount remains unchanged whatever your chance of winning. It adjusts in real time as the house bankroll grows or shrinks.",ask5:"Why are the dice rolls so slow?",qus5:"Everything is on the blockchain and a safe block confirmation time may be 20 seconds or more.",ask6:"What if I can't stop?",qus6_1:"Like all forms of gambling, online gambling can become an addiction that can have serious negative effects on your life. If you lose more than you planned to or can safely afford and find yourself struggling to control time and/or money spent gambling, please check these sites for information that could help you:",qus6_2:"Games of chance have no memory between consecutive rounds, so increasing the amount you wager after a streak of losses has no effect on the odds of winning the next round.",ask7:"Is this game a scam or Ponzi scheme? Is it insolvent?",qus7_1:"If the game was doing something simple like refusing to pay out winners, then everyone would have heard about it already.",qus7_2:"Everything is on the blockchain, and we have all the rules determined in the program code. Everyone can easily check the game smart contracts' source code on the blockchain explorer. You can find the links in each game's info box."}},s={failed:"操作失敗",success:"操作成功",language:"語言",games:"遊戲",play:"玩遊戲",invest:"投資",divest:"撤資",houseEdge:"莊家優勢",rake:"抽水",profit:"利潤",APR:"年利率(APR)",invested:"已投資",value:"價值",payout:"支付",chance:"勝率",wager:"賭注",rollLo:"買小",rollHi:"買大",player:"玩家",betId:"投注號",lucky:"幸運數",target:"目標數",howToPlay:"怎麼玩",allBets:"所有投注",myBets:"我的投注",randomNumVRF:"我們使用",randomNumVRF2:"區塊鏈預言機來創建安全且公平的隨機數, 每個人都可以輕鬆驗證生成過程.",diceFaqs:{faq:"骰子遊戲常見問題",ask1:"這是什麼骰子遊戲?",qus1_1:"水晶骰子遊戲是一個加密賭場, 您可以在其中玩低(1%)莊家優勢的區塊鏈骰子遊戲, 並使用您的加密貨幣進行賭博. 選擇您獲勝的機會和下注的金額, 然後選擇“買大/買小”來擲骰子並獲得即時結果, 無論輸贏.",qus1_2:"或者, 您可以投資遊戲的資金, 分享遊戲的利潤(或損失), 同時幫助我們為玩家提供更大的最大賭注。",ask2:"1%的莊家優勢是什麼意思?",qus2:"有些人對此感到困惑. 他們問我們什麼時候拿1%的優勢, 是在每次獲勝之後嗎? 不是這樣的, 莊家優勢內置於支出中. 當您玩50%勝率的遊戲並獲勝時, 您將獲得1.98倍的本金作為您的支出. 如果沒有莊家優勢, 您將獲得2倍的本金. 1.98比2少1%, 這就是莊家優勢.",ask3:"骰子遊戲如何運作?",toPlay:"玩法:",qus3_1:{1:"選擇一個",2:"來遊戲"},qus3_2:{1:"設置",2:"金額"},qus3_3:{1:"點擊",2:"或者",3:"取決於你認為你的幸運數是高還是低"},qus3_4:"每次擲骰子時, 您都會得到一個介於0和100之間的數字.",qus3_5:{1:"當買小時, 您需要骰子點數/幸運數小於您選擇的",2:". 當買大時, 您需要骰子點數/幸運數等於或大於",3:"."},qus3_6:"因此, 選擇25%的勝率, 當買小時骰子點數/幸運數低於25.0000獲勝, 而當買大時骰子點數/幸運數高於75.0000或更多獲勝.",qus3_7:{1:"另一种选择, 您可以選擇",2:"乘數, 系統將為您計算獲勝的",3:"."},qus3_8:{1:"此外, 您可以選擇如果您贏了想要賺取的",2:", 系統將會為您計算出需要的",3:"大小."},ask4:"什么是最大利润?",qus4:"最大利潤指標告訴您莊家每輪準備承擔多少風險, 並且基於莊家資金的大小. 無論您獲勝的機會如何, 該金額都保持不變. 它會隨著莊家資金的增加或減少而實時調整.",ask5:"為什麼擲骰子這麼慢?",qus5:"一切都在區塊鏈上，安全的區塊確認時間可能是 20 秒或更長時間.",ask6:"如果我停不下來怎麼辦?",qus6_1:"像所有形式的赌博一样, 在线赌博可能会成为一种成瘾, 对您的生活产生严重的负面影响. 如果您的损失超出您的计划或安全承受能力, 并且发现自己难以控制赌博的时间和/或金钱, 请查看这些网站以获取可以帮助您的信息:",qus6_2:"機會勝率遊戲在連續回合之間沒有記憶，因此在連續赌輸後增加您的賭注對下一輪獲勝的機率沒有影響。",ask7:"這個遊戲是騙局還是龐氏騙局? 是資不抵債嗎?",qus7_1:"如果遊戲只是做一些簡單的事情, 比如拒絕支付獲勝者, 那麼每個人都已經聽說過.",qus7_2:"一切都在區塊鏈上, 我們在程序代碼中確定了所有規則. 大家可以在區塊鏈瀏覽器上輕鬆查看遊戲智能合約的源碼. 您可以在每個遊戲的信息框中找到鏈接."}},i={failed:"失敗",success:"成功",language:"言語",games:"ゲーム",play:"遊びます",invest:"投資",divest:"売却",houseEdge:"ハウスエッジ",rake:"レーキ",profit:"利益",APR:"APR",invested:"投資済み",value:"価値",payout:"支払う",chance:"勝率",wager:"賭け金",rollLo:"小さく買う",rollHi:"大きく買う",player:"選手",betId:"賭け番号",lucky:"幸運数",target:"対象数",howToPlay:"プレイ方法",allBets:"All Bets",myBets:"My Bets",randomNumVRF:"",randomNumVRF2:"などのブロックチェーンオラクルを使用して、安全で公正な乱数を作成します。誰でも簡単に生成プロセスを確認できます。",diceFaqs:{faq:"Dice Game FAQ",ask1:"このダイスゲームは何ですか？",qus1_1:"クリスタルダイスゲームは、1％の低いハウスエッジでブロックチェーンダイスゲームをプレイし、暗号通貨でギャンブルをすることができる暗号カジノです。 勝つチャンスと賭ける金額を選び、「HIまたはLO」を選択してサイコロを振り、即座に結果を得て、勝つか負けるかを選択します。",qus1_2:"または、ゲームのバンクロールに投資して、ゲームの利益（または損失）を共有しながら、プレーヤーにより大きな最大ベットを提供することもできます。",ask2:"1％ハウスエッジとはどういう意味ですか？",qus2:"一部の人々はこれに混乱しています。 彼らは、私たちが1％オフになるのはいつか、それは各勝利の後であるかと尋ねます。 そうではありません。 ハウスエッジはペイアウトに組み込まれています。 50％のゲームをプレイして勝つと、ペイアウトの1.98倍の賭け金を受け取ります。 ハウスエッジがなかった場合、あなたはあなたの賭け金の2倍を受け取ります。 1.98は2より1％少ないです。それは家の端です。",ask3:"ダイスゲームはどのように機能しますか？",toPlay:"遊ぶには：",qus3_1:{1:"",2:"を選ぶ"},qus3_2:{1:"",2:"のサイズを設定する"},qus3_3:{1:"クリック",2:"または",3:"あなたがあなたのロールが高いか低いと思うかどうかに応じて"},qus3_4:"サイコロを振るたびに、0〜100の数字が出ます。",qus3_5:{1:"低く転がるときは、選択した",2:"より少なく転がる必要があります。 高く転がるときは、",3:"以上転がる必要があります。"},qus3_6:"したがって、25％の勝率を選択すると、購入が小さい場合はサイコロポイント/ラッキー数が25.0000未満になり、大きい購入の場合はサイコロポイント/ラッキー数が75.0000以上になります。",qus3_7:{1:"または、",2:"マルチプライヤーを選択すると、勝つための",3:"が計算されます。"},qus3_8:{1:"また、勝った場合の",2:"を選択すると、",3:"のサイズが計算されます。"},ask4:"最大利益はいくらですか？",qus4:"最大利益指標は、家がロールごとにリスクを負う準備ができているかどうかを示し、家のバンクロールのサイズに基づいています。 この金額は、勝つチャンスが何であれ、変わりません。 家のバンクロールが拡大または縮小すると、リアルタイムで調整されます。",ask5:"サイコロの目がとても遅いのはなぜですか？",qus5:"すべてがブロックチェーン上にあり、安全なブロック確認時間は20秒以上になる場合があります。",ask6:"プレイをやめられない場合はどうなりますか？",qus6_1:"あらゆる形態のギャンブルと同様に、オンラインギャンブルは、あなたの人生に深刻な悪影響を与える可能性のある依存症になる可能性があります。 予定よりも多くを失うか、安全に余裕があり、ギャンブルに費やす時間やお金を管理するのに苦労していることに気付いた場合は、これらのサイトで役立つ情報を確認してください：",qus6_2:"運が左右するゲームには、連続するラウンドの間に記憶がないため、一連の損失の後に賭ける金額を増やしても、次のラウンドに勝つ確率には影響しません。",ask7:"このゲームは詐欺ですか、それともポンジースキームですか？ それは破産していますか？",qus7_1:"ゲームが勝者への支払いを拒否するような単純なことをしているとしたら、誰もがすでにそれについて聞いたことがあるでしょう。",qus7_2:"すべてがブロックチェーン上にあり、プログラムコードですべてのルールが決定されています。 誰もがブロックチェーンエクスプローラーでゲームのスマートコントラクトのソースコードを簡単に確認できます。 リンクは各ゲームの情報ボックスにあります。"}},l={"en-US":n,"zh-TW":s,"ja-JP":i},u=(0,a.xr)((({app:e})=>{const t=(0,r.o)({locale:"en-US",messages:l});e.use(t)}))}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,(()=>{o.amdO={}})(),(()=>{var e=[];o.O=(t,a,r,n)=>{if(!a){var s=1/0;for(c=0;c<e.length;c++){for(var[a,r,n]=e[c],i=!0,l=0;l<a.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((e=>o.O[e](a[l])))?a.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,r,n]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"51d9ff05",77:"d90b74cc",91:"003cab2b",125:"c050a886",301:"0d12f49c",431:"312816a6",465:"286a1cd3",619:"048e93c3"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{77:"111e91bf",91:"0a34a170",125:"4147ea25",143:"31d6cfe0",301:"b0a8225c",619:"0c8552b4",736:"c24c493d"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crystal-dapp:";o.l=(a,r,n,s)=>{if(e[a])e[a].push(r);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var h=u[c];if(h.getAttribute("src")==a||h.getAttribute("data-webpack")==t+n){i=h;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+n),i.src=a),e[a]=[r];var d=(t,o)=>{i.onerror=i.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p="/"})(),(()=>{var e=(e,t,o,a)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=n=>{if(r.onerror=r.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var r=o[a],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],n=r.getAttribute("data-href");if(n===e||n===t)return r}},a=a=>new Promise(((r,n)=>{var s=o.miniCssF(a),i=o.p+s;if(t(s,i))return r();e(a,i,r,n)})),r={143:0};o.f.miniCss=(e,t)=>{var o={77:1,91:1,125:1,301:1,619:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=a(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((o,a)=>r=e[t]=[o,a]));a.push(r[2]=n);var s=o.p+o.u(t),i=new Error,l=a=>{if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r[1](i)}};o.l(s,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[s,i,l]=a,u=0;if(s.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var c=l(o)}for(t&&t(a);u<s.length;u++)n=s[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},a=self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(76893)));a=o.O(a)})();