(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(144).concat([function(t,n,o){"use strict";o.r(n);var e=[function(){var t=this,n=t._self._c;return n("a",{staticClass:"link",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScS0tqUJf5jmvG3ixSPFpsV2yl8GD8xlxzBE1BwBKLJ19Dfyg/viewform"}},[n("img",{attrs:{src:o(466),alt:""}}),t._v(" "),n("span",[t._v("Submit Your Own")])])}],m=(o(467),o(42)),component=Object(m.a)({},(function(){var t=this,n=t._self._c;return n("nav",[n("nuxt-link",{staticClass:"header",attrs:{to:"/"}},[n("img",{attrs:{src:o(224),alt:""}})]),t._v(" "),n("div",{staticClass:"buttons"},[n("nuxt-link",{staticClass:"link home",attrs:{to:"/"}},[n("img",{attrs:{src:o(464),alt:""}}),t._v(" "),n("span",[t._v("Home")])]),t._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:"/mods"}},[n("img",{attrs:{src:o(465),alt:""}}),t._v(" "),n("span",[t._v("Mods")])]),t._v(" "),t._m(0)],1)],1)}),e,!1,null,"05329062",null);n.default=component.exports},,,,,,function(t,n,o){"use strict";var e=o(5),m=(o(28),o(27),o(34),{action:"Action",advent:"Adventure",comedy:"Comedy",drama:"Drama",horror:"Horror",other:"Other",romnce:"Romance",thrill:"Thriller"}),r={demo_rel:"Demo Release",demo_dis:"Discontinued Demo",full_rel:"Full Release",in_dev:"In Development",reg_up:"Regularly Updated"},c={v_short:"Very Short",short:"Short",medium:"Medium",long:"Long",v_long:"Very Long",inf:"Infinite"};n.a=function(t,n){t.app;var l=t.$content;n("modData",{genre:function(t){return m[t]},status:function(t){return r[t]},length:function(t){return c[t]},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},logo:function(t){try{return o(500)("./content".concat(t.dir,"/thumbnail.jpg"))}catch(t){return o(223)}},metadata:function(t){return{title:t.title+" - DokiMods",meta:[{hid:"description",name:"description",content:t.description},{hid:"og:title",name:"og:title",content:t.title},{hid:"og:description",property:"og:description",content:t.description},{hid:"og:url",property:"og:url",content:"https://dokimods.me/".concat(t.slug)},{hid:"og:image",property:"og:image",content:this.logo(t)}]}},getModData:function(t){return Object(e.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l("mods",t,"info").fetch();case 3:return o=n.sent,n.abrupt("return",o);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",null);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},genres:m,statuses:r,lengths:c})}},function(t,n,o){"use strict";var e=o(5);o(20),o(116),o(222),o(36),o(10),o(43),o(57),o(28);n.a=function(t,n){t.app;var o=t.$content;n("modListing",{SORT_A2Z:0,SORT_Z2A:1,SORT_NEWEST:2,SORT_OLDEST:3,getMods:function(){return Object(e.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o("mods",{deep:!0}).only(["title","genre","status","length","released","releaseTime","description","dir"]).fetch();case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))()},filterMods:function(t,n){var o=n.search,e=n.genre,m=n.status,r=n.length,c=function(a,b){var t=a.title.toLowerCase(),n=b.title.toLowerCase();return t<n?-1:t>n?1:0};switch(n.sort){case this.SORT_NEWEST:c=function(a,b){var t=a.releaseTime,n=b.releaseTime;return t<n?1:t>n?-1:0};break;case this.SORT_OLDEST:c=function(a,b){var t=a.releaseTime,n=b.releaseTime;return t<n?-1:t>n?1:0};break;case this.SORT_Z2A:c=function(a,b){var t=a.title.toLowerCase(),n=b.title.toLowerCase();return t<n?1:t>n?-1:0};case this.SORT_A2Z:}return t.sort(c),t=t.filter((function(t){return-1!==t.title.toLowerCase().indexOf(o.toLowerCase())})),e.length>0&&(t=t.filter((function(t){return t.genre.some((function(g){return e.includes(g)}))}))),m.length>0&&(t=t.filter((function(t){return m.includes(t.status)}))),r.length>0&&(t=t.filter((function(t){return r.includes(t.length)}))),t}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,o){var content=o(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("7266766c",content,!0,{sourceMap:!1})},function(t,n,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("486579f4",content,!0,{sourceMap:!1})},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,o){"use strict";var e={components:{Navbar:o(144).default}},m=(o(469),o(42)),component=Object(m.a)(e,(function(){var t=this._self._c;return t("div",{staticClass:"page"},[t("Navbar"),this._v(" "),t("div",{staticClass:"main-content"},[t("Nuxt")],1)],1)}),[],!1,null,"6378e304",null);n.a=component.exports;installComponents(component,{Navbar:o(144).default})},,function(t,n,o){t.exports=o.p+"img/DokiMods.d0213ce.png"},function(t,n,o){t.exports=o.p+"img/dokimods_text_logo.a5343dc.png"},,,function(t,n,o){t.exports=o.p+"img/thumbnail.cb803a1.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.e92d21e.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.894c5fb.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.dd891d1.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.27e0f4c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a0f5444.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d8e347a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.05fbd5c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.1765ce5.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3ed68a3.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.0fe40b1.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.100da93.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.5d8cd77.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.50fd76b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8fe1fcb.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.dcbe974.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.c166b40.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d179ee2.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3c5df98.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ddd3572.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.dbd80b9.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3fd4a5b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.6cfd16d.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a97c06c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.39d2bbc.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.86bc176.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.21a63be.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.b1c73fb.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.c432b84.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.36b4850.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4f9c299.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.587de4b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.02c588f.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.0906eb0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d296833.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.0112188.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.da8de57.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9010940.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.37815b2.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.70b621c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9f73e8b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.36031e8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a13c4cf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4f79c18.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9341a4c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.318bb68.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.dced65d.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4674bf4.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.6369b3a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d16c0ff.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.b8f7985.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.beeed43.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ede2e0a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8f14c0a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.95ff0f8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3b50352.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.fbc42c6.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.171eb74.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.2e8a99c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.86036cc.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a649e75.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.b94bb12.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a8e2e84.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.65a93c5.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8127c32.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.52ebc7f.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.5246a35.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.39571b5.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.fa64c5d.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ef99c56.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f25af42.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3835e50.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.1b97a3f.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.fffca7d.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.2f3f1a7.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.babd224.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.959ffc8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d84cbca.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.21e8a08.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f9505bc.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d8254e3.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a79469c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.bfc83b7.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.1ee8e0e.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.79132d8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ee806b0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f5935fb.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.85ae2c8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.e3d2184.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9be8a15.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.66618bf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.340cb82.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f12ce45.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3411585.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ba16582.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ba1b859.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8a5672b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3b83351.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.32a3721.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.c4e3606.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.584b85d.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a38bd33.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.2eb76d3.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8f709e8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.159ec1a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.235bbd1.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.559834b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.bbe08bf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f8e4a2b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.0b0dcdf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.7e6ea98.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ed1cbc6.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.19bc5ca.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a424d42.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d41f521.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.31bd3b0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.aa4f8e8.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3a837d0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.78bcce6.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.242dfbd.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.03225bf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.c25fccf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.087afdb.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4cd0503.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8a239f9.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.fc4cd0e.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.7503698.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3ff93da.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4a78411.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.7e65c49.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.61396ba.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.417b184.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.e2ecab0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f7acf5c.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.064618a.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.fe05967.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.d65328b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9e57936.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.35aa02b.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.7c012fa.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.64e8351.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.3e5ac75.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.1c15b15.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.960b0a7.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.75d91d0.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.8410d85.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9b5f560.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.ffe6d51.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f52d3fc.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.6d567c7.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.28d6432.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.108dfa9.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.078bd77.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.20c5271.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.563e879.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9c01361.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.a8b4c6f.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.686e60e.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.26021fc.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.e82dbaf.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.82c8994.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.b5b10b7.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.5ba25b5.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.9235405.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.322b1e1.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.f7ca1e6.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.96f75a2.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.4a96a4f.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.5447933.jpg"},function(t,n,o){t.exports=o.p+"img/thumbnail.6e48de1.jpg"},function(t,n,o){o(398),t.exports=o(399)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,o){var content=o(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("ac065e1c",content,!0,{sourceMap:!1})},function(t,n,o){var e=o(55)(!1);e.push([t.i,':root{--box-shadow:0 1px 1px rgba(0,0,0,0.075),0 2px 2px rgba(0,0,0,0.075),0 4px 4px rgba(0,0,0,0.075),0 8px 8px rgba(0,0,0,0.075),0 16px 16px rgba(0,0,0,0.075);--drop-shadow:0 0.1em 0.1em rgba(0,0,0,0.12549);--navbar-height:3em;--search-params-width:18.75em;--breakpoint-lg:992px;--breakpoint-md:768px;--breakpoint-sm:576px;--breakpoint-xl:1200px;--breakpoint-xs:0}@media screen and (max-width:576px){:root{--navbar-height:6em}}*,:after,:before{box-sizing:border-box;margin:0}.page-enter-active,.page-leave-active{transition:opacity .5s,filter .5s}.page-enter,.page-leave-to{opacity:0;filter:grayscale(1) blur(8px)}body{font-family:"Nunito",Arial,sans-serif;font-size:max(8px,1.25vw)}h1,h2,h3,h4,h5,h6{font-family:"Poppins",Arial,sans-serif}',""]),t.exports=e},,,function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIxIDIwYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjkuNDlhMSAxIDAgMCAxIC4zODYtLjc5bDgtNi4yMjJhMSAxIDAgMCAxIDEuMjI4IDBsOCA2LjIyMmExIDEgMCAwIDEgLjM4Ni43OVYyMHoiIGZpbGw9IiNkZTAwMDAiLz48L3N2Zz4="},function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIwIDIySDYuNUEzLjUgMy41IDAgMCAxIDMgMTguNVY1YTMgMyAwIDAgMSAzLTNoMTRhMSAxIDAgMCAxIDEgMXYxOGExIDEgMCAwIDEtMSAxem0tMS0ydi0zSDYuNWExLjUgMS41IDAgMCAwIDAgM0gxOXoiIGZpbGw9IiNkZTAwMDAiLz48L3N2Zz4="},function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTYgNHY0aDEyVjRoMi4wMDdjLjU0OCAwIC45OTMuNDQ1Ljk5My45OTN2MTYuMDE0YS45OTQuOTk0IDAgMCAxLS45OTMuOTkzSDMuOTkzQS45OTQuOTk0IDAgMCAxIDMgMjEuMDA3VjQuOTkzQzMgNC40NDUgMy40NDUgNCAzLjk5MyA0SDZ6bTItMmg4djRIOFYyeiIgZmlsbD0iI2RlMDAwMCIvPjwvc3ZnPg=="},function(t,n,o){"use strict";o(193)},function(t,n,o){var e=o(55)(!1);e.push([t.i,'nav[data-v-05329062]{top:0;position:fixed;width:100%;height:var(--navbar-height);background-color:#faebd7;z-index:10;box-shadow:var(--box-shadow);padding-left:2em;padding-right:2em;display:grid;grid-template-columns:1fr repeat(3,auto) 1fr;grid-template-rows:var(--navbar-height);align-items:center}nav .header[data-v-05329062]{cursor:pointer;margin-right:auto;justify-self:left;color:#fff;text-decoration:none;height:100%}nav .header img[data-v-05329062]{height:100%;transform:translateY(-10%);padding:.5em;transform:translateY(-5%);filter:drop-shadow(var(--drop-shadow))}nav .buttons[data-v-05329062]{justify-self:center;display:grid;grid-auto-flow:column;grid-gap:2em;gap:2em;list-style-type:none;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}nav .buttons .link[data-v-05329062]{text-decoration:none;color:#de0000;text-transform:uppercase;font-size:.75em;position:relative}nav .buttons .link.home[data-v-05329062],nav .buttons .link img[data-v-05329062]{display:none}nav .buttons .link[data-v-05329062]:before{--hover-line-height:2px;content:"";position:absolute;height:var(--hover-line-height);width:0;transition:width .25s ease-in-out;background-color:#de0000;bottom:calc(var(--hover-line-height)*-1)}nav .buttons .link[data-v-05329062]:hover:before{width:100%}@media screen and (max-width:576px){nav[data-v-05329062]{bottom:0;top:unset;grid-template-columns:none}nav .header[data-v-05329062]{display:none}nav .buttons[data-v-05329062]{grid-gap:10em;gap:10em}nav .buttons .link[data-v-05329062]{text-align:center}nav .buttons .link span[data-v-05329062]{display:none}nav .buttons .link img[data-v-05329062]{display:block;height:100%;margin:auto;filter:drop-shadow(var(--drop-shadow))}nav .buttons .link.home[data-v-05329062]{display:block}nav .buttons .link[data-v-05329062]:before{display:none}}',""]),t.exports=e},function(t,n,o){"use strict";o(194)},function(t,n,o){var e=o(55)(!1);e.push([t.i,".main-content[data-v-6378e304]{margin-top:var(--navbar-height);margin-bottom:0}@media screen and (max-width:576px){.main-content[data-v-6378e304]{margin-top:0;margin-bottom:var(--navbar-height)}}",""]),t.exports=e},function(t,n,o){"use strict";o.r(n),o.d(n,"actions",(function(){return m}));var e=o(5),m=(o(28),{nuxtServerInit:function(t){return Object(e.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.dispatch,n.next=3,o("mods/getMods");case 3:case"end":return n.stop()}}),n)})))()}})},function(t,n,o){"use strict";o.r(n),o.d(n,"state",(function(){return m})),o.d(n,"mutations",(function(){return r})),o.d(n,"getters",(function(){return c})),o.d(n,"actions",(function(){return l}));var e=o(5),m=(o(28),o(35),function(){return{mods:[]}}),r={set:function(t,n){t.mods=n}},c={totalMods:function(t){return t.mods.length},randomMod:function(t){return function(){return t.mods[Math.floor(Math.random()*(t.mods.length-1))]}},availableMods:function(t){return t.mods.slice()}},l={getMods:function(t,n){var o=this;return Object(e.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commit,n.next=3,o.$modListing.getMods().then((function(t){e("set",t)}));case 3:case"end":return n.stop()}}),n)})))()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,o){var map={"./content/mods/2nd-anniversary/thumbnail.jpg":227,"./content/mods/48hr/thumbnail.jpg":228,"./content/mods/TMIWNHANDANHHTHTYVM/thumbnail.jpg":229,"./content/mods/a-brand-new-day/thumbnail.jpg":230,"./content/mods/a-date-with-natsuki/thumbnail.jpg":231,"./content/mods/a-date-with-sayori/thumbnail.jpg":232,"./content/mods/a-dog-story/thumbnail.jpg":233,"./content/mods/a-fathers-redemption/thumbnail.jpg":234,"./content/mods/a-lost-chapter/thumbnail.jpg":235,"./content/mods/a-slice-of-life/thumbnail.jpg":236,"./content/mods/after-school-demo/thumbnail.jpg":237,"./content/mods/alone-together/thumbnail.jpg":238,"./content/mods/another-after-story/thumbnail.jpg":239,"./content/mods/another-world/thumbnail.jpg":240,"./content/mods/april-fools-unlocked/thumbnail.jpg":241,"./content/mods/art-club/thumbnail.jpg":242,"./content/mods/bad-memories/thumbnail.jpg":243,"./content/mods/behind-closed-doors/thumbnail.jpg":244,"./content/mods/bff/thumbnail.jpg":245,"./content/mods/bibleman-saves-the-dokis/thumbnail.jpg":246,"./content/mods/birthday-adventure/thumbnail.jpg":247,"./content/mods/bland-rewrite/thumbnail.jpg":248,"./content/mods/chad-mc/thumbnail.jpg":249,"./content/mods/choice-based/thumbnail.jpg":250,"./content/mods/christmas-adventure/thumbnail.jpg":251,"./content/mods/christmas-heist-2/thumbnail.jpg":252,"./content/mods/christmas-heist/thumbnail.jpg":253,"./content/mods/christmas-story/thumbnail.jpg":254,"./content/mods/coldest-summer/thumbnail.jpg":255,"./content/mods/college-club-2/thumbnail.jpg":256,"./content/mods/college-club/thumbnail.jpg":257,"./content/mods/corrupted-files/thumbnail.jpg":258,"./content/mods/date-club/thumbnail.jpg":259,"./content/mods/day-of-reckoning/thumbnail.jpg":260,"./content/mods/deletion-rewrite/thumbnail.jpg":261,"./content/mods/despair/thumbnail.jpg":262,"./content/mods/dimensions/thumbnail.jpg":263,"./content/mods/divided-hearts/thumbnail.jpg":264,"./content/mods/do-you-lift-club/thumbnail.jpg":265,"./content/mods/doki-doki-simulator/thumbnail.jpg":266,"./content/mods/doki-heika-banzai/thumbnail.jpg":267,"./content/mods/dokis-dont-wear-ties/thumbnail.jpg":268,"./content/mods/dokis-n-dragons/thumbnail.jpg":269,"./content/mods/dreams-of-literature-noir/thumbnail.jpg":270,"./content/mods/dreams/thumbnail.jpg":271,"./content/mods/easter-hunt/thumbnail.jpg":272,"./content/mods/emerald-heart/thumbnail.jpg":273,"./content/mods/encore/thumbnail.jpg":274,"./content/mods/enter-traceback/thumbnail.jpg":275,"./content/mods/everlasting/thumbnail.jpg":276,"./content/mods/exit-music-redux/thumbnail.jpg":277,"./content/mods/exit-music/thumbnail.jpg":278,"./content/mods/fake-reality/thumbnail.jpg":279,"./content/mods/fallen-angel/thumbnail.jpg":280,"./content/mods/forever-and-ever/thumbnail.jpg":281,"./content/mods/forgotten/thumbnail.jpg":282,"./content/mods/forward-momentum/thumbnail.jpg":283,"./content/mods/found-love/thumbnail.jpg":284,"./content/mods/go-home-club/thumbnail.jpg":285,"./content/mods/god-syndrome/thumbnail.jpg":286,"./content/mods/hazbin-hotel/thumbnail.jpg":287,"./content/mods/hells-kitchen/thumbnail.jpg":288,"./content/mods/her/thumbnail.jpg":289,"./content/mods/in-a-nutshell/thumbnail.jpg":290,"./content/mods/india-man-time/thumbnail.jpg":291,"./content/mods/into-the-dark/thumbnail.jpg":292,"./content/mods/isolation/thumbnail.jpg":293,"./content/mods/it-wasnt-her/thumbnail.jpg":294,"./content/mods/jumbled/thumbnail.jpg":295,"./content/mods/just-monika-exe/thumbnail.jpg":296,"./content/mods/just-us/thumbnail.jpg":297,"./content/mods/just-yuri/thumbnail.jpg":298,"./content/mods/keeper-of-reality/thumbnail.jpg":299,"./content/mods/lavender-scent/thumbnail.jpg":300,"./content/mods/longer-roads/thumbnail.jpg":301,"./content/mods/loser-mc/thumbnail.jpg":302,"./content/mods/lost-ascension/thumbnail.jpg":303,"./content/mods/love-and-literature/thumbnail.jpg":304,"./content/mods/love-secrets/thumbnail.jpg":305,"./content/mods/magical-literary-heroine-natsuki/thumbnail.jpg":306,"./content/mods/malignancy/thumbnail.jpg":307,"./content/mods/mc-does-not-dream-of-monika/thumbnail.jpg":308,"./content/mods/mcs-revenge/thumbnail.jpg":309,"./content/mods/meme-club-2/thumbnail.jpg":310,"./content/mods/meme-club/thumbnail.jpg":311,"./content/mods/memorial/thumbnail.jpg":312,"./content/mods/mercy/thumbnail.jpg":313,"./content/mods/murder-case/thumbnail.jpg":314,"./content/mods/my-escape/thumbnail.jpg":315,"./content/mods/natsukis-expanded-story/thumbnail.jpg":316,"./content/mods/never-ending-tomorrow/thumbnail.jpg":317,"./content/mods/new-blood/thumbnail.jpg":318,"./content/mods/new-eyes/thumbnail.jpg":319,"./content/mods/new-friends-act-one/thumbnail.jpg":320,"./content/mods/new-world/thumbnail.jpg":321,"./content/mods/no-happiness/thumbnail.jpg":322,"./content/mods/one-last-memory/thumbnail.jpg":323,"./content/mods/onii-chan-club/thumbnail.jpg":324,"./content/mods/other-clubs/thumbnail.jpg":325,"./content/mods/our-castle-walls/thumbnail.jpg":326,"./content/mods/our-final-heartbeat/thumbnail.jpg":327,"./content/mods/our-reality/thumbnail.jpg":328,"./content/mods/our-time/thumbnail.jpg":329,"./content/mods/outbreak-red-sky/thumbnail.jpg":330,"./content/mods/pantomime-show/thumbnail.jpg":331,"./content/mods/pink-eyes/thumbnail.jpg":332,"./content/mods/president-natsuki/thumbnail.jpg":333,"./content/mods/purist/thumbnail.jpg":334,"./content/mods/recoded/thumbnail.jpg":335,"./content/mods/relapse/thumbnail.jpg":336,"./content/mods/return-to-the-portrait/thumbnail.jpg":337,"./content/mods/rhapsody/thumbnail.jpg":338,"./content/mods/rising-storm-2/thumbnail.jpg":339,"./content/mods/rising-storm/thumbnail.jpg":340,"./content/mods/rpg/thumbnail.jpg":341,"./content/mods/salvation/thumbnail.jpg":342,"./content/mods/sans-in-ddlc/thumbnail.jpg":343,"./content/mods/save-sayori/thumbnail.jpg":344,"./content/mods/savior-of-souls/thumbnail.jpg":345,"./content/mods/sayonara-dreams-of-letting-go-prologue/thumbnail.jpg":346,"./content/mods/sayori-date/thumbnail.jpg":347,"./content/mods/sayori-gets-a-burger/thumbnail.jpg":348,"./content/mods/sayori-shoots-up-the-literature-club/thumbnail.jpg":349,"./content/mods/scattered-stars/thumbnail.jpg":350,"./content/mods/second-chances/thumbnail.jpg":351,"./content/mods/sequel-club-back-online/thumbnail.jpg":352,"./content/mods/sequel-club-classic/thumbnail.jpg":353,"./content/mods/shattered-world/thumbnail.jpg":354,"./content/mods/snafu/thumbnail.jpg":355,"./content/mods/spark-of-hope/thumbnail.jpg":356,"./content/mods/starry-eyed/thumbnail.jpg":357,"./content/mods/summer-hope/thumbnail.jpg":358,"./content/mods/sunny-rains/thumbnail.jpg":359,"./content/mods/sweet-dreams/thumbnail.jpg":360,"./content/mods/switcheroo/thumbnail.jpg":361,"./content/mods/take-two/thumbnail.jpg":362,"./content/mods/the-binding-of-isaac-mod/thumbnail.jpg":363,"./content/mods/the-blood-moon-chapters-chapter-1--before-during-and-after-the-stories/thumbnail.jpg":364,"./content/mods/the-festival/thumbnail.jpg":365,"./content/mods/the-fruits-of-the-literature-club/thumbnail.jpg":366,"./content/mods/the-good-ending/thumbnail.jpg":367,"./content/mods/the-last-sky/thumbnail.jpg":368,"./content/mods/the-musical/thumbnail.jpg":369,"./content/mods/the-new-literature-club/thumbnail.jpg":370,"./content/mods/the-perfect-story/thumbnail.jpg":371,"./content/mods/the-portrait-of-markov/thumbnail.jpg":372,"./content/mods/the-post-credit-scene/thumbnail.jpg":373,"./content/mods/the-yuri-parable/thumbnail.jpg":374,"./content/mods/thot-club/thumbnail.jpg":375,"./content/mods/through-time-and-space/thumbnail.jpg":376,"./content/mods/time-to-be-an-epic-hero/thumbnail.jpg":377,"./content/mods/total-fold/thumbnail.jpg":378,"./content/mods/true-feelings/thumbnail.jpg":379,"./content/mods/true-happiness/thumbnail.jpg":380,"./content/mods/true-world/thumbnail.jpg":381,"./content/mods/tutorial/thumbnail.jpg":382,"./content/mods/twin-realities/thumbnail.jpg":383,"./content/mods/ultimate-combo/thumbnail.jpg":384,"./content/mods/undone-fate/thumbnail.jpg":385,"./content/mods/vigilante/thumbnail.jpg":386,"./content/mods/we-are-the-literature-club-ii/thumbnail.jpg":387,"./content/mods/we-are-the-literature-club/thumbnail.jpg":388,"./content/mods/weatheard-world/thumbnail.jpg":389,"./content/mods/west-virginia-club/thumbnail.jpg":390,"./content/mods/window-to-your-heart/thumbnail.jpg":391,"./content/mods/world-of-dreams/thumbnail.jpg":392,"./content/mods/yandere-club/thumbnail.jpg":393,"./content/mods/yandere-madness/thumbnail.jpg":394,"./content/mods/youtuber-club/thumbnail.jpg":395,"./content/mods/yuri-reality/thumbnail.jpg":396};function e(t){var n=m(t);return o(n)}function m(t){if(!o.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=m,t.exports=e,e.id=500}]),[[397,31,2,32]]]);