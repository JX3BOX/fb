(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-27d1d86e"],{"07ac":function(t,s,a){var e=a("23e7"),r=a("6f53").values;e({target:"Object",stat:!0},{values:function(t){return r(t)}})},"159b":function(t,s,a){var e=a("da84"),r=a("fdbc"),i=a("17c2"),n=a("9112");for(var c in r){var o=e[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(t){l.forEach=i}}},"17c2":function(t,s,a){"use strict";var e=a("b727").forEach,r=a("a640"),i=a("ae40"),n=r("forEach"),c=i("forEach");t.exports=n&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,s,a){"use strict";var e=a("23e7"),r=a("17c2");e({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"6f53":function(t,s,a){var e=a("83ab"),r=a("df75"),i=a("fc6a"),n=a("d1e7").f,c=function(t){return function(s){for(var a,c=i(s),o=r(c),l=o.length,u=0,f=[];l>u;)a=o[u++],e&&!n.call(c,a)||f.push(t?[a,c[a]]:c[a]);return f}};t.exports={entries:c(!0),values:c(!1)}},7205:function(t,s,a){"use strict";var e=a("f6d8");a.n(e).a},"789b":function(t,s,a){"use strict";a.r(s);a("99af"),a("4160"),a("a15b"),a("b64b"),a("d3b7"),a("07ac"),a("ac1f"),a("1276"),a("159b");var e=a("418f"),r=a("c1df"),i=a.n(r),n=a("cfa4"),c=a("64c7"),o=a("9756");o.unshift("全部");var l={name:"Rank",props:[],data:function(){return{active:"",rank:{},loading:!1,ready:!1,server:"",servers:o}},computed:{fb:function(){return this.$store.state.fb},nav:function(){return n[this.fb]},labels:function(){return Object.keys(this.nav)},values:function(){return Object.values(this.nav)},first:function(){return this.labels[0]}},filters:{format:function(t){return i()(1e3*t).format("YYYY-MM-DD HH:mm:ss")},costFormat:function(t){var s=t/1e3;return~~(s/60)+"分"+~~(s%60)+"秒"}},methods:{loadRank:function(){var t=this;if(this.loading=!0,this.server="",!this.rank[this.active]){var s=this.nav[this.active];return Object(e.a)(s).then((function(s){s.data.data.forEach((function(t){t.active=!1,t.visible=!0})),t.$set(t.rank,t.active,s.data.data)})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}))}this.loading=!1},highlight:function(t){return t<10?"t1":t>=10&&t<20?"t2":t>=20&&t<30?"t3":void 0},showMembers:function(t){var s=t.split(";"),a=[];return s.forEach((function(t){var s=t.split(",");a.push('<span class="u-member"><em><img src="'.concat(c.__ossMirror,"image/xf/").concat(s[1],'.png"></em><b>').concat(s[0],"</b></span>"))})),a.join("")},view:function(t){this.$set(t,"active",!t.active)},serverFilter:function(){var t=this;if(this.rank[this.active]){var s=this.rank[this.active];this.server&&"全部"!=this.server?s.forEach((function(s){s.Server==t.server?s.visible=!0:s.visible=!1})):"全部"==this.server&&s.forEach((function(t){t.visible=!0}))}}},mounted:function(){var t=this;this.nav&&(this.active=this.first,this.loadRank().then((function(){t.ready=!0})))}},u=(a("7205"),a("2877")),f=Object(u.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.ready?a("div",{staticClass:"m-fb m-fb-rank"},[a("h3",{staticClass:"m-fb-rank-title"},[t._v("剑网3跨区服副本通关百强榜")]),t._m(0),a("div",{staticClass:"m-fb-rank-tab"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.loadRank},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},t._l(t.nav,(function(t,s){return a("el-tab-pane",{key:s,attrs:{label:s,name:s}})})),1)],1),a("div",{staticClass:"m-fb-rank-box m-fb-rank-box-full",attrs:{loading:t.loading}},t._l(t.rank,(function(s,e){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.active==e,expression:"active == id"}],key:e,staticClass:"m-fb-rank-list"},[a("div",{staticClass:"m-fb-rank-group"},[a("div",{staticClass:"u-list"},[a("el-row",{staticClass:"u-th"},[a("el-col",{staticClass:"u-subblock u-order",attrs:{span:2}},[t._v("排名")]),a("el-col",{staticClass:"u-subblock u-team",attrs:{span:4}},[t._v("队长")]),a("el-col",{staticClass:"u-subblock u-server",attrs:{span:4}},[a("el-select",{attrs:{filterable:"",placeholder:"服务器",size:"small"},on:{change:t.serverFilter},model:{value:t.server,callback:function(s){t.server=s},expression:"server"}},t._l(t.servers,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-col",{staticClass:"u-subblock u-date",attrs:{span:4}},[t._v("达成时间")]),a("el-col",{staticClass:"u-subblock u-cost",attrs:{span:4}},[t._v("击杀用时")]),a("el-col",{staticClass:"u-subblock u-detail",attrs:{span:4}},[t._v("成员名单")]),a("el-col",{staticClass:"u-subblock u-status",attrs:{span:2}},[t._v("状态")])],1),t._l(s,(function(s,e){return a("el-row",{directives:[{name:"show",rawName:"v-show",value:s.visible,expression:"item.visible"}],key:e},[a("el-col",{staticClass:"u-subblock u-order",class:t.highlight(e),attrs:{span:2}},[t._v(t._s(e+1))]),a("el-col",{staticClass:"u-subblock u-team",attrs:{span:4}},[t._v(t._s(s.leader||s.Role))]),a("el-col",{staticClass:"u-subblock u-server",attrs:{span:4}},[t._v(t._s(s.Server))]),a("el-col",{staticClass:"u-subblock u-date",attrs:{span:4}},[a("time",[t._v("达成时间 : "),a("b",{staticClass:"u-important"},[t._v(t._s(t._f("format")(s.finishTime)))])])]),a("el-col",{staticClass:"u-subblock u-cost",attrs:{span:4}},[a("time",[t._v("用时 : "),a("b",{staticClass:"u-important u-big"},[t._v(t._s(t._f("costFormat")(s.fightTime))+" ")])])]),a("el-col",{staticClass:"u-subblock u-detail",attrs:{span:4}},[s.teamMembers?a("span",{staticClass:"u-detail-toggle",on:{click:function(a){return t.view(s)}}},[t._v("点击展开 "),a("i",{class:s.active?"el-icon-arrow-down":"el-icon-arrow-right"})]):a("span",[t._v("无团员数据")])]),a("el-col",{staticClass:"u-subblock u-status",attrs:{span:2}},[s.teamname?a("span",{staticClass:"u-verified"},[a("i",{staticClass:"el-icon-success"}),t._v(t._s(s.teamname))]):a("span",{staticClass:"u-undefined"},[t._v("公示期")])]),s.teamMembers?a("el-col",{staticClass:"u-members",class:{on:s.active},attrs:{span:24},domProps:{innerHTML:t._s(t.showMembers(s.teamMembers))}}):t._e()],1)}))],2)])])})),0)]):a("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}})}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"m-fb-rank-desc"},[this._v(" 联合推栏表彰活动·"),s("a",{attrs:{href:"https://www.jx3box.com/discuz/13715/",target:"_blank"}},[this._v("活动规则与举报")])])}],!1,null,null,null);s.default=f.exports},a15b:function(t,s,a){"use strict";var e=a("23e7"),r=a("44ad"),i=a("fc6a"),n=a("a640"),c=[].join,o=r!=Object,l=n("join",",");e({target:"Array",proto:!0,forced:o||!l},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},b64b:function(t,s,a){var e=a("23e7"),r=a("7b0b"),i=a("df75");e({target:"Object",stat:!0,forced:a("d039")((function(){i(1)}))},{keys:function(t){return i(r(t))}})},cfa4:function(t){t.exports=JSON.parse('{"范阳夜变":{"安小逢·25人英雄":"7529","周贽·25人英雄":"7525","厌夜·25人英雄":"7526","迟驻·25人英雄":"7527","白某·25人英雄":"7528"}}')},f6d8:function(t,s,a){}}]);
//# sourceMappingURL=chunk-27d1d86e.ed226112.js.map