(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5,6,8,12],{1144:function(t,e,n){"use strict";n(638)},1145:function(t,e,n){var o=n(44),r=n(189),c=n(276),d=o(!1),l=r(c);d.push([t.i,".front-page{padding:0;display:flex;flex-direction:column;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url("+l+');background-size:cover;width:100%;height:100vh}@supports (-webkit-text-stroke:3.6px rgb(248,145,240)){#titleoutline{-webkit-text-stroke:3.6px #f891f0;-webkit-text-fill-color:#fff}}.front-page .header-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:auto auto auto 0;padding:clamp(2em,10vw,5em)}.front-page .header-container h1{font-family:Riffic,sans-serif;font-weight:bolder;color:#fff}.front-page .header-container h3{font-family:"Work Sans",sans-serif;font-weight:400;color:#dfdfdf;font-feature-settings:15px;font-kerning:15px;width:100%}.front-page .header-container h1{font-size:4em}.front-page .header-container header{font-weight:400;font-size:1.25em}.discord-link{margin-top:2em}.intro-text{display:grid;grid-auto-flow:row;grid-gap:1em;gap:1em;padding:100px 2em;margin:auto;text-align:center}.intro-text p{font-size:1.2em}.divider hr{margin:0 25%}.box-place{margin-top:6em;margin-bottom:6em}.mod-selector{margin-top:100px;margin-bottom:100px}@-webkit-keyframes inf{0%{background-position:0 50%}to{background-position:100% 50%}}@keyframes inf{0%{background-position:0 50%}to{background-position:100% 50%}}@media only screen and (max-width:600px){.front-page .header-container h1{font-size:2em}.discord-link p{display:none}}@media only screen and (min-width:600px){.front-page .header-container h1{font-size:4em}.discord-link p{display:none}}@media only screen and (min-width:992px){.discord-link p{display:block}}',""]),t.exports=d},1165:function(t,e,n){"use strict";n.r(e);var o=n(270),r=n(643),c=n(468),d=n(267),l={components:{Navbar:o.default,DiscordLink:r.default,FrontPageCard:c.default,Footer:d.default},head:function(){return{title:"DokiMods - Home Page",meta:[{hid:"description",name:"description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:title",name:"og:title",content:"DokiMods"},{hid:"og:image",property:"og:image",content:n(458)},{hid:"og:description",property:"og:description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:url",property:"og:url",content:"https://dokimods.me/"}]}}},f=(n(1144),n(43)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Navbar",{staticClass:"navbar"}),t._v(" "),n("div",{staticClass:"content"},[n("section",{staticClass:"front-page"},[n("article",{staticClass:"header-container"},[n("h1",{attrs:{id:"titleoutline"}},[t._v("Welcome to DokiMods!")]),t._v(" "),n("h3",[t._v("\n          The best catalogue of mods for Doki Doki Literature Club!\n        ")]),t._v(" "),n("DiscordLink",{staticClass:"discord-link"})],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"box-place"},[n("FrontPageCard")],1),t._v(" "),n("br"),t._v(" "),n("br")]),t._v(" "),n("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"intro-text"},[n("p",[n("i",[t._v("Have you wondered what DDLC would be like if the story went in a different way?")])]),t._v(" "),n("p",[t._v("\n        We house over 100 mods with even more to come.\n      ")]),t._v(" "),n("p",[t._v("\n        We’re sure you’ll find something that fits your taste!\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divider"},[e("hr")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(270).default,FrontPageCard:n(468).default,Footer:n(267).default})},267:function(t,e,n){"use strict";n.r(e);n(271);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"content"},[n("p",[t._v("\n      © "+t._s((new Date).getFullYear())+" DokiMods\n      "),n("br"),t._v(" "),n("br"),t._v("\n      Not affiliated with Team Salvato.\n    ")])])])}),[],!1,null,"32cf5647",null);e.default=component.exports;installComponents(component,{Footer:n(267).default})},268:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("80e3bb92",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("5df731c1",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n.r(e);n(274);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",[o("ul",{staticClass:"menu"},[o("li",{staticClass:"icon"},[o("NuxtLink",{attrs:{to:"/"}},[o("img",{attrs:{src:n(273)}})])],1),t._v(" "),o("li",{staticClass:"spacing"}),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/mods"}},[t._v("\n        Mods\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/installation-guide"}},[t._v("\n        Mod Installation Guide\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/submit-your-own"}},[t._v("\n      Submit Your Own\n      ")])],1),t._v(" "),o("li",{staticClass:"buttons-right"},[o("NuxtLink",{staticClass:"nav-btn",attrs:{to:"/about-us"}},[t._v("\n        About Us\n      ")])],1)])])}),[],!1,null,"0c68f23b",null);e.default=component.exports},271:function(t,e,n){"use strict";n(268)},272:function(t,e,n){var o=n(44)(!1);o.push([t.i,'[data-v-32cf5647]:root{font-size:16px;font-family:"Work Sans",sans-serif}footer[data-v-32cf5647]{margin-top:auto;background-color:#ffcfc4}.content[data-v-32cf5647]{display:block;padding:.75em}.content p[data-v-32cf5647]{color:#000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}p[data-v-32cf5647]{text-align:center}',""]),t.exports=o},273:function(t,e,n){t.exports=n.p+"img/8f0ad80.webp"},274:function(t,e,n){"use strict";n(269)},275:function(t,e,n){var o=n(44)(!1);o.push([t.i,"nav[data-v-0c68f23b]{z-index:99;width:100%;position:fixed}nav ul[data-v-0c68f23b]{display:flex;align-items:center;height:4em;list-style-type:none;margin:0;padding:0;overflow:hidden;background-image:linear-gradient(270deg,#f351eb,#ffc4e4)}.buttons-right[data-v-0c68f23b]{padding-right:.5em}.icon[data-v-0c68f23b]{flex:1;height:100%;padding:.5em}nav ul li .nav-btn[data-v-0c68f23b]{display:block;color:#fff;text-align:center;padding:.5em 1.5em;border-radius:25px;text-decoration:none;transition:background-color .25s}nav ul li .nav-btn[data-v-0c68f23b]:hover{background-color:var(--secondary-color)}.menu img[data-v-0c68f23b]{width:auto;height:100%}.spacing[data-v-0c68f23b]{flex:1}",""]),t.exports=o},276:function(t,e,n){t.exports=n.p+"img/5c690b1.webp"},277:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("3b0a2291",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n.r(e);var o={props:{text:{type:String,default:""},nuxtLink:{type:Boolean,default:!1},dest:{type:String,default:null},method:{type:Function,default:function(){}}}},r=(n(445),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.nuxtLink?n("nuxt-link",{staticClass:"button",attrs:{to:t.dest},on:{click:function(e){return t.method()}}},[n("p",[t._v(t._s(t.text))])]):n("a",{staticClass:"button",attrs:{href:t.dest},on:{click:function(e){return t.method()}}},[n("p",[t._v(t._s(t.text))])])],1)}),[],!1,null,"5ac42bc6",null);e.default=component.exports},445:function(t,e,n){"use strict";n(277)},446:function(t,e,n){var o=n(44)(!1);o.push([t.i,".button[data-v-5ac42bc6]{cursor:pointer;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background-color:var(--primary-color);padding:10px 50px;border-radius:10px;transition:background-color .25s;text-decoration:none}.button[data-v-5ac42bc6]:hover{background-color:var(--secondary-color)}.button p[data-v-5ac42bc6]{font-weight:500;color:#fff}",""]),t.exports=o},450:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("72952fc4",content,!0,{sourceMap:!1})},451:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("3b716e7c",content,!0,{sourceMap:!1})},458:function(t,e,n){t.exports=n.p+"img/2657e51.png"},459:function(t,e,n){t.exports=n.p+"img/c15a0d2.svg"},460:function(t,e,n){"use strict";n(450)},461:function(t,e,n){var o=n(44)(!1);o.push([t.i,'[data-v-0e12c3f2]:root{font-size:16px;font-family:"Work Sans",sans-serif}.discord-link[data-v-0e12c3f2]{display:grid;grid-auto-flow:column;grid-gap:1em;gap:1em;width:-webkit-fit-content;width:-moz-fit-content;color:#313131;text-decoration:none;width:fit-content;padding:10px 15px;background:#fff;border-radius:10px;box-shadow:1px 1px 8px 0 rgb(0 0 0/16%);height:-webkit-min-content;height:-moz-min-content;height:min-content}img[data-v-0e12c3f2]{height:1.5em}p[data-v-0e12c3f2]{font-size:1.1em;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}',""]),t.exports=o},462:function(t,e,n){t.exports=n.p+"img/b1148a0.png"},463:function(t,e,n){t.exports=n.p+"img/916c56a.webp"},464:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMzcuMDgiIGhlaWdodD0iMjM3LjA4Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTYiIGQ9Ik0xNS44MDUgMEgwdjIzNy4wOGgyMzcuMDhWMzkuNTEzYTcuOSA3LjkgMCAwIDAtMTQuMzM1LTQuNTg0bC03Mi43NTIgMTAxLjgzNS00MC45MzYtNTQuNTc2YTcuOSA3LjkgMCAwIDAtMTIuOS4zNjRMMTUuODA1IDIwMy4wODN6IiBmaWxsPSIjZmZkNWVkIi8+PC9zdmc+"},465:function(t,e,n){t.exports=n.p+"img/0c3b046.svg"},466:function(t,e,n){"use strict";n(451)},467:function(t,e,n){var o=n(44)(!1);o.push([t.i,'section[data-v-2cade35c]{position:relative;display:flex;flex-direction:column;align-items:center;box-sizing:border-box}section[data-v-2cade35c]:before{content:"";width:100%;height:80%;top:10%;z-index:-1;position:absolute;transform:skewY(-6deg);background-image:linear-gradient(90deg,#ffd5ed,#ffc6e7,#ffcfc4,#ffd6a1);background-size:400%;background-position:0;-webkit-animation-name:linearGradient-data-v-2cade35c;animation-name:linearGradient-data-v-2cade35c;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes linearGradient-data-v-2cade35c{0%{background-position:0}to{background-position:100%}}@keyframes linearGradient-data-v-2cade35c{0%{background-position:0}to{background-position:100%}}.container[data-v-2cade35c]{display:grid;grid-gap:1em 0;gap:1em 0}.card-container[data-v-2cade35c]{width:56em;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-gap:1em;gap:1em;grid-template-areas:"card1 card1 card1 svg1" "svg2 card2 card2 card2"}.card[data-v-2cade35c]{display:flex;width:100%;border-radius:25px;box-shadow:1px 1px 8px 0 rgb(0 0 0/16%);background:linear-gradient(90deg,#ffcfe5,#fff 35%)}.card img[data-v-2cade35c]{padding:1em 1em 0;max-width:15em;-o-object-fit:scale-down;object-fit:scale-down;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;align-self:flex-end}.card .content[data-v-2cade35c]{width:auto;padding:2em;display:grid;grid-gap:1em 0;gap:1em 0}.card .content .header[data-v-2cade35c]{font-weight:500;color:#4c2b3f;font-size:1.3em}.link[data-v-2cade35c]{margin-top:auto}.svg-container[data-v-2cade35c]{width:100%;border-radius:25px;box-shadow:1px 1px 8px 0 rgb(0 0 0/16%);padding:60px;background:#fff}.svg-container img[data-v-2cade35c]{max-width:8em;height:auto;-o-object-fit:contain;object-fit:contain}@media only screen and (max-width:600px){.card[data-v-2cade35c]{background:#fff}.card img[data-v-2cade35c]{display:none}}@media only screen and (max-width:992px){.card-container[data-v-2cade35c]{width:100%;padding:0 2em;grid-template-columns:none;grid-template-rows:1fr 1fr;grid-template-areas:"card1" "card2"}.svg-container[data-v-2cade35c]{display:none}}',""]),t.exports=o},468:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg-container",staticStyle:{"grid-area":"svg1"}},[e("img",{attrs:{src:n(464),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"svg-container",staticStyle:{"grid-area":"svg2"}},[e("img",{attrs:{src:n(465),alt:""}})])}],r=n(5),c=(n(31),{components:{LinkButton:n(279).default},data:function(){return{mods:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("mods",{deep:!0}).only(["dir"]).fetch();case 2:t.mods=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{getRandomMod:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$router.push(t.mods[Math.floor(Math.random()*t.mods.length)].dir);case 2:case"end":return e.stop()}}),e)})))()}}}),d=(n(466),n(43)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container"},[o("div",{staticClass:"card-container"},[o("div",{staticClass:"card",staticStyle:{"grid-area":"card1"}},[o("img",{attrs:{src:n(462),alt:""}}),t._v(" "),o("div",{staticClass:"content"},[o("p",{staticClass:"header"},[t._v("\n            We have "+t._s(t.mods.length)+" mods in our databases as of now.\n          ")]),t._v(" "),o("p",[t._v("Click on the button if you want a random mod picked out.")]),t._v(" "),o("LinkButton",{staticClass:"link",attrs:{text:"I'm feeling lucky",method:t.getRandomMod}})],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"card",staticStyle:{"grid-area":"card2"}},[o("img",{attrs:{src:n(463),alt:""}}),t._v(" "),o("div",{staticClass:"content"},[o("p",{staticClass:"header"},[t._v("\n            Unsure how to install a mod or forgot how to install one?\n          ")]),t._v(" "),o("p",[t._v("Click here to read our installation guide!")]),t._v(" "),o("LinkButton",{staticClass:"link",attrs:{text:"Read More",dest:"/installation-guide","nuxt-link":!0}})],1)])])])])}),o,!1,null,"2cade35c",null);e.default=component.exports;installComponents(component,{LinkButton:n(279).default})},638:function(t,e,n){var content=n(1145);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("1b7833da",content,!0,{sourceMap:!1})},643:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"discord-link",attrs:{href:"https://discord.gg/X3Qshrmyjy"}},[o("img",{attrs:{src:n(459),alt:""}}),t._v(" "),o("p",[t._v("\n    Join our Discord server for updates on the website and to interact with our community!\n  ")])])}],r=(n(460),n(43)),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"0e12c3f2",null);e.default=component.exports}}]);