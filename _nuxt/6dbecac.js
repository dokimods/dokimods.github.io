(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,9,10,11],{1158:function(t,n,e){"use strict";e.r(n);var o=e(22),r=e(5),c=(e(47),e(127),e(38),e(26),e(37),e(49),e(31),e(50),e(34),e(645)),m=e(646),l=e(647);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var h,j={components:{ModEntries:c.default,ModPaginator:m.default,SearchWidgets:l.default},data:function(){return{modDisplayData:{search:null,page:0,genre:null,status:null,length:null,sort:null},mods:[],totalMods:0}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("mods",{deep:!0}).only(["title","genre","status","dir"]).sortBy("slug").limit(6).fetch();case 2:return t.mods=n.sent,n.t0=parseInt,n.next=6,t.$content("mods",{deep:!0}).only([]).fetch();case 6:n.t1=n.sent.length,t.totalMods=(0,n.t0)(n.t1);case 8:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"DokiMods - Mod Page",meta:[{hid:"description",name:"description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:title",name:"og:title",content:"DokiMods"},{hid:"og:image",property:"og:image",content:e(464)},{hid:"og:description",property:"og:description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:url",property:"og:url",content:"https://dokimods.me/"},{hid:"twitter:card",name:"twitter:card",content:"summary"}]}},watch:{modDisplayData:{handler:(h=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchMods(n);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)}),deep:!0}},methods:{searchQuery:function(t){this.modDisplayData.page=0,this.modDisplayData.search=t},filterOptions:function(t){this.modDisplayData.page=0,this.modDisplayData.genre=t.genre,this.modDisplayData.status=t.status,this.modDisplayData.length=t.length},changePage:function(t){this.modDisplayData.page=parseInt(t),this.scrollUp()},changeSort:function(t){this.modDisplayData.sort=t},scrollUp:function(){window.scrollTo({top:0,behavior:"smooth"})},fetchMods:function(t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,c,m,l,d,h,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},r=parseInt(t.page),c=t.search,m=t.genre,l=t.status,d=t.length,h=t.sort,e.next=9,n.$content("mods",{deep:!0});case 9:j=e.sent,e.t0=h,e.next="z2a"===e.t0?13:"n2o"===e.t0?17:"o2n"===e.t0?21:25;break;case 13:return e.next=15,j.sortBy("slug","desc");case 15:return j=e.sent,e.abrupt("break",29);case 17:return e.next=19,j.sortBy("released","desc");case 19:return j=e.sent,e.abrupt("break",29);case 21:return e.next=23,j.sortBy("released","asc");case 23:return j=e.sent,e.abrupt("break",29);case 25:return e.next=27,j.sortBy("slug","asc");case 27:return j=e.sent,e.abrupt("break",29);case 29:if(!c){e.next=33;break}return e.next=32,j.search("title",c);case 32:j=e.sent;case 33:if(m&&(o=f(f({},o),{},{genre:{$contains:m}})),l&&(o=f(f({},o),{status:l})),d&&(o=f(f({},o),{length:d})),!o){e.next=40;break}return e.next=39,j.where(o);case 39:j=e.sent;case 40:return e.t1=parseInt,e.next=43,j.only([]).fetch();case 43:return e.t2=e.sent.length,n.totalMods=(0,e.t1)(e.t2),e.next=47,j.only(["title","genre","status","dir"]).skip(6*r).limit(6).fetch();case 47:n.mods=e.sent;case 48:case"end":return e.stop()}}),e)})))()}}},x=(e(654),e(15)),component=Object(x.a)(j,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{ref:"start"}),t._v(" "),e("div",{staticClass:"content"},[e("SearchWidgets",{on:{"search-query":t.searchQuery,"filter-options":t.filterOptions,"sort-by":t.changeSort}}),t._v(" "),e("br"),t._v(" "),t.totalMods>6?e("ModPaginator",{attrs:{"curr-page":t.modDisplayData.page,"total-mods":t.totalMods},on:{"change-page":t.changePage}}):t._e(),t._v(" "),e("br"),t._v(" "),t.mods.length?e("div",{staticClass:"mod-container"},t._l(t.mods,(function(t,n){return e("div",{key:n},[e("ModEntries",{attrs:{mod:t}})],1)})),0):e("div",[e("h1",[t._v("No mods found.")])]),t._v(" "),e("br")],1)])}),[],!1,null,"2b7a6777",null);n.default=component.exports},281:function(t,n,e){"use strict";e.r(n);var o={props:{mod:{type:Object,default:function(){return{dir:""}}}},methods:{imgSrc:function(){try{var t=this.mod;return e(282)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(443)}}}},r=e(15),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{staticClass:"logo",attrs:{src:t.imgSrc(),alt:""}})}),[],!1,null,"6aed83dc",null);n.default=component.exports},282:function(t,n,e){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":283,"./content/mods/48hr/thumbnail.jpg":284,"./content/mods/a-brand-new-day/thumbnail.jpg":285,"./content/mods/a-date-with-sayori/thumbnail.jpg":286,"./content/mods/a-dog-story/thumbnail.jpg":287,"./content/mods/a-fathers-redemption/thumbnail.jpg":288,"./content/mods/a-lost-chapter/thumbnail.jpg":289,"./content/mods/a-slice-of-life/thumbnail.jpg":290,"./content/mods/after-school-demo/thumbnail.jpg":291,"./content/mods/alone-together/thumbnail.jpg":292,"./content/mods/another-world/thumbnail.jpg":293,"./content/mods/april-fools-unlocked/thumbnail.jpg":294,"./content/mods/art-club/thumbnail.jpg":295,"./content/mods/bad-memories/thumbnail.jpg":296,"./content/mods/behind-closed-doors/thumbnail.jpg":297,"./content/mods/bff/thumbnail.jpg":298,"./content/mods/bland-rewrite/thumbnail.jpg":299,"./content/mods/chad-mc/thumbnail.jpg":300,"./content/mods/choice-based/thumbnail.jpg":301,"./content/mods/christmas-adventure/thumbnail.jpg":302,"./content/mods/christmas-heist-2/thumbnail.jpg":303,"./content/mods/christmas-heist/thumbnail.jpg":304,"./content/mods/christmas-story/thumbnail.jpg":305,"./content/mods/coldest-summer/thumbnail.jpg":306,"./content/mods/college-club-2/thumbnail.jpg":307,"./content/mods/college-club/thumbnail.jpg":308,"./content/mods/corrupted-files/thumbnail.jpg":309,"./content/mods/date-club/thumbnail.jpg":310,"./content/mods/day-of-reckoning/thumbnail.jpg":311,"./content/mods/deletion-rewrite/thumbnail.jpg":312,"./content/mods/despair/thumbnail.jpg":313,"./content/mods/dimensions/thumbnail.jpg":314,"./content/mods/divided-hearts/thumbnail.jpg":315,"./content/mods/do-you-lift-club/thumbnail.jpg":316,"./content/mods/doki-doki-simulator/thumbnail.jpg":317,"./content/mods/doki-heika-banzai/thumbnail.jpg":318,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":319,"./content/mods/dokis-n-dragons/thumbnail.jpg":320,"./content/mods/dreams/thumbnail.jpg":321,"./content/mods/easter-hunt/thumbnail.jpg":322,"./content/mods/emerald-heart/thumbnail.jpg":323,"./content/mods/encore/thumbnail.jpg":324,"./content/mods/enter-traceback/thumbnail.jpg":325,"./content/mods/everlasting/thumbnail.jpg":326,"./content/mods/exit-music-redux/thumbnail.jpg":327,"./content/mods/exit-music/thumbnail.jpg":328,"./content/mods/fake-reality/thumbnail.jpg":329,"./content/mods/fallen-angel/thumbnail.jpg":330,"./content/mods/forever-and-ever/thumbnail.jpg":331,"./content/mods/forgotten/thumbnail.jpg":332,"./content/mods/forward-momentum/thumbnail.jpg":333,"./content/mods/found-love/thumbnail.jpg":334,"./content/mods/go-home-club/thumbnail.jpg":335,"./content/mods/god-syndrome/thumbnail.jpg":336,"./content/mods/hells-kitchen/thumbnail.jpg":337,"./content/mods/her/thumbnail.jpg":338,"./content/mods/in-a-nutshell/thumbnail.jpg":339,"./content/mods/india-man-time/thumbnail.jpg":340,"./content/mods/into-the-dark/thumbnail.jpg":341,"./content/mods/isolation/thumbnail.jpg":342,"./content/mods/it-wasnt-her/thumbnail.jpg":343,"./content/mods/just-monika-exe/thumbnail.jpg":344,"./content/mods/just-us/thumbnail.jpg":345,"./content/mods/just-yuri/thumbnail.jpg":346,"./content/mods/keeper-of-reality/thumbnail.jpg":347,"./content/mods/lavender-scent/thumbnail.jpg":348,"./content/mods/longer-roads/thumbnail.jpg":349,"./content/mods/loser-mc/thumbnail.jpg":350,"./content/mods/lost-ascension/thumbnail.jpg":351,"./content/mods/love-and-literature/thumbnail.jpg":352,"./content/mods/love-secrets/thumbnail.jpg":353,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":354,"./content/mods/malignancy/thumbnail.jpg":355,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":356,"./content/mods/mcs-revenge/thumbnail.jpg":357,"./content/mods/meme-club-2/thumbnail.jpg":358,"./content/mods/meme-club/thumbnail.jpg":359,"./content/mods/memorial/thumbnail.jpg":360,"./content/mods/mercy/thumbnail.jpg":361,"./content/mods/murder-case/thumbnail.jpg":362,"./content/mods/my-escape/thumbnail.jpg":363,"./content/mods/natsukis-expanded-story/thumbnail.jpg":364,"./content/mods/never-ending-tomorrow/thumbnail.jpg":365,"./content/mods/new-blood/thumbnail.jpg":366,"./content/mods/new-eyes/thumbnail.jpg":367,"./content/mods/new-friends-act-one/thumbnail.jpg":368,"./content/mods/new-world/thumbnail.jpg":369,"./content/mods/no-happiness/thumbnail.jpg":370,"./content/mods/one-last-memory/thumbnail.jpg":371,"./content/mods/onii-chan-club/thumbnail.jpg":372,"./content/mods/other-clubs/thumbnail.jpg":373,"./content/mods/our-castle-walls/thumbnail.jpg":374,"./content/mods/our-final-heartbeat/thumbnail.jpg":375,"./content/mods/our-reality/thumbnail.jpg":376,"./content/mods/our-time/thumbnail.jpg":377,"./content/mods/outbreak-red-sky/thumbnail.jpg":378,"./content/mods/pantomime-show/thumbnail.jpg":379,"./content/mods/pink-eyes/thumbnail.jpg":380,"./content/mods/president-natsuki/thumbnail.jpg":381,"./content/mods/purist/thumbnail.jpg":382,"./content/mods/recoded/thumbnail.jpg":383,"./content/mods/relapse/thumbnail.jpg":384,"./content/mods/return-to-the-portrait/thumbnail.jpg":385,"./content/mods/rhapsody/thumbnail.jpg":386,"./content/mods/rising-storm-2/thumbnail.jpg":387,"./content/mods/rising-storm/thumbnail.jpg":388,"./content/mods/rpg/thumbnail.jpg":389,"./content/mods/salvation/thumbnail.jpg":390,"./content/mods/sans-in-ddlc/thumbnail.jpg":391,"./content/mods/save-sayori/thumbnail.jpg":392,"./content/mods/savior-of-souls/thumbnail.jpg":393,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":394,"./content/mods/sayori-date/thumbnail.jpg":395,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":396,"./content/mods/scattered-stars/thumbnail.jpg":397,"./content/mods/second-chances/thumbnail.jpg":398,"./content/mods/sequel-club-classic/thumbnail.jpg":399,"./content/mods/shattered-world/thumbnail.jpg":400,"./content/mods/snafu/thumbnail.jpg":401,"./content/mods/spark-of-hope/thumbnail.jpg":402,"./content/mods/starry-eyed/thumbnail.jpg":403,"./content/mods/summer-hope/thumbnail.jpg":404,"./content/mods/sunny-rains/thumbnail.jpg":405,"./content/mods/sweet-dreams/thumbnail.jpg":406,"./content/mods/switcheroo/thumbnail.jpg":407,"./content/mods/take-two/thumbnail.jpg":408,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":409,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":410,"./content/mods/the-festival/thumbnail.jpg":411,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":412,"./content/mods/the-good-ending/thumbnail.jpg":413,"./content/mods/the-last-sky/thumbnail.jpg":414,"./content/mods/the-musical/thumbnail.jpg":415,"./content/mods/the-new-literature-club/thumbnail.jpg":416,"./content/mods/the-perfect-story/thumbnail.jpg":417,"./content/mods/the-portrait-of-markov/thumbnail.jpg":418,"./content/mods/the-post-credit-scene/thumbnail.jpg":419,"./content/mods/the-yuri-parable/thumbnail.jpg":420,"./content/mods/thot-club/thumbnail.jpg":421,"./content/mods/through-time-and-space/thumbnail.jpg":422,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":423,"./content/mods/total-fold/thumbnail.jpg":424,"./content/mods/true-feelings/thumbnail.jpg":425,"./content/mods/true-happiness/thumbnail.jpg":426,"./content/mods/true-world/thumbnail.jpg":427,"./content/mods/tutorial/thumbnail.jpg":428,"./content/mods/twin-realities/thumbnail.jpg":429,"./content/mods/ultimate-combo/thumbnail.jpg":430,"./content/mods/undone-fate/thumbnail.jpg":431,"./content/mods/vigilante/thumbnail.jpg":432,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":433,"./content/mods/we-are-the-literature-club/thumbnail.jpg":434,"./content/mods/weatheard-world/thumbnail.jpg":435,"./content/mods/west-virginia-club/thumbnail.jpg":436,"./content/mods/window-to-your-heart/thumbnail.jpg":437,"./content/mods/world-of-dreams/thumbnail.jpg":438,"./content/mods/yandere-club/thumbnail.jpg":439,"./content/mods/yandere-madness/thumbnail.jpg":440,"./content/mods/youtuber-club/thumbnail.jpg":441,"./content/mods/yuri-reality/thumbnail.jpg":442};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=282},283:function(t,n,e){t.exports=e.p+"img/749bd9d.jpg"},284:function(t,n,e){t.exports=e.p+"img/146fad2.jpg"},285:function(t,n,e){t.exports=e.p+"img/d47e66f.jpg"},286:function(t,n,e){t.exports=e.p+"img/1a4c858.jpg"},287:function(t,n,e){t.exports=e.p+"img/e7624bb.jpg"},288:function(t,n,e){t.exports=e.p+"img/7be81d0.jpg"},289:function(t,n,e){t.exports=e.p+"img/62646ff.jpg"},290:function(t,n,e){t.exports=e.p+"img/68dbd81.jpg"},291:function(t,n,e){t.exports=e.p+"img/d29e3a1.jpg"},292:function(t,n,e){t.exports=e.p+"img/6b37ce7.jpg"},293:function(t,n,e){t.exports=e.p+"img/42617f1.jpg"},294:function(t,n,e){t.exports=e.p+"img/f4dcd4a.jpg"},295:function(t,n,e){t.exports=e.p+"img/d28be85.jpg"},296:function(t,n,e){t.exports=e.p+"img/5dd5e7c.jpg"},297:function(t,n,e){t.exports=e.p+"img/732548c.jpg"},298:function(t,n,e){t.exports=e.p+"img/56dc575.jpg"},299:function(t,n,e){t.exports=e.p+"img/08c6489.jpg"},300:function(t,n,e){t.exports=e.p+"img/87bba2a.jpg"},301:function(t,n,e){t.exports=e.p+"img/78df7db.jpg"},302:function(t,n,e){t.exports=e.p+"img/23164cd.jpg"},303:function(t,n,e){t.exports=e.p+"img/69e684b.jpg"},304:function(t,n,e){t.exports=e.p+"img/6f844b9.jpg"},305:function(t,n,e){t.exports=e.p+"img/301b397.jpg"},306:function(t,n,e){t.exports=e.p+"img/7814591.jpg"},307:function(t,n,e){t.exports=e.p+"img/5208845.jpg"},308:function(t,n,e){t.exports=e.p+"img/d83854b.jpg"},309:function(t,n,e){t.exports=e.p+"img/cf5e2cc.jpg"},310:function(t,n,e){t.exports=e.p+"img/72f14b9.jpg"},311:function(t,n,e){t.exports=e.p+"img/87af0c5.jpg"},312:function(t,n,e){t.exports=e.p+"img/0337d17.jpg"},313:function(t,n,e){t.exports=e.p+"img/d76bb7f.jpg"},314:function(t,n,e){t.exports=e.p+"img/216e455.jpg"},315:function(t,n,e){t.exports=e.p+"img/3f4f0d2.jpg"},316:function(t,n,e){t.exports=e.p+"img/92eb90b.jpg"},317:function(t,n,e){t.exports=e.p+"img/11eb6d8.jpg"},318:function(t,n,e){t.exports=e.p+"img/68e31c6.jpg"},319:function(t,n,e){t.exports=e.p+"img/16963aa.jpg"},320:function(t,n,e){t.exports=e.p+"img/e1835fc.jpg"},321:function(t,n,e){t.exports=e.p+"img/63d25d3.jpg"},322:function(t,n,e){t.exports=e.p+"img/f4f4b01.jpg"},323:function(t,n,e){t.exports=e.p+"img/c5991ee.jpg"},324:function(t,n,e){t.exports=e.p+"img/407c79e.jpg"},325:function(t,n,e){t.exports=e.p+"img/03ff8b3.jpg"},326:function(t,n,e){t.exports=e.p+"img/c42da01.jpg"},327:function(t,n,e){t.exports=e.p+"img/123d4c3.jpg"},328:function(t,n,e){t.exports=e.p+"img/1d24ea9.jpg"},329:function(t,n,e){t.exports=e.p+"img/28b371f.jpg"},330:function(t,n,e){t.exports=e.p+"img/4ada932.jpg"},331:function(t,n,e){t.exports=e.p+"img/2187759.jpg"},332:function(t,n,e){t.exports=e.p+"img/808b56f.jpg"},333:function(t,n,e){t.exports=e.p+"img/6febecd.jpg"},334:function(t,n,e){t.exports=e.p+"img/55bef95.jpg"},335:function(t,n,e){t.exports=e.p+"img/7a1733a.jpg"},336:function(t,n,e){t.exports=e.p+"img/1ef3d9b.jpg"},337:function(t,n,e){t.exports=e.p+"img/a5101f8.jpg"},338:function(t,n,e){t.exports=e.p+"img/92d7682.jpg"},339:function(t,n,e){t.exports=e.p+"img/887215f.jpg"},340:function(t,n,e){t.exports=e.p+"img/4196788.jpg"},341:function(t,n,e){t.exports=e.p+"img/1fc57b1.jpg"},342:function(t,n,e){t.exports=e.p+"img/06ec091.jpg"},343:function(t,n,e){t.exports=e.p+"img/2a56d5c.jpg"},344:function(t,n,e){t.exports=e.p+"img/46e6de3.jpg"},345:function(t,n,e){t.exports=e.p+"img/87b189d.jpg"},346:function(t,n,e){t.exports=e.p+"img/1318bf5.jpg"},347:function(t,n,e){t.exports=e.p+"img/ef52911.jpg"},348:function(t,n,e){t.exports=e.p+"img/43418d2.jpg"},349:function(t,n,e){t.exports=e.p+"img/eddef3d.jpg"},350:function(t,n,e){t.exports=e.p+"img/f5c8daf.jpg"},351:function(t,n,e){t.exports=e.p+"img/7905878.jpg"},352:function(t,n,e){t.exports=e.p+"img/65a1e69.jpg"},353:function(t,n,e){t.exports=e.p+"img/de7c0c9.jpg"},354:function(t,n,e){t.exports=e.p+"img/8092ea6.jpg"},355:function(t,n,e){t.exports=e.p+"img/5fb98ad.jpg"},356:function(t,n,e){t.exports=e.p+"img/8e118c9.jpg"},357:function(t,n,e){t.exports=e.p+"img/49434be.jpg"},358:function(t,n,e){t.exports=e.p+"img/d3b00a6.jpg"},359:function(t,n,e){t.exports=e.p+"img/b50b33a.jpg"},360:function(t,n,e){t.exports=e.p+"img/11aecef.jpg"},361:function(t,n,e){t.exports=e.p+"img/94eafbe.jpg"},362:function(t,n,e){t.exports=e.p+"img/bfed696.jpg"},363:function(t,n,e){t.exports=e.p+"img/71ee79e.jpg"},364:function(t,n,e){t.exports=e.p+"img/e22d3ba.jpg"},365:function(t,n,e){t.exports=e.p+"img/6cb13ca.jpg"},366:function(t,n,e){t.exports=e.p+"img/0163a3e.jpg"},367:function(t,n,e){t.exports=e.p+"img/5c4025f.jpg"},368:function(t,n,e){t.exports=e.p+"img/7deb3c9.jpg"},369:function(t,n,e){t.exports=e.p+"img/615f4a3.jpg"},370:function(t,n,e){t.exports=e.p+"img/79758e2.jpg"},371:function(t,n,e){t.exports=e.p+"img/2f1ac6f.jpg"},372:function(t,n,e){t.exports=e.p+"img/f73d466.jpg"},373:function(t,n,e){t.exports=e.p+"img/d5dc2f0.jpg"},374:function(t,n,e){t.exports=e.p+"img/9a73cc5.jpg"},375:function(t,n,e){t.exports=e.p+"img/8e546c8.jpg"},376:function(t,n,e){t.exports=e.p+"img/2edb948.jpg"},377:function(t,n,e){t.exports=e.p+"img/d02295f.jpg"},378:function(t,n,e){t.exports=e.p+"img/4e17b7e.jpg"},379:function(t,n,e){t.exports=e.p+"img/0f6239a.jpg"},380:function(t,n,e){t.exports=e.p+"img/de88c0d.jpg"},381:function(t,n,e){t.exports=e.p+"img/a1c4400.jpg"},382:function(t,n,e){t.exports=e.p+"img/66b7034.jpg"},383:function(t,n,e){t.exports=e.p+"img/2cb968d.jpg"},384:function(t,n,e){t.exports=e.p+"img/d327437.jpg"},385:function(t,n,e){t.exports=e.p+"img/d6c6c0e.jpg"},386:function(t,n,e){t.exports=e.p+"img/66b391e.jpg"},387:function(t,n,e){t.exports=e.p+"img/0d61be4.jpg"},388:function(t,n,e){t.exports=e.p+"img/a9005d7.jpg"},389:function(t,n,e){t.exports=e.p+"img/c9bf404.jpg"},390:function(t,n,e){t.exports=e.p+"img/2aae2a3.jpg"},391:function(t,n,e){t.exports=e.p+"img/348955f.jpg"},392:function(t,n,e){t.exports=e.p+"img/4accdc2.jpg"},393:function(t,n,e){t.exports=e.p+"img/c3ea60f.jpg"},394:function(t,n,e){t.exports=e.p+"img/6624a47.jpg"},395:function(t,n,e){t.exports=e.p+"img/d1e896f.jpg"},396:function(t,n,e){t.exports=e.p+"img/c654350.jpg"},397:function(t,n,e){t.exports=e.p+"img/9bfee21.jpg"},398:function(t,n,e){t.exports=e.p+"img/b327967.jpg"},399:function(t,n,e){t.exports=e.p+"img/5893796.jpg"},400:function(t,n,e){t.exports=e.p+"img/8e853f2.jpg"},401:function(t,n,e){t.exports=e.p+"img/df3469d.jpg"},402:function(t,n,e){t.exports=e.p+"img/58470bc.jpg"},403:function(t,n,e){t.exports=e.p+"img/7508458.jpg"},404:function(t,n,e){t.exports=e.p+"img/5ad3fdd.jpg"},405:function(t,n,e){t.exports=e.p+"img/d1ae1be.jpg"},406:function(t,n,e){t.exports=e.p+"img/2708150.jpg"},407:function(t,n,e){t.exports=e.p+"img/019df0c.jpg"},408:function(t,n,e){t.exports=e.p+"img/d09055b.jpg"},409:function(t,n,e){t.exports=e.p+"img/7cc3d58.jpg"},410:function(t,n,e){t.exports=e.p+"img/9abacbf.jpg"},411:function(t,n,e){t.exports=e.p+"img/90a311f.jpg"},412:function(t,n,e){t.exports=e.p+"img/d1d282d.jpg"},413:function(t,n,e){t.exports=e.p+"img/d091dbf.jpg"},414:function(t,n,e){t.exports=e.p+"img/3bf1764.jpg"},415:function(t,n,e){t.exports=e.p+"img/c44e7d1.jpg"},416:function(t,n,e){t.exports=e.p+"img/7d3ed36.jpg"},417:function(t,n,e){t.exports=e.p+"img/16316e4.jpg"},418:function(t,n,e){t.exports=e.p+"img/279fc81.jpg"},419:function(t,n,e){t.exports=e.p+"img/d458a53.jpg"},420:function(t,n,e){t.exports=e.p+"img/f7f8b0f.jpg"},421:function(t,n,e){t.exports=e.p+"img/820ec0c.jpg"},422:function(t,n,e){t.exports=e.p+"img/bdeda0e.jpg"},423:function(t,n,e){t.exports=e.p+"img/3c44e08.jpg"},424:function(t,n,e){t.exports=e.p+"img/ef564c8.jpg"},425:function(t,n,e){t.exports=e.p+"img/b6e62d9.jpg"},426:function(t,n,e){t.exports=e.p+"img/7101fac.jpg"},427:function(t,n,e){t.exports=e.p+"img/c20fb62.jpg"},428:function(t,n,e){t.exports=e.p+"img/e61e9fc.jpg"},429:function(t,n,e){t.exports=e.p+"img/faefeca.jpg"},430:function(t,n,e){t.exports=e.p+"img/69cba59.jpg"},431:function(t,n,e){t.exports=e.p+"img/bc2fa2c.jpg"},432:function(t,n,e){t.exports=e.p+"img/bd1ed17.jpg"},433:function(t,n,e){t.exports=e.p+"img/a8d52fd.jpg"},434:function(t,n,e){t.exports=e.p+"img/7a96221.jpg"},435:function(t,n,e){t.exports=e.p+"img/433fbaf.jpg"},436:function(t,n,e){t.exports=e.p+"img/74795ff.jpg"},437:function(t,n,e){t.exports=e.p+"img/1622147.jpg"},438:function(t,n,e){t.exports=e.p+"img/79eb19e.jpg"},439:function(t,n,e){t.exports=e.p+"img/a9fd5b0.jpg"},440:function(t,n,e){t.exports=e.p+"img/6617f46.jpg"},441:function(t,n,e){t.exports=e.p+"img/3a0fe2e.jpg"},442:function(t,n,e){t.exports=e.p+"img/48bb75d.jpg"},443:function(t,n,e){t.exports=e.p+"img/21e95e2.jpg"},444:function(t,n,e){t.exports=e.p+"img/5c690b1.webp"},450:function(t,n,e){var content=e(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("3e152ace",content,!0,{sourceMap:!1})},451:function(t,n,e){var content=e(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("7ca9233e",content,!0,{sourceMap:!1})},452:function(t,n,e){var content=e(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("4c67756a",content,!0,{sourceMap:!1})},458:function(t,n,e){"use strict";e(450)},459:function(t,n,e){var o=e(29)(!1);o.push([t.i,'article[data-v-4dbaf468]{transition:background-color .25s;border-radius:25px;font-family:"Mali",Arial,Helvetica,sans-serif;padding:1.5em}article[data-v-4dbaf468]:hover{background-color:hsla(0,0%,100%,.31373)}.logo[data-v-4dbaf468]{width:100%}a[data-v-4dbaf468]{text-decoration:none}.title[data-v-4dbaf468]{font-size:1.2em;font-weight:600;color:#fff}.status[data-v-4dbaf468],.title[data-v-4dbaf468]{text-align:center}.status[data-v-4dbaf468]{font-weight:500;color:var(--primary-color)}.genre[data-v-4dbaf468]{color:#fff;text-align:center}.genre span[data-v-4dbaf468]{color:var(--secondary-color)}',""]),t.exports=o},460:function(t,n,e){"use strict";e(451)},461:function(t,n,e){var o=e(29)(!1);o.push([t.i,'.pagination-container[data-v-3594fcdc]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex;margin:auto;padding:0}.pagination-container .pagination[data-v-3594fcdc]{list-style-type:none;margin:.3em}.pagination-container .pagination .pagination-link[data-v-3594fcdc]{font-family:"Work Sans",sans-serif;font-feature-settings:tabular-nums lining-nums;font-variant-numeric:tabular-nums lining-nums;padding:.5em 1em;cursor:pointer;border-radius:10px;transition:background-color .25s}.pagination-container .pagination .active[data-v-3594fcdc]{background-color:hsla(0,0%,100%,.53333)}a[data-v-3594fcdc]{text-decoration:none;color:#fff}@media only screen and (max-width:600px){.pagination-container .pagination[data-v-3594fcdc]{margin:0}}',""]),t.exports=o},462:function(t,n,e){"use strict";e(452)},463:function(t,n,e){var o=e(29)(!1);o.push([t.i,'.search-tools[data-v-32ae7098]{background-color:#fff;padding:0 2em;border-radius:25px;display:flex;align-items:center}.search-tools a[data-v-32ae7098]{color:grey;cursor:pointer;transition:color .25s}.search-tools .searchbar[data-v-32ae7098],.search-tools a[data-v-32ae7098]{font-family:"Work Sans",Arial,Helvetica,sans-serif}.search-tools .searchbar[data-v-32ae7098]{flex:1;border:0;height:3em;outline:0!important}.filter[data-v-32ae7098]{font-family:"Work Sans",Arial,Helvetica,sans-serif;padding:0 2em;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;color:#111;background:#faebd7;border-radius:25px;display:grid;grid-gap:.5em 3em;gap:.5em 3em;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.filter div[data-v-32ae7098]{display:flex;align-items:center}.filter .select[data-v-32ae7098]{font-family:"Work Sans",Arial,Helvetica,sans-serif;background:none;background-color:none;border:1px solid transparent;outline:none!important;height:3em;font-size:1em;flex:1}.search-tools .active[data-v-32ae7098]{color:var(--primary-color)}.filter .label[data-v-32ae7098]:after{content:":"}@media only screen and (max-width:600px){.filter[data-v-32ae7098]{grid-gap:2em;gap:2em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}.filter div[data-v-32ae7098]{flex-direction:column}.filter .label[data-v-32ae7098]{font-size:1.5em;margin-bottom:1em}.filter .select[data-v-32ae7098]{font-size:1.25em;width:100%;padding:.25em 1em;border-radius:10px;background:#fff}.filter[data-v-32ae7098]{grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr 1fr;padding:2em}}',""]),t.exports=o},464:function(t,n,e){t.exports=e.p+"img/d1f0ff6.png"},479:function(t,n,e){var content=e(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("0aaacade",content,!0,{sourceMap:!1})},645:function(t,n,e){"use strict";e.r(n);var o={components:{ModLogo:e(281).default},props:{mod:{type:Object,default:function(){return{dir:"",title:"",genre1:"",genre2:""}}}}},r=(e(458),e(15)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("nuxt-link",{attrs:{to:t.mod.dir}},[e("ModLogo",{staticClass:"logo",attrs:{mod:t.mod}}),t._v(" "),e("div",[e("header",{staticClass:"title"},[t._v("\n        "+t._s(t.mod.title)+"\n      ")]),t._v(" "),e("header",{staticClass:"status"},[t._v("\n        "+t._s(t.$ModDataMapper.dev_status(t.mod.status))+"\n      ")]),t._v(" "),e("header",{staticClass:"genre"},[t._v("\n        Genre: "),t._l(t.mod.genre,(function(n,o){return e("span",{key:o},[o?e("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$ModDataMapper.genre(n)))])}))],2)])],1)],1)}),[],!1,null,"4dbaf468",null);n.default=component.exports;installComponents(component,{ModLogo:e(281).default})},646:function(t,n,e){"use strict";e.r(n);e(35),e(13);var o={props:["currPage","totalMods"],computed:{prevPage:function(){return Math.max(this.currPage-1,0)},nextPage:function(){return Math.min(this.currPage+1,this.totalPages-1)},totalPages:function(){return Math.ceil(this.totalMods/6)},numVisible:function(){return Math.min(3,this.totalPages)}},methods:{changePage:function(t){this.$emit("change-page",t)},paginator:function(){var t=this.totalPages,n=this.currPage,e=this.numVisible,o=Math.floor(e/2);return n<o?this.range(1,e,1):t-n<=o?this.range(t-2*o,t,1):this.range(n-o+1,n+o+1,1)},range:function(t,n,e){return Array.from({length:(n-t)/e+1},(function(n,i){return t+i*e}))}}},r=(e(460),e(15)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.totalPages>1?e("ul",{staticClass:"pagination-container"},[e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changePage(0)}}},[t._v("\n      <<\n    ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changePage(t.prevPage)}}},[t._v("\n      <\n    ")])]),t._v(" "),t.totalPages>t.numVisible&&t.currPage+1>=t.numVisible?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),t._l(t.paginator(),(function(n,o){return e("li",{key:o,staticClass:"pagination"},[e("a",{staticClass:"pagination-link",class:{active:t.currPage==n-1},on:{click:function(e){return t.changePage(n-1)}}},[t._v("\n      "+t._s(n)+"\n    ")])])})),t._v(" "),t.totalPages>t.numVisible&&t.currPage-1<t.totalPages-t.numVisible?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changePage(t.nextPage)}}},[t._v("\n      >\n    ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changePage(t.totalPages-1)}}},[t._v("\n      >>\n    ")])])],2):t._e()}),[],!1,null,"3594fcdc",null);n.default=component.exports},647:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{searchQuery:"",filterOptions:{genre:null,status:null,length:null},sortBy:null,filterOptionsVisible:!1}},watch:{searchQuery:function(t){this.$emit("search-query",t)},filterOptions:{handler:function(t){this.$emit("filter-options",t)},deep:!0},sortBy:function(t){this.$emit("sort-by",t)}},methods:{toggleFilterOptions:function(){this.filterOptionsVisible=!this.filterOptionsVisible}}},r=(e(462),e(15)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"search-tools"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"searchbar",attrs:{type:"search",autocomplete:"off",placeholder:"Search Mods"},domProps:{value:t.searchQuery},on:{input:function(n){n.target.composing||(t.searchQuery=n.target.value)}}}),t._v(" "),e("a",{class:{active:t.filterOptionsVisible},on:{click:function(n){return t.toggleFilterOptions()}}},[t._v("\n      Filter / Sort\n    ")])]),t._v(" "),e("br"),t._v(" "),t.filterOptionsVisible?e("div",{staticClass:"filter"},[e("div",[e("label",{staticClass:"label",attrs:{for:""}},[t._v("Genre")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterOptions.genre,expression:"filterOptions.genre"}],staticClass:"select",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filterOptions,"genre",n.target.multiple?e:e[0])}}},[e("option",{domProps:{value:null}},[t._v("\n          None\n        ")]),t._v(" "),t._l(t.$ModDataMapper.genres,(function(n,o,r){return e("option",{key:r,domProps:{value:o}},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)]),t._v(" "),e("div",[e("label",{staticClass:"label",attrs:{for:""}},[t._v("Status")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterOptions.status,expression:"filterOptions.status"}],staticClass:"select",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filterOptions,"status",n.target.multiple?e:e[0])}}},[e("option",{domProps:{value:null}},[t._v("\n          None\n        ")]),t._v(" "),t._l(t.$ModDataMapper.statuses,(function(n,o,r){return e("option",{key:r,domProps:{value:o}},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)]),t._v(" "),e("div",[e("label",{staticClass:"label",attrs:{for:""}},[t._v("Length")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterOptions.length,expression:"filterOptions.length"}],staticClass:"select",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filterOptions,"length",n.target.multiple?e:e[0])}}},[e("option",{domProps:{value:null}},[t._v("\n          None\n        ")]),t._v(" "),t._l(t.$ModDataMapper.lengths,(function(n,o,r){return e("option",{key:r,domProps:{value:o}},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)]),t._v(" "),e("div",[e("label",{staticClass:"label",attrs:{for:""}},[t._v("Sort By")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.sortBy,expression:"sortBy"}],staticClass:"select",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sortBy=n.target.multiple?e:e[0]}}},[e("option",{domProps:{value:null}},[t._v("\n          A to Z\n        ")]),t._v(" "),e("option",{attrs:{value:"z2a"}},[t._v("\n          Z to A\n        ")]),t._v(" "),e("option",{attrs:{value:"n2o"}},[t._v("\n          Newest to Oldest\n        ")]),t._v(" "),e("option",{attrs:{value:"o2n"}},[t._v("\n          Oldest to Newest\n        ")])])])]):t._e()])}),[],!1,null,"32ae7098",null);n.default=component.exports},654:function(t,n,e){"use strict";e(479)},655:function(t,n,e){var o=e(29),r=e(195),c=e(444),m=o(!1),l=r(c);m.push([t.i,".mod-entries-move[data-v-2b7a6777]{transition:transform 1s}main[data-v-2b7a6777]{color:#fff;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+l+");background-attachment:fixed;background-size:cover}.content[data-v-2b7a6777]{padding:0 6em;padding-top:7em!important}.content .mod-container[data-v-2b7a6777]{padding:0 2em;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2em;gap:2em}@media only screen and (max-width:600px){.content[data-v-2b7a6777]{padding:0 2em}.content .mod-container[data-v-2b7a6777]{grid-template-columns:1fr;padding:0}}@media only screen and (min-width:600px){.content[data-v-2b7a6777]{padding:0 2em}.content .mod-container[data-v-2b7a6777]{grid-template-columns:1fr 1fr}}@media only screen and (min-width:992px){.content .mod-container[data-v-2b7a6777]{grid-template-columns:1fr 1fr 1fr}.content[data-v-2b7a6777]{padding:0 6em}}",""]),t.exports=m}}]);