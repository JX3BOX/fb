(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596e08d0"],{1344:function(t,e,a){"use strict";e["a"]=function(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map((function(t){t(a)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,a)}))}}}},"29c2":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r}));var n=a("41cb");function i(t){var e={type:"fb"};return t&&(e=Object.assign(e,t)),Object(n["a"])().get("/api/cms/posts",{params:e})}function r(t){return Object(n["a"])().get("/api/cms/post/".concat(t))}},"44fd":function(t,e,a){"use strict";a("a15b"),a("2c3e");var n=function(){var t=this,e=t._self._c;return e("li",{staticClass:"m-fb-item u-item"},[e("a",{directives:[{name:"reporter",rawName:"v-reporter",value:{data:{href:t.reporterLink(t.item.ID)},caller:t.caller},expression:"{\n            data: {\n                href: reporterLink(item.ID),\n            },\n            caller,\n        }"}],staticClass:"u-banner",attrs:{href:t._f("postLink")(t.item.ID),target:t.target}},[e("img",{key:t.item.ID,attrs:{src:t.getBanner(t.item)},on:{error:function(e){e.target.src=t.errorImg}}})]),e("h2",{staticClass:"u-post",class:{isSticky:t.item.sticky}},[e("svg",{class:"u-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",width:"12",height:"16","aria-hidden":"true",fill:"#555","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"}})]),e("a",{directives:[{name:"reporter",rawName:"v-reporter",value:{data:{href:t.reporterLink(t.item.ID)},caller:t.caller},expression:"{\n                data: {\n                    href: reporterLink(item.ID),\n                },\n                caller,\n            }"}],staticClass:"u-title",style:t._f("showHighlight")(t.item.color),attrs:{href:t._f("postLink")(t.item.ID),target:t.target}},[t._v(t._s(t.item.post_title||"无标题"))]),t.item.mark&&t.item.mark.length?e("span",{staticClass:"u-marks"},t._l(t.item.mark,(function(a){return e("i",{key:a,staticClass:"u-mark"},[t._v(t._s(t._f("showMark")(a)))])})),0):t._e(),t.hasPermission?e("span",{staticClass:"u-push"},[t.showPushDate?e("time",{staticClass:"u-push__time",class:{"is-recent":t.isRecent()}},[t._v(t._s(t.pushDate)+" 已推送")]):t._e(),e("el-button",{staticClass:"u-push__btn",attrs:{size:"mini",type:"warning",icon:"el-icon-s-promotion"},on:{click:t.onPush}},[t._v("推送")])],1):t._e()]),e("div",{staticClass:"u-content u-desc"},[t.item.post_meta&&t.item.post_meta.fb_boss?e("div",{staticClass:"u-metalist u-boss-list"},[e("strong",[t._v("首领")]),e("em",t._l(t.format(t.item,"fb_boss"),(function(a,n){return e("b",{key:n,on:{click:function(e){return t.addTopic(a)}}},[t._v(t._s(a))])})),0)]):t._e(),t.item.post_meta&&t.item.post_meta.fb_level?e("div",{staticClass:"u-metalist u-mode-list c-jx3fb-mode"},[e("strong",[t._v("模式")]),e("em",[t._v(t._s(t.format(t.item,"fb_level").join("、")))])]):t._e()]),e("div",{staticClass:"u-misc"},[e("img",{staticClass:"u-author-avatar",attrs:{src:t._f("showAvatar")(t.item.author_info),alt:t._f("showNickname")(t.item.author_info)}}),e("a",{staticClass:"u-author-name",attrs:{href:t._f("authorLink")(t.item.post_author),target:"_blank"}},[t._v(t._s(t._f("showNickname")(t.item.author_info)))]),e("span",{staticClass:"u-date"},[t._v(" Updated on "),"update"==t.order?e("time",[t._v(t._s(t._f("dateFormat")(t.item.post_modified)))]):e("time",[t._v(t._s(t._f("dateFormat")(t.item.post_date)))])])])])},i=[],r=(a("99af"),a("d81d"),a("14d9"),a("1fb9")),s=a("85e4"),o=a("65c2"),c=a("1647"),u=a("e4f1"),l=a("c9d2"),d=a("5a0c"),p=a.n(d),h=a("d8ad"),f={name:"ListItem",props:["item","order","caller"],components:{},data:function(){return{target:Object(s["b"])()}},computed:{client:function(){var t;return null===(t=this.item)||void 0===t?void 0:t.client},errorImg:function(){return o["__imgPath"]+"image/fb_map_thumbnail/undefined.png"},hasPermission:function(){return l["a"].hasPermission("push_banner")},pushDate:function(t){var e,a=t.item,n=null===a||void 0===a||null===(e=a.log)||void 0===e?void 0:e.push_at;return Object(u["b"])(new Date(n))},showPushDate:function(){var t;return Boolean(null===(t=this.item)||void 0===t?void 0:t.log)}},watch:{},methods:{getBanner:function(t){if(t.post_banner)return Object(s["q"])(t.post_banner);var e,a,n,i,r,c=(null===(e=t.post_meta)||void 0===e?void 0:e.fb_zlp)||t.zlp||this.$store.state.default_zlp,u=t.post_subtype||this.$store.state.default_fb,l=null===(a=this.$store.state.map)||void 0===a||null===(n=a[c])||void 0===n||null===(i=n.dungeon)||void 0===i||null===(r=i[u])||void 0===r?void 0:r.icon;return l?o["__imgPath"]+l:o["__imgPath"]+"image/fb_map_thumbnail/null.png"},format:function(t,e){var a,n=null===t||void 0===t||null===(a=t.post_meta)||void 0===a?void 0:a[e];return n&&n.length?n:["-"]},addTopic:function(t){this.$router.push({query:{topic:t}})},reporterLink:function(t){var e="std"===this.client?"www":"origin";return"".concat(e,":/").concat(r["a"],"/")+t},showDate:u["b"],isRecent:function(){var t,e,a=null===(t=this.item)||void 0===t||null===(e=t.log)||void 0===e?void 0:e.push_at;return p()().diff(p()(a),"day")<30},onPush:function(){h["a"].emit("design-task",this.item)}},filters:{authorLink:s["a"],postLink:function(t){return location.origin+"/".concat(r["a"],"/")+t},showHighlight:function(t){return t?"color:".concat(t,";font-weight:600;"):""},showMark:function(t){return c["a"][t]||t},showAvatar:function(t){return Object(s["p"])(null===t||void 0===t?void 0:t.user_avatar)},showNickname:function(t){return(null===t||void 0===t?void 0:t.display_name)||"匿名"},dateFormat:function(t){return Object(u["b"])(new Date(t))}},created:function(){},mounted:function(){}},m=f,v=a("2877"),g=Object(v["a"])(m,n,i,!1,null,null,null);e["a"]=g.exports},"498a":function(t,e,a){"use strict";var n=a("23e7"),i=a("58a8").trim,r=a("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return i(this)}})},"5c2e":function(t,e,a){"use strict";a("8520")},8520:function(t,e,a){},c8d2:function(t,e,a){"use strict";var n=a("5e77").PROPER,i=a("d039"),r=a("5899"),s="​᠎";t.exports=function(t){return i((function(){return!!r[t]()||s[t]()!==s||n&&r[t].name!==t}))}},d504:function(t,e,a){"use strict";a.r(e);a("ac1f"),a("841c"),a("498a");var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-archive-box"},[e("div",{staticClass:"m-archive-search",attrs:{slot:"search-before"},slot:"search-before"},[e("a",{staticClass:"u-publish el-button el-button--primary",attrs:{href:t.publish_link}},[t._v("+ 发布作品")]),e("el-input",{attrs:{placeholder:"请输入搜索内容",clearable:""},on:{clear:t.onSearch},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}},scopedSlots:t._u([{key:"append",fn:function(){return[e("el-button",{attrs:{icon:"el-icon-position"},on:{click:t.onSearch}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search="string"===typeof e?e.trim():e},expression:"search"}},[e("span",{attrs:{slot:"prepend"},slot:"prepend"},[e("i",{staticClass:"el-icon-search"}),t._v(" 关键词")])])],1),e("div",{staticClass:"m-archive-filter"},[e("clientBy",{attrs:{type:t.client},on:{filter:t.filterImperceptibly}}),e("markBy",{on:{filter:t.filterMeta}}),e("orderBy",{on:{filter:t.filterMeta}})],1),t.data&&t.data.length?e("div",{staticClass:"m-archive-list"},[e("ul",{staticClass:"u-list"},t._l(t.data,(function(a,n){return e("list-item",{key:n+a,attrs:{item:a,order:t.order,caller:"fb_index_click"}})})),1)]):e("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),e("el-button",{directives:[{name:"show",rawName:"v-show",value:t.hasNextPage,expression:"hasNextPage"}],staticClass:"m-archive-more",attrs:{type:"primary",loading:t.loading,icon:"el-icon-arrow-down"},on:{click:t.appendPage}},[t._v("加载更多")]),e("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"",layout:"total, prev, pager, next, jumper","hide-on-single-page":!0,"page-size":t.per,total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.changePage}}),e("design-task",{attrs:{post:t.currentPost},model:{value:t.showDesignTask,callback:function(e){t.showDesignTask=e},expression:"showDesignTask"}})],1)},i=[],r=a("ade3"),s=a("c7eb"),o=a("1da1"),c=(a("99af"),a("7db0"),a("caad"),a("a15b"),a("d81d"),a("14d9"),a("b0c0"),a("b64b"),a("d3b7"),a("2c3e"),a("2532"),a("1fb9")),u=a("44fd"),l=a("85e4"),d=a("29c2"),p=a("16e5"),h=a("41cb"),f=function(t){return Object(h["a"])().get("/api/cms/design/task/log",{params:t})},m=a("7d14"),v=a("d8ad"),g=a("c9d2"),_={name:"Index",props:[],data:function(){return{loading:!1,data:[],page:1,per:10,total:1,pages:1,number_queries:["per","page"],subtype:"",order:"update",mark:"",client:this.$store.state.client,search:"",topic:"",showDesignTask:!1,currentPost:{}}},computed:{publish_link:function(){return Object(l["n"])(c["a"])},hasNextPage:function(){return this.pages>1&&this.page<this.total},query:function(){return{subtype:this.subtype,order:this.order,mark:this.mark,client:this.client,topic:this.topic}},pg_queries:function(){return{page:this.page,per:this.per}},reset_queries:function(){return[this.subtype]},aggregate:function(){var t=this;return this.data.map((function(e){return t.postLink(e.ID)}))}},methods:{postLink:function(t){return"/".concat(c["a"],"/")+t},reporterLink:function(t){var e="std"===this.client?"www":"origin";return"".concat(e,":/").concat(c["a"],"/")+t},onSearch:function(){this.page=1,this.loadData()},buildQuery:function(t){t&&(this.page+=1);var e={per:this.per,page:this.page};for(var a in this.query)void 0!==this.query[a]&&""!==this.query[a]&&null!==this.query[a]&&("search"==a?e.search=this.query.search.trim():e[a]=this.query[a]);return e.subtype&&(e.sticky=1),this.search&&(e.search=this.search.trim()),e},loadData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=this.buildQuery(e);return console.log("[cms-list]","<loading data>",a),this.loading=!0,Object(d["b"])(a).then(function(){var a=Object(o["a"])(Object(s["a"])().mark((function a(n){var i,r,o,c,u,l,d,h,m,v,_,b;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.data=e?t.data.concat(null===(d=n.data)||void 0===d||null===(h=d.data)||void 0===h?void 0:h.list):null===(m=n.data)||void 0===m||null===(v=m.data)||void 0===v?void 0:v.list,t.total=null===(i=n.data)||void 0===i||null===(r=i.data)||void 0===r?void 0:r.total,t.pages=null===(o=n.data)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.pages,Object(p["b"])({caller:"fb_index_load",data:{aggregate:null===(u=n.data)||void 0===u||null===(l=u.data)||void 0===l?void 0:l.list.map((function(e){return t.reporterLink(e.ID)}))}}),!g["a"].hasPermission("push_banner")||t.isPhone){a.next=10;break}return _=t.data.map((function(t){return t.ID})),a.next=8,f({source_type:"fb",ids:_.join(",")}).then((function(t){return t.data.data}));case 8:b=a.sent,t.data=t.data.map((function(e){var a=b.find((function(t){return t.source_id==e.ID}))||null;return t.$set(e,"log",a),e}));case 10:t.$forceUpdate();case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).finally((function(){t.loading=!1}))},replaceRoute:function(t){return this.$router.push({name:this.$route.name,query:Object.assign({},this.$route.query,t)}).then((function(){window.scrollTo(0,0)})).catch((function(t){}))},filterMeta:function(t){this.replaceRoute(Object(r["a"])(Object(r["a"])({},t["type"],t["val"]),"page",1))},filterImperceptibly:function(t){this[t["type"]]=t["val"]},changePage:function(t){this.loadData(),this.replaceRoute({page:t})},appendPage:function(){this.loadData(!0)}},watch:{"$route.query":{deep:!0,immediate:!0,handler:function(t){if(Object.keys(t).length)for(var e in console.log("[cms-list]","<route query change>",t),t)this.number_queries.includes(e)?this[e]=~~t[e]:this[e]=t[e],"fb_name"==e&&(this.subtype=t.fb_name)}},reset_queries:{deep:!0,handler:function(){console.log("[cms-list]","<reset page>"),this.page=1}},query:{deep:!0,immediate:!0,handler:function(t){console.log("[cms-list]","<request query change>",t),this.loadData()}}},mounted:function(){var t=this;v["a"].on("design-task",(function(e){t.currentPost=e,t.showDesignTask=!0}))},components:{listItem:u["a"],DesignTask:m["a"]}},b=_,k=(a("5c2e"),a("2877")),y=Object(k["a"])(b,n,i,!1,null,null,null);e["default"]=y.exports},d8ad:function(t,e,a){"use strict";var n=a("1344"),i=Object(n["a"])();e["a"]=i}}]);
//# sourceMappingURL=chunk-596e08d0.daa4abde.js.map