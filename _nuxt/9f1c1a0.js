(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,8,12],{1139:function(t,n,e){"use strict";e(636)},1140:function(t,n,e){var o=e(44),d=e(189),m=e(277),r=o(!1),l=d(m);r.push([t.i,"main[data-v-ec9b4ae2]{min-height:100vh;color:#fff;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+l+');background-attachment:fixed;background-size:cover}.content[data-v-ec9b4ae2]{display:grid;padding:0 6em}.front-details[data-v-ec9b4ae2]{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"logo details details";grid-gap:0 3em;gap:0 3em;margin-top:6em;margin-bottom:3em}.front-details .logo[data-v-ec9b4ae2]{grid-area:logo}.front-details .logo img[data-v-ec9b4ae2]{margin:auto;width:100%;-o-object-fit:cover;object-fit:cover;border:.25em solid #fff}.front-details .details[data-v-ec9b4ae2]{grid-area:details;font-size:larger;width:100%;margin:auto}.description-container[data-v-ec9b4ae2]{margin-bottom:1.25em}.description-container h2[data-v-ec9b4ae2]{margin-bottom:1rem}p span[data-v-ec9b4ae2]{color:#ff99cb;font-weight:500}.mod-info[data-v-ec9b4ae2]{display:flex;flex-direction:column;grid-gap:1.5em;gap:1.5em;font-size:1.2em}.download-link[data-v-ec9b4ae2]{align-self:center}.screenshots[data-v-ec9b4ae2]{margin-bottom:2.5em}@media only screen and (max-width:600px){.content[data-v-ec9b4ae2]{padding:0 2em}.content .mod-container[data-v-ec9b4ae2]{grid-template-columns:1fr}.front-details[data-v-ec9b4ae2]{display:grid;grid-template-columns:none;grid-template-rows:1fr .5fr;grid-template-areas:"logo" "details";grid-gap:1em 0;gap:1em 0;padding:0 1em}.screenshots[data-v-ec9b4ae2]{margin:0}.front-details .details[data-v-ec9b4ae2]{text-align:center}}@media only screen and (max-width:600px){.content[data-v-ec9b4ae2]{padding:0 2em}}@media only screen and (min-width:600px){.content[data-v-ec9b4ae2]{padding:0 2em}.front-details[data-v-ec9b4ae2]{display:grid;grid-template-columns:none;grid-template-rows:1fr .5fr;grid-template-areas:"logo" "details";grid-gap:1em 0;gap:1em 0;padding:0 1em}.front-details .details[data-v-ec9b4ae2]{text-align:center}}@media only screen and (min-width:992px){.front-details[data-v-ec9b4ae2]{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"logo details details";grid-gap:0 3em;gap:0 3em}.content[data-v-ec9b4ae2]{padding:0 6em}.front-details .details[data-v-ec9b4ae2]{text-align:left}}',""]),t.exports=r},1160:function(t,n,e){"use strict";e.r(n);var o=e(5),d=(e(25),e(33),e(31),e(270)),m=e(278),r=e(279),l=e(267),c=e(1155),h={components:{Navbar:d.default,ModLogo:m.default,LinkButton:r.default,Footer:l.default,ScreenshotDisplay:c.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,d=t.error,n.prev=1,n.next=4,e("mods",o.slug,"info").fetch();case 4:return m=n.sent,n.abrupt("return",{mod:m,slug:o.slug,dir:o.dir});case 8:n.prev=8,n.t0=n.catch(1),d({statusCode:404,message:"Post not found"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},head:function(){return{title:this.mod.title,meta:[{hid:"description",name:"description",content:this.mod.description},{hid:"og:title",name:"og:title",content:this.mod.title},{hid:"og:image",property:"og:image",content:this.imgSrc()},{hid:"og:description",property:"og:description",content:this.mod.description},{hid:"og:url",property:"og:url",content:"https://dokimods.me/".concat(this.mod.slug)}]}},methods:{imgSrc:function(){try{var t=this.mod;return e(280)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(444)}}}},f=(e(1139),e(43)),component=Object(f.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("Navbar",{staticClass:"navbar"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"front-details"},[e("div",{staticClass:"logo"},[e("ModLogo",{attrs:{mod:t.mod}})],1),t._v(" "),e("div",{staticClass:"details"},[e("h2",[t._v(t._s(t.mod.title))]),t._v(" "),e("p",[t._v("\n          Made by "),e("span",[t._v(t._s(t.mod.authors))])]),t._v(" "),e("p",[t._v("\n          Genre: "),t._l(t.mod.genre,(function(n,o){return e("span",{key:o},[o?e("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$ModDataMapper.genre(n)))])}))],2),t._v(" "),e("p",[t._v("\n          Status: "),e("span",[t._v(t._s(t.$ModDataMapper.dev_status(t.mod.status)))])]),t._v(" "),e("p",[t._v("\n          Length: "),e("span",[t._v(t._s(t.$ModDataMapper.length(t.mod.length)))])])])]),t._v(" "),e("div",{staticClass:"mod-info"},[e("p",[t._v("\n        Released on: "),e("span",[t._v(t._s(t.mod.released))])]),t._v(" "),e("div",{staticClass:"description-container"},[e("h2",[t._v("Description")]),t._v(" "),e("p",[t._v(t._s(t.mod.description))])]),t._v(" "),e("LinkButton",{staticClass:"download-link",attrs:{text:"Download Link","nuxt-link":!1,dest:t.mod.download_link}}),t._v(" "),e("br")],1),t._v(" "),e("div",{staticClass:"screenshots"},[e("ScreenshotDisplay",{staticClass:"screenshot-container",attrs:{mod:t.mod}})],1),t._v(" "),e("br")]),t._v(" "),e("Footer")],1)}),[],!1,null,"ec9b4ae2",null);n.default=component.exports;installComponents(component,{Navbar:e(270).default,ModLogo:e(278).default,LinkButton:e(279).default,Footer:e(267).default})},267:function(t,n,e){"use strict";e.r(n);e(271);var o=e(43),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"content"},[e("p",[t._v("\n      © "+t._s((new Date).getFullYear())+" DokiMods\n      "),e("br"),t._v(" "),e("br"),t._v("\n      Not affiliated with Team Salvato.\n    ")])])])}),[],!1,null,"32cf5647",null);n.default=component.exports;installComponents(component,{Footer:e(267).default})},268:function(t,n,e){var content=e(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("80e3bb92",content,!0,{sourceMap:!1})},269:function(t,n,e){var content=e(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("31f95efe",content,!0,{sourceMap:!1})},270:function(t,n,e){"use strict";e.r(n);e(274);var o=e(43),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",[o("ul",{staticClass:"menu"},[o("li",{staticClass:"icon"},[o("NuxtLink",{attrs:{to:"/"}},[o("img",{attrs:{src:e(273)}})])],1),t._v(" "),o("li",{staticClass:"spacing"}),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/mods"}},[t._v("\n        Mods\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/installation-guide"}},[t._v("\n        Mod Installation Guide\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/about-us"}},[t._v("\n        About Us\n      ")])],1)])])}),[],!1,null,"68fe01d2",null);n.default=component.exports},271:function(t,n,e){"use strict";e(268)},272:function(t,n,e){var o=e(44)(!1);o.push([t.i,'[data-v-32cf5647]:root{font-size:16px;font-family:"Work Sans",sans-serif}footer[data-v-32cf5647]{margin-top:auto;background-color:#ffcfc4}.content[data-v-32cf5647]{display:block;padding:.75em}.content p[data-v-32cf5647]{color:#000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}p[data-v-32cf5647]{text-align:center}',""]),t.exports=o},273:function(t,n,e){t.exports=e.p+"img/8f0ad80.webp"},274:function(t,n,e){"use strict";e(269)},275:function(t,n,e){var o=e(44)(!1);o.push([t.i,"nav[data-v-68fe01d2]{z-index:99;width:100%;position:fixed}nav ul[data-v-68fe01d2]{display:flex;align-items:center;height:4em;list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:var(--primary-color)}.buttons-right[data-v-68fe01d2]{padding-right:.5em}.icon[data-v-68fe01d2]{flex:1;height:100%;padding:.5em}nav ul li .nav-btn[data-v-68fe01d2]{display:block;color:#fff;text-align:center;padding:.5em 1.5em;border-radius:25px;text-decoration:none;transition:background-color .25s}nav ul li .nav-btn[data-v-68fe01d2]:hover{background-color:var(--secondary-color)}.menu img[data-v-68fe01d2]{width:auto;height:100%}.spacing[data-v-68fe01d2]{flex:1}",""]),t.exports=o},276:function(t,n,e){var content=e(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("3b0a2291",content,!0,{sourceMap:!1})},277:function(t,n,e){t.exports=e.p+"img/5c690b1.webp"},278:function(t,n,e){"use strict";e.r(n);var o={props:{mod:{type:Object,default:function(){return{dir:""}}}},methods:{imgSrc:function(){try{var t=this.mod;return e(280)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(444)}}}},d=e(43),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{staticClass:"logo",attrs:{src:t.imgSrc(),alt:""}})}),[],!1,null,"6aed83dc",null);n.default=component.exports},279:function(t,n,e){"use strict";e.r(n);var o={props:{text:{type:String,default:""},nuxtLink:{type:Boolean,default:!1},dest:{type:String,default:null},method:{type:Function,default:function(){}}}},d=(e(445),e(43)),component=Object(d.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.nuxtLink?e("nuxt-link",{staticClass:"button",attrs:{to:t.dest},on:{click:function(n){return t.method()}}},[e("p",[t._v(t._s(t.text))])]):e("a",{staticClass:"button",attrs:{href:t.dest},on:{click:function(n){return t.method()}}},[e("p",[t._v(t._s(t.text))])])],1)}),[],!1,null,"5ac42bc6",null);n.default=component.exports},280:function(t,n,e){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":281,"./content/mods/48hr/thumbnail.jpg":282,"./content/mods/a-brand-new-day/thumbnail.jpg":283,"./content/mods/a-date-with-sayori/thumbnail.jpg":284,"./content/mods/a-fathers-redemption/thumbnail.jpg":285,"./content/mods/a-lost-chapter/thumbnail.jpg":286,"./content/mods/a-slice-of-life/thumbnail.jpg":287,"./content/mods/after-school-demo/thumbnail.jpg":288,"./content/mods/alone-together/thumbnail.jpg":289,"./content/mods/another-world/thumbnail.jpg":290,"./content/mods/april-fools-unlocked/thumbnail.jpg":291,"./content/mods/art-club/thumbnail.jpg":292,"./content/mods/bad-memories/thumbnail.jpg":293,"./content/mods/behind-closed-doors/thumbnail.jpg":294,"./content/mods/bff/thumbnail.jpg":295,"./content/mods/bland-rewrite/thumbnail.jpg":296,"./content/mods/chad-mc/thumbnail.jpg":297,"./content/mods/choice-based/thumbnail.jpg":298,"./content/mods/christmas-adventure/thumbnail.jpg":299,"./content/mods/christmas-heist-2/thumbnail.jpg":300,"./content/mods/christmas-heist/thumbnail.jpg":301,"./content/mods/christmas-story/thumbnail.jpg":302,"./content/mods/coldest-summer/thumbnail.jpg":303,"./content/mods/college-club-2/thumbnail.jpg":304,"./content/mods/college-club/thumbnail.jpg":305,"./content/mods/corrupted-files/thumbnail.jpg":306,"./content/mods/date-club/thumbnail.jpg":307,"./content/mods/day-of-reckoning/thumbnail.jpg":308,"./content/mods/deletion-rewrite/thumbnail.jpg":309,"./content/mods/despair/thumbnail.jpg":310,"./content/mods/dimensions/thumbnail.jpg":311,"./content/mods/disappearance/thumbnail.jpg":312,"./content/mods/divided-hearts/thumbnail.jpg":313,"./content/mods/do-you-lift-club/thumbnail.jpg":314,"./content/mods/doki-doki-simulator/thumbnail.jpg":315,"./content/mods/doki-heika-banzai/thumbnail.jpg":316,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":317,"./content/mods/dokis-n-dragons/thumbnail.jpg":318,"./content/mods/dont/thumbnail.jpg":319,"./content/mods/dreams/thumbnail.jpg":320,"./content/mods/easter-hunt/thumbnail.jpg":321,"./content/mods/emerald-heart/thumbnail.jpg":322,"./content/mods/encore/thumbnail.jpg":323,"./content/mods/enter-traceback/thumbnail.jpg":324,"./content/mods/exit-music-redux-demo/thumbnail.jpg":325,"./content/mods/exit-music/thumbnail.jpg":326,"./content/mods/fake-reality/thumbnail.jpg":327,"./content/mods/fallen-angel/thumbnail.jpg":328,"./content/mods/fleeting-feelings/thumbnail.jpg":329,"./content/mods/forever-and-ever/thumbnail.jpg":330,"./content/mods/forgotten/thumbnail.jpg":331,"./content/mods/forward-momentum/thumbnail.jpg":332,"./content/mods/found-love/thumbnail.jpg":333,"./content/mods/go-home-club/thumbnail.jpg":334,"./content/mods/god-syndrome/thumbnail.jpg":335,"./content/mods/hells-kitchen/thumbnail.jpg":336,"./content/mods/her/thumbnail.jpg":337,"./content/mods/hypnopompic/thumbnail.jpg":338,"./content/mods/in-a-nutshell/thumbnail.jpg":339,"./content/mods/india-man-time/thumbnail.jpg":340,"./content/mods/into-the-dark/thumbnail.jpg":341,"./content/mods/isolation/thumbnail.jpg":342,"./content/mods/it-wasnt-her/thumbnail.jpg":343,"./content/mods/just-us/thumbnail.jpg":344,"./content/mods/just-yuri/thumbnail.jpg":345,"./content/mods/keeper-of-reality/thumbnail.jpg":346,"./content/mods/lavender-scent/thumbnail.jpg":347,"./content/mods/longer-roads/thumbnail.jpg":348,"./content/mods/loser-mc/thumbnail.jpg":349,"./content/mods/lost-ascension/thumbnail.jpg":350,"./content/mods/love-and-literature/thumbnail.jpg":351,"./content/mods/love-secrets/thumbnail.jpg":352,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":353,"./content/mods/malignancy/thumbnail.jpg":354,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":355,"./content/mods/mcs-revenge/thumbnail.jpg":356,"./content/mods/meme-club-2/thumbnail.jpg":357,"./content/mods/meme-club/thumbnail.jpg":358,"./content/mods/memorial/thumbnail.jpg":359,"./content/mods/memories-of-nothing/thumbnail.jpg":360,"./content/mods/mercy/thumbnail.jpg":361,"./content/mods/murder-case/thumbnail.jpg":362,"./content/mods/my-escape/thumbnail.jpg":363,"./content/mods/natsukis-expanded-story/thumbnail.jpg":364,"./content/mods/never-ending-tomorrow/thumbnail.jpg":365,"./content/mods/new-blood/thumbnail.jpg":366,"./content/mods/new-eyes/thumbnail.jpg":367,"./content/mods/new-friends-act-one/thumbnail.jpg":368,"./content/mods/new-world/thumbnail.jpg":369,"./content/mods/no-happiness/thumbnail.jpg":370,"./content/mods/one-last-memory/thumbnail.jpg":371,"./content/mods/onii-chan-club/thumbnail.jpg":372,"./content/mods/other-clubs/thumbnail.jpg":373,"./content/mods/our-castle-walls/thumbnail.jpg":374,"./content/mods/our-final-heartbeat/thumbnail.jpg":375,"./content/mods/our-reality/thumbnail.jpg":376,"./content/mods/our-time/thumbnail.jpg":377,"./content/mods/outbreak-red-sky/thumbnail.jpg":378,"./content/mods/outcast/thumbnail.jpg":379,"./content/mods/pantomime-show/thumbnail.jpg":380,"./content/mods/pink-eyes/thumbnail.jpg":381,"./content/mods/president-natsuki/thumbnail.jpg":382,"./content/mods/purist/thumbnail.jpg":383,"./content/mods/recoded/thumbnail.jpg":384,"./content/mods/relapse/thumbnail.jpg":385,"./content/mods/return-to-the-portrait/thumbnail.jpg":386,"./content/mods/rhapsody/thumbnail.jpg":387,"./content/mods/rising-storm-2/thumbnail.jpg":388,"./content/mods/rising-storm/thumbnail.jpg":389,"./content/mods/rpg/thumbnail.jpg":390,"./content/mods/salvation/thumbnail.jpg":391,"./content/mods/sans-in-ddlc/thumbnail.jpg":392,"./content/mods/save-sayori/thumbnail.jpg":393,"./content/mods/savior-of-souls/thumbnail.jpg":394,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":395,"./content/mods/sayori-date/thumbnail.jpg":396,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":397,"./content/mods/scattered-stars/thumbnail.jpg":398,"./content/mods/second-chances/thumbnail.jpg":399,"./content/mods/shattered-world/thumbnail.jpg":400,"./content/mods/snafu/thumbnail.jpg":401,"./content/mods/somnium/thumbnail.jpg":402,"./content/mods/spark-of-hope/thumbnail.jpg":403,"./content/mods/starry-eyed/thumbnail.jpg":404,"./content/mods/summer-hope/thumbnail.jpg":405,"./content/mods/sunny-rains/thumbnail.jpg":406,"./content/mods/sweet-dreams/thumbnail.jpg":407,"./content/mods/switcheroo/thumbnail.jpg":408,"./content/mods/take-two/thumbnail.jpg":409,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":410,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":411,"./content/mods/the-festival/thumbnail.jpg":412,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":413,"./content/mods/the-good-ending/thumbnail.jpg":414,"./content/mods/the-last-sky/thumbnail.jpg":415,"./content/mods/the-musical/thumbnail.jpg":416,"./content/mods/the-new-literature-club/thumbnail.jpg":417,"./content/mods/the-perfect-story/thumbnail.jpg":418,"./content/mods/the-portrait-of-markov/thumbnail.jpg":419,"./content/mods/the-post-credit-scene/thumbnail.jpg":420,"./content/mods/the-yuri-parable/thumbnail.jpg":421,"./content/mods/thot-club/thumbnail.jpg":422,"./content/mods/through-time-and-space/thumbnail.jpg":423,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":424,"./content/mods/total-fold/thumbnail.jpg":425,"./content/mods/true-feelings/thumbnail.jpg":426,"./content/mods/true-happiness/thumbnail.jpg":427,"./content/mods/true-world/thumbnail.jpg":428,"./content/mods/tutorial/thumbnail.jpg":429,"./content/mods/twin-realities/thumbnail.jpg":430,"./content/mods/ultimate-combo/thumbnail.jpg":431,"./content/mods/undone-fate/thumbnail.jpg":432,"./content/mods/vigilante/thumbnail.jpg":433,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":434,"./content/mods/we-are-the-literature-club/thumbnail.jpg":435,"./content/mods/weatheard-world/thumbnail.jpg":436,"./content/mods/west-virginia-club/thumbnail.jpg":437,"./content/mods/window-to-your-heart/thumbnail.jpg":438,"./content/mods/world-of-dreams/thumbnail.jpg":439,"./content/mods/yandere-club/thumbnail.jpg":440,"./content/mods/yandere-madness/thumbnail.jpg":441,"./content/mods/youtuber-club/thumbnail.jpg":442,"./content/mods/yuri-reality/thumbnail.jpg":443};function o(t){var n=d(t);return e(n)}function d(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=d,t.exports=o,o.id=280},444:function(t,n,e){t.exports=e.p+"img/21e95e2.jpg"},445:function(t,n,e){"use strict";e(276)},446:function(t,n,e){var o=e(44)(!1);o.push([t.i,".button[data-v-5ac42bc6]{cursor:pointer;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:var(--primary-color);padding:10px 50px;border-radius:10px;transition:background-color .25s;text-decoration:none}.button[data-v-5ac42bc6]:hover{background-color:var(--secondary-color)}.button p[data-v-5ac42bc6]{font-weight:500;color:#fff}",""]),t.exports=o},636:function(t,n,e){var content=e(1140);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("19c7444a",content,!0,{sourceMap:!1})}}]);