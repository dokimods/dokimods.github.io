(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7],{1147:function(t,n,e){"use strict";e(642)},1148:function(t,n,e){var o=e(29),m=e(195),d=e(281),r=o(!1),l=m(d);r.push([t.i,"main[data-v-617bf332]{color:#fff;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+l+');background-attachment:fixed;background-size:cover}.content[data-v-617bf332]{display:grid;padding:0 6em}.front-details[data-v-617bf332]{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"logo details details";grid-gap:0 3em;gap:0 3em;margin-top:6em;margin-bottom:3em}.front-details .logo[data-v-617bf332]{grid-area:logo}.front-details .logo img[data-v-617bf332]{margin:auto;width:100%;-o-object-fit:cover;object-fit:cover;border:.25em solid #fff}.front-details .details[data-v-617bf332]{grid-area:details;font-size:larger;width:100%;margin:auto}.description-container[data-v-617bf332]{margin-bottom:1.25em}.description-container h2[data-v-617bf332]{margin-bottom:1rem}p span[data-v-617bf332]{color:#ff99cb;font-weight:500}.mod-info[data-v-617bf332]{display:flex;flex-direction:column;grid-gap:1.5em;gap:1.5em;font-size:1.2em}.download-link[data-v-617bf332]{align-self:center}.screenshots[data-v-617bf332]{margin-bottom:2.5em}@media only screen and (max-width:600px){.content[data-v-617bf332]{padding:0 2em}.content .mod-container[data-v-617bf332]{grid-template-columns:1fr}.front-details[data-v-617bf332]{display:grid;grid-template-columns:none;grid-template-rows:1fr .5fr;grid-template-areas:"logo" "details";grid-gap:1em 0;gap:1em 0;padding:0 1em}.screenshots[data-v-617bf332]{margin:0}.front-details .details[data-v-617bf332]{text-align:center}}@media only screen and (max-width:600px){.content[data-v-617bf332]{padding:0 2em}}@media only screen and (min-width:600px){.content[data-v-617bf332]{padding:0 2em}.front-details[data-v-617bf332]{display:grid;grid-template-columns:none;grid-template-rows:1fr .5fr;grid-template-areas:"logo" "details";grid-gap:1em 0;gap:1em 0;padding:0 1em}.front-details .details[data-v-617bf332]{text-align:center}}@media only screen and (min-width:992px){.front-details[data-v-617bf332]{display:grid;grid-template-columns:1.5fr 1fr 1fr;grid-template-rows:1fr;grid-template-areas:"logo details details";grid-gap:0 3em;gap:0 3em}.content[data-v-617bf332]{padding:0 6em}.front-details .details[data-v-617bf332]{text-align:left}}',""]),t.exports=r},1169:function(t,n,e){"use strict";e.r(n);var o=e(5),m=(e(26),e(36),e(34),e(283)),d=e(284),r=e(1163),l={components:{ModLogo:m.default,LinkButton:d.default,ScreenshotDisplay:r.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,m,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,m=t.error,n.prev=1,n.next=4,e("mods",o.slug,"info").fetch();case 4:return d=n.sent,n.abrupt("return",{mod:d,slug:o.slug,dir:o.dir});case 8:n.prev=8,n.t0=n.catch(1),m({statusCode:404,message:"Post not found"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},head:function(){return{title:this.mod.title+" - DokiMods",meta:[{hid:"description",name:"description",content:this.mod.description},{hid:"og:title",name:"og:title",content:this.mod.title},{hid:"og:image",property:"og:image",content:this.imgSrc()},{hid:"og:description",property:"og:description",content:this.mod.description},{hid:"og:url",property:"og:url",content:"https://dokimods.me/".concat(this.mod.slug)}]}},methods:{imgSrc:function(){try{var t=this.mod;return e(285)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(449)}}}},c=(e(1147),e(15)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{staticClass:"content"},[e("div",{staticClass:"front-details"},[e("div",{staticClass:"logo"},[e("ModLogo",{attrs:{mod:t.mod}})],1),t._v(" "),e("div",{staticClass:"details"},[e("h2",[t._v(t._s(t.mod.title))]),t._v(" "),e("p",[t._v("\n          Made by "),e("span",[t._v(t._s(t.mod.authors))])]),t._v(" "),e("p",[t._v("\n          Genre: "),t._l(t.mod.genre,(function(n,o){return e("span",{key:o},[o?e("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$ModDataMapper.genre(n)))])}))],2),t._v(" "),e("p",[t._v("\n          Status: "),e("span",[t._v(t._s(t.$ModDataMapper.dev_status(t.mod.status)))])]),t._v(" "),e("p",[t._v("\n          Length: "),e("span",[t._v(t._s(t.$ModDataMapper.length(t.mod.length)))])])])]),t._v(" "),e("div",{staticClass:"mod-info"},[e("p",[t._v("\n        Released on: "),e("span",[t._v(t._s(t.mod.released))])]),t._v(" "),e("div",{staticClass:"description-container"},[e("h2",[t._v("Description")]),t._v(" "),e("p",[t._v(t._s(t.mod.description))])]),t._v(" "),e("LinkButton",{staticClass:"download-link",attrs:{text:"Download Link","nuxt-link":!1,dest:t.mod.download_link}}),t._v(" "),e("br")],1),t._v(" "),e("div",{staticClass:"screenshots"},[e("ScreenshotDisplay",{staticClass:"screenshot-container",attrs:{mod:t.mod}})],1),t._v(" "),e("br")])])}),[],!1,null,"617bf332",null);n.default=component.exports;installComponents(component,{ModLogo:e(283).default,LinkButton:e(284).default})},281:function(t,n,e){t.exports=e.p+"img/5c690b1.webp"},282:function(t,n,e){var content=e(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("579b147f",content,!0,{sourceMap:!1})},283:function(t,n,e){"use strict";e.r(n);var o={props:{mod:{type:Object,default:function(){return{dir:""}}}},methods:{imgSrc:function(){try{var t=this.mod;return e(285)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return e(449)}}}},m=e(15),component=Object(m.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{staticClass:"logo",attrs:{src:t.imgSrc(),alt:""}})}),[],!1,null,"6aed83dc",null);n.default=component.exports},284:function(t,n,e){"use strict";e.r(n);var o={props:{text:{type:String,default:""},nuxtLink:{type:Boolean,default:!1},dest:{type:String,default:"javascript:void(0);"},method:{type:Function,default:function(){}}}},m=(e(450),e(15)),component=Object(m.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[t.nuxtLink?e("nuxt-link",{staticClass:"button",attrs:{to:t.dest},on:{click:function(n){return t.method()}}},[e("p",[t._v(t._s(t.text))])]):e("a",{staticClass:"button",attrs:{href:t.dest},on:{click:function(n){return t.method()}}},[e("p",[t._v(t._s(t.text))])])],1)}),[],!1,null,"7682e428",null);n.default=component.exports},285:function(t,n,e){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":286,"./content/mods/48hr/thumbnail.jpg":287,"./content/mods/a-brand-new-day/thumbnail.jpg":288,"./content/mods/a-date-with-sayori/thumbnail.jpg":289,"./content/mods/a-fathers-redemption/thumbnail.jpg":290,"./content/mods/a-lost-chapter/thumbnail.jpg":291,"./content/mods/a-slice-of-life/thumbnail.jpg":292,"./content/mods/after-school-demo/thumbnail.jpg":293,"./content/mods/alone-together/thumbnail.jpg":294,"./content/mods/another-world/thumbnail.jpg":295,"./content/mods/april-fools-unlocked/thumbnail.jpg":296,"./content/mods/art-club/thumbnail.jpg":297,"./content/mods/bad-memories/thumbnail.jpg":298,"./content/mods/behind-closed-doors/thumbnail.jpg":299,"./content/mods/bff/thumbnail.jpg":300,"./content/mods/bland-rewrite/thumbnail.jpg":301,"./content/mods/chad-mc/thumbnail.jpg":302,"./content/mods/choice-based/thumbnail.jpg":303,"./content/mods/christmas-adventure/thumbnail.jpg":304,"./content/mods/christmas-heist-2/thumbnail.jpg":305,"./content/mods/christmas-heist/thumbnail.jpg":306,"./content/mods/christmas-story/thumbnail.jpg":307,"./content/mods/coldest-summer/thumbnail.jpg":308,"./content/mods/college-club-2/thumbnail.jpg":309,"./content/mods/college-club/thumbnail.jpg":310,"./content/mods/corrupted-files/thumbnail.jpg":311,"./content/mods/date-club/thumbnail.jpg":312,"./content/mods/day-of-reckoning/thumbnail.jpg":313,"./content/mods/deletion-rewrite/thumbnail.jpg":314,"./content/mods/despair/thumbnail.jpg":315,"./content/mods/dimensions/thumbnail.jpg":316,"./content/mods/disappearance/thumbnail.jpg":317,"./content/mods/divided-hearts/thumbnail.jpg":318,"./content/mods/do-you-lift-club/thumbnail.jpg":319,"./content/mods/doki-doki-simulator/thumbnail.jpg":320,"./content/mods/doki-heika-banzai/thumbnail.jpg":321,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":322,"./content/mods/dokis-n-dragons/thumbnail.jpg":323,"./content/mods/dont/thumbnail.jpg":324,"./content/mods/dreams/thumbnail.jpg":325,"./content/mods/easter-hunt/thumbnail.jpg":326,"./content/mods/emerald-heart/thumbnail.jpg":327,"./content/mods/encore/thumbnail.jpg":328,"./content/mods/enter-traceback/thumbnail.jpg":329,"./content/mods/exit-music-redux-demo/thumbnail.jpg":330,"./content/mods/exit-music/thumbnail.jpg":331,"./content/mods/fake-reality/thumbnail.jpg":332,"./content/mods/fallen-angel/thumbnail.jpg":333,"./content/mods/fleeting-feelings/thumbnail.jpg":334,"./content/mods/forever-and-ever/thumbnail.jpg":335,"./content/mods/forgotten/thumbnail.jpg":336,"./content/mods/forward-momentum/thumbnail.jpg":337,"./content/mods/found-love/thumbnail.jpg":338,"./content/mods/go-home-club/thumbnail.jpg":339,"./content/mods/god-syndrome/thumbnail.jpg":340,"./content/mods/hells-kitchen/thumbnail.jpg":341,"./content/mods/her/thumbnail.jpg":342,"./content/mods/hypnopompic/thumbnail.jpg":343,"./content/mods/in-a-nutshell/thumbnail.jpg":344,"./content/mods/india-man-time/thumbnail.jpg":345,"./content/mods/into-the-dark/thumbnail.jpg":346,"./content/mods/isolation/thumbnail.jpg":347,"./content/mods/it-wasnt-her/thumbnail.jpg":348,"./content/mods/just-us/thumbnail.jpg":349,"./content/mods/just-yuri/thumbnail.jpg":350,"./content/mods/keeper-of-reality/thumbnail.jpg":351,"./content/mods/lavender-scent/thumbnail.jpg":352,"./content/mods/longer-roads/thumbnail.jpg":353,"./content/mods/loser-mc/thumbnail.jpg":354,"./content/mods/lost-ascension/thumbnail.jpg":355,"./content/mods/love-and-literature/thumbnail.jpg":356,"./content/mods/love-secrets/thumbnail.jpg":357,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":358,"./content/mods/malignancy/thumbnail.jpg":359,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":360,"./content/mods/mcs-revenge/thumbnail.jpg":361,"./content/mods/meme-club-2/thumbnail.jpg":362,"./content/mods/meme-club/thumbnail.jpg":363,"./content/mods/memorial/thumbnail.jpg":364,"./content/mods/memories-of-nothing/thumbnail.jpg":365,"./content/mods/mercy/thumbnail.jpg":366,"./content/mods/murder-case/thumbnail.jpg":367,"./content/mods/my-escape/thumbnail.jpg":368,"./content/mods/natsukis-expanded-story/thumbnail.jpg":369,"./content/mods/never-ending-tomorrow/thumbnail.jpg":370,"./content/mods/new-blood/thumbnail.jpg":371,"./content/mods/new-eyes/thumbnail.jpg":372,"./content/mods/new-friends-act-one/thumbnail.jpg":373,"./content/mods/new-world/thumbnail.jpg":374,"./content/mods/no-happiness/thumbnail.jpg":375,"./content/mods/one-last-memory/thumbnail.jpg":376,"./content/mods/onii-chan-club/thumbnail.jpg":377,"./content/mods/other-clubs/thumbnail.jpg":378,"./content/mods/our-castle-walls/thumbnail.jpg":379,"./content/mods/our-final-heartbeat/thumbnail.jpg":380,"./content/mods/our-reality/thumbnail.jpg":381,"./content/mods/our-time/thumbnail.jpg":382,"./content/mods/outbreak-red-sky/thumbnail.jpg":383,"./content/mods/outcast/thumbnail.jpg":384,"./content/mods/pantomime-show/thumbnail.jpg":385,"./content/mods/pink-eyes/thumbnail.jpg":386,"./content/mods/president-natsuki/thumbnail.jpg":387,"./content/mods/purist/thumbnail.jpg":388,"./content/mods/recoded/thumbnail.jpg":389,"./content/mods/relapse/thumbnail.jpg":390,"./content/mods/return-to-the-portrait/thumbnail.jpg":391,"./content/mods/rhapsody/thumbnail.jpg":392,"./content/mods/rising-storm-2/thumbnail.jpg":393,"./content/mods/rising-storm/thumbnail.jpg":394,"./content/mods/rpg/thumbnail.jpg":395,"./content/mods/salvation/thumbnail.jpg":396,"./content/mods/sans-in-ddlc/thumbnail.jpg":397,"./content/mods/save-sayori/thumbnail.jpg":398,"./content/mods/savior-of-souls/thumbnail.jpg":399,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":400,"./content/mods/sayori-date/thumbnail.jpg":401,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":402,"./content/mods/scattered-stars/thumbnail.jpg":403,"./content/mods/second-chances/thumbnail.jpg":404,"./content/mods/shattered-world/thumbnail.jpg":405,"./content/mods/snafu/thumbnail.jpg":406,"./content/mods/somnium/thumbnail.jpg":407,"./content/mods/spark-of-hope/thumbnail.jpg":408,"./content/mods/starry-eyed/thumbnail.jpg":409,"./content/mods/summer-hope/thumbnail.jpg":410,"./content/mods/sunny-rains/thumbnail.jpg":411,"./content/mods/sweet-dreams/thumbnail.jpg":412,"./content/mods/switcheroo/thumbnail.jpg":413,"./content/mods/take-two/thumbnail.jpg":414,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":415,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":416,"./content/mods/the-festival/thumbnail.jpg":417,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":418,"./content/mods/the-good-ending/thumbnail.jpg":419,"./content/mods/the-last-sky/thumbnail.jpg":420,"./content/mods/the-musical/thumbnail.jpg":421,"./content/mods/the-new-literature-club/thumbnail.jpg":422,"./content/mods/the-perfect-story/thumbnail.jpg":423,"./content/mods/the-portrait-of-markov/thumbnail.jpg":424,"./content/mods/the-post-credit-scene/thumbnail.jpg":425,"./content/mods/the-yuri-parable/thumbnail.jpg":426,"./content/mods/thot-club/thumbnail.jpg":427,"./content/mods/through-time-and-space/thumbnail.jpg":428,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":429,"./content/mods/total-fold/thumbnail.jpg":430,"./content/mods/true-feelings/thumbnail.jpg":431,"./content/mods/true-happiness/thumbnail.jpg":432,"./content/mods/true-world/thumbnail.jpg":433,"./content/mods/tutorial/thumbnail.jpg":434,"./content/mods/twin-realities/thumbnail.jpg":435,"./content/mods/ultimate-combo/thumbnail.jpg":436,"./content/mods/undone-fate/thumbnail.jpg":437,"./content/mods/vigilante/thumbnail.jpg":438,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":439,"./content/mods/we-are-the-literature-club/thumbnail.jpg":440,"./content/mods/weatheard-world/thumbnail.jpg":441,"./content/mods/west-virginia-club/thumbnail.jpg":442,"./content/mods/window-to-your-heart/thumbnail.jpg":443,"./content/mods/world-of-dreams/thumbnail.jpg":444,"./content/mods/yandere-club/thumbnail.jpg":445,"./content/mods/yandere-madness/thumbnail.jpg":446,"./content/mods/youtuber-club/thumbnail.jpg":447,"./content/mods/yuri-reality/thumbnail.jpg":448};function o(t){var n=m(t);return e(n)}function m(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=m,t.exports=o,o.id=285},449:function(t,n,e){t.exports=e.p+"img/21e95e2.jpg"},450:function(t,n,e){"use strict";e(282)},451:function(t,n,e){var o=e(29)(!1);o.push([t.i,".button[data-v-7682e428]{cursor:pointer;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:var(--primary-color);padding:10px 50px;border-radius:10px;transition:background-color .25s;text-decoration:none}.button[data-v-7682e428]:hover{background-color:var(--secondary-color)}.button p[data-v-7682e428]{font-weight:500;color:#fff}",""]),t.exports=o},642:function(t,n,e){var content=e(1148);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("b5ee09ec",content,!0,{sourceMap:!1})}}]);