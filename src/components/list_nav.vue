<template>
    <div class="m-fb-nav m-fb-list-nav">
        <div class="m-nav-search" @click.stop>
            <el-input placeholder="搜索副本或首领名称" v-model="search" clearable></el-input>
        </div>

        <div class="m-nav-group" v-for="(group, key) in map" :key="key">
            <h2 class="u-category active" v-show="!search && group.client.includes(client)">
                <span class="u-title">🍄 {{ key }}</span>
                <em class="u-level">({{ group.level }})</em>
            </h2>
            <ul class="u-list">
                <li
                    v-for="(item, subkey) in group.dungeon"
                    :key="subkey"
                    class="u-item"
                    :class="{
                        active: isActive(subkey),
                        hidden: isHide(subkey),
                    }"
                    v-show="item.client.includes(client)"
                >
                    <router-link
                        class="u-link"
                        :to="{query : {fb_zlp : group.name,fb_name: item.name}}"
                    >{{item.name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "list",
    props: [],
    data: function () {
        return {
            search: "",
            map: this.$store.state.map,
            searchBelong: [],
        };
    },
    computed: {
        searchMap: function () {
            let search_map = {};
            for (let group in this.map) {
                let fbs = this.map[group]["dungeon"];
                for (let fbname in fbs) {
                    let fb = fbs[fbname];

                    // 副本单元信息
                    let __ = [];
                    __.push(group);
                    __.push(fbname);
                    for (let boss of fb.boss) {
                        __.push(boss);
                    }

                    search_map[fbname] = __;
                }
            }
            return search_map;
        },
        client : function (){
            return this.$store.state.client
        }
    },
    methods: {
        url: function (zlp, fb) {
            return `/fb/?fb_zlp=${zlp}&fb_name=${fb}` + "#" + this.$route.path;
        },
        isActive: function (subkey) {
            // let params = new URLSearchParams(location.search);
            // let current = params.get("fb_name");
            let current = this.$route.query.fb_name
            return current == subkey;
        },
        isHide: function (subkey) {
            if (!this.search) return;
            if (this.searchMap[subkey].includes(this.search)) {
                return false;
            } else {
                for (let key of this.searchMap[subkey]) {
                    if (key.includes(this.search)) {
                        return false;
                    }
                }
            }
            return true;
        },
    },
    watch : {
        '$route.query.fb_zlp' : function (val){
            this.$store.state.zlp = val 
        },
        '$route.query.fb_name' : function (val){
            this.$store.state.fb = val
        }
    }
};
</script>

<style lang="less">
@import "../assets/css/list_nav.less";
</style>
