<template>
    <div class="m-fb-story" v-loading="loading">
        <el-divider content-position="left">故事背景</el-divider>
        <p class="u-fb" v-html="introduction"></p>

        <template v-if="bosslist.length">
            <el-divider content-position="left">首领传说</el-divider>
            <div class="u-boss" v-for="(boss, i) in bosslist" :key="i">
                <h5 class="u-name">
                    <img
                        class="u-boss-icon"
                        svg-inline
                        src="../assets/img/skull.svg"
                    />
                    {{ boss.BOSS }}
                </h5>
                <p class="u-boss-detail" v-html="boss.Introduce"></p>
            </div>
        </template>

        <!-- <template v-if="mapid">
            <el-divider content-position="left">副本地图</el-divider>
            <div class="m-fb-map" v-loading="loading">
                <img
                    class="u-map"
                    :src="mapimg"
                    :alt="fb"
                    ref="fb_map_img"
                    @load="loaded"
                />
            </div>
        </template> -->
    </div>
</template>

<script>
import { __ossMirror } from "@jx3box/jx3box-common/data/jx3box";
import { getInfo, getBoss } from "@/service/getStory.js";
export default {
    name: "Story",
    props: [],
    data: function() {
        return {
            loading: false,
            introduction: "",
            mapid: "",
            bosslist: [],
        };
    },
    computed: {
        fb: function() {
            return this.$route.query.fb_name || this.$store.state.default_fb;
        },
        zlp: function() {
            return this.$route.query.fb_zlp || this.$store.state.default_zlp;
        },
        mapimg: function() {
            return __ossMirror + "pic/map/map_" + this.mapid + "_0.png";
        },
    },
    methods: {
        loadData: function() {
            this.loading = true
            getInfo(this.fb).then((res) => {
                let data = res.data ? res.data[0] : "";

                if (data) {
                    if (data.Introduction) {
                        this.introduction = data.Introduction.replace(
                            '<text>text="',
                            ""
                        );
                        this.introduction = this.introduction.replace(
                            "</text>",
                            ""
                        );
                        this.introduction = this.introduction.replace(
                            /font=\d*/g,
                            ""
                        );
                        this.introduction = this.introduction.replace(
                            /\\\\\\n/g,
                            "<br/>"
                        );
                    }
                    this.mapid = data.MapID;
                } else {
                    this.introduction = "无";
                }

                if (this.mapid) {
                    getBoss(this.mapid).then((res) => {
                        let bosslist = res.data;
                        if (bosslist && bosslist.length) {
                            this.bosslist = bosslist;
                        }
                    });
                }
            }).finally(() => {
                this.loading = false
            })
        },
        loaded: function() {
            this.loading = false;
        },
    },
    watch : {
        fb : function (){
            this.loadData()
        }
    },
    filters: {},
    mounted: function() {
        this.loadData();
    },
};
</script>

<style lang="less">
@import "../assets/css/story.less";
</style>
