(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88ee5a40"],{4892:function(t,a,n){},"4bb4":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t._self._c;return t.maptree?a("div",{staticClass:"m-fb-map"},t._l(t.maplist,(function(n){return a("img",{key:n,ref:"fb_map_img",refInFor:!0,staticClass:"u-map",attrs:{src:t.mapLink(t.mapid,n),alt:t.fb}})})),0):t._e()},i=[],s=(n("d81d"),n("65c2")),r=n("bc3a"),u=n.n(r);function o(){return u.a.get(s["__dataPath"]+"map/data/map_tree.json")}var p={name:"JMap",props:[],data:function(){return{loading:!0}},computed:{zlp:function(){return this.$store.state.zlp||this.$store.state.default_zlp},fb:function(){return this.$store.state.fb||this.$store.state.default_fb},mapid:function(){return this.$store.state.map[this.zlp]["dungeon"][this.fb]["maps"][0]["map_id"]},maplist:function(){return this.maptree[this.mapid]},maptree:function(){return this.$store.state.maptree}},watch:{mapid:function(t){}},methods:{loaded:function(){this.loading=!1},mapLink:function(t,a){return s["__imgPath"]+"map/maps/map_"+t+"_"+a+".png"}},mounted:function(){var t=this;o().then((function(a){t.$store.state.maptree=a.data}))}},m=p,c=(n("d8e7"),n("2877")),f=Object(c["a"])(m,e,i,!1,null,null,null);a["default"]=f.exports},d8e7:function(t,a,n){"use strict";n("4892")}}]);
//# sourceMappingURL=chunk-88ee5a40.5a3f53d9.js.map