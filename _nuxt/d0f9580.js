(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1372:function(t,e,n){"use strict";n.r(e);var o,r=n(26),c=n(5),l=(n(30),n(22),n(118),n(223),{props:["value"],methods:{updateSearch:function(){this.$emit("input",this.$refs.search.value)}}}),d=(n(731),n(38)),f=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("input",{ref:"search",staticClass:"searchbar",attrs:{type:"search",autocomplete:"off",placeholder:"Search Mods..."},domProps:{value:t.value},on:{input:function(e){return t.updateSearch()}}})}),[],!1,null,"0655a6d8",null).exports,h=n(505),m={components:{SectionHeader:h.a},data:function(){return{sort:this.value,sortings:["Newest to Oldest","Oldest to Newest","A to Z","Z to A"]}},props:["value"],watch:{sort:function(t){this.updateCheck(t)}},methods:{clickedCheck:function(t){this.sort=t},updateCheck:function(t){this.$emit("input",this.sort)}}},v=(n(733),Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("SectionHeader",{attrs:{title:"Sorting"}}),t._v(" "),e("div",{staticClass:"sorting-container"},t._l(t.sortings,(function(n,o){return e("a",{key:o,staticClass:"sorting",class:[t.sort===o?"selected":"idle"],on:{click:function(e){return t.clickedCheck(o)}}},[t._v("\n      "+t._s(n)+"\n    ")])})),0)],1)}),[],!1,null,"52d2c0a9",null).exports),_=(n(72),n(90),n(34),n(14),{components:{SectionHeader:h.a},data:function(){return{checked:this.value}},props:["value","title","fields","color"],watch:{checked:function(t){this.updateCheck(t)}},computed:{cssVariables:function(){return{"--accent-color":this.color}}},methods:{clickedCheck:function(t){this.checked.includes(t)?this.checked=this.checked.filter((function(e){return e!=t})):this.checked.push(t)},updateCheck:function(t){this.$emit("input",this.checked)}}}),x=(n(735),{components:{Searchbar:f,Sorting:v,MultipleSelect:Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",{style:t.cssVariables},[e("SectionHeader",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"multi-container"},t._l(t.fields,(function(label,n,o){return e("a",{key:o,staticClass:"multi",class:[t.checked.includes(n)?"selected":"idle"],on:{click:function(e){return t.clickedCheck(n)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),0)],1)}),[],!1,null,"7bb8afb3",null).exports},props:["value"]}),k=(n(737),Object(d.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-container"},[e("Searchbar",{model:{value:t.value.search,callback:function(e){t.$set(t.value,"search",e)},expression:"value.search"}}),t._v(" "),e("Sorting",{model:{value:t.value.sort,callback:function(e){t.$set(t.value,"sort",e)},expression:"value.sort"}}),t._v(" "),e("MultipleSelect",{attrs:{title:"Genre",fields:t.$modData.genres,color:"#F54242"},model:{value:t.value.genre,callback:function(e){t.$set(t.value,"genre",e)},expression:"value.genre"}}),t._v(" "),e("MultipleSelect",{attrs:{title:"Development",fields:t.$modData.statuses,color:"#44BCFF"},model:{value:t.value.status,callback:function(e){t.$set(t.value,"status",e)},expression:"value.status"}}),t._v(" "),e("MultipleSelect",{attrs:{title:"Length",fields:t.$modData.lengths,color:"#9685FF"},model:{value:t.value.length,callback:function(e){t.$set(t.value,"length",e)},expression:"value.length"}})],1)}),[],!1,null,"2c48a00c",null).exports),w=(n(119),n(49),{components:{ModLogo:n(509).a},props:["mod"],data:function(){return{genreText:this.mod.genre.map(this.$modData.genre).join(", ")}}}),M=(n(739),{components:{Entry:Object(d.a)(w,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"entry-container",attrs:{to:t.mod.dir}},[e("div",{staticClass:"logo"},[e("ModLogo",{attrs:{mod:t.mod}})],1),t._v(" "),e("div",{staticClass:"info"},[e("h1",[t._v(t._s(t.mod.title))]),t._v(" "),e("p",[t._v("by "),e("b",[t._v(t._s(t.mod.authors))])]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(t.genreText))]),t._v(" "),e("p",[t._v(t._s(t.$modData.status(t.mod.status)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.length(t.mod.length)))]),t._v(" "),e("p",[t._v(t._s(t.$modData.formatDate(t.mod.released)))])])])}),[],!1,null,"7b94dd5c",null).exports},props:["mods"]}),y=(n(741),Object(d.a)(M,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("transition-group",{staticClass:"mod-grid",attrs:{name:"mod-entry",tag:"div"}},t._l(t.mods,(function(t){return e("Entry",{key:t.title,attrs:{mod:t}})})),1)],1)}),[],!1,null,"38a7fe43",null).exports),C=(n(48),n(31),{props:["currPage","totalMods"],computed:{prevPage:function(){return Math.max(this.currPage-1,0)},nextPage:function(){return Math.min(this.currPage+1,this.totalPages-1)},totalPages:function(){return Math.ceil(this.totalMods/this.$modListing.ModsPerPage)},numVisible:function(){return Math.min(3,this.totalPages)}},methods:{changePage:function(t){this.$emit("change-page",t)},paginator:function(){var t=this.totalPages,e=this.currPage,n=this.numVisible,o=Math.floor(n/2);return e<o?this.range(1,n,1):t-e<=o?this.range(t-2*o,t,1):this.range(e-o+1,e+o+1,1)},range:function(t,e,n){return Array.from({length:(e-t)/n+1},(function(e,i){return t+i*n}))}}}),P=(n(743),{components:{SearchParams:k,Listing:y,ModPaginator:Object(d.a)(C,(function(){var t=this,e=t._self._c;return t.totalPages>1?e("ul",{staticClass:"pagination-container"},[e("li",{staticClass:"pagination",on:{click:function(e){return t.changePage(0)}}},[e("a",{staticClass:"pagination-link"},[t._v("\n      <<\n    ")])]),t._v(" "),e("li",{staticClass:"pagination",on:{click:function(e){return t.changePage(t.prevPage)}}},[e("a",{staticClass:"pagination-link"},[t._v("\n      <\n    ")])]),t._v(" "),t._l(t.paginator(),(function(n,o){return e("li",{key:o,staticClass:"pagination",class:{active:t.currPage==n-1},on:{click:function(e){return t.changePage(n-1)}}},[e("a",{staticClass:"pagination-link"},[t._v("\n      "+t._s(n)+"\n    ")])])})),t._v(" "),e("li",{staticClass:"pagination",on:{click:function(e){return t.changePage(t.nextPage)}}},[e("a",{staticClass:"pagination-link"},[t._v("\n      >\n    ")])]),t._v(" "),e("li",{staticClass:"pagination"},[e("a",{staticClass:"pagination-link",on:{click:function(e){return t.changePage(t.totalPages-1)}}},[t._v("\n      >>\n    ")])])],2):t._e()}),[],!1,null,"d3c96950",null).exports},head:function(){return{title:"DokiMods - Mod Page",meta:[{hid:"description",name:"description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:title",name:"og:title",content:"DokiMods"},{hid:"og:image",property:"og:image",content:n(151)},{hid:"og:description",property:"og:description",content:"The best catalogue of mods for Doki Doki Literature Club!"},{hid:"og:url",property:"og:url",content:"https://dokimods.me/"},{hid:"twitter:card",name:"twitter:card",content:"summary"}]}},data:function(){return{mods:[],totalMods:0,page:0,filters:{search:"",sort:this.$modListing.SORT_NEWEST,genre:[],status:[],length:[]}}},watch:{filters:{handler:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$modListing.getMods(this.page,e);case 2:n=t.sent,o=Object(r.a)(n,2),this.mods=o[0],this.totalMods=o[1],this.page=0;case 7:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)}),deep:!0}},methods:{changePage:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$modListing.getMods(t,e.filters);case 2:o=n.sent,c=Object(r.a)(o,2),e.mods=c[0],e.totalMods=c[1],e.page=t;case 7:case"end":return n.stop()}}),n)})))()}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$modListing.getMods(t.page,t.filters);case 2:n=e.sent,o=Object(r.a)(n,2),t.mods=o[0],t.totalMods=o[1];case 6:case"end":return e.stop()}}),e)})))()}}),$=P,S=(n(745),Object(d.a)($,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"search-params-container"},[e("SearchParams",{model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),t._v(" "),e("div",{staticClass:"listing-container"},[t.totalMods>t.$modListing.ModsPerPage?e("ModPaginator",{attrs:{"curr-page":t.page,"total-mods":t.totalMods},on:{"change-page":t.changePage}}):t._e(),t._v(" "),e("Listing",{attrs:{mods:t.mods}})],1)])}),[],!1,null,"0ef021f8",null));e.default=S.exports},504:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("eb6952de",content,!0,{sourceMap:!1})},505:function(t,e,n){"use strict";var o={props:["title"]},r=(n(510),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"heading"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("hr")])}),[],!1,null,"583de700",null);e.a=component.exports},506:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("35d341f3",content,!0,{sourceMap:!1})},507:function(t,e,n){"use strict";n(504)},508:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".logo[data-v-64594721]{-o-object-fit:cover;object-fit:cover;width:100%}",""]),o.locals={},t.exports=o},509:function(t,e,n){"use strict";var o={props:["mod"],methods:{logo:function(){return this.$modData.logo(this.mod)}}},r=(n(507),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return null!==t.logo()?e("img",{staticClass:"logo lazyload",attrs:{src:t.logo(),alt:"Logo"}}):t._e()}),[],!1,null,"64594721",null);e.a=component.exports},510:function(t,e,n){"use strict";n(506)},511:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".heading[data-v-583de700]{width:-moz-fit-content;width:fit-content}.heading h2[data-v-583de700]{font-size:1.25em;font-weight:500}.heading hr[data-v-583de700]{background:linear-gradient(90deg,#f54242,#ff9e9e);border:none;border-radius:.0625em;height:.125em;margin:.3125em 0 1.25em;width:100%}",""]),o.locals={},t.exports=o},514:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("beddad7e",content,!0,{sourceMap:!1})},515:function(t,e,n){var content=n(734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("83a1ac9c",content,!0,{sourceMap:!1})},516:function(t,e,n){var content=n(736);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("08b99666",content,!0,{sourceMap:!1})},517:function(t,e,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("d8467272",content,!0,{sourceMap:!1})},518:function(t,e,n){var content=n(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("58580ff6",content,!0,{sourceMap:!1})},519:function(t,e,n){var content=n(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("70c5b585",content,!0,{sourceMap:!1})},520:function(t,e,n){var content=n(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("b25ca7fa",content,!0,{sourceMap:!1})},521:function(t,e,n){var content=n(746);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("fffdb09e",content,!0,{sourceMap:!1})},731:function(t,e,n){"use strict";n(514)},732:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,'.searchbar[data-v-0655a6d8]{background:#f5f5f5;border:0;border-radius:15px;font-family:"Nunito";font-size:.8125em;height:3em;margin:0 -1em;outline:0!important;padding:0 1em}',""]),o.locals={},t.exports=o},733:function(t,e,n){"use strict";n(515)},734:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".sorting-container[data-v-52d2c0a9]{display:flex;flex-direction:column;gap:.625em;padding:0 .625em}.sorting-container .sorting[data-v-52d2c0a9]{border-radius:.75em;cursor:pointer;font-size:.875em;padding:.125em .625em;text-align:center;-webkit-text-decoration:none;text-decoration:none;transition:background-color .25s ease,color .25s ease}.sorting-container .selected[data-v-52d2c0a9]{background-color:transparent;border:.125em solid #9685ff}.sorting-container .idle[data-v-52d2c0a9]{background-color:#9685ff;border:.125em solid transparent;color:#fff}",""]),o.locals={},t.exports=o},735:function(t,e,n){"use strict";n(516)},736:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".multi-container[data-v-7bb8afb3]{display:flex;flex-wrap:wrap;gap:.625em;padding:0 .625em}.multi-container .multi[data-v-7bb8afb3]{border-radius:.75em;cursor:pointer;font-size:.875em;padding:.125em .625em;-webkit-text-decoration:none;text-decoration:none;transition:background-color .25s ease,color .25s ease}.multi-container .selected[data-v-7bb8afb3]{background-color:transparent;border:.125em solid var(--accent-color)}.multi-container .idle[data-v-7bb8afb3]{background-color:var(--accent-color);border:.125em solid transparent;color:#fff}",""]),o.locals={},t.exports=o},737:function(t,e,n){"use strict";n(517)},738:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".search-container[data-v-2c48a00c]{display:flex;flex-direction:column;gap:1.5625em;margin:1.875em}",""]),o.locals={},t.exports=o},739:function(t,e,n){"use strict";n(518)},740:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".entry-container[data-v-7b94dd5c]{background-clip:padding-box;background-color:var(--color-container);border:.0625em dashed var(--color);border-radius:.5em;color:var(--color);display:flex;flex-direction:column;min-width:0;padding:1.875em;-webkit-text-decoration:none;text-decoration:none;transition:background-color .25s,color .25s,transform .25s ease-in-out}.entry-container .logo[data-v-7b94dd5c]{margin:auto;width:100%}.entry-container .info[data-v-7b94dd5c]{margin-top:.625em}.entry-container .info h1[data-v-7b94dd5c]{font-size:1em;font-weight:500;max-width:100%;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entry-container .info p[data-v-7b94dd5c]{font-size:.875em}.entry-container[data-v-7b94dd5c]:hover{background-color:var(--container-hover);color:#fff;transform:scale(1.03);transform-origin:center center}",""]),o.locals={},t.exports=o},741:function(t,e,n){"use strict";n(519)},742:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".mod-grid[data-v-38a7fe43]{grid-gap:1.25em;display:grid;gap:1.25em;grid-auto-rows:1fr;grid-template-columns:1fr 1fr 1fr;position:relative}.mod-grid *[data-v-38a7fe43]{height:100%;width:100%}@media screen and (max-width:576px){.mod-grid[data-v-38a7fe43]{grid-gap:1.25em;display:grid;gap:1.25em;grid-auto-rows:1fr;grid-template-columns:repeat(1,1fr);position:relative}}",""]),o.locals={},t.exports=o},743:function(t,e,n){"use strict";n(520)},744:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,".pagination-container[data-v-d3c96950]{display:flex;margin:auto;padding:0;width:-moz-fit-content;width:fit-content}.pagination-container .pagination[data-v-d3c96950]{border-radius:5px;display:grid;height:2.5em;list-style-type:none;margin:.3em;width:2.5em}.pagination-container .pagination .pagination-link[data-v-d3c96950]{font-feature-settings:tabular-nums lining-nums;cursor:pointer;font-variant-numeric:tabular-nums lining-nums;margin:auto;transition:background-color .25s}.pagination-container .pagination[data-v-d3c96950]:hover{background-color:rgba(255,83,83,.533)}.pagination-container .pagination.active[data-v-d3c96950]{background-color:rgba(255,83,83,.533);color:#fff}a[data-v-d3c96950]{-webkit-text-decoration:none;text-decoration:none}@media only screen and (max-width:600px){.pagination-container .pagination[data-v-d3c96950]{margin:0}}",""]),o.locals={},t.exports=o},745:function(t,e,n){"use strict";n(521)},746:function(t,e,n){var o=n(55)((function(i){return i[1]}));o.push([t.i,"main[data-v-0ef021f8]{background-color:var(--bg);height:100%}main .search-params-container[data-v-0ef021f8]{background:var(--search-container);box-shadow:var(--box-shadow);height:calc(100vh - var(--navbar-height));overflow-y:scroll;position:fixed;width:var(--search-params-width)}main .listing-container[data-v-0ef021f8]{grid-gap:2em;display:grid;gap:2em;height:100%;margin-left:var(--search-params-width);min-height:calc(100vh - var(--navbar-height));padding:2.5em;position:relative}",""]),o.locals={},t.exports=o}}]);