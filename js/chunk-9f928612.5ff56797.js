(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f928612"],{"064f":function(e,t,a){},"498a":function(e,t,a){"use strict";var n=a("23e7"),r=a("58a8").trim,c=a("c8d2");n({target:"String",proto:!0,forced:c("trim")},{trim:function(){return r(this)}})},"76d6":function(e,t,a){"use strict";a("d866")},a9e8:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c"),a("498a");var n=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-fb-gem"},[t("el-input",{staticClass:"m-gem-search",attrs:{placeholder:"请输入关键词",clearable:""},on:{clear:e.onSearch},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search="string"===typeof t?t.trim():t},expression:"search"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[t("i",{staticClass:"el-icon-search"}),e._v(" 搜索")]),t("el-button",{attrs:{slot:"append",icon:"el-icon-position"},on:{click:e.onSearch},slot:"append"})],1),e.data.length?t("div",{staticClass:"m-gem-list"},e._l(e.data,(function(a,n){return t("div",{key:n,staticClass:"m-gem-item"},[t("img",{staticClass:"u-icon",attrs:{src:e.iconLink(a.IconID)}}),t("span",{staticClass:"u-title"},[t("a",{attrs:{href:"/item"+a.Link,target:"_blank",draggable:"false"}},[e._v(e._s(a.Name))]),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.Name,expression:"item.Name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"el-icon-copy-document"})]),t("game-text",{staticClass:"u-desc",attrs:{text:a.Desc}}),t("span",{staticClass:"u-id"},[e._v("UUID:"+e._s(a.UiID))])],1)})),0):t("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.hasNextPage,expression:"hasNextPage"}],staticClass:"m-archive-more",class:{show:e.hasNextPage},attrs:{type:"primary",loading:e.loading,icon:"el-icon-arrow-down"},on:{click:function(t){return e.appendPage(++e.page)}}},[e._v("加载更多")]),t("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"","hide-on-single-page":!0,"current-page":e.page,"page-size":e.per,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.changePage,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"update:pageSize":function(t){e.per=t},"update:page-size":function(t){e.per=t}}})],1)},r=[],c=a("5530"),i=(a("99af"),a("d3b7"),a("466d"),a("c547")),o=a("41cb");function s(e){return Object(o["b"])().get("/api/item/prediction",{params:e})}a("65c2");var l=a("85e4"),u={name:"Gem",props:[],components:{GameText:i["a"]},data:function(){return{data:[],total:0,page:1,pages:1,per:15,loading:!1,search:"",appendMode:!1}},computed:{hasNextPage:function(){return this.total>1&&this.page<this.pages},fb:function(){return this.$route.query.fb_name||this.$store.state.default_fb},client:function(){return this.$store.state.client||"std"},params:function(){return{dungeon:this.fb,page:this.page,client:this.client}}},methods:{iconLink:l["m"],onSearch:function(){this.loadPosts()},loadPosts:function(){var e=this;this.loading=!0;var t=Object(c["a"])(Object(c["a"])({},this.params),{},{keyword:this.search});s(t).then((function(t){var a=[];a=e.appendMode?e.data.concat(t.data.data.data):t.data.data.data,e.data=a,e.total=t.data.data.total,e.pages=t.data.data.last_page})).finally((function(){e.loading=!1}))},changePage:function(){window.scrollTo(0,0),this.appendMode=!1},appendPage:function(e){this.appendMode=!0},getDesc:function(e){var t=/使用(.*?)装备。/,a=t.exec(e);return a[0]},getDrops:function(e){var t=/\[(.*?)\]/g,a=e.match(t)||[];return a},getLink:l["i"],onCopy:function(){this.$notify({title:"复制成功",message:"复制物品名称成功",type:"success"})},onCopyError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},watch:{params:{deep:!0,handler:function(){this.loadPosts()}}},created:function(){this.loadPosts()}},f=u,d=(a("d059"),a("2877")),p=Object(d["a"])(f,n,r,!1,null,null,null);t["default"]=p.exports},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("a4d3"),a("e01a"),a("d28b"),a("d9e2"),a("d3b7"),a("3ca3"),a("ddb0");var n=a("06c5");function r(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Object(n["a"])(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(s)throw i}}}}},c10e:function(e){e.exports=JSON.parse('{"remarks":["这个文件用于存储游戏内的字体ini","但是由于大部分场景下我们只需要字体的颜色","而且存在着很多个字体id对应同一种颜色的情况","所以用颜色作为键，值是一个数组，包含着颜色是键值的所有字体ID"],"#ffffff":["0","2","3","5","7","9","10","13","15","18","22","26","28","37","40","41","42","44","106","135","162","175","190","197","203","207","210","211","212","213","214","216","227","228","230","231","232","233","234","238","244","245","247","248","250","254","257","259","263","264","272","273","276","292","300","301","303","304","310","324","327","329","331","332","336","339","343","344","362","371"],"#000000":["1","6","29","38","43","156","160","180","191","225","260","269","288","326"],"#282828":["4","296","312"],"#ffff00":["8","11","14","16","23","27","31","48","59","65","99","100","136","163","187","188","200","201","204","236","241","258","289","306","315","328","330","334","372"],"#ff7e7e":["12","17","51","52","53","54","55","56","57","58","70","85","86","87","88","89","90","91","92","93","94","95","96","97","98","111","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","178","179","279","320","370"],"#a3b06a":["19","39","66"],"#ff0000":["20","33","71","102","137","159","166","217","219","270","308","317"],"#00c848":["21","36","80","105","165","167","222","226","287","316","365","369"],"#ff9600":["24","32","68","101","164","168","237","256","318","335","366"],"#adadad":["25","30","61","108","132","161","169","220","319","333"],"#df12c9":["34","74","103","367"],"#007eff":["35","77","104","285","323","368"],"#cfcfcf":["45","60","107","131","189","215","221","223","261","283","374"],"#969696":["46","62","109","133","218"],"#04d1b6":["47"],"#fff78e":["49","155"],"#636363":["50","63","110","134","313"],"#ffffbb":["64","177","182","185","239","375"],"#ffca7e":["67","157","266","321"],"#a96300":["69","158","240","307"],"#a90000":["72","337","338","340"],"#ca7eff":["73","112","195","278","305"],"#5e1ba0":["75","181"],"#7e7eff":["76","113","193"],"#0000a9":["78"],"#7ee3a3":["79","139","176","192","194","282"],"#00842f":["81","138"],"#e68c00":["82","294","295","325"],"#dc1e00":["83"],"#968c00":["84"],"#606000":["170"],"#1e366c":["171"],"#8b2e1c":["172","293","299"],"#105830":["173","309"],"#45544b":["174"],"#1e68fe":["183"],"#ef370c":["184","208","235"],"#4cdf15":["186","229"],"#ff0012":["196","199"],"#4fff6c":["198"],"#33f3ff":["202","205","252","253","262"],"#30bdd6":["206","281"],"undefined":["209"],"#fbeab7":["224","274","275","311","342"],"#453d2a":["242","341"],"#bafbdf":["243","246","249","255"],"#ffde00":["251","271","280"],"#96cedf":["265"],"#fab07e":["267"],"#e8c368":["268"],"#99452b":["277"],"#0b0b0b":["284"],"#df11c9":["286"],"#3e281b":["290","291","373"],"#493c23":["297","298"],"#46332b":["302","314","349"],"#92de5f":["322"],"#776859":["345","352"],"#735c3c":["346","347","355","356"],"#615044":["348"],"#513301":["350","354","357"],"#ece4cc":["351"],"#fef9e7":["353"],"#92bcb4":["358"],"#6fa497":["359"],"#bce5db":["360"],"#e3d7c7":["361"],"#95b9ba":["363"],"#a9a7a3":["364"]}')},c547:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("span",{domProps:{innerHTML:e._s(e.html)}})},r=[],c=a("c7eb"),i=a("3835"),o=a("1da1"),s=a("b85c"),l=(a("99af"),a("caad"),a("14d9"),a("b0c0"),a("e9c4"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("466d"),a("5319"),a("0643"),a("76d6"),a("ddb0"),a("85e4")),u=a("41cb");const f=Object(u["e"])();function d(e,t,a="std"){return f.post(`/resource/${a}/${e}/`,{ids:t})}var p=a("2ef0"),h={name:"GameText",props:{text:{type:String,default:""},ignoreColor:{type:Boolean,default:!1},client:{type:String,default:"std"}},data:function(){return{html:""}},methods:{renderItemHtml:function(e){var t=e.text,n="",r=null;if(t=t.replace(/\\n/g,"<br />").replace(/\\/g,""),[e.r,e.g,e.b].every((function(e){return void 0!=e&&e>0})))n="color: rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,");");else if(void 0!=e.font&&100!=e.font){var c=a("c10e");for(var i in c)if(c[i].includes(e.font)){n="color: ".concat(i,";");break}}if("iteminfolink"==e.name&&e.script){var o,s,u,f,d=null===(o=e.script)||void 0===o||null===(s=o.match(/this\.dwTabType=(\d+)/i))||void 0===s?void 0:s[1],p=null===(u=e.script)||void 0===u||null===(f=u.match(/this\.dwIndex=(\d+)/i))||void 0===f?void 0:f[1];if(d&&p){var h="".concat(d,"_").concat(p);r=Object(l["i"])("item",h)}}return this.ignoreColor&&(n=""),r?'<a style="'.concat(n,' text-decoration: none;" target="_blank" href="').concat(r,'">').concat(t,"</a>"):'<span style="'.concat(n,'">').concat(t,"</span>")},renderImageHtml:function(e){var t=e.match(/<image>([^]*?)<\/image>/gim);if(!t)return e;var a,n=Object(s["a"])(t);try{for(n.s();!(a=n.n()).done;){var r,c,i,o=a.value,u=null===(r=o.match(/frame=(\d+)/i))||void 0===r?void 0:r[1],f=parseInt(null===(c=o.match(/w=(\d+)/i))||void 0===c?void 0:c[1])/1.12,d=parseInt(null===(i=o.match(/h=(\d+)/i))||void 0===i?void 0:i[1])/1.12,p=Object(l["m"])(u,this.client),h='<img src="'.concat(p,'" style="width: ').concat(f,"px; height: ").concat(d,'px; margin-bottom: -5px" />');e=e.replace(o,h)}}catch(b){n.e(b)}finally{n.f()}return e},renderTextHtml:function(e){var t=e;t=this.renderImageHtml(t);var a=e.match(/<Text>([^]*?)<\/text>/gim);if(!a)return e;var n,r=Object(s["a"])(a);try{for(r.s();!(n=r.n()).done;){var c=n.value,i=Object(l["e"])(c),o=this.renderItemHtml(i[0]);t=t.replace(c,o)}}catch(u){r.e(u)}finally{r.f()}return t},renderBuffResource:function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(){var t,a,n,r,o,l,u,f,d,h,b,m,g,v,y,x,O,w,j,k,I,C,_,N,R,S,P,T,D,E,A;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=null===(t=this.html)||void 0===t?void 0:t.match(/<BUFF (\d+) (\d+) (.*?)>/gim),a){e.next=3;break}return e.abrupt("return");case 3:n=[],r={},o=Object(s["a"])(a);try{for(o.s();!(l=o.n()).done;)u=l.value,f=u.match(/<BUFF (\d+) (\d+) (.*?)>/i),d=Object(i["a"])(f,4),h=d[0],b=d[1],m=d[2],g=d[3],n.push("".concat(b,"_").concat(m)),0!=m&&n.push("".concat(b,"_0")),r[h]=[b,m,g]}catch(B){o.e(B)}finally{o.f()}return e.next=9,this.getAllResources("buff",n,this.client);case 9:e.t0=Object(c["a"])().keys(r);case 10:if((e.t1=e.t0()).done){e.next=37;break}if(v=e.t1.value,y=Object(i["a"])(r[v],3),x=y[0],O=y[1],w=y[2],"time"!==w){e.next=25;break}if(j=void 0,k=this.getResource("buff",x,O),j=k["Interval"]?k["Interval"]:this.getResource("buff",x,0)["Interval"],j){e.next=21;break}return console.log(v,Object(p["escape"])(v)),this.html=this.html.replace(v,Object(p["escape"])(v)),e.abrupt("continue",10);case 21:return I=j/16,I>60?I=Math.floor(I/60)+"分钟":I+="秒",this.html=this.html.replace(v,Object(p["escape"])(I)),e.abrupt("continue",10);case 25:if("desc"!==w){e.next=35;break}if(C=this.getResource("buff",x,O),_=C["Desc"],_||(_=this.getResource("buff",x,0)["Desc"]),_){e.next=32;break}return this.html=this.html.replace(v,Object(p["escape"])(v)),e.abrupt("continue",10);case 32:if(N=_.match(/<BUFF ([0-9a-zA-Z]+)>/gi),N){R=Object(s["a"])(N);try{for(R.s();!(S=R.n()).done;)for(P=S.value,T=P.match(/<BUFF ([0-9a-zA-Z]+)>/i),D=Object(i["a"])(T,2),D[0],E=D[1],A=1;A<15;A++)C["BeginAttrib".concat(A)]==E&&(_=_.replace(P,C["BeginValue".concat(A,"A")]))}catch(B){R.e(B)}finally{R.f()}}this.html=this.html.replace(v,_);case 35:e.next=10;break;case 37:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),renderEnchantResource:function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(){var t,a,n,r,i,o,l,u,f,d,h,b;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.html.match(/<ENCHANT (\d+)>/gim),t){e.next=3;break}return e.abrupt("return");case 3:a=[],n={},r=Object(s["a"])(t);try{for(r.s();!(i=r.n()).done;)o=i.value,l=o.match(/<ENCHANT (\d+)>/i)[1],a.push(l),n[o]=l}catch(c){r.e(c)}finally{r.f()}return e.next=9,this.getAllResources("enchant",a,this.client);case 9:for(u in n)try{f=n[u],d=this.getResource("enchant",f),h=d.Time,h&&(h="，持续".concat(parseInt(h)/60,"分钟。")),b="".concat(d.AttriName).concat(h||""),this.html=this.html.replace(u,b)}catch(m){console.log(m),this.html=this.html.replace(u,Object(p["escape"])(u))}case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),renderResource:function(){this.renderBuffResource(),this.renderEnchantResource()},getAllResources:function(){var e=Object(o["a"])(Object(c["a"])().mark((function e(t,a){var n,r,i,o,l,u,f,p,h,b;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,this.client);case 2:if(n=e.sent,r=n.data,void 0===r.length&&(r=[r]),"buff"==t){i=Object(s["a"])(r);try{for(i.s();!(o=i.n()).done;)l=o.value,u="".concat(l.BuffID,"_").concat(l.Level),sessionStorage.setItem("buff-".concat(this.client,"-").concat(u),JSON.stringify(l))}catch(c){i.e(c)}finally{i.f()}}else if("enchant"==t){f=Object(s["a"])(r);try{for(f.s();!(p=f.n()).done;)h=p.value,b="".concat(h.ID),sessionStorage.setItem("enchant-".concat(this.client,"-").concat(b),JSON.stringify(h))}catch(c){f.e(c)}finally{f.f()}}case 6:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),getResource:function(e,t,a){var n="".concat(t);"buff"==e&&(n="".concat(t,"_").concat(a));var r=sessionStorage.getItem("".concat(e,"-").concat(this.client,"-").concat(n));return r?JSON.parse(r):null}},watch:{text:{immediate:!0,handler:function(e){e&&(this.html=this.renderTextHtml(e),this.renderResource())}}}},b=h,m=a("2877"),g=Object(m["a"])(b,n,r,!1,null,null,null);t["a"]=g.exports},c8d2:function(e,t,a){"use strict";var n=a("5e77").PROPER,r=a("d039"),c=a("5899"),i="​᠎";e.exports=function(e){return r((function(){return!!c[e]()||i[e]()!==i||n&&c[e].name!==e}))}},d059:function(e,t,a){"use strict";a("064f")},d866:function(e,t,a){"use strict";var n=a("23e7"),r=a("2266"),c=a("59ed"),i=a("825a"),o=a("46c4");n({target:"Iterator",proto:!0,real:!0},{every:function(e){i(this),c(e);var t=o(this),a=0;return!r(t,(function(t,n){if(!e(t,a++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})}}]);
//# sourceMappingURL=chunk-9f928612.5ff56797.js.map