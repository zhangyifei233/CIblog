<template>
    <adminFrame title="备份">
        <el-button type="primary"
                   @click="backups()">备份</el-button>
    </adminFrame>
</template>

<script>
import adminFrame from "../components/common/adminFrame.vue";
export default {
    name: "backups",
    components: {
        adminFrame
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {
        backups() {
            this.$post("/backups", {}, data => {
                window.open("//" + data.message);
            });
        }
    }
};
</script>

<style scoped>
</style>