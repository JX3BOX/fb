(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595e15b1"],{"33a5":function(t){t.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗","26":"刀宗","29":"万灵","38":"段氏"}')},"73cd":function(t,n,i){"use strict";i.d(n,"b",(function(){return c})),i.d(n,"a",(function(){return e})),i.d(n,"c",(function(){return o}));var a=i("41cb");function c(t){return Object(a["a"])({mute:!0}).get("/api/cms/menu-group/".concat(t))}function e(t){return Object(a["a"])({mute:!0}).get("/api/cms/breadcrumb/".concat(t))}function o(t){return Object(a["a"])({mute:!0}).get("/api/cms/pvp/collection/group",{params:{group:t}})}},"7c3c":function(t,n,i){"use strict";i.r(n);i("b0c0");var a=function(){var t=this,n=t._self._c;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-fb-attr"},["std"==t.client?[n("el-divider",{attrs:{"content-position":"left"}},[t._v("穿透")]),n("div",{staticClass:"u-desc",domProps:{innerHTML:t._s(t.chuantou["desc"])}}),n("ul",{staticClass:"u-content"},t._l(t.chuantou["skills"],(function(i,a){return n("li",{key:a},[n("a",{attrs:{href:t.getLink(i),target:"_blank"}},[n("img",{attrs:{src:t._f("iconLink")(i.icon)}}),t._v(" "+t._s(i.name)+" "),i.school?n("span",[t._v(t._s(t.showSchool(i.school)))]):t._e()])])})),0),n("el-divider",{attrs:{"content-position":"left"}},[t._v("穿刺")]),n("div",{staticClass:"u-desc",domProps:{innerHTML:t._s(t.chuanci["desc"])}}),n("ul",{staticClass:"u-content"},t._l(t.chuanci["skills"],(function(i,a){return n("li",{key:a},[n("a",{attrs:{href:t.getLink(i),target:"_blank",title:i.meta_1}},[n("img",{attrs:{src:t._f("iconLink")(i.icon)}}),t._v(" "+t._s(i.name)+" "),i.school?n("span",[t._v(t._s(t.showSchool(i.school)))]):t._e()])])})),0)]:t._e(),n("el-divider",{attrs:{"content-position":"left"}},[t._v("贯体")]),n("div",{staticClass:"u-desc",domProps:{innerHTML:t._s(t.guanti["desc"])}}),n("ul",{staticClass:"u-content"},t._l(t.guanti["skills"],(function(i,a){return n("li",{key:a},[n("a",{attrs:{href:t.getLink(i),target:"_blank",title:i.meta_1}},[n("img",{attrs:{src:t._f("iconLink")(i.icon)}}),t._v(" "+t._s(i.name)+" "),i.school?n("span",[t._v(t._s(t.showSchool(i.school)))]):t._e()])])})),0)],2)},c=[],e=(i("99af"),i("7db0"),i("d3b7"),i("9911"),i("0643"),i("fffc"),i("65c2"),i("33a5")),o=i("73cd"),s=i("85e4"),u=(i("2ef0"),{name:"Attr",props:[],data:function(){return{loading:!1,chuantou:{skills:[],desc:""},chuanci:{skills:[],desc:""},guanti:{skills:[],desc:""}}},computed:{client:function(){return this.$store.state.client||"std"}},filters:{iconLink:s["m"]},methods:{loadData:function(){var t=this;this.loading=!0;var n="origin"==this.client?["guanti","origin"]:["chuantou,chuanci,guanti","std"];o["c"].apply(void 0,n).then((function(n){var i,a,c;t.chuantou=(null===(i=n.data.data)||void 0===i?void 0:i.find((function(t){return"chuantou"==t.name})))||{},t.chuanci=(null===(a=n.data.data)||void 0===a?void 0:a.find((function(t){return"chuanci"==t.name})))||{},t.guanti=(null===(c=n.data.data)||void 0===c?void 0:c.find((function(t){return"guanti"==t.name})))||{}})).finally((function(){t.loading=!1}))},showSchool:function(t){return e[t]||""},getLink:function(t){var n=t.link,i=t.type,a=t.id;return n||"/app/database?type=".concat(i,"&query=").concat(a)}},mounted:function(){this.loadData()}}),r=u,l=(i("bb99"),i("2877")),d=Object(l["a"])(r,a,c,!1,null,"3b51690a",null);n["default"]=d.exports},bb99:function(t,n,i){"use strict";i("f22c")},f22c:function(t,n,i){}}]);
//# sourceMappingURL=chunk-595e15b1.e1d5c322.js.map