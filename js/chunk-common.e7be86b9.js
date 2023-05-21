"use strict";(self["webpackChunkstats"]=self["webpackChunkstats"]||[]).push([[64],{7818:function(e,t,a){var n=a(9199);const o=(0,n.createElementVNode)("footer",null,[(0,n.createTextVNode)(" If you find some bugs report them "),(0,n.createElementVNode)("a",{href:"https://www.instagram.com/memousek/"},"@Memousek"),(0,n.createTextVNode)(" thanks. ")],-1);function l(e,t){const a=(0,n.resolveComponent)("router-link"),l=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("nav",null,[(0,n.createVNode)(a,{to:"/"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)("Home")])),_:1}),(0,n.createTextVNode)(" | "),(0,n.createVNode)(a,{to:"/leaderboard"},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)("Leaderboard")])),_:1})]),(0,n.createVNode)(l),o],64)}var r=a(89);const c={},s=(0,r.Z)(c,[["render",l]]);var d=s,i=a(2483);const m={class:"home"},u=(0,n.createElementVNode)("h1",null,"Find your mcsrranked.com stats",-1);function h(e,t,a,o,l,r){const c=(0,n.resolveComponent)("HelloWorld");return(0,n.openBlock)(),(0,n.createElementBlock)("div",m,[u,(0,n.createVNode)(c,{msg:"Welcome to Your Vue.js App"})])}function p(e,t,a,o,l,r){const c=(0,n.resolveComponent)("PlayerStatsComponent");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createVNode)(c)])}const y=e=>((0,n.pushScopeId)("data-v-337a281e"),e=e(),(0,n.popScopeId)(),e),g={class:"player-stats"},E={key:0,class:"player-details"},N={class:"player-card"},V={class:"player-card-wrapper"},k=["src","alt"],f={class:"player-stats-list"},v={style:{"font-size":"2rem","font-weight":"bold"}},w={style:{"margin-bottom":"20px"}},D={key:0},S={key:0,style:{display:"flex",gap:"10px"}},b=["href"],B=y((()=>(0,n.createElementVNode)("img",{src:"https://www.svgrepo.com/show/13671/youtube.svg",width:"20"},null,-1))),M=[B],I=["href"],C=y((()=>(0,n.createElementVNode)("img",{src:"https://www.svgrepo.com/show/448251/twitch.svg",width:"20"},null,-1))),_=[C],T={key:2,style:{display:"flex",gap:"10px","justify-content":"center","align-items":"center"}},x=y((()=>(0,n.createElementVNode)("img",{src:"https://www.svgrepo.com/show/343548/discord-communication-interaction-message-network.svg",width:"20"},null,-1))),$={key:0},W={class:"matches-table"},F=y((()=>(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",{style:{"font-weight":"bold"}},[(0,n.createElementVNode)("td",null,"Total games"),(0,n.createElementVNode)("td",null,"Best W/S"),(0,n.createElementVNode)("td",null,"Current W/S"),(0,n.createElementVNode)("td",null,"Best time"),(0,n.createElementVNode)("td",null,"W/L/D"),(0,n.createElementVNode)("td",null,"Win rate")])],-1))),L={style:{"text-align":"center"}},P={style:{"text-align":"center"}},R={style:{"text-align":"center"}},U={style:{"text-align":"center"}},Z={style:{"text-align":"center"},title:"Wins / Losees / Draft"},A={style:{"text-align":"center"}},H={key:1},O={key:1},K=y((()=>(0,n.createElementVNode)("p",null,"No data available",-1))),j=[K];function G(e,t,a,o,l,r){const c=(0,n.resolveComponent)("PlayerStatsMatchComponent"),s=(0,n.resolveComponent)("PlayerStatChartComponent");return(0,n.openBlock)(),(0,n.createElementBlock)("div",g,[(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.username=t),placeholder:"Enter username",onKeyup:t[1]||(t[1]=(0,n.withKeys)(((...e)=>r.fetchData&&r.fetchData(...e)),["enter"]))},null,544),[[n.vModelText,e.username]]),(0,n.createElementVNode)("button",{onClick:t[2]||(t[2]=(...e)=>r.fetchData&&r.fetchData(...e))},"Search"),l.data?((0,n.openBlock)(),(0,n.createElementBlock)("div",E,[(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("img",{src:r.getImageUrl,alt:r.getImageAlt,class:"player-avatar"},null,8,k),(0,n.createElementVNode)("ul",f,[(0,n.createElementVNode)("li",v,(0,n.toDisplayString)(l.data.data.nickname),1),(0,n.createElementVNode)("li",w,(0,n.toDisplayString)(r.addRank(l.data.data.elo_rate))+" ("+(0,n.toDisplayString)(l.data.data.elo_rate)+") ",1),null!=l.data.data.elo_rank?((0,n.openBlock)(),(0,n.createElementBlock)("li",D," Ledder Rank: "+(0,n.toDisplayString)(l.data.data.elo_rank),1)):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("li",null," Peak elo: "+(0,n.toDisplayString)(r.addRank(l.data.data.best_elo_rate))+" ("+(0,n.toDisplayString)(l.data.data.best_elo_rate)+") ",1),(0,n.createElementVNode)("li",null,"Last online: "+(0,n.toDisplayString)(r.formatRelativeTime(l.data.data.latest_time)),1)])]),l.data.data.connections.discord||l.data.data.connections.youtube||l.data.data.connections.twitch?((0,n.openBlock)(),(0,n.createElementBlock)("div",S,[l.data.data.connections.youtube?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,target:"_blank",href:"https://youtube.com/channel/"+l.data.data.connections.youtube.id,style:{display:"flex"}},M,8,b)):(0,n.createCommentVNode)("",!0),l.data.data.connections.twitch?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:1,target:"_blank",href:"https://twitch.com/"+l.data.data.connections.twitch.name,style:{display:"flex"}},_,8,I)):(0,n.createCommentVNode)("",!0),l.data.data.connections.discord?((0,n.openBlock)(),(0,n.createElementBlock)("span",T,[x,(0,n.createElementVNode)("span",null,(0,n.toDisplayString)(l.data.data.connections.discord.name),1)])):(0,n.createCommentVNode)("",!0)])):(0,n.createCommentVNode)("",!0)]),"success"===l.status?((0,n.openBlock)(),(0,n.createElementBlock)("div",$,[(0,n.createElementVNode)("table",W,[F,(0,n.createElementVNode)("tbody",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("td",L,(0,n.toDisplayString)(l.datas.data.total_played),1),(0,n.createElementVNode)("td",P,(0,n.toDisplayString)(l.datas.data.highest_winstreak),1),(0,n.createElementVNode)("td",R,(0,n.toDisplayString)(l.datas.data.current_winstreak),1),(0,n.createElementVNode)("td",U,(0,n.toDisplayString)(r.formatTime(l.data.data.best_record_time)),1),(0,n.createElementVNode)("td",Z,(0,n.toDisplayString)(l.data.data.records[2].win)+"/"+(0,n.toDisplayString)(l.data.data.records[2].lose)+"/"+(0,n.toDisplayString)(l.data.data.records[2].draw),1),(0,n.createElementVNode)("td",A,(0,n.toDisplayString)(r.calculateWinRate(l.data.data.records[2].win,l.data.data.records[2].lose))+"%",1)])])])])):((0,n.openBlock)(),(0,n.createElementBlock)("div",H," Loading ... ")),(0,n.createVNode)(c,{username:e.username,uuid:l.data.data.uuid},null,8,["username","uuid"]),(0,n.createVNode)(s,{username:e.username,uuid:l.data.data.uuid},null,8,["username","uuid"])])):((0,n.openBlock)(),(0,n.createElementBlock)("div",O,j))])}var q=a(4161);const z={class:"matches-table"},Y=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",null,"Opponent"),(0,n.createElementVNode)("th",null,"Result"),(0,n.createElementVNode)("th",null,"Final Time"),(0,n.createElementVNode)("th",null,"Date"),(0,n.createElementVNode)("th")])],-1),J=["href"],Q=["onClick"],X={class:"modal-content"},ee=(0,n.createElementVNode)("h3",null,"Match Details",-1),te=(0,n.createElementVNode)("h4",null,"Timeline",-1),ae={class:"matches-table"},ne=(0,n.createElementVNode)("thead",null,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("td",null,"Player"),(0,n.createElementVNode)("td",null,"Time"),(0,n.createElementVNode)("td",null,"Event")])],-1);function oe(e,t,a,o,l,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("table",z,[Y,(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.matches,(e=>((0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:e.match_id},[(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("a",{href:r.getOpponentHref(e)},(0,n.toDisplayString)(r.getOpponentsName(e)),9,J)]),(0,n.createElementVNode)("td",{class:(0,n.normalizeClass)(r.getMatchResultClass(e))},(0,n.toDisplayString)(r.getWinner(e)),3),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(r.getFinalTime(e)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(r.formatTimestamp(e.match_date)),1),(0,n.createElementVNode)("td",null,[(0,n.createElementVNode)("button",{onClick:t=>r.openModal(e)},"More",8,Q)])])))),128))])]),l.selectedMatch?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:"modal",onKeydown:t[1]||(t[1]=(0,n.withKeys)(((...e)=>r.closeModal&&r.closeModal(...e)),["esc"]))},[(0,n.createElementVNode)("div",X,[(0,n.createElementVNode)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>r.closeModal&&r.closeModal(...e))},"×"),ee,(0,n.createElementVNode)("b",null,(0,n.toDisplayString)(l.selectedMatch.members[0].nickname),1),(0,n.createTextVNode)(" vs "),(0,n.createElementVNode)("b",null,(0,n.toDisplayString)(l.selectedMatch.members[1].nickname),1),(0,n.createElementVNode)("p",null,"Match ID: "+(0,n.toDisplayString)(l.selectedMatch.match_id),1),(0,n.createElementVNode)("p",null,"Match Type: "+(0,n.toDisplayString)(r.getMatchTypeText(l.selectedMatch.match_type)),1),(0,n.createElementVNode)("p",null,"Match Season: "+(0,n.toDisplayString)(l.selectedMatch.match_season),1),(0,n.createElementVNode)("p",null,"Match Final time: "+(0,n.toDisplayString)(r.formatTime(l.selectedMatch.final_time)),1),(0,n.createElementVNode)("p",null,"Seed Type: "+(0,n.toDisplayString)(l.selectedMatch.seed_type),1),(0,n.createElementVNode)("p",null,[(0,n.createTextVNode)("Winner: "),(0,n.createElementVNode)("b",null,(0,n.toDisplayString)(r.getNicknameByUUID(l.selectedMatch.winner)),1)]),te,(0,n.createElementVNode)("table",ae,[ne,((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(l.selectedMatch.timelines,(e=>((0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:e.time},[(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(r.getNicknameByUUID(e.uuid)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(r.formatTime(e.time)),1),(0,n.createElementVNode)("td",null,(0,n.toDisplayString)(r.labelAdvancement(e.timeline)),1)])))),128))])])],32)):(0,n.createCommentVNode)("",!0)])}var le={name:"PlayerStatsMatchComponent",props:{username:{type:String,required:!0},uuid:{type:String,required:!0}},data(){return{matches:[],match:null,selectedMatch:null}},mounted(){this.fetchMatches()},computed:{getImageUrl(){return`https://skins.danielraybone.com/v1/head/${this.username}?width=150`},getImageAlt(){return`${this.username}'s head`}},methods:{async fetchMatches(){try{const e=await q.Z.get(`https://mcsrranked.com/api/users/${this.username}/matches`);this.matches=e.data.data}catch(e){console.error("Error fetching match data:",e)}},getMatchTypeText(e){return 1===e?"Casual":2===e?"Ranked":3===e?"Private":"Event"},formatTimestamp(e){const t=new Date(1e3*e);return t.toLocaleString()},getFinalTime(e){return e.forfeit?"Forfeit":e.is_decay?"Is Decay":this.formatTime(e.final_time)},labelAdvancement(e){let t=e.split(".");return t=t[t.length-1],t.split("_").join(" ")},getOpponentsName(e){let t="";return e.members.forEach((e=>{e.uuid===this.uuid||(t=e.nickname)})),t},getOpponentHref(e){const t=this.getOpponentsName(e);return`/?username=${t}`},getWinner(e){return e.winner===this.uuid?"Win":"Lose"},getMatchResultClass(e){return e.winner===this.uuid?"green":"red"},async openModal(e){this.selectedMatch=e;try{const t=await q.Z.get(`https://mcsrranked.com/api/matches/${e.match_id}`),a=t.data.data;this.selectedMatch={...e,...a}}catch(t){console.error("Error fetching match details:",t)}document.body.classList.add("modal-open")},getNicknameByUUID(e){const t=this.selectedMatch.members.find((t=>t.uuid===e));return t?t.nickname:""},closeModal(){this.selectedMatch=null,document.body.classList.remove("modal-open")},formatTime(e){const t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(2);return`${t}:${a<10?"0":""}${a}`}}};const re=(0,r.Z)(le,[["render",oe]]);var ce=re;function se(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("i",null,"Elo graph here soon")}const de={},ie=(0,r.Z)(de,[["render",se]]);var me=ie,ue={name:"PlayerStatsComponent",components:{PlayerStatsMatchComponent:ce,PlayerStatChartComponent:me},data(){return{data:null,datas:[],uuid:"",error:null,status:""}},computed:{getImageUrl(){return`https://skins.danielraybone.com/v1/head/${this.username}?width=150`},getImageAlt(){return`${this.username}'s head`}},mounted(){const e=new URLSearchParams(window.location.search);e.has("username")&&(this.username=e.get("username"),this.fetchData(),e.set("username",this.username))},methods:{async fetchData(){if(!this.username)return this.data=null,void(this.error=null);const e=`https://mcsrranked.com/api/users/${this.username}`;try{const t=await q.Z.get(e);this.data=t.data,this.datas=t.data,this.status=t.data.status,this.error=null}catch(t){this.data=null,this.error=t.message}},addRank(e){const t=[[0,199,"Coal I"],[200,399,"Coal II"],[400,599,"Coal III"],[600,799,"Iron I"],[800,999,"Iron II"],[1e3,1199,"Iron III"],[1200,1399,"Gold I"],[1400,1599,"Gold II"],[1600,1799,"Gold III"],[1800,1999,"Diamond I"],[2e3,2199,"Diamond II"],[2200,2399,"Diamond III"]];for(const[a,n,o]of t)if(e>=a&&e<=n)return o;return"Unranked"},formatTime(e){const t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(2);return`${t}:${a<10?"0":""}${a}`},formatRelativeTime(e){const t=Math.floor(Date.now()/1e3),a=t-e;if(a<60)return`${a} seconds ago`;if(a<3600){const e=Math.floor(a/60);return`${e} minutes ago`}if(a<86400){const e=Math.floor(a/3600);return`${e} hours ago`}if(a<604800){const e=Math.floor(a/86400);return`${e} days ago`}{const t=new Date(1e3*e);return t.toDateString()}},calculateWinRate(e,t){const a=e+t;if(0===a)return 0;const n=e/a*100;return n.toFixed(2)}}};const he=(0,r.Z)(ue,[["render",G],["__scopeId","data-v-337a281e"]]);var pe=he,ye={name:"HelloWorld",components:{PlayerStatsComponent:pe},props:{msg:String}};const ge=(0,r.Z)(ye,[["render",p],["__scopeId","data-v-67497a62"]]);var Ee=ge,Ne={name:"HomeView",components:{HelloWorld:Ee}};const Ve=(0,r.Z)(Ne,[["render",h]]);var ke=Ve;const fe=(0,n.createElementVNode)("h1",null,"404 - Page Not Found",-1),ve=[fe];function we(e,t,a,o,l,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,ve)}var De={};const Se=(0,r.Z)(De,[["render",we]]);var be=Se;const Be=[{path:"/",name:"Stats",component:ke},{path:"/leaderboard",name:"Leaderboard",component:()=>a.e(935).then(a.bind(a,1935))},{path:"/:catchAll(.*)",name:"NotFound",component:be},{path:"/mcsrranked-stats",redirect:"/"}],Me=(0,i.p7)({history:(0,i.PO)("/"),base:"/",routes:Be});Me.beforeEach(((e,t,a)=>{document.title=e.name,a()}));var Ie=Me,Ce=a(7139),_e=(0,Ce.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Te=a(407),xe=a.n(Te);(0,n.createApp)(d).use(_e).use(Ie).use(xe()).mount("#app")}}]);
//# sourceMappingURL=chunk-common.e7be86b9.js.map