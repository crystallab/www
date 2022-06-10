(()=>{"use strict";var e={76893:(e,t,a)=>{a(18964),a(40702);var o=a(61957),r=a(68266),n=a(59835);function i(e,t,a,o,r,i){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}const s=(0,n.aZ)({name:"App"});var l=a(11639);const c=(0,l.Z)(s,[["render",i]]),u=c;var m=a(23340),d=a(7363);const h=(0,m.h)((()=>{const e=(0,d.WB)();return e}));var p=a(18910);const f=[{path:"/",component:()=>Promise.all([a.e(736),a.e(64),a.e(46)]).then(a.bind(a,55046)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(301)]).then(a.bind(a,24643))},{path:"/games",component:()=>Promise.all([a.e(736),a.e(64),a.e(372)]).then(a.bind(a,6938))},{path:"/dice",component:()=>Promise.all([a.e(736),a.e(64),a.e(920)]).then(a.bind(a,2265))},{path:"/diceFaq",component:()=>Promise.all([a.e(736),a.e(64),a.e(257)]).then(a.bind(a,9257))},{path:"/invest",component:()=>Promise.all([a.e(736),a.e(64),a.e(252)]).then(a.bind(a,31900))},{path:"/airdrop",component:()=>Promise.all([a.e(736),a.e(64),a.e(987)]).then(a.bind(a,41383))},{path:"/nft",component:()=>Promise.all([a.e(736),a.e(64),a.e(549)]).then(a.bind(a,51300))},{path:"/crafting",component:()=>Promise.all([a.e(736),a.e(64),a.e(782)]).then(a.bind(a,83993))},{path:"/auction",component:()=>Promise.all([a.e(736),a.e(64),a.e(309)]).then(a.bind(a,79802))},{path:"/point",component:()=>Promise.all([a.e(736),a.e(64),a.e(649)]).then(a.bind(a,930))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(431)]).then(a.bind(a,39431))}],g=f,y=(0,m.BC)((function(){const e=p.PO,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("/")});return t}));async function b(e,t){const a=e(u);a.use(r.Z,t);const o="function"===typeof h?await h({}):h;a.use(o);const n="function"===typeof y?await y({store:o}):y;return o.use((()=>({router:n}))),{app:a,store:o,router:n}}var v=a(86229);const w={config:{},plugins:{Meta:v.ZP}};var P=a(17779);const q="/";async function k({app:e,router:t,store:a},o){let r=!1;const n=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},i=e=>{if(r=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===r&&c<o.length;c++)try{await o[c]({app:e,router:t,store:a,ssrContext:null,redirect:i,urlPath:s,publicPath:q})}catch(l){return l&&l.url?void i(l.url):void P.error("[Quasar] boot error:",l)}!0!==r&&(e.use(t),e.mount("#q-app"))}b(o.ri,w).then((e=>Promise.all([Promise.resolve().then(a.bind(a,93662)),Promise.resolve().then(a.bind(a,34136))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));k(e,a)}))))},34136:(e,t,a)=>{a.r(t),a.d(t,{api:()=>i,default:()=>s});var o=a(23340),r=a(39981),n=a.n(r);const i=n().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},93662:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var o=a(23340),r=a(9991);const n={failed:"Action failed",success:"Action was successful",language:"Language",nft:"NFT",nftAirdrop:"NFT Airdrop",games:"Games",dice:"Dice",maticDice:"Crystal Matic Dice",usdcDice:"Crystal Circle Dice",play:"Play",invest:"Invest",divest:"Divest",houseEdge:"House Edge",rake:"Rake",profit:"Profit",APR:"APR",invested:"Invested",value:"Value",payout:"Payout",chance:"Chance",wager:"Wager",rollLo:"Roll LO",rollHi:"Roll HI",player:"Player",betId:"Bet ID",lucky:"Lucky",target:"Target",howToPlay:"How to play",allBets:"All Bets",myBets:"My Bets",randomNumVRF:"We use blockchain oracle such as",randomNumVRF2:"to create SAFE and FAIR random numbers, everyone can easily verify the generation process.",increase:"Increase",allowanceInfo:"Transfer amount exceeds allowance. Please increase more.",diceFaqs:{faq:"Dice Game FAQ",ask1:"What is this Dice Game?",qus1_1:'Crystal Dice gmae is a crypto casino where you can play a blockchain dice game with a low(1%) house edge and gamble with your crypto currencies. Pick your chance to win and how much to bet, then select "HI or LO" to roll the dice and get an instant result, win or lose.',qus1_2:"Alternatively you can invest in the game's bankroll, and share in the game's profits (or losses), while helping us offer bigger maximum bets to the players.",ask2:"What does 1% house edge mean?",qus2:"Some people have been confused by this. They ask when we take the 1% off, is it after each win. It is not that. The house edge is built in to the payouts. When you play the 50% game and win, you receive 1.98 times your stake as your payout. If there was no house edge, you would receive 2 times your stake. 1.98 is 1% less than 2. That is the house edge.",ask3:"How does the Dice game work?",toPlay:"To Play:",qus3_1:{1:"Select a",2:"to win"},qus3_2:{1:"Set the",2:"size"},qus3_3:{1:"Click",2:"or",3:"depending on whether you think your roll will be high or low"},qus3_4:"Each time you roll the dice, you get a number between 0 and 100.",qus3_5:{1:"When rolling low, you need to roll less than the",2:"you selected. When rolling high, you need to roll",3:"or over."},qus3_6:"So with a 25% chance to win, low rolls win with less than 25.0000, and high rolls win with 75.0000 or more.",qus3_7:{1:"Alternatively, you can select the",2:"multiplier and the",3:"to win will be calculated for you."},qus3_8:{1:"Also, you can select the",2:"you want to make if you win, and the",3:"size will be calculated for you."},ask4:"What is the max profit?",qus4:"The max profit indicator tells you how much the house is prepared to risk per roll, and is based on the size of the house bankroll. This amount remains unchanged whatever your chance of winning. It adjusts in real time as the house bankroll grows or shrinks.",ask5:"Why are the dice rolls so slow?",qus5:"Everything is on the blockchain and a safe block confirmation time may be 20 seconds or more.",ask6:"What if I can't stop?",qus6_1:"Like all forms of gambling, online gambling can become an addiction that can have serious negative effects on your life. If you lose more than you planned to or can safely afford and find yourself struggling to control time and/or money spent gambling, please check these sites for information that could help you:",qus6_2:"Games of chance have no memory between consecutive rounds, so increasing the amount you wager after a streak of losses has no effect on the odds of winning the next round.",ask7:"Is this game a scam or Ponzi scheme? Is it insolvent?",qus7_1:"If the game was doing something simple like refusing to pay out winners, then everyone would have heard about it already.",qus7_2:"Everything is on the blockchain, and we have all the rules determined in the program code. Everyone can easily check the game smart contracts' source code on the blockchain explorer. You can find the links in each game's info box."},gems:{success:"Success",failed:"Failed",itemName:"Item",price:"Price",rarity:"Rarity",weight:"Weight",quality:"Quality",qualityInfo:"High-quality gems are excellent crafting materials.",level:"Level",gem:"Gem",Common:"Common",Uncommon:"Uncommon",Rare:"Rare",Epic:"Epic",names:{0:"Diamond",1:"Ruby",2:"Emerald",3:"Sapphire",4:"Topaz",5:"Amethyst"},levels:{0:"",1:"Flawless ",2:"Perfect ",3:"Square ",4:"Star ",5:"Flawless Star ",6:"Perfect Star ",7:"Radiant Star ",8:"Round ",9:"Tear Drop ",10:"Heart ",11:"Imperial ",12:"Marquise ",13:"Radiant Marquise ",14:"Royal ",15:"Radiant Royal "}},airdrop:{register:"Register",notRegistered:"You are not a member yet, please register first!",claim:"Claim",new:"Newly Gems!",blindBox:"Gacha",collections:"Collections",crafting:"Crafting",auction:"Auction",openGemChest:"Gem Chest Gacha",priceUnit:"Points/Gem",referralCode:"Referral Code",claimFreeGem:"Promote to get free Gems",canClaimed:"Gems you can claim",balance:"Balance",times:"x",points:"Points",earnPoints:"Points",redeem:"Redeem",referralLink:"Referral Link",invitAndGet:"Play Games to get more gem points.",gotGemNft:"Got Gem NFT",whenAppear:"When the Gem is settled it will appear in your NFT collection tab soon."},auction:{currentPrice:"Current",buyOutPrice:"Buy Out",bidPrice:"Bid",submit:"Submit"},crafting:{combine:"Combine",combineGem:"Combine Gem",chooseA:"Choose a",successInfo:"High-quality gems are excellent crafting materials. It can improve the success rate of gem combination.",successRate:"Success Rate"}},i={failed:"操作失敗",success:"操作成功",language:"語言",nft:"NFT",nftAirdrop:"NFT空投",games:"遊戲",dice:"骰子",maticDice:"馬蹄寶石骰子",usdcDice:"世可寶石骰子",play:"玩遊戲",invest:"投資",divest:"撤資",houseEdge:"莊家優勢",rake:"抽水",profit:"利潤",APR:"年利率(APR)",invested:"已投資",value:"價值",payout:"支付",chance:"勝率",wager:"賭注",rollLo:"買小",rollHi:"買大",player:"玩家",betId:"投注號",lucky:"幸運數",target:"目標數",howToPlay:"怎麼玩",allBets:"所有投注",myBets:"我的投注",randomNumVRF:"我們使用",randomNumVRF2:"區塊鏈預言機來創建安全且公平的隨機數, 每個人都可以輕鬆驗證生成過程.",increase:"增加限額",allowanceInfo:"轉賬金額超過限額. 請增加更多.",diceFaqs:{faq:"骰子遊戲常見問題",ask1:"這是什麼骰子遊戲?",qus1_1:"水晶骰子遊戲是一個加密賭場, 您可以在其中玩低(1%)莊家優勢的區塊鏈骰子遊戲, 並使用您的加密貨幣進行賭博. 選擇您獲勝的機會和下注的金額, 然後選擇“買大/買小”來擲骰子並獲得即時結果, 無論輸贏.",qus1_2:"或者, 您可以投資遊戲的資金, 分享遊戲的利潤(或損失), 同時幫助我們為玩家提供更大的最大賭注。",ask2:"1%的莊家優勢是什麼意思?",qus2:"有些人對此感到困惑. 他們問我們什麼時候拿1%的優勢, 是在每次獲勝之後嗎? 不是這樣的, 莊家優勢內置於支出中. 當您玩50%勝率的遊戲並獲勝時, 您將獲得1.98倍的本金作為您的支出. 如果沒有莊家優勢, 您將獲得2倍的本金. 1.98比2少1%, 這就是莊家優勢.",ask3:"骰子遊戲如何運作?",toPlay:"玩法:",qus3_1:{1:"選擇一個",2:"來遊戲"},qus3_2:{1:"設置",2:"金額"},qus3_3:{1:"點擊",2:"或者",3:"取決於你認為你的幸運數是高還是低"},qus3_4:"每次擲骰子時, 您都會得到一個介於0和100之間的數字.",qus3_5:{1:"當買小時, 您需要骰子點數/幸運數小於您選擇的",2:". 當買大時, 您需要骰子點數/幸運數等於或大於",3:"."},qus3_6:"因此, 選擇25%的勝率, 當買小時骰子點數/幸運數低於25.0000獲勝, 而當買大時骰子點數/幸運數高於75.0000或更多獲勝.",qus3_7:{1:"另一种选择, 您可以選擇",2:"乘數, 系統將為您計算獲勝的",3:"."},qus3_8:{1:"此外, 您可以選擇如果您贏了想要賺取的",2:", 系統將會為您計算出需要的",3:"大小."},ask4:"什么是最大利润?",qus4:"最大利潤指標告訴您莊家每輪準備承擔多少風險, 並且基於莊家資金的大小. 無論您獲勝的機會如何, 該金額都保持不變. 它會隨著莊家資金的增加或減少而實時調整.",ask5:"為什麼擲骰子這麼慢?",qus5:"一切都在區塊鏈上，安全的區塊確認時間可能是 20 秒或更長時間.",ask6:"如果我停不下來怎麼辦?",qus6_1:"像所有形式的赌博一样, 在线赌博可能会成为一种成瘾, 对您的生活产生严重的负面影响. 如果您的损失超出您的计划或安全承受能力, 并且发现自己难以控制赌博的时间和/或金钱, 请查看这些网站以获取可以帮助您的信息:",qus6_2:"機會勝率遊戲在連續回合之間沒有記憶，因此在連續赌輸後增加您的賭注對下一輪獲勝的機率沒有影響。",ask7:"這個遊戲是騙局還是龐氏騙局? 是資不抵債嗎?",qus7_1:"如果遊戲只是做一些簡單的事情, 比如拒絕支付獲勝者, 那麼每個人都已經聽說過.",qus7_2:"一切都在區塊鏈上, 我們在程序代碼中確定了所有規則. 大家可以在區塊鏈瀏覽器上輕鬆查看遊戲智能合約的源碼. 您可以在每個遊戲的信息框中找到鏈接."},gems:{success:"成功",failed:"失敗",itemName:"物品",price:"價格",rarity:"稀有度",weight:"重量",quality:"品質",qualityInfo:"高品質的寶石是極好的製作材料.",level:"等級",gem:"寶石",Common:"普通",Uncommon:"罕见",Rare:"稀有",Epic:"史詩",names:{0:"鑽石",1:"紅寶石",2:"翡翠",3:"藍寶石",4:"黃玉",5:"紫水晶"},levels:{0:"",1:"無瑕的",2:"完美的",3:"方形",4:"星形",5:"無瑕之星",6:"完美之星",7:"璀璨之星",8:"圓形",9:"淚滴形",10:"心形",11:"帝國",12:"貴族",13:"璀璨的貴族",14:"皇家",15:"璀璨的皇家"}},airdrop:{register:"註冊",notRegistered:"您還不是會員，請先註冊!",claim:"認領",new:"新獲得的寶石!",blindBox:"盲盒",collections:"收藏",crafting:"製作",auction:"拍賣",openGemChest:"寶石箱盲盒",priceUnit:"積分/寶石",referralCode:"推薦代碼",claimFreeGem:"推广来獲得免費寶石",canClaimed:"您可以領取的寶石",balance:"余额",times:"倍",points:"積分",earnPoints:"積分",redeem:"兑换寶石",referralLink:"推薦鏈接",invitAndGet:"玩遊戲可以獲得更多積分以兑换寶石.",gotGemNft:"得到了寶石",whenAppear:"當寶石被結算後, 它將很快出現在你的 NFT 收藏選項卡中."},auction:{currentPrice:"當前價格",buyOutPrice:"立即購買",bidPrice:"出價競拍",submit:"出價競拍"},crafting:{combine:"開始合成",combineGem:"合成寶石",chooseA:"選擇一個",successInfo:"高品質的寶石是極好的製作材料. 可以提高寶石合成的成功率.",successRate:"成功率"}},s={failed:"失敗",success:"成功",language:"言語",nft:"NFT",nftAirdrop:"NFT Airdrop",games:"ゲーム",dice:"ダイス",maticDice:"Crystal Matic Dice",usdcDice:"Crystal Circle Dice",play:"遊びます",invest:"投資",divest:"売却",houseEdge:"ハウスエッジ",rake:"レーキ",profit:"利益",APR:"APR",invested:"投資済み",value:"価値",payout:"支払う",chance:"勝率",wager:"賭け金",rollLo:"小さく買う",rollHi:"大きく買う",player:"選手",betId:"賭け番号",lucky:"幸運数",target:"対象数",howToPlay:"プレイ方法",allBets:"All Bets",myBets:"My Bets",randomNumVRF:"",randomNumVRF2:"などのブロックチェーンオラクルを使用して、安全で公正な乱数を作成します。誰でも簡単に生成プロセスを確認できます。",increase:"Increase",allowanceInfo:"Transfer amount exceeds allowance. Please increase more.",diceFaqs:{faq:"Dice Game FAQ",ask1:"このダイスゲームは何ですか？",qus1_1:"クリスタルダイスゲームは、1％の低いハウスエッジでブロックチェーンダイスゲームをプレイし、暗号通貨でギャンブルをすることができる暗号カジノです。 勝つチャンスと賭ける金額を選び、「HIまたはLO」を選択してサイコロを振り、即座に結果を得て、勝つか負けるかを選択します。",qus1_2:"または、ゲームのバンクロールに投資して、ゲームの利益（または損失）を共有しながら、プレーヤーにより大きな最大ベットを提供することもできます。",ask2:"1％ハウスエッジとはどういう意味ですか？",qus2:"一部の人々はこれに混乱しています。 彼らは、私たちが1％オフになるのはいつか、それは各勝利の後であるかと尋ねます。 そうではありません。 ハウスエッジはペイアウトに組み込まれています。 50％のゲームをプレイして勝つと、ペイアウトの1.98倍の賭け金を受け取ります。 ハウスエッジがなかった場合、あなたはあなたの賭け金の2倍を受け取ります。 1.98は2より1％少ないです。それは家の端です。",ask3:"ダイスゲームはどのように機能しますか？",toPlay:"遊ぶには：",qus3_1:{1:"",2:"を選ぶ"},qus3_2:{1:"",2:"のサイズを設定する"},qus3_3:{1:"クリック",2:"または",3:"あなたがあなたのロールが高いか低いと思うかどうかに応じて"},qus3_4:"サイコロを振るたびに、0〜100の数字が出ます。",qus3_5:{1:"低く転がるときは、選択した",2:"より少なく転がる必要があります。 高く転がるときは、",3:"以上転がる必要があります。"},qus3_6:"したがって、25％の勝率を選択すると、購入が小さい場合はサイコロポイント/ラッキー数が25.0000未満になり、大きい購入の場合はサイコロポイント/ラッキー数が75.0000以上になります。",qus3_7:{1:"または、",2:"マルチプライヤーを選択すると、勝つための",3:"が計算されます。"},qus3_8:{1:"また、勝った場合の",2:"を選択すると、",3:"のサイズが計算されます。"},ask4:"最大利益はいくらですか？",qus4:"最大利益指標は、家がロールごとにリスクを負う準備ができているかどうかを示し、家のバンクロールのサイズに基づいています。 この金額は、勝つチャンスが何であれ、変わりません。 家のバンクロールが拡大または縮小すると、リアルタイムで調整されます。",ask5:"サイコロの目がとても遅いのはなぜですか？",qus5:"すべてがブロックチェーン上にあり、安全なブロック確認時間は20秒以上になる場合があります。",ask6:"プレイをやめられない場合はどうなりますか？",qus6_1:"あらゆる形態のギャンブルと同様に、オンラインギャンブルは、あなたの人生に深刻な悪影響を与える可能性のある依存症になる可能性があります。 予定よりも多くを失うか、安全に余裕があり、ギャンブルに費やす時間やお金を管理するのに苦労していることに気付いた場合は、これらのサイトで役立つ情報を確認してください：",qus6_2:"運が左右するゲームには、連続するラウンドの間に記憶がないため、一連の損失の後に賭ける金額を増やしても、次のラウンドに勝つ確率には影響しません。",ask7:"このゲームは詐欺ですか、それともポンジースキームですか？ それは破産していますか？",qus7_1:"ゲームが勝者への支払いを拒否するような単純なことをしているとしたら、誰もがすでにそれについて聞いたことがあるでしょう。",qus7_2:"すべてがブロックチェーン上にあり、プログラムコードですべてのルールが決定されています。 誰もがブロックチェーンエクスプローラーでゲームのスマートコントラクトのソースコードを簡単に確認できます。 リンクは各ゲームの情報ボックスにあります。"},gems:{success:"Success",failed:"Failed",itemName:"Item",price:"Price",rarity:"Rarity",weight:"Weight",quality:"Quality",qualityInfo:"High-quality gems are excellent crafting materials.",level:"Level",gem:"Gem",Common:"Common",Uncommon:"Uncommon",Rare:"Rare",Epic:"Epic",names:{0:"Diamond",1:"Ruby",2:"Emerald",3:"Sapphire",4:"Topaz",5:"Amethyst"},levels:{0:"",1:"Flawless ",2:"Perfect ",3:"Square ",4:"Star ",5:"Flawless Star ",6:"Perfect Star ",7:"Radiant Star ",8:"Round ",9:"Tear Drop ",10:"Heart ",11:"Imperial ",12:"Marquise ",13:"Radiant Marquise ",14:"Royal ",15:"Radiant Royal "}},airdrop:{register:"Register",notRegistered:"You are not a member yet, please register first!",claim:"Claim",new:"Newly Gems!",blindBox:"Gacha",collections:"Collections",crafting:"Crafting",auction:"Auction",openGemChest:"Gem Chest Gacha",priceUnit:"Points/Gem",referralCode:"Referral Code",claimFreeGem:"Promote to get free Gems",canClaimed:"Gems you can claim",balance:"Balance",times:"x",points:"Points",earnPoints:"Points",redeem:"Redeem",referralLink:"Referral Link",invitAndGet:"Play Games to get more gem points.",gotGemNft:"Got Gem NFT",whenAppear:"When the Gem is settled it will appear in your NFT collection tab soon."},auction:{currentPrice:"Current",buyOutPrice:"Buy Out",bidPrice:"Bid",submit:"Submit"},crafting:{combine:"Combine",combineGem:"Combine Gem",chooseA:"Choose a ",successInfo:"High-quality gems are excellent crafting materials. It can improve the success rate of gem combination.",successRate:"Success Rate"}},l={"en-US":n,"zh-TW":i,"ja-JP":s},c=(0,o.xr)((({app:e})=>{const t=(0,r.o)({locale:"en-US",messages:l});e.use(t)}))}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=e,(()=>{a.amdO={}})(),(()=>{var e=[];a.O=(t,o,r,n)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,r,n]=e[u],s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](o[l])))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{6:"31727f29",46:"663edd29",64:"1d2d2830",252:"bae011f9",257:"5577d178",301:"a50c2b90",309:"22958f5f",372:"fc4535f1",431:"312816a6",549:"e5723db4",649:"41fcdbf8",782:"dc91c835",920:"18033320",987:"16648167"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{46:"46b22212",143:"31d6cfe0",252:"9e031d4b",301:"d4571950",309:"1145f05a",372:"8a6ec3ee",549:"295525ad",649:"69166c6f",736:"611ec582",782:"79b1264c",920:"7bdb89f3",987:"5333f460"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="crystal-dapp:";a.l=(o,r,n,i)=>{if(e[o])e[o].push(r);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+n){s=m;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=o),e[o]=[r];var d=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=n=>{if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=n,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=a[o],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],n=r.getAttribute("data-href");if(n===e||n===t)return r}},o=o=>new Promise(((r,n)=>{var i=a.miniCssF(o),s=a.p+i;if(t(i,s))return r();e(o,s,r,n)})),r={143:0};a.f.miniCss=(e,t)=>{var a={46:1,252:1,301:1,309:1,372:1,549:1,649:1,782:1,920:1,987:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=o(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((a,o)=>r=e[t]=[a,o]));o.push(r[2]=n);var i=a.p+a.u(t),s=new Error,l=o=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(t&&t(o);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkcrystal_dapp"]=self["webpackChunkcrystal_dapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(76893)));o=a.O(o)})();