(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{286:function(t,e,r){var content=r(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("54222cd8",content,!0,{sourceMap:!1})},288:function(t,e,r){var content=r(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("11595efc",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";var o=r(286);r.n(o).a},292:function(t,e,r){(e=r(10)(!1)).push([t.i,".w-100{width:100%}",""]),t.exports=e},296:function(t,e,r){"use strict";var o=r(288);r.n(o).a},297:function(t,e,r){(e=r(10)(!1)).push([t.i,"a{text-decoration:none}.head{width:100vw;height:50vh;background-size:cover;background-color:rgba(0,0,0,.3);background-position:50%}.cover,.coverPhoto{width:100%;height:100%;transition:.5s;background-color:rgba(0,0,0,.6)}.cover:hover{background-color:transparent}.chat{position:fixed;bottom:100px;right:15px;text-decoration:none;background-color:hsla(0,0%,94.1%,.5);padding:.5em;border-radius:50%}",""]),t.exports=e},303:function(t,e,r){"use strict";r.r(e);r(65);var o=r(23),n=(r(111),{props:["allproduct"],methods:{addTodo:function(t){this.$store.commit("todos/add",t)}}}),c=(r(291),r(59)),l=r(87),d=r.n(l),v=r(283),h=r(112),m=r(51),f=r(300),x=r(156),_=r(160),w=r(301),y=r(302),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",t._l(t.allproduct,(function(e,o){return r("v-col",{key:o,attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"6",itemscope:"",itemtype:"http://schema.org/Product"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-lazy",{attrs:{transition:"fade-transition",options:{threshold:.5}}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",itemprop:"image",src:e.gsx$商品圖片.$t,alt:e.gsx$商品名稱.$t}},[r("div",{staticClass:"cover"},[r("v-card-title",{attrs:{itemprop:"name"}},[t._v(t._s(e.gsx$商品名稱.$t))])],1)])],1),t._v(" "),r("v-card-text",{staticClass:"text--primary pb-1"},[r("div",[r("span",{attrs:{itemprop:"price"}},[t._v(t._s(e.gsx$商品價格.$t))]),t._v("/"),r("span",[t._v(t._s(e.gsx$尺寸.$t))])]),t._v(" "),r("div",{attrs:{itemprop:"description"}},[t._v(t._s(e.gsx$商品描述.$t))])]),t._v(" "),r("v-card-actions",{staticClass:"d-flex justify-end"},[r("v-btn",{attrs:{color:"blue",text:""},on:{click:function(r){return t.addTodo(e.gsx$商品名稱.$t)}}},[r("v-icon",[t._v("add_shopping_cart")]),t._v("加入購物車\n        ")],1)],1)],1)],1)})),1)}),[],!1,null,null,null),$=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:f.a,VIcon:x.a,VImg:_.a,VLazy:w.a,VRow:y.a});var k={components:{card:$},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,time,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.get("https://spreadsheets.google.com/feeds/list/1nRVjr9OM6vfDwXAu6yiky1D3sJrceREtYoui74-X3ZY/3/public/values?alt=json");case 3:return o=e.sent,n=o.data.feed.entry,e.next=7,r.get("https://spreadsheets.google.com/feeds/list/1nRVjr9OM6vfDwXAu6yiky1D3sJrceREtYoui74-X3ZY/2/public/values?alt=json");case 7:return c=e.sent,time=c.data.feed.entry,e.next=11,r.get("https://spreadsheets.google.com/feeds/list/1nRVjr9OM6vfDwXAu6yiky1D3sJrceREtYoui74-X3ZY/1/public/values?alt=json");case 11:return l=e.sent,d=l.data.feed.entry,e.abrupt("return",{cover:n,time:time,allproduct:d});case 14:case"end":return e.stop()}}),e)})))()}},V=(r(296),r(304)),C=Object(c.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"head",style:{backgroundImage:"url("+t.cover[0].gsx$imgsrc.$t+")"},attrs:{itemscope:"",itemtype:"http://schema.org/Product"}},[r("div",{staticClass:"coverPhoto d-flex justify-center align-center white--text pa-5  display-2 font-weight-black",attrs:{itemprop:"name"}},[t._v("\n      "+t._s(t.cover[0].gsx$標題.$t)+"\n    ")])]),t._v(" "),r("div",[r("v-container",[r("v-row",[r("h2",{attrs:{itemprop:"description"}},[t._v("限時商品")])]),t._v(" "),r("card",{attrs:{allproduct:t.time}})],1)],1),t._v(" "),r("div",[r("v-container",[r("v-row",[r("h2",{attrs:{itemprop:"description"}},[t._v("全部商品")])]),t._v(" "),r("card",{attrs:{allproduct:t.allproduct}})],1)],1),t._v(" "),r("div",{staticClass:"chat",attrs:{alt:"與我聯繫"}},[r("a",{attrs:{href:"https://www.facebook.com/%E8%8A%B3%E5%9A%AE%E6%A1%BF%E6%89%8B%E4%BD%9C%E5%9D%8A-113563920277515"}},[r("v-icon",{attrs:{large:"",color:"blue darken-2"}},[t._v("insert_comment")])],1)])])}),[],!1,null,null,null);e.default=C.exports;d()(C,{VContainer:V.a,VIcon:x.a,VRow:y.a})}}]);