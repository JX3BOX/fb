<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="副本专栏"
            slug="fb"
            root="/fb"
            :publishEnable="true"
            :feedbackEnable="true"
            :adminEnable="true"
        >
            <img slot="logo" svg-inline src="./assets/img/fb.svg" />
        </Breadcrumb>
        <LeftSidebar>
            <Nav class="m-nav" />
        </LeftSidebar>
        <Main :withoutRight="false">
            <single />
            <RightSidebar>
                <Side class="m-extend" />
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/single_nav.vue";
import Side from "@/components/single_side.vue";
import single from "@/components/single.vue";
export default {
    name: "App",
    props: [],
    data: function () {
        return {};
    },
    methods: {},
    components: {
        Nav,
        Side,
        single,
    },
    beforeCreate : function (){
        
    }
};
</script>

<style lang="less">
@import "./assets/css/layout.less";
</style>
