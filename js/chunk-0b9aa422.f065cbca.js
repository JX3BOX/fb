(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b9aa422"],{"203a":function(t,a,n){"use strict";var i=n("bcc4");n.n(i).a},"4bb4":function(t,a,n){"use strict";n.r(a);n("d81d");var i=n("64c7"),s={name:"JMap",props:[],data:function(){return{loading:!0}},computed:{zlp:function(){return this.$store.state.zlp},fb:function(){return this.$store.state.fb},mapid:function(){return this.$store.state.map[this.zlp].dungeon[this.fb].detail.map_id},mapimg:function(){return i.__ossMirror+"pic/map/map_"+this.mapid+".jpg"}},methods:{loaded:function(){this.loading=!1}},mounted:function(){}},e=(n("203a"),n("2877")),o=Object(e.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"m-fb-map"},[a("img",{ref:"fb_map_img",staticClass:"u-map",attrs:{src:this.mapimg,alt:this.fb},on:{load:this.loaded}})])}),[],!1,null,null,null);a.default=o.exports},bcc4:function(t,a,n){}}]);
//# sourceMappingURL=chunk-0b9aa422.f065cbca.js.map