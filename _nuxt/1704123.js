(window.webpackJsonp=window.webpackJsonp||[]).push([[18,31],{536:function(e,t,n){"use strict";n.r(t);var c={props:["title"]},o=(n(539),n(42)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"heading"},[t("h2",[e._v(e._s(e.title))]),e._v(" "),t("hr")])}),[],!1,null,"583de700",null);t.default=component.exports},537:function(e,t,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("1e8c2aa7",content,!0,{sourceMap:!1})},539:function(e,t,n){"use strict";n(537)},540:function(e,t,n){var c=n(60)((function(i){return i[1]}));c.push([e.i,".heading[data-v-583de700]{width:-moz-fit-content;width:fit-content}.heading h2[data-v-583de700]{font-size:1.25em;font-weight:500}.heading hr[data-v-583de700]{background:linear-gradient(90deg,#f54242,#ff9e9e);border:none;border-radius:.0625em;height:.125em;margin:.3125em 0 1.25em;width:100%}",""]),c.locals={},e.exports=c},551:function(e,t,n){var content=n(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(61).default)("b82f12c4",content,!0,{sourceMap:!1})},568:function(e,t,n){"use strict";n(551)},569:function(e,t,n){var c=n(60)((function(i){return i[1]}));c.push([e.i,".multi-container[data-v-7bb8afb3]{display:flex;flex-wrap:wrap;gap:.625em;padding:0 .625em}.multi-container .multi[data-v-7bb8afb3]{border-radius:.75em;cursor:pointer;font-size:.875em;padding:.125em .625em;-webkit-text-decoration:none;text-decoration:none;transition:background-color .25s ease,color .25s ease}.multi-container .selected[data-v-7bb8afb3]{background-color:transparent;border:.125em solid var(--accent-color)}.multi-container .idle[data-v-7bb8afb3]{background-color:var(--accent-color);border:.125em solid transparent;color:#fff}",""]),c.locals={},e.exports=c},601:function(e,t,n){"use strict";n.r(t);n(43),n(62),n(34),n(10);var c={components:{SectionHeader:n(536).default},data:function(){return{checked:this.value}},props:["value","title","fields","color"],watch:{checked:function(e){this.updateCheck(e)}},computed:{cssVariables:function(){return{"--accent-color":this.color}}},methods:{clickedCheck:function(e){this.checked.includes(e)?this.checked=this.checked.filter((function(t){return t!=e})):this.checked.push(e)},updateCheck:function(e){this.$emit("input",this.checked)}}},o=(n(568),n(42)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{style:e.cssVariables},[t("SectionHeader",{attrs:{title:e.title}}),e._v(" "),t("div",{staticClass:"multi-container"},e._l(e.fields,(function(label,n,c){return t("a",{key:c,staticClass:"multi",class:[e.checked.includes(n)?"selected":"idle"],on:{click:function(t){return e.clickedCheck(n)}}},[e._v("\n      "+e._s(label)+"\n    ")])})),0)],1)}),[],!1,null,"7bb8afb3",null);t.default=component.exports;installComponents(component,{SectionHeader:n(536).default})}}]);