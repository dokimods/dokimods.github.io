(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,9,10,11,12],{1324:function(t,n,e){"use strict";e.r(n);var o=e(5),c=(e(46),e(125),e(31),e(270)),r=e(640),m=e(641),d=e(267),l={components:{Navbar:c.default,ModEntries:r.default,ModPaginator:m.default,Footer:d.default},data:function(){return{currPage:0,searchQuery:"",mods:[],totalMods:0}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("mods",{deep:!0}).limit(6).fetch();case 2:return t.mods=n.sent,n.t0=parseInt,n.next=6,t.$content("mods",{deep:!0}).only([]).fetch();case 6:n.t1=n.sent.length,t.totalMods=(0,n.t0)(n.t1);case 8:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"DokiMods - Mod Page",meta:[{hid:"description",name:"description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:title",name:"og:title",content:"DokiMods"},{hid:"og:image",property:"og:image",content:e(458)},{hid:"og:description",property:"og:description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:url",property:"og:url",content:"https://dokimods.me/"},{hid:"twitter:card",name:"twitter:card",content:"summary"}]}},computed:{numVisible:function(){return 3}},watch:{searchQuery:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=11;break}return e.next=3,n.$content("mods",{deep:!0}).sortBy("slug").skip(6*n.currPage).limit(6).fetch();case 3:return n.mods=e.sent,e.t0=parseInt,e.next=7,n.$content("mods",{deep:!0}).only([]).fetch();case 7:e.t1=e.sent.length,n.totalMods=(0,e.t0)(e.t1),e.next=19;break;case 11:return e.next=13,n.$content("mods",{deep:!0}).sortBy("slug").search("title",t).skip(6*n.currPage).limit(6).fetch();case 13:return n.mods=e.sent,e.t2=parseInt,e.next=17,n.$content("mods",{deep:!0}).search("title",t).only([]).fetch();case 17:e.t3=e.sent.length,n.totalMods=(0,e.t2)(e.t3);case 19:n.currPage=0;case 20:case"end":return e.stop()}}),e)})))()}},methods:{changePage:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currPage=t,n.searchQuery){e.next=7;break}return e.next=4,n.$content("mods",{deep:!0}).sortBy("slug").skip(6*n.currPage).limit(6).fetch();case 4:n.mods=e.sent,e.next=10;break;case 7:return e.next=9,n.$content("mods",{deep:!0}).sortBy("slug").search("title",n.searchQuery).skip(6*n.currPage).limit(6).fetch();case 9:n.mods=e.sent;case 10:n.scrollUp();case 11:case"end":return e.stop()}}),e)})))()},scrollUp:function(){window.scrollTo({top:0,behavior:"smooth"})}}},f=(e(647),e(43)),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{ref:"start"}),t._v(" "),e("Navbar"),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"search-tools"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"searchbar",attrs:{type:"search",autocomplete:"off",placeholder:"Search Mods"},domProps:{value:t.searchQuery},on:{input:function(n){n.target.composing||(t.searchQuery=n.target.value)}}})]),t._v(" "),e("br"),t._v(" "),t.totalMods>6?e("ModPaginator",{attrs:{currPage:t.currPage,totalMods:t.totalMods,changeMethod:t.changePage,numVisible:t.numVisible}}):t._e(),t._v(" "),e("br"),t._v(" "),t.mods.length?e("div",{staticClass:"mod-container"},t._l(t.mods,(function(t,n){return e("div",{key:n},[e("ModEntries",{attrs:{mod:t}})],1)})),0):e("div",[e("h1",[t._v("No mods found.")])]),t._v(" "),e("br")],1),t._v(" "),e("Footer")],1)}),[],!1,null,"6c5792d0",null);n.default=component.exports;installComponents(component,{Navbar:e(270).default,Footer:e(267).default})},267:function(t,n,e){"use strict";e.r(n);e(271);var o=e(43),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"content"},[e("p",[t._v("\n      © "+t._s((new Date).getFullYear())+" DokiMods\n      "),e("br"),t._v(" "),e("br"),t._v("\n      Not affiliated with Team Salvato.\n    ")])])])}),[],!1,null,"32cf5647",null);n.default=component.exports;installComponents(component,{Footer:e(267).default})},268:function(t,n,e){var content=e(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("80e3bb92",content,!0,{sourceMap:!1})},269:function(t,n,e){var content=e(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("31f95efe",content,!0,{sourceMap:!1})},270:function(t,n,e){"use strict";e.r(n);e(274);var o=e(43),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",[o("ul",{staticClass:"menu"},[o("li",{staticClass:"icon"},[o("NuxtLink",{attrs:{to:"/"}},[o("img",{attrs:{src:e(273)}})])],1),t._v(" "),o("li",{staticClass:"spacing"}),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/mods"}},[t._v("\n        Mods\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/installation-guide"}},[t._v("\n        Mod Installation Guide\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/about-us"}},[t._v("\n        About Us\n      ")])],1)])])}),[],!1,null,"68fe01d2",null);n.default=component.exports},271:function(t,n,e){"use strict";e(268)},272:function(t,n,e){var o=e(44)(!1);o.push([t.i,'[data-v-32cf5647]:root{font-size:16px;font-family:"Work Sans",sans-serif}footer[data-v-32cf5647]{margin-top:auto;background-color:#ffcfc4}.content[data-v-32cf5647]{display:block;padding:.75em}.content p[data-v-32cf5647]{color:#000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}p[data-v-32cf5647]{text-align:center}',""]),t.exports=o},273:function(t,n,e){t.exports=e.p+"img/8f0ad80.webp"},274:function(t,n,e){"use strict";e(269)},275:function(t,n,e){var o=e(44)(!1);o.push([t.i,"nav[data-v-68fe01d2]{z-index:99;width:100%;position:fixed}nav ul[data-v-68fe01d2]{display:flex;align-items:center;height:4em;list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:var(--primary-color)}.buttons-right[data-v-68fe01d2]{padding-right:.5em}.icon[data-v-68fe01d2]{flex:1;height:100%;padding:.5em}nav ul li .nav-btn[data-v-68fe01d2]{display:block;color:#fff;text-align:center;padding:.5em 1.5em;border-radius:25px;text-decoration:none;transition:background-color .25s}nav ul li .nav-btn[data-v-68fe01d2]:hover{background-color:var(--secondary-color)}.menu img[data-v-68fe01d2]{width:auto;height:100%}.spacing[data-v-68fe01d2]{flex:1}",""]),t.exports=o},277:function(t,n,e){t.exports=e.p+"img/5c690b1.webp"},278:function(t,n,e){"use strict";e.r(n);var o={props:{mod:{type:Object,default:function(){return{dir:""}}}},methods:{imgSrc:function(){try{var t=this.mod;return e(443)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(444)}}}},c=e(43),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{staticClass:"logo",attrs:{src:t.imgSrc(),alt:""}})}),[],!1,null,"1adf35ae",null);n.default=component.exports},280:function(t,n,e){t.exports=e.p+"img/dc67090.webp"},281:function(t,n,e){t.exports=e.p+"img/eee0d2d.webp"},282:function(t,n,e){t.exports=e.p+"img/2624903.webp"},283:function(t,n,e){t.exports=e.p+"img/1b4fbb4.webp"},284:function(t,n,e){t.exports=e.p+"img/c26f98d.webp"},285:function(t,n,e){t.exports=e.p+"img/8975dea.webp"},286:function(t,n,e){t.exports=e.p+"img/aab6bac.webp"},287:function(t,n,e){t.exports=e.p+"img/b465f0a.webp"},288:function(t,n,e){t.exports=e.p+"img/4acb338.webp"},289:function(t,n,e){t.exports=e.p+"img/ab72e41.webp"},290:function(t,n,e){t.exports=e.p+"img/0abd04d.webp"},291:function(t,n,e){t.exports=e.p+"img/dcaf444.webp"},292:function(t,n,e){t.exports=e.p+"img/dbec483.webp"},293:function(t,n,e){t.exports=e.p+"img/d59de7c.webp"},294:function(t,n,e){t.exports=e.p+"img/5478c9d.webp"},295:function(t,n,e){t.exports=e.p+"img/1d3865c.webp"},296:function(t,n,e){t.exports=e.p+"img/49dbdaa.webp"},297:function(t,n,e){t.exports=e.p+"img/23eb16a.webp"},298:function(t,n,e){t.exports=e.p+"img/1007ff4.webp"},299:function(t,n,e){t.exports=e.p+"img/8f4e1ce.webp"},300:function(t,n,e){t.exports=e.p+"img/83eade7.webp"},301:function(t,n,e){t.exports=e.p+"img/f2b1d02.webp"},302:function(t,n,e){t.exports=e.p+"img/0308f06.webp"},303:function(t,n,e){t.exports=e.p+"img/ef98e4a.webp"},304:function(t,n,e){t.exports=e.p+"img/bce2f0d.webp"},305:function(t,n,e){t.exports=e.p+"img/b0edbeb.webp"},306:function(t,n,e){t.exports=e.p+"img/470e6a3.webp"},307:function(t,n,e){t.exports=e.p+"img/5135503.webp"},308:function(t,n,e){t.exports=e.p+"img/6f2c707.webp"},309:function(t,n,e){t.exports=e.p+"img/2909478.webp"},310:function(t,n,e){t.exports=e.p+"img/a1f478d.webp"},311:function(t,n,e){t.exports=e.p+"img/d132c5a.webp"},312:function(t,n,e){t.exports=e.p+"img/ee78a3f.webp"},313:function(t,n,e){t.exports=e.p+"img/d09b100.webp"},314:function(t,n,e){t.exports=e.p+"img/567edd2.webp"},315:function(t,n,e){t.exports=e.p+"img/6bc3275.webp"},316:function(t,n,e){t.exports=e.p+"img/b2fd187.webp"},317:function(t,n,e){t.exports=e.p+"img/08dd844.webp"},318:function(t,n,e){t.exports=e.p+"img/bf3833d.webp"},319:function(t,n,e){t.exports=e.p+"img/4e21093.webp"},320:function(t,n,e){t.exports=e.p+"img/a5fb9a5.webp"},321:function(t,n,e){t.exports=e.p+"img/db08de6.webp"},322:function(t,n,e){t.exports=e.p+"img/1ab1e0b.webp"},323:function(t,n,e){t.exports=e.p+"img/e9f035c.webp"},324:function(t,n,e){t.exports=e.p+"img/aed02e7.webp"},325:function(t,n,e){t.exports=e.p+"img/053757f.webp"},326:function(t,n,e){t.exports=e.p+"img/7fd7f10.webp"},327:function(t,n,e){t.exports=e.p+"img/2295299.webp"},328:function(t,n,e){t.exports=e.p+"img/eaf7c07.webp"},329:function(t,n,e){t.exports=e.p+"img/fc0a318.webp"},330:function(t,n,e){t.exports=e.p+"img/20b6ba5.webp"},331:function(t,n,e){t.exports=e.p+"img/c477f38.webp"},332:function(t,n,e){t.exports=e.p+"img/ce2bf04.webp"},333:function(t,n,e){t.exports=e.p+"img/1a7a05a.webp"},334:function(t,n,e){t.exports=e.p+"img/f1feb15.webp"},335:function(t,n,e){t.exports=e.p+"img/59af339.webp"},336:function(t,n,e){t.exports=e.p+"img/d52bc7c.webp"},337:function(t,n,e){t.exports=e.p+"img/dc78e54.webp"},338:function(t,n,e){t.exports=e.p+"img/7690043.webp"},339:function(t,n,e){t.exports=e.p+"img/b8cf65c.webp"},340:function(t,n,e){t.exports=e.p+"img/35a4225.webp"},341:function(t,n,e){t.exports=e.p+"img/84a5ded.webp"},342:function(t,n,e){t.exports=e.p+"img/2537ead.webp"},343:function(t,n,e){t.exports=e.p+"img/c8eceab.webp"},344:function(t,n,e){t.exports=e.p+"img/b9f8a65.webp"},345:function(t,n,e){t.exports=e.p+"img/bb49eb8.webp"},346:function(t,n,e){t.exports=e.p+"img/094770e.webp"},347:function(t,n,e){t.exports=e.p+"img/20e415e.webp"},348:function(t,n,e){t.exports=e.p+"img/a4948e4.webp"},349:function(t,n,e){t.exports=e.p+"img/ef98555.webp"},350:function(t,n,e){t.exports=e.p+"img/78f620a.webp"},351:function(t,n,e){t.exports=e.p+"img/3d36497.webp"},352:function(t,n,e){t.exports=e.p+"img/4dd6445.webp"},353:function(t,n,e){t.exports=e.p+"img/37d708f.webp"},354:function(t,n,e){t.exports=e.p+"img/5c7cc17.webp"},355:function(t,n,e){t.exports=e.p+"img/7f7a57a.webp"},356:function(t,n,e){t.exports=e.p+"img/d35817a.webp"},357:function(t,n,e){t.exports=e.p+"img/0fb8b50.webp"},358:function(t,n,e){t.exports=e.p+"img/0df93d0.webp"},359:function(t,n,e){t.exports=e.p+"img/9bd063a.webp"},360:function(t,n,e){t.exports=e.p+"img/6deacf3.webp"},361:function(t,n,e){t.exports=e.p+"img/5bfd544.webp"},362:function(t,n,e){t.exports=e.p+"img/5e35727.webp"},363:function(t,n,e){t.exports=e.p+"img/9cdf71d.webp"},364:function(t,n,e){t.exports=e.p+"img/d104d26.webp"},365:function(t,n,e){t.exports=e.p+"img/15763be.webp"},366:function(t,n,e){t.exports=e.p+"img/9a4fa6e.webp"},367:function(t,n,e){t.exports=e.p+"img/95ec674.webp"},368:function(t,n,e){t.exports=e.p+"img/6a7e30d.webp"},369:function(t,n,e){t.exports=e.p+"img/20f2b08.webp"},370:function(t,n,e){t.exports=e.p+"img/1fc0536.webp"},371:function(t,n,e){t.exports=e.p+"img/738f824.webp"},372:function(t,n,e){t.exports=e.p+"img/5d7d8ea.webp"},373:function(t,n,e){t.exports=e.p+"img/252188e.webp"},374:function(t,n,e){t.exports=e.p+"img/4178ce7.webp"},375:function(t,n,e){t.exports=e.p+"img/9d7a3fa.webp"},376:function(t,n,e){t.exports=e.p+"img/aaf25b8.webp"},377:function(t,n,e){t.exports=e.p+"img/6000807.webp"},378:function(t,n,e){t.exports=e.p+"img/64db1d9.webp"},379:function(t,n,e){t.exports=e.p+"img/8a857e2.webp"},380:function(t,n,e){t.exports=e.p+"img/d58334c.webp"},381:function(t,n,e){t.exports=e.p+"img/cf27c21.webp"},382:function(t,n,e){t.exports=e.p+"img/eb98448.webp"},383:function(t,n,e){t.exports=e.p+"img/213831d.webp"},384:function(t,n,e){t.exports=e.p+"img/60cd2f8.webp"},385:function(t,n,e){t.exports=e.p+"img/4c417d8.webp"},386:function(t,n,e){t.exports=e.p+"img/7c18d37.webp"},387:function(t,n,e){t.exports=e.p+"img/60fbdea.webp"},388:function(t,n,e){t.exports=e.p+"img/a9114b4.webp"},389:function(t,n,e){t.exports=e.p+"img/ac892c3.webp"},390:function(t,n,e){t.exports=e.p+"img/b0be7fa.webp"},391:function(t,n,e){t.exports=e.p+"img/fe8b848.webp"},392:function(t,n,e){t.exports=e.p+"img/8f7727a.webp"},393:function(t,n,e){t.exports=e.p+"img/0bf944b.webp"},394:function(t,n,e){t.exports=e.p+"img/5544961.webp"},395:function(t,n,e){t.exports=e.p+"img/626c370.webp"},396:function(t,n,e){t.exports=e.p+"img/77c8819.webp"},397:function(t,n,e){t.exports=e.p+"img/d0479c0.webp"},398:function(t,n,e){t.exports=e.p+"img/5ad0c64.webp"},399:function(t,n,e){t.exports=e.p+"img/f839fae.webp"},400:function(t,n,e){t.exports=e.p+"img/5cad2b2.webp"},401:function(t,n,e){t.exports=e.p+"img/17987ab.webp"},402:function(t,n,e){t.exports=e.p+"img/b649bea.webp"},403:function(t,n,e){t.exports=e.p+"img/9927008.webp"},404:function(t,n,e){t.exports=e.p+"img/6c80424.webp"},405:function(t,n,e){t.exports=e.p+"img/36c2d2c.webp"},406:function(t,n,e){t.exports=e.p+"img/1af3fa1.webp"},407:function(t,n,e){t.exports=e.p+"img/078fb9f.webp"},408:function(t,n,e){t.exports=e.p+"img/2b9db16.webp"},409:function(t,n,e){t.exports=e.p+"img/e97af33.webp"},410:function(t,n,e){t.exports=e.p+"img/234baf2.webp"},411:function(t,n,e){t.exports=e.p+"img/e7a0b3c.webp"},412:function(t,n,e){t.exports=e.p+"img/1622625.webp"},413:function(t,n,e){t.exports=e.p+"img/a2fdc37.webp"},414:function(t,n,e){t.exports=e.p+"img/8083b62.webp"},415:function(t,n,e){t.exports=e.p+"img/c813319.webp"},416:function(t,n,e){t.exports=e.p+"img/87d99ac.webp"},417:function(t,n,e){t.exports=e.p+"img/d217a31.webp"},418:function(t,n,e){t.exports=e.p+"img/0445872.webp"},419:function(t,n,e){t.exports=e.p+"img/3a7b759.webp"},420:function(t,n,e){t.exports=e.p+"img/7d68f57.webp"},421:function(t,n,e){t.exports=e.p+"img/524536f.webp"},422:function(t,n,e){t.exports=e.p+"img/4cea803.webp"},423:function(t,n,e){t.exports=e.p+"img/4e933c7.webp"},424:function(t,n,e){t.exports=e.p+"img/32e89ab.webp"},425:function(t,n,e){t.exports=e.p+"img/41ca2d0.webp"},426:function(t,n,e){t.exports=e.p+"img/4bfa784.webp"},427:function(t,n,e){t.exports=e.p+"img/638f9cf.webp"},428:function(t,n,e){t.exports=e.p+"img/4abdf22.webp"},429:function(t,n,e){t.exports=e.p+"img/17a83da.webp"},430:function(t,n,e){t.exports=e.p+"img/8617860.webp"},431:function(t,n,e){t.exports=e.p+"img/3cae3dc.webp"},432:function(t,n,e){t.exports=e.p+"img/d2066b9.webp"},433:function(t,n,e){t.exports=e.p+"img/42dee57.webp"},434:function(t,n,e){t.exports=e.p+"img/9b4c75e.webp"},435:function(t,n,e){t.exports=e.p+"img/c9788d6.webp"},436:function(t,n,e){t.exports=e.p+"img/9522e5f.webp"},437:function(t,n,e){t.exports=e.p+"img/fcd1274.webp"},438:function(t,n,e){t.exports=e.p+"img/8a87716.webp"},439:function(t,n,e){t.exports=e.p+"img/7d20b0d.webp"},440:function(t,n,e){t.exports=e.p+"img/94ceaa1.webp"},441:function(t,n,e){t.exports=e.p+"img/9ba9b1d.webp"},442:function(t,n,e){t.exports=e.p+"img/cb247b7.webp"},443:function(t,n,e){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":280,"./content/mods/48hr/thumbnail.jpg":281,"./content/mods/a-brand-new-day/thumbnail.jpg":282,"./content/mods/a-date-with-sayori/thumbnail.jpg":283,"./content/mods/a-fathers-redemption/thumbnail.jpg":284,"./content/mods/a-lost-chapter/thumbnail.jpg":285,"./content/mods/a-slice-of-life/thumbnail.jpg":286,"./content/mods/after-school-demo/thumbnail.jpg":287,"./content/mods/alone-together/thumbnail.jpg":288,"./content/mods/another-world/thumbnail.jpg":289,"./content/mods/april-fools-unlocked/thumbnail.jpg":290,"./content/mods/art-club/thumbnail.jpg":291,"./content/mods/bad-memories/thumbnail.jpg":292,"./content/mods/behind-closed-doors/thumbnail.jpg":293,"./content/mods/bff/thumbnail.jpg":294,"./content/mods/bland-rewrite/thumbnail.jpg":295,"./content/mods/chad-mc/thumbnail.jpg":296,"./content/mods/choice-based/thumbnail.jpg":297,"./content/mods/christmas-adventure/thumbnail.jpg":298,"./content/mods/christmas-heist-2/thumbnail.jpg":299,"./content/mods/christmas-heist/thumbnail.jpg":300,"./content/mods/christmas-story/thumbnail.jpg":301,"./content/mods/coldest-summer/thumbnail.jpg":302,"./content/mods/college-club-2/thumbnail.jpg":303,"./content/mods/college-club/thumbnail.jpg":304,"./content/mods/corrupted-files/thumbnail.jpg":305,"./content/mods/date-club/thumbnail.jpg":306,"./content/mods/day-of-reckoning/thumbnail.jpg":307,"./content/mods/deletion-rewrite/thumbnail.jpg":308,"./content/mods/despair/thumbnail.jpg":309,"./content/mods/dimensions/thumbnail.jpg":310,"./content/mods/disappearance/thumbnail.jpg":311,"./content/mods/divided-hearts/thumbnail.jpg":312,"./content/mods/do-you-lift-club/thumbnail.jpg":313,"./content/mods/doki-doki-simulator/thumbnail.jpg":314,"./content/mods/doki-heika-banzai/thumbnail.jpg":315,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":316,"./content/mods/dokis-n-dragons/thumbnail.jpg":317,"./content/mods/dont/thumbnail.jpg":318,"./content/mods/dreams/thumbnail.jpg":319,"./content/mods/easter-hunt/thumbnail.jpg":320,"./content/mods/emerald-heart/thumbnail.jpg":321,"./content/mods/encore/thumbnail.jpg":322,"./content/mods/enter-traceback/thumbnail.jpg":323,"./content/mods/exit-music-redux-demo/thumbnail.jpg":324,"./content/mods/exit-music/thumbnail.jpg":325,"./content/mods/fake-reality/thumbnail.jpg":326,"./content/mods/fallen-angel/thumbnail.jpg":327,"./content/mods/fleeting-feelings/thumbnail.jpg":328,"./content/mods/forever-and-ever/thumbnail.jpg":329,"./content/mods/forgotten/thumbnail.jpg":330,"./content/mods/forward-momentum/thumbnail.jpg":331,"./content/mods/found-love/thumbnail.jpg":332,"./content/mods/go-home-club/thumbnail.jpg":333,"./content/mods/god-syndrome/thumbnail.jpg":334,"./content/mods/hells-kitchen/thumbnail.jpg":335,"./content/mods/her/thumbnail.jpg":336,"./content/mods/hypnopompic/thumbnail.jpg":337,"./content/mods/in-a-nutshell/thumbnail.jpg":338,"./content/mods/india-man-time/thumbnail.jpg":339,"./content/mods/into-the-dark/thumbnail.jpg":340,"./content/mods/isolation/thumbnail.jpg":341,"./content/mods/it-wasnt-her/thumbnail.jpg":342,"./content/mods/just-us/thumbnail.jpg":343,"./content/mods/just-yuri/thumbnail.jpg":344,"./content/mods/keeper-of-reality/thumbnail.jpg":345,"./content/mods/lavender-scent/thumbnail.jpg":346,"./content/mods/longer-roads/thumbnail.jpg":347,"./content/mods/loser-mc/thumbnail.jpg":348,"./content/mods/lost-ascension/thumbnail.jpg":349,"./content/mods/love-and-literature/thumbnail.jpg":350,"./content/mods/love-secrets/thumbnail.jpg":351,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":352,"./content/mods/malignancy/thumbnail.jpg":353,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":354,"./content/mods/mcs-revenge/thumbnail.jpg":355,"./content/mods/meme-club-2/thumbnail.jpg":356,"./content/mods/meme-club/thumbnail.jpg":357,"./content/mods/memorial/thumbnail.jpg":358,"./content/mods/memories-of-nothing/thumbnail.jpg":359,"./content/mods/mercy/thumbnail.jpg":360,"./content/mods/murder-case/thumbnail.jpg":361,"./content/mods/my-escape/thumbnail.jpg":362,"./content/mods/natsukis-expanded-story/thumbnail.jpg":363,"./content/mods/never-ending-tomorrow/thumbnail.jpg":364,"./content/mods/new-blood/thumbnail.jpg":365,"./content/mods/new-eyes/thumbnail.jpg":366,"./content/mods/new-friends-act-one/thumbnail.jpg":367,"./content/mods/new-world/thumbnail.jpg":368,"./content/mods/no-happiness/thumbnail.jpg":369,"./content/mods/one-last-memory/thumbnail.jpg":370,"./content/mods/onii-chan-club/thumbnail.jpg":371,"./content/mods/other-clubs/thumbnail.jpg":372,"./content/mods/our-castle-walls/thumbnail.jpg":373,"./content/mods/our-final-heartbeat/thumbnail.jpg":374,"./content/mods/our-reality/thumbnail.jpg":375,"./content/mods/our-time/thumbnail.jpg":376,"./content/mods/outbreak-red-sky/thumbnail.jpg":377,"./content/mods/outcast/thumbnail.jpg":378,"./content/mods/pantomime-show/thumbnail.jpg":379,"./content/mods/pink-eyes/thumbnail.jpg":380,"./content/mods/president-natsuki/thumbnail.jpg":381,"./content/mods/purist/thumbnail.jpg":382,"./content/mods/recoded/thumbnail.jpg":383,"./content/mods/relapse/thumbnail.jpg":384,"./content/mods/return-to-the-portrait/thumbnail.jpg":385,"./content/mods/rhapsody/thumbnail.jpg":386,"./content/mods/rising-storm-2/thumbnail.jpg":387,"./content/mods/rising-storm/thumbnail.jpg":388,"./content/mods/rpg/thumbnail.jpg":389,"./content/mods/salvation/thumbnail.jpg":390,"./content/mods/sans-in-ddlc/thumbnail.jpg":391,"./content/mods/save-sayori/thumbnail.jpg":392,"./content/mods/savior-of-souls/thumbnail.jpg":393,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":394,"./content/mods/sayori-date/thumbnail.jpg":395,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":396,"./content/mods/scattered-stars/thumbnail.jpg":397,"./content/mods/second-chances/thumbnail.jpg":398,"./content/mods/shattered-world/thumbnail.jpg":399,"./content/mods/snafu/thumbnail.jpg":400,"./content/mods/somnium/thumbnail.jpg":401,"./content/mods/spark-of-hope/thumbnail.jpg":402,"./content/mods/starry-eyed/thumbnail.jpg":403,"./content/mods/summer-hope/thumbnail.jpg":404,"./content/mods/sunny-rains/thumbnail.jpg":405,"./content/mods/sweet-dreams/thumbnail.jpg":406,"./content/mods/switcheroo/thumbnail.jpg":407,"./content/mods/take-two/thumbnail.jpg":408,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":409,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":410,"./content/mods/the-festival/thumbnail.jpg":411,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":412,"./content/mods/the-good-ending/thumbnail.jpg":413,"./content/mods/the-last-sky/thumbnail.jpg":414,"./content/mods/the-musical/thumbnail.jpg":415,"./content/mods/the-new-literature-club/thumbnail.jpg":416,"./content/mods/the-perfect-story/thumbnail.jpg":417,"./content/mods/the-portrait-of-markov/thumbnail.jpg":418,"./content/mods/the-post-credit-scene/thumbnail.jpg":419,"./content/mods/the-yuri-parable/thumbnail.jpg":420,"./content/mods/thot-club/thumbnail.jpg":421,"./content/mods/through-time-and-space/thumbnail.jpg":422,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":423,"./content/mods/total-fold/thumbnail.jpg":424,"./content/mods/true-feelings/thumbnail.jpg":425,"./content/mods/true-happiness/thumbnail.jpg":426,"./content/mods/true-world/thumbnail.jpg":427,"./content/mods/tutorial/thumbnail.jpg":428,"./content/mods/twin-realities/thumbnail.jpg":429,"./content/mods/ultimate-combo/thumbnail.jpg":430,"./content/mods/undone-fate/thumbnail.jpg":431,"./content/mods/vigilante/thumbnail.jpg":432,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":433,"./content/mods/we-are-the-literature-club/thumbnail.jpg":434,"./content/mods/weatheard-world/thumbnail.jpg":435,"./content/mods/west-virginia-club/thumbnail.jpg":436,"./content/mods/window-to-your-heart/thumbnail.jpg":437,"./content/mods/world-of-dreams/thumbnail.jpg":438,"./content/mods/yandere-club/thumbnail.jpg":439,"./content/mods/yandere-madness/thumbnail.jpg":440,"./content/mods/youtuber-club/thumbnail.jpg":441,"./content/mods/yuri-reality/thumbnail.jpg":442};function o(t){var n=c(t);return e(n)}function c(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=443},444:function(t,n,e){t.exports=e.p+"img/8af0bbc.webp"},448:function(t,n,e){var content=e(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("51793b20",content,!0,{sourceMap:!1})},449:function(t,n,e){var content=e(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("2b6ce8a2",content,!0,{sourceMap:!1})},454:function(t,n,e){"use strict";e(448)},455:function(t,n,e){var o=e(44)(!1);o.push([t.i,'article[data-v-bf8718ec]{transition:background-color .25s;border-radius:25px;font-family:"Mali",Arial,Helvetica,sans-serif;padding:1.5em}article[data-v-bf8718ec]:hover{background-color:hsla(0,0%,100%,.31373)}.logo[data-v-bf8718ec]{width:100%}a[data-v-bf8718ec]{text-decoration:none}.fields[data-v-bf8718ec]{color:#fff;text-align:center}.fields span[data-v-bf8718ec]{color:#ff99cb}',""]),t.exports=o},456:function(t,n,e){"use strict";e(449)},457:function(t,n,e){var o=e(44)(!1);o.push([t.i,'.pagination-container[data-v-6c863b53]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:flex;margin:auto;padding:0}.pagination-container .pagination[data-v-6c863b53]{list-style-type:none;margin:.3em}.pagination-container .pagination .pagination-link[data-v-6c863b53]{font-family:"Work Sans",sans-serif;font-feature-settings:tabular-nums lining-nums;font-variant-numeric:tabular-nums lining-nums;padding:.5em 1em;cursor:pointer;border-radius:10px;transition:background-color .25s}.pagination-container .pagination .active[data-v-6c863b53]{background-color:hsla(0,0%,100%,.53333)}',""]),t.exports=o},458:function(t,n,e){t.exports=e.p+"img/2657e51.png"},471:function(t,n,e){var content=e(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("05693cd0",content,!0,{sourceMap:!1})},640:function(t,n,e){"use strict";e.r(n);var o={components:{ModLogo:e(278).default},props:{mod:{type:Object,default:function(){return{dir:"",title:"",genre1:"",genre2:""}}}}},c=(e(454),e(43)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("nuxt-link",{attrs:{to:t.mod.dir}},[e("ModLogo",{staticClass:"logo",attrs:{mod:t.mod}}),t._v(" "),e("div",[e("h4",{staticClass:"fields"},[t._v("\n        "+t._s(t.mod.title)+"\n      ")]),t._v(" "),e("h5",{staticClass:"fields"},[t._v("\n        Genre: "),t._l(t.mod.genre,(function(n,o){return e("span",{key:o},[o?e("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$ModDataMapper.genre(n)))])}))],2)])],1)],1)}),[],!1,null,"bf8718ec",null);n.default=component.exports;installComponents(component,{ModLogo:e(278).default})},641:function(t,n,e){"use strict";e.r(n);e(32),e(13);var o={props:["currPage","totalMods","changeMethod","numVisible"],computed:{totalPages:function(){return Math.floor(this.totalMods/6)}},methods:{paginator:function(){var t=this.totalPages,n=this.currPage,e=Math.min(this.numVisible,this.totalPages),o=Math.floor(e/2);return n<o?this.range(1,e,1):t-n<=o?this.range(t-2*o,t,1):this.range(n-o+1,n+o+1,1)},range:function(t,n,e){return Array.from({length:(n-t)/e+1},(function(n,i){return t+i*e}))}}},c=(e(456),e(43)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.totalMods>6?e("ul",{staticClass:"pagination-container"},[e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){return t.changeMethod(0)}}},[t._v("\n      <<\n    ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changeMethod(Math.max(t.currPage-1,0))}}},[t._v("\n      <\n    ")])]),t._v(" "),t.currPage-t.numVisible+1>=0?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),t._l(t.paginator(),(function(n,o){return e("li",{key:o,staticClass:"pagination"},[e("a",{staticClass:"pagination-link",class:{active:t.currPage==n-1},on:{click:function(e){return t.changeMethod(n-1)}}},[t._v("\n      "+t._s(n)+"\n    ")])])})),t._v(" "),t.currPage+t.numVisible-1<t.totalPages?e("li",{staticClass:"pagination"},[e("p",[t._v("...")])]):t._e(),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changeMethod(Math.min(t.currPage+1,t.totalPages-1))}}},[t._v("\n      >\n    ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(n){t.changeMethod(Math.floor(t.totalMods/6)-1)}}},[t._v("\n      >\n    ")])])],2):t._e()}),[],!1,null,"6c863b53",null);n.default=component.exports},647:function(t,n,e){"use strict";e(471)},648:function(t,n,e){var o=e(44),c=e(189),r=e(277),m=o(!1),d=c(r);m.push([t.i,"main[data-v-6c5792d0]{min-height:100vh;color:#fff;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+d+');background-attachment:fixed;background-size:cover}.content[data-v-6c5792d0]{padding:0 6em;padding-top:7em!important}.content .mod-container[data-v-6c5792d0]{padding:0 2em;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:2em;gap:2em}.content .search-tools[data-v-6c5792d0]{background-color:#fff;padding:0 2em;border-radius:25px;display:flex;align-items:center}.content .search-tools .searchbar[data-v-6c5792d0]{font-family:"Work Sans",Arial,Helvetica,sans-serif;flex:1;border:0;height:3em;outline:0!important}@media only screen and (max-width:600px){.content[data-v-6c5792d0]{padding:0 2em}.content .mod-container[data-v-6c5792d0]{grid-template-columns:1fr}}@media only screen and (min-width:600px){.content[data-v-6c5792d0]{padding:0 2em}.content .mod-container[data-v-6c5792d0]{grid-template-columns:1fr}}@media only screen and (min-width:768px){.content .mod-container[data-v-6c5792d0]{grid-template-columns:1fr 1fr}}@media only screen and (min-width:992px){.content .mod-container[data-v-6c5792d0]{grid-template-columns:1fr 1fr 1fr}.content[data-v-6c5792d0]{padding:0 6em}}',""]),t.exports=m}}]);