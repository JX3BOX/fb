<template>
    <li class="m-fb-item u-item">
        <!-- Banner -->
        <a class="u-banner" :href="item.ID | postLink" :target="target"><img :src="getBanner(item)" :key="item.ID"/></a>

        <!-- 标题 -->
        <h2 class="u-post" :class="{ isSticky: item.sticky }">
            <!-- 图标 -->
            <img class="u-icon" svg-inline src="../../assets/img/list/post.svg" />

            <!-- 标题文字 -->
            <a class="u-title" :style="item.color | showHighlight" :href="item.ID | postLink" :target="target">{{ item.post_title || "无标题" }}</a>

            <!-- 角标 -->
            <span class="u-marks" v-if="item.mark && item.mark.length">
                <i v-for="mark in item.mark" class="u-mark" :key="mark">{{ mark | showMark }}</i>
            </span>
        </h2>

        <!-- 字段 -->
        <div class="u-content u-desc">
            <!-- {{ item.post_excerpt || item.post_title || "这个作者很懒,什么都没有留下" }} -->
            <div class="u-metalist u-boss-list" v-if="item.post_meta && item.post_meta.fb_boss">
                <strong>首领</strong>
                <em>
                    <b v-for="(c, i) in format(item, 'fb_boss')" :key="i">{{ c }}</b>
                </em>
            </div>

            <div class="u-metalist u-mode-list c-jx3fb-mode" v-if="item.post_meta && item.post_meta.fb_level">
                <strong>模式</strong>
                <em>{{ format(item, "fb_level").join('、') }}</em>
            </div>
        </div>

        <!-- 作者 -->
        <div class="u-misc">
            <img class="u-author-avatar" :src="item.author_info | showAvatar" :alt="item.author_info | showNickname" />
            <a class="u-author-name" :href="item.post_author | authorLink" target="_blank">{{ item.author_info | showNickname }}</a>
            <span class="u-date">
                Updated on
                <time v-if="order == 'update'">{{ item.post_modified | dateFormat }}</time>
                <time v-else>{{ item.post_date | dateFormat }}</time>
            </span>
        </div>
    </li>
</template>

<script>
import { appKey } from "@/../setting.json";
import { showAvatar, authorLink, showBanner, buildTarget } from "@jx3box/jx3box-common/js/utils";
import { __ossMirror, __imgPath } from "@jx3box/jx3box-common/data/jx3box";
import { cms as mark_map } from "@jx3box/jx3box-common/data/mark.json";
import { showDate } from "@jx3box/jx3box-common/js/moment.js";
export default {
    name: "ListItem",
    props: ["item", "order"],
    components: {},
    data: function() {
        return {
            target: buildTarget(),
        };
    },
    computed: {},
    watch: {},
    methods: {
        getBanner: function(item) {
            if (item.post_banner) {
                return showBanner(item.post_banner);
            } else {
                let zlp = item.post_meta?.fb_zlp || item.zlp || this.$store.state.default_zlp;
                let fb = item.post_subtype || this.$store.state.default_fb;
                let img = this.$store.state.map?.[zlp]?.dungeon?.[fb].icon;
                if (img) {
                    return __imgPath + img;
                } else {
                    return __imgPath + "image/fb_map_thumbnail/null.png";
                }
            }
        },
        format: function(item, key) {
            let val = item?.post_meta?.[key];
            if (val && val.length) {
                return val;
            } else {
                return ["全部"];
            }
        },
    },
    filters: {
        authorLink,
        postLink: function(val) {
            return location.origin + `/${appKey}/` + val;
        },
        showHighlight: function(val) {
            return val ? `color:${val};font-weight:600;` : "";
        },
        showMark: function(val) {
            return mark_map[val] || val;
        },
        showAvatar: function(userinfo) {
            return showAvatar(userinfo?.user_avatar);
        },
        showNickname: function(userinfo) {
            return userinfo?.display_name || "匿名";
        },
        dateFormat: function(gmt) {
            return showDate(new Date(gmt));
        },
    },
    created: function() {},
    mounted: function() {},
};
</script>