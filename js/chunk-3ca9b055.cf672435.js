(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ca9b055"],{"161b":function(e,t,s){"use strict";s("76b5")},"33a5":function(e){e.exports=JSON.parse('{"0":"江湖","1":"天策","2":"万花","3":"纯阳","4":"七秀","5":"少林","6":"藏剑","7":"丐帮","8":"明教","9":"五毒","10":"唐门","18":"苍云","19":"长歌","20":"霸刀","21":"蓬莱","22":"凌雪","23":"衍天","24":"药宗"}')},3483:function(e){e.exports=JSON.parse('{"5":"特殊","6":"武器","7":"装备","8":"饰品"}')},"628f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-fb-drop"},[s("el-tabs",{attrs:{type:"card"},model:{value:e.mapid,callback:function(t){e.mapid=t},expression:"mapid"}},e._l(e.maplist,(function(t,a){return s("el-tab-pane",{key:a,attrs:{label:t.mode,name:t.map_id}},[s("div",{staticClass:"u-bosslist"},e._l(e.bosslist,(function(t,a){return s("div",{key:a,staticClass:"u-boss",class:{on:t.BOSS==e.boss},on:{click:function(s){return e.changeBoss(t.BOSS)}}},[s("svg",{class:"u-boss-avatar",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"833.7",height:"833.7",viewBox:"0 0 833.7 833.7","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[s("path",{attrs:{d:"M416.8 0C208.5.1 39.6 169 39.6 377.399V555.2c0 9.399 4.4 18.199 11.9 23.899L213.7 702.2v101.5c0 16.6 13.4 30 30 30h24.1c16.6 0 30-13.4 30-30v-41.2c0-10.5 8.5-19 19-19s19 8.5 19 19v41.2c0 16.6 13.4 30 30 30h1c16.6 0 30-13.4 30-30v-41.2c0-10.5 8.5-19 19-19h2c10.5 0 19 8.5 19 19v41.2c0 16.6 13.4 30 30 30h1c16.6 0 30-13.4 30-30v-41.2c0-10.5 8.5-19 19-19s19 8.5 19 19v41.2c0 16.6 13.4 30 30 30H590c16.6 0 30-13.4 30-30V702.1L782.2 579c7.5-5.7 11.899-14.5 11.899-23.9V377.3C794 169 625.1.1 416.8 0zM259.1 558.1c-57.4 0-104-46.6-104-104 0-57.399 46.6-104 104-104s104 46.601 104 104c0 57.5-46.6 104-104 104zm187.3 76.5h-59.1c-13.7 0-22.4-14.7-15.8-26.7l29.6-53.699c6.8-12.4 24.7-12.4 31.5 0l29.601 53.699c6.5 11.999-2.201 26.7-15.801 26.7zm128.1-76.5c-57.4 0-104-46.6-104-104 0-57.399 46.6-104 104-104 57.399 0 104 46.601 104 104 0 57.5-46.5 104-104 104z"}})]),e._v(" "+e._s(t.BOSS)+" ")])})),0),s("div",{staticClass:"u-schools"},e._l(e.schoolmap,(function(t,a){return s("div",{key:a,staticClass:"u-school",class:{active:a==e.school},on:{click:function(t){return e.filterBySchool(a)}}},[s("img",{staticClass:"u-school-icon",attrs:{src:e._f("showSchoolIcon")(a),alt:t}}),s("span",{staticClass:"u-school-name"},[e._v(e._s(~~a?t:"全部"))])])})),0),s("div",{staticClass:"u-droplist"},[s("div",{staticClass:"u-tabs"},[s("el-tabs",{staticClass:"u-group",attrs:{"tab-position":"left"},model:{value:e.droptype,callback:function(t){e.droptype=t},expression:"droptype"}},[s("el-tab-pane",{attrs:{label:"全部",name:""}}),e._l(e.dropmap,(function(e,t){return s("el-tab-pane",{key:t,attrs:{label:e,name:t}})}))],2)],1),e.droplist&&e.droplist.length?s("div",{staticClass:"u-drops"},e._l(e.droplist,(function(t){return s("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible(t),expression:"isVisible(drop)"}],key:t.ItemName,staticClass:"u-item-wrapper"},[s("el-popover",{attrs:{placement:"right-end","popper-class":"u-drop-popup",width:"auto","visible-arrow":!1,trigger:"hover",transition:"none","close-delay":0}},[s("a",{staticClass:"u-item",attrs:{slot:"reference",href:e.getDropLink(t),target:"_blank"},on:{mouseenter:function(s){return e.viewDrop(t)}},slot:"reference"},[s("i",{staticClass:"u-drop-item-icon u-item-icon",class:"u-item-color-"+t.ItemQuality},[s("img",{attrs:{src:e.iconLink(t.ItemIconID)}})]),s("span",{staticClass:"u-item-name"},[e._v(e._s(t.ItemName))])]),e.focus==t.ItemID?s("jx3-item",{attrs:{item_id:t.jx3_item_id,"jx3-client-type":e.client_id}}):e._e()],1)],1)})),0):s("el-alert",{attrs:{title:"没有相关条目",type:"info","show-icon":""}})],1)])})),1)],1)},i=[],r=(s("d81d"),s("d3b7"),s("159b"),s("ac1f"),s("1276"),s("99af"),s("caad"),s("2532"),s("41cb")),o=Object(r["f"])();function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"std";return o.get("/fb/boss",{params:{MapID:e,client:t}})}function n(e,t){return o.get("/fb/drop/v2/".concat(e),{params:t})}var u=s("65c2"),l=s("3483"),d=s("85e4"),p=s("33a5"),m=s("c7fa"),f={name:"DropV2",props:[],data:function(){return{mapid:"",bosslist:[],boss:"",dropmap:l,droplist:[],droptype:"",focus:"",data:{},loading:!1,school:"0",schoolmap:p}},computed:{fb:function(){return this.$route.query.fb_name||this.$store.state.default_fb},zlp:function(){return this.$route.query.fb_zlp||this.$store.state.default_zlp},client:function(){return this.$store.state.client||"std"},maplist:function(){var e,t,s,a;return null===(e=this.$store.state.map)||void 0===e||null===(t=e[this.zlp])||void 0===t||null===(s=t["dungeon"])||void 0===s||null===(a=s[this.fb])||void 0===a?void 0:a["maps"]},params:function(){return{client:this.client,BossName:this.boss}},client_id:function(){return"std"==this.client?1:2}},methods:{loadData:function(){var e=this;this.loadBossList().then((function(){e.loadDropList()}))},loadBossList:function(){var e=this;return c(this.mapid,this.client).then((function(t){e.bosslist=(null===t||void 0===t?void 0:t.data)||[],e.boss=e.bosslist[0]["BOSS"]}))},loadDropList:function(){var e=this;return this.loading=!0,n(this.mapid,this.params).then((function(t){var s=null===t||void 0===t?void 0:t.data;s.forEach((function(t){var s;t.schools=null===t||void 0===t||null===(s=t.ApplicableSchoolIDs)||void 0===s?void 0:s.split("|"),t.jx3_item_id=e.getDropItemID(t)})),e.droplist=s})).finally((function(){e.loading=!1}))},changeBoss:function(e){this.boss=e,this.loadDropList()},getDropItemID:function(e){return e.ItemExtID?"".concat(e.ItemType,"_").concat(e.ItemID,"_").concat(e.ItemExtID):"".concat(e.ItemType,"_").concat(e.ItemID)},getDropLink:function(e){return Object(d["getLink"])("item",e.jx3_item_id)},filterBySchool:function(e){this.school=e},isVisible:function(e){var t,s=!~~this.droptype||e.ItemType==this.droptype,a=!~~this.school||(null===(t=e.schools)||void 0===t?void 0:t.includes(this.school));return s&&a},viewDrop:function(e){this.focus=e.ItemID},iconLink:function(e){return Object(d["iconLink"])(e,this.client)}},watch:{fb:{immediate:!0,handler:function(){var e;this.mapid=null===(e=this.maplist)||void 0===e?void 0:e[0]["map_id"],this.loadData()}},mapid:{handler:function(e){e&&this.loadData()}}},filters:{showSchoolIcon:function(e){return u["__imgPath"]+"image/school/"+e+".png"}},components:{"jx3-item":m["a"]}},_=f,h=(s("6826"),s("2877")),v=Object(h["a"])(_,a,i,!1,null,null,null);t["default"]=v.exports},6826:function(e,t,s){"use strict";s("c9f9")},"76b5":function(e,t,s){},c7fa:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.source?s("div",{staticClass:"c-item",class:{"c-item-equipment":e.source.AucGenre>=1&&e.source.AucGenre<=4,"c-item-furniture":21==e.source.AucGenre}},[s("div",{staticClass:"c-item-wrapper"},[e.source.MaxStrengthLevel?s("div",{staticClass:"u-max-strength-level"},[s("span",{domProps:{textContent:e._s("精炼等级：0 / "+e.source.MaxStrengthLevel)}})]):e._e(),s("h4",{staticClass:"u-title",style:{color:e.color(e.source.Quality)},domProps:{textContent:e._s(e.source.Name)}}),e.source.BindType>1?s("div",{staticClass:"u-bind",domProps:{textContent:e._s(e.bind(e.source.BindType))}}):e._e(),1===parseInt(e.source.MaxExistAmount)?s("div",{staticClass:"unique",domProps:{textContent:e._s("唯一")}}):e._e(),parseInt(e.source.MaxExistTime)>0?s("div",{staticClass:"u-max-exist-time",domProps:{textContent:e._s("存在时间："+e.second_format(e.source.MaxExistTime))}}):e._e(),parseInt(e.source.MaxExistAmount)>1?s("div",{staticClass:"u-max-exist-amount",domProps:{textContent:e._s("最大拥有数："+e.source.MaxExistAmount)}}):e._e(),1==e.source.AucGenre?s("div",{staticClass:"u-weapon-type-label"},[e._v("近身武器")]):e._e(),2==e.source.AucGenre?s("div",{staticClass:"u-weapon-type-label"},[e._v("远程武器")]):e._e(),e.source.TypeLabel?s("div",{staticClass:"u-type-label",domProps:{textContent:e._s(e.source.TypeLabel)}}):e._e(),e.source.attributes&&e.source.attributes.length?s("div",{staticClass:"u-attributes"},e._l(e.source.attributes,(function(t,a){return s("div",{key:a,staticClass:"u-field",class:["u-"+t.color]},["atMeleeWeaponAttackSpeedBase"==t.type||"atRangeWeaponAttackSpeedBase"==t.type?s("span",{staticClass:"u-value u-speed",domProps:{textContent:e._s(t.label)}}):"atHorseAttribute"==t.type?s("span",{staticClass:"u-value u-horse-attribute"},[t.icon_id>0?s("img",{staticClass:"u-horse-icon",attrs:{src:e.iconLink(t.icon_id)}}):e._e(),s("div",{staticClass:"u-horse-desc",domProps:{innerHTML:e._s(t.label)}})]):s("span",{staticClass:"u-value"},[s("span",{domProps:{textContent:e._s(t.label)}})])])})),0):e._e(),e.source.furniture_attributes?s("div",{staticClass:"u-furniture-attributes"},[e.source.furniture_attributes.view?s("div",{staticClass:"u-field u-green"},[s("span",{staticClass:"u-value",domProps:{textContent:e._s("观赏提高"+e.source.furniture_attributes.view)}})]):e._e(),e.source.furniture_attributes.practical?s("div",{staticClass:"u-field u-green"},[s("span",{staticClass:"u-value",domProps:{textContent:e._s("实用提高"+e.source.furniture_attributes.practical)}})]):e._e(),e.source.furniture_attributes.hard?s("div",{staticClass:"u-field u-green"},[s("span",{staticClass:"u-value",domProps:{textContent:e._s("坚固提高"+e.source.furniture_attributes.hard)}})]):e._e(),e.source.furniture_attributes.geomantic?s("div",{staticClass:"u-field u-green"},[s("span",{staticClass:"u-value",domProps:{textContent:e._s("风水提高"+e.source.furniture_attributes.geomantic)}})]):e._e(),e.source.furniture_attributes.interesting?s("div",{staticClass:"u-field u-green"},[s("span",{staticClass:"u-value",domProps:{textContent:e._s("趣味提高"+e.source.furniture_attributes.interesting)}})]):e._e()]):e._e(),e.source.Diamonds?s("ul",{staticClass:"u-diamonds u-gray"},[e._l(e.source.Diamonds,(function(t,a){return s("li",{key:a,staticClass:"u-diamond"},[s("span",{staticClass:"u-square"}),s("span",{staticClass:"u-text",domProps:{textContent:e._s("镶嵌孔："+t)}})])})),1==e.source.AucGenre?s("li",{staticClass:"u-diamond"},[s("span",{staticClass:"u-square"}),s("span",{staticClass:"u-text"},[e._v("<只能镶嵌五彩石>")])]):e._e()],2):e._e(),e.source.Requires&&e.source.Requires[7]?s("div",{staticClass:"u-require-sex",domProps:{textContent:e._s(e.source.Requires[7])}}):e._e(),e.source.Requires&&e.source.Requires[6]?s("div",{staticClass:"u-require-school",domProps:{textContent:e._s(e.source.Requires[6])}}):e._e(),e.source.Requires&&e.source.Requires[5]?s("div",{staticClass:"u-require-level",domProps:{textContent:e._s(e.source.Requires[5])}}):e._e(),e.source.Requires&&e.source.Requires[100]?s("div",{staticClass:"u-require-camp",domProps:{textContent:e._s(e.source.Requires[100])}}):e._e(),e.source.Requires&&e.source.Requires[101]?s("div",{staticClass:"u-require-homeland-level",domProps:{textContent:e._s(e.source.Requires[101])}}):e._e(),e.source.AucGenre>=1&&e.source.AucGenre<=3?s("div",{staticClass:"u-max-durability",domProps:{textContent:e._s("最大耐久度"+e.source.MaxDurability)}}):e._e(),e.source.Set?s("div",{staticClass:"u-set"},[s("br"),s("div",{staticClass:"u-yellow",domProps:{textContent:e._s(e.source.Set.name+"(1/"+e.source.Set.siblings.length+")")}}),s("ul",{staticClass:"u-set-siblings u-gray"},e._l(e.source.Set.siblings,(function(t,a){return s("li",{key:a,class:{"u-yellow":t==e.source.Name},domProps:{textContent:e._s(t)}})})),0),s("br"),s("ul",{staticClass:"u-set-attributes u-gray"},e._l(e.source.Set.attributes,(function(t,a){return s("li",{key:a,domProps:{textContent:e._s("["+a+"]"+t)}})})),0),s("br")]):e._e(),e.source.ImageUrl?s("div",{staticClass:"u-image-url"},[s("img",{attrs:{src:e.source.ImageUrl},on:{"~error":function(t){e.source.ImageUrl=null}}})]):e._e(),e.source.DescHtml?s("p",{staticClass:"u-desc u-yellow",domProps:{innerHTML:e._s(e.formatDescHtml(e.source.DescHtml))}}):e._e(),e.source.WuCaiHtml?s("p",{staticClass:"u-desc",domProps:{innerHTML:e._s(e.source.WuCaiHtml)}}):e._e(),e.source.Level?s("div",{staticClass:"u-level u-yellow",domProps:{textContent:e._s("品质等级"+e.source.Level)}}):e._e(),e.source.EquipmentRating?s("div",{staticClass:"u-equipment-rating u-orange",domProps:{textContent:e._s("装备分数"+e.source.EquipmentRating)}}):e._e(),e.source.Recommend?s("div",{staticClass:"u-equipment-recommend",domProps:{textContent:e._s("推荐门派："+e.source.Recommend)}}):e._e(),e.source.CoolDown?s("div",{staticClass:"u-equipment-recommend",domProps:{textContent:e._s("使用间隔"+e.second_format(e.source.CoolDown))}}):e._e(),e.source.Appearance?s("div",{staticClass:"u-appearance",domProps:{textContent:e._s("外观名称："+e.source.Appearance)}}):e._e(),e.source.CanExterior?s("div",{staticClass:"u-can-exterior",domProps:{textContent:e._s("外观："+e.source.CanExterior)}}):e._e(),!e.source.CanShared||e.source.AucGenre>=1&&e.source.AucGenre<=4?e._e():s("div",{staticClass:"u-can-shared"},[e._v("该物品可以放入账号储物箱共享。")]),e.source.CanShared&&e.source.AucGenre>=1&&e.source.AucGenre<=4?s("div",{staticClass:"u-can-shared"},[e._v("该装备未精炼、镶嵌、附魔、穿戴前可以放入账号储物箱共享。")]):e._e(),e.source.furniture_attributes?s("div",{staticClass:"u-furniture-can"},[e.source.furniture_attributes.interact?s("span",[e._v("可交互")]):e._e(),e.source.furniture_attributes.scale_range?s("span",{domProps:{textContent:e._s("可缩放("+e.source.furniture_attributes.scale_range.replace(";"," - ")+"倍)")}}):e._e()]):e._e(),e.source.GetType?s("div",{staticClass:"u-get-type",domProps:{textContent:e._s("物品来源："+e.source.GetType)}}):e._e()])]):e._e()},i=[],r=(s("99af"),s("ac1f"),s("5319"),s("e9c4"),s("41cb"));function o(e,t){if(!e)return;let s={url:"api/item/"+e};return Object(r["c"])({mute:!0,client_id:t})(s)}var c=e=>{let t=Math.floor(e/86400),s=Math.floor((e-24*t*3600)/3600),a=Math.floor((e-24*t*3600-3600*s)/60);e=e-24*t*3600-3600*s-60*a;let i="";return t&&(i+=t+"天"),s&&(i+=s+"小时"),a&&(i+=a+"分钟"),e&&(i+=e+"秒"),i},n=(e,t)=>{let s="";switch(t=t?parseInt(t):0,e){case"atAllTypeCriticalStrike":case"atLunarCriticalStrike":case"atMagicCriticalStrike":case"atNeutralCriticalStrike":case"atPhysicsCriticalStrike":case"atPoisonCriticalStrike":case"atSolarAndLunarCriticalStrike":case"atSolarCriticalStrike":s=`+${(t/35737.5*100).toFixed(2)}%`;break;case"atAllTypeCriticalDamagePowerBase":case"atLunarCriticalDamagePowerBase":case"atMagicCriticalDamagePowerBase":case"atNeutralCriticalDamagePowerBase":case"atPhysicsCriticalDamagePowerBase":case"atPoisonCriticalDamagePowerBase":case"atSolarAndLunarCriticalDamagePowerBase":case"atSolarCriticalDamagePowerBase":s=`+${(t/12506.25*100).toFixed(2)}%`;break;case"atToughnessBase":s=`+${(t/35737.5*100).toFixed(2)}% +${(t/9588.75*100).toFixed(2)}%会心减害`;break;case"atDecriticalDamagePowerBase":s="";break;case"atAllTypeHitValue":case"atLunarHitValue":case"atMagicHitValue":case"atNeutralHitValue":case"atPhysicsHitValue":case"atPoisonHitValue":case"atSolarAndLunarHitValue":case"atSolarHitValue":s=`+${(t/25991.25*100).toFixed(2)}%`;break;case"atDodge":s="";break;case"atParryBase":s="";break;case"atStrainBase":s=`+${(t/34458.75*100).toFixed(2)}%`;break;case"atPhysicsDefenceAdd":case"atPhysicsShieldAdditional":case"atPhysicsShieldBase":s="";break;case"atLunarMagicShieldBase":case"atMagicShield":case"atNeutralMagicShieldBase":case"atPoisonMagicShieldBase":case"atSolarMagicShieldBase":s="";break;case"atLunarOvercomeBase":case"atMagicOvercome":case"atNeutralOvercomeBase":case"atPhysicsOvercomeBase":case"atPoisonOvercomeBase":case"atSolarAndLunarOvercomeBase":case"atSolarOvercomeBase":s=`+${(t/35737.5*100).toFixed(2)}%`;break;case"atHasteBase":s=`+${(t/43856.25*100).toFixed(2)}%`;break;default:break}return s?` (${s})`:""},u=e=>{switch(e){case 1:return"不绑定";case 2:return"装备后绑定";case 3:return"拾取后绑定";default:return"未知"}},l=e=>{switch(e=parseInt(e),e){case 0:return"rgb(167,167,167)";case 1:return"rgb(255,255,255)";case 2:return"rgb(0,210,75)";case 3:return"rgb(0,126,255)";case 4:return"rgb(254,45,254)";case 5:return"rgb(255,165,0)";default:return"rgb(167,167,167)"}},d=s("85e4"),p={name:"Item",props:["item","item_id","jx3ClientType"],data:function(){return{source:null}},computed:{client_id:function(){return this.jx3ClientType||1},client:function(){return 1==this.client_id?"std":"origin"},cache_key:function(){return"item-".concat(this.client,"-").concat(this.item_id)}},methods:{iconLink:function(e){return Object(d["iconLink"])(e,this.client)},second_format:c,attribute_percent:n,bind:u,color:l,formatDescHtml:function(e){return e.replace(/font=\d+\s>/g,"")}},watch:{item:{immediate:!0,handler:function(){"undefined"!==typeof this.item&&(this.source=this.item)}},item_id:{immediate:!0,handler:function(e){var t=this;if(e){var s=sessionStorage.getItem(this.cache_key);if(s)try{this.source=JSON.parse(s)}catch(a){console.log(a,"[Item]无法解析本地缓存")}else o(this.item_id,this.client_id).then((function(e){var s=e.data;if(200===s.code){var a=s.data.item,i="{}"!==JSON.stringify(a);i?(t.source=a,sessionStorage.setItem(t.cache_key,JSON.stringify(t.source))):t.source=null}}))}}}}},m=p,f=(s("161b"),s("2877")),_=Object(f["a"])(m,a,i,!1,null,"fc86c7f4",null);t["a"]=_.exports},c9f9:function(e,t,s){},e9c4:function(e,t,s){var a=s("23e7"),i=s("da84"),r=s("d066"),o=s("2ba4"),c=s("e330"),n=s("d039"),u=i.Array,l=r("JSON","stringify"),d=c(/./.exec),p=c("".charAt),m=c("".charCodeAt),f=c("".replace),_=c(1..toString),h=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,b=function(e,t,s){var a=p(s,t-1),i=p(s,t+1);return d(v,e)&&!d(C,i)||d(C,e)&&!d(v,a)?"\\u"+_(m(e,0),16):e},g=n((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&a({target:"JSON",stat:!0,forced:g},{stringify:function(e,t,s){for(var a=0,i=arguments.length,r=u(i);a<i;a++)r[a]=arguments[a];var c=o(l,null,r);return"string"==typeof c?f(c,h,b):c}})}}]);
//# sourceMappingURL=chunk-3ca9b055.cf672435.js.map