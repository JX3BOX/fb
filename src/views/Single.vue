<template>
    <SingleLayout>
        <single :id="id"></single>
    </SingleLayout>
</template>

<script>
import single from "@/components/single/single.vue";
import { getAppIcon, getAppID } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "Single",
    props: [],
    components: {
        single,
    },
    data: function() {
        return {
            id: getAppID(),
        };
    },
    computed: {
        user_id: function () {
            return this.$store.state.user_id;
        },
    },
    methods: { getAppIcon },
}
</script>
