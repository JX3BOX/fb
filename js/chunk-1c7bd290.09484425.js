(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c7bd290"],{3835:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return o}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("14d9");function r(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],i=!0,o=!1;try{for(a=a.call(e);!(i=(n=a.next()).done);i=!0)if(c.push(n.value),t&&c.length===t)break}catch(s){o=!0,r=s}finally{try{i||null==a["return"]||a["return"]()}finally{if(o)throw r}}return c}}var c=a("06c5");a("d9e2");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){return n(e)||r(e,t)||Object(c["a"])(e,t)||i()}},"466d":function(e,t,a){"use strict";var n=a("c65b"),r=a("d784"),c=a("825a"),i=a("7234"),o=a("50c4"),s=a("577e"),l=a("1d80"),f=a("dc4a"),d=a("8aa5"),u=a("14c3");r("match",(function(e,t,a){return[function(t){var a=l(this),r=i(t)?void 0:f(t,e);return r?n(r,t,a):new RegExp(t)[e](s(a))},function(e){var n=c(this),r=s(e),i=a(t,n,r);if(i.done)return i.value;if(!n.global)return u(n,r);var l=n.unicode;n.lastIndex=0;var f,p=[],h=0;while(null!==(f=u(n,r))){var m=s(f[0]);p[h]=m,""===m&&(n.lastIndex=d(r,o(n.lastIndex),l)),h++}return 0===h?null:p}]}))},"498a":function(e,t,a){"use strict";var n=a("23e7"),r=a("58a8").trim,c=a("c8d2");n({target:"String",proto:!0,forced:c("trim")},{trim:function(){return r(this)}})},a9e8:function(e,t,a){"use strict";a.r(t);a("ac1f"),a("841c"),a("498a");var n=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-fb-gem"},[t("el-input",{staticClass:"m-gem-search",attrs:{placeholder:"请输入关键词"},on:{change:e.loadPosts},model:{value:e.search,callback:function(t){e.search="string"===typeof t?t.trim():t},expression:"search"}},[t("template",{slot:"prepend"},[e._v("关键词")]),t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],2),e.data.length?t("div",{staticClass:"m-gem-list"},e._l(e.data,(function(a,n){return t("div",{key:n,staticClass:"m-gem-item"},[t("img",{staticClass:"u-icon",attrs:{src:e._f("iconLink")(a.IconID)}}),t("span",{staticClass:"u-title"},[t("a",{attrs:{href:"/item"+a.Link,target:"_blank",draggable:"false"}},[e._v(e._s(a.Name))]),t("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.Name,expression:"item.Name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"el-icon-copy-document"})]),t("game-text",{staticClass:"u-desc",attrs:{text:a.Desc}}),t("span",{staticClass:"u-id"},[e._v("UUID:"+e._s(a.UiID))])],1)})),0):t("el-alert",{staticClass:"m-archive-null",attrs:{title:"没有找到相关条目",type:"info",center:"","show-icon":""}}),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.hasNextPage,expression:"hasNextPage"}],staticClass:"m-archive-more",class:{show:e.hasNextPage},attrs:{type:"primary",loading:e.loading,icon:"el-icon-arrow-down"},on:{click:function(t){return e.appendPage(++e.page)}}},[e._v("加载更多")]),t("el-pagination",{staticClass:"m-archive-pages",attrs:{background:"","hide-on-single-page":!0,"current-page":e.page,"page-size":e.per,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.changePage,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"update:pageSize":function(t){e.per=t},"update:page-size":function(t){e.per=t}}})],1)},r=[],c=(a("d3b7"),a("99af"),a("466d"),a("c547")),i=a("bc3a"),o=a.n(i),s=a("65c2"),l=s["__helperUrl"]+"api/item/prediction";function f(e){return o.a.get(l,{params:e,headers:{Accept:"application/prs.helper.v2+json"}}).catch((function(e){console.log(e)}))}var d=a("85e4"),u={name:"Gem",props:[],components:{GameText:c["a"]},data:function(){return{data:[],total:0,page:1,pages:1,per:15,loading:!1,search:"",appendMode:!1}},computed:{hasNextPage:function(){return this.total>1&&this.page<this.pages},fb:function(){return this.$route.query.fb_name||this.$store.state.default_fb},zlp:function(){return this.$route.query.fb_zlp||this.$store.state.default_zlp},client:function(){return this.$store.state.client||"std"},params:function(){return{dungeon:this.fb,page:this.page,keyword:this.search,client:this.client}}},filters:{iconLink:d["iconLink"]},methods:{loadPosts:function(){var e=this;this.loading=!0,f(this.params).then((function(t){var a=[];a=e.appendMode?e.data.concat(t.data.data.data):t.data.data.data,e.data=a,e.total=t.data.data.total,e.pages=t.data.data.last_page})).finally((function(){e.loading=!1}))},changePage:function(){window.scrollTo(0,0),this.appendMode=!1},appendPage:function(e){this.appendMode=!0},getDesc:function(e){var t=/使用(.*?)装备。/,a=t.exec(e);return a[0]},getDrops:function(e){var t=/\[(.*?)\]/g,a=e.match(t)||[];return a},getLink:d["getLink"],onCopy:function(){this.$notify({title:"复制成功",message:"复制物品名称成功",type:"success"})},onCopyError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},watch:{params:{deep:!0,handler:function(){this.loadPosts()}}},created:function(){this.loadPosts()}},p=u,h=(a("d79f"),a("2877")),m=Object(h["a"])(p,n,r,!1,null,null,null);t["default"]=m.exports},b1e4:function(e,t,a){},c10e:function(e){e.exports=JSON.parse('{"remarks":["这个文件用于存储游戏内的字体ini","但是由于大部分场景下我们只需要字体的颜色","而且存在着很多个字体id对应同一种颜色的情况","所以用颜色作为键，值是一个数组，包含着颜色是键值的所有字体ID"],"#ffffff":["0","2","3","5","7","9","10","13","15","18","22","26","28","37","40","41","42","44","106","135","162","175","190","197","203","207","210","211","212","213","214","216","227","228","230","231","232","233","234","238","244","245","247","248","250","254","257","259","263","264","272","273","276","292","300","301","303","304","310","324","327","329","331","332","336","339","343","344","362","371"],"#000000":["1","6","29","38","43","156","160","180","191","225","260","269","288","326"],"#282828":["4","296","312"],"#ffff00":["8","11","14","16","23","27","31","48","59","65","99","100","136","163","187","188","200","201","204","236","241","258","289","306","315","328","330","334","372"],"#ff7e7e":["12","17","51","52","53","54","55","56","57","58","70","85","86","87","88","89","90","91","92","93","94","95","96","97","98","111","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","178","179","279","320","370"],"#a3b06a":["19","39","66"],"#ff0000":["20","33","71","102","137","159","166","217","219","270","308","317"],"#00c848":["21","36","80","105","165","167","222","226","287","316","365","369"],"#ff9600":["24","32","68","101","164","168","237","256","318","335","366"],"#adadad":["25","30","61","108","132","161","169","220","319","333"],"#df12c9":["34","74","103","367"],"#007eff":["35","77","104","285","323","368"],"#cfcfcf":["45","60","107","131","189","215","221","223","261","283","374"],"#969696":["46","62","109","133","218"],"#04d1b6":["47"],"#fff78e":["49","155"],"#636363":["50","63","110","134","313"],"#ffffbb":["64","177","182","185","239","375"],"#ffca7e":["67","157","266","321"],"#a96300":["69","158","240","307"],"#a90000":["72","337","338","340"],"#ca7eff":["73","112","195","278","305"],"#5e1ba0":["75","181"],"#7e7eff":["76","113","193"],"#0000a9":["78"],"#7ee3a3":["79","139","176","192","194","282"],"#00842f":["81","138"],"#e68c00":["82","294","295","325"],"#dc1e00":["83"],"#968c00":["84"],"#606000":["170"],"#1e366c":["171"],"#8b2e1c":["172","293","299"],"#105830":["173","309"],"#45544b":["174"],"#1e68fe":["183"],"#ef370c":["184","208","235"],"#4cdf15":["186","229"],"#ff0012":["196","199"],"#4fff6c":["198"],"#33f3ff":["202","205","252","253","262"],"#30bdd6":["206","281"],"undefined":["209"],"#fbeab7":["224","274","275","311","342"],"#453d2a":["242","341"],"#bafbdf":["243","246","249","255"],"#ffde00":["251","271","280"],"#96cedf":["265"],"#fab07e":["267"],"#e8c368":["268"],"#99452b":["277"],"#0b0b0b":["284"],"#df11c9":["286"],"#3e281b":["290","291","373"],"#493c23":["297","298"],"#46332b":["302","314","349"],"#92de5f":["322"],"#776859":["345","352"],"#735c3c":["346","347","355","356"],"#615044":["348"],"#513301":["350","354","357"],"#ece4cc":["351"],"#fef9e7":["353"],"#92bcb4":["358"],"#6fa497":["359"],"#bce5db":["360"],"#e3d7c7":["361"],"#95b9ba":["363"],"#a9a7a3":["364"]}')},c547:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("span",{domProps:{innerHTML:e._s(e.html)}})},r=[],c=a("3835"),i=a("b85c"),o=(a("ac1f"),a("5319"),a("d3b7"),a("99af"),a("caad"),a("2532"),a("b0c0"),a("466d"),a("14d9"),a("85e4")),s=a("41cb");const l=Object(s["e"])();function f(e,t="std"){return l.get(`/resource/${t}/${e}`)}var d=a("2ef0"),u={name:"GameText",props:{text:{type:String,default:""},ignoreColor:{type:Boolean,default:!1},client:{type:String,default:"std"}},data:function(){return{html:""}},methods:{renderItemHtml:function(e){var t=e.text,n="",r=null;if(t=t.replace(/\\n/g,"<br />").replace(/\\/g,""),[e.r,e.g,e.b].every((function(e){return void 0!=e&&e>0})))n="color: rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,");");else if(void 0!=e.font&&100!=e.font){var c=a("c10e");for(var i in c)if(c[i].includes(e.font)){n="color: ".concat(i,";");break}}if("iteminfolink"==e.name&&e.script){var s,l,f,d,u=null===(s=e.script)||void 0===s||null===(l=s.match(/this\.dwTabType=(\d+)/i))||void 0===l?void 0:l[1],p=null===(f=e.script)||void 0===f||null===(d=f.match(/this\.dwIndex=(\d+)/i))||void 0===d?void 0:d[1];if(u&&p){var h="".concat(u,"_").concat(p);r=Object(o["getLink"])("item",h)}}return this.ignoreColor&&(n=""),r?'<a style="'.concat(n,' text-decoration: none;" target="_blank" href="').concat(r,'">').concat(t,"</a>"):'<span style="'.concat(n,'">').concat(t,"</span>")},renderImageHtml:function(e){var t=e.match(/<image>([\s\S]*?)<\/image>/gim);if(!t)return e;var a,n=Object(i["a"])(t);try{for(n.s();!(a=n.n()).done;){var r,c,s,l=a.value,f=null===(r=l.match(/frame=(\d+)/i))||void 0===r?void 0:r[1],d=parseInt(null===(c=l.match(/w=(\d+)/i))||void 0===c?void 0:c[1])/1.12,u=parseInt(null===(s=l.match(/h=(\d+)/i))||void 0===s?void 0:s[1])/1.12,p=Object(o["iconLink"])(f,this.client),h='<img src="'.concat(p,'" style="width: ').concat(d,"px; height: ").concat(u,'px; margin-bottom: -5px" />');e=e.replace(l,h)}}catch(m){n.e(m)}finally{n.f()}return e},renderTextHtml:function(e){var t=e;t=this.renderImageHtml(t);var a=e.match(/<Text>([\s\S]*?)<\/text>/gim);if(!a)return e;var n,r=Object(i["a"])(a);try{for(r.s();!(n=r.n()).done;){var c=n.value,s=Object(o["extractTextContent"])(c),l=this.renderItemHtml(s[0]);t=t.replace(c,l)}}catch(f){r.e(f)}finally{r.f()}return t},renderBuffResource:function(){var e=this,t=this.html.match(/<BUFF (\d+) (\d+) (.*?)>/gim);if(t){var a,n={},r=Object(i["a"])(t);try{for(r.s();!(a=r.n()).done;){var o=a.value,s=o.match(/<BUFF (\d+) (\d+) (.*?)>/i),l=Object(c["a"])(s,4),d=l[0],u=l[1],p=l[2],h=l[3],m="".concat(u,"_").concat(p);n[m]||(n[m]=[]),n[m].push({token:d,type:h})}}catch(b){r.e(b)}finally{r.f()}var v=function(t){var a=n[t];f("buff.".concat(t),e.client).then((function(t){var n,r=t.data,o=Object(i["a"])(a);try{for(o.s();!(n=o.n()).done;){var s=n.value;s.type=s.type.toLowerCase();var l={desc:"Desc",time:"Interval"},f=l[s.type]||s.type,d=r[f];if("number"==typeof d&&"time"==s.type){var u=d/16;return u=u>60?"".concat(Math.floor(u/60),"分钟"):"".concat(u,"秒"),void(e.html=e.html.replace(s.token,u))}if(!d)return;var p=d.match(/<BUFF ([0-9a-zA-Z]+)>/gi);p||(e.html=e.html.replace(match,d));var h,m=Object(i["a"])(p);try{for(m.s();!(h=m.n()).done;)for(var v=h.value,g=v.match(/<BUFF ([0-9a-zA-Z]+)>/i),y=Object(c["a"])(g,2),x=y[1],w=1;w<15;w++)r["BeginAttrib".concat(w)]==x&&(d=d.replace(v,r["BeginValue".concat(w,"A")]))}catch(b){m.e(b)}finally{m.f()}e.html=e.html.replace(s.token,d)}}catch(b){o.e(b)}finally{o.f()}})).catch((function(e){console.log(e)}))};for(var g in n)v(g)}},renderEnchantResource:function(){var e=this,t=this.html.match(/<ENCHANT (\d+)>/gim);if(t){var a,n=Object(i["a"])(t);try{var r=function(){var t=a.value,n=t.match(/<ENCHANT (\d+)>/i)[1];f("enchant.".concat(n),e.client).then((function(a){var n=a.data,r=n.Time;r&&(r="，持续".concat(parseInt(r)/60,"分钟。"));var c="".concat(n.AttriName).concat(r||"");e.html=e.html.replace(t,c)})).catch((function(a){e.html=e.html.replace(t,Object(d["escape"])(t)),console.log(a)}))};for(n.s();!(a=n.n()).done;)r()}catch(c){n.e(c)}finally{n.f()}}},renderResource:function(){this.renderBuffResource(),this.renderEnchantResource()}},watch:{text:{immediate:!0,handler:function(e){e&&(this.html=this.renderTextHtml(e),this.renderResource())}}}},p=u,h=a("2877"),m=Object(h["a"])(p,n,r,!1,null,null,null);t["a"]=m.exports},c8d2:function(e,t,a){var n=a("5e77").PROPER,r=a("d039"),c=a("5899"),i="​᠎";e.exports=function(e){return r((function(){return!!c[e]()||i[e]()!==i||n&&c[e].name!==e}))}},d79f:function(e,t,a){"use strict";a("b1e4")}}]);
//# sourceMappingURL=chunk-1c7bd290.09484425.js.map