<template>
    <adminFrame title="标签管理"
                width="70%"
                action
                @refresh-click="getTagList">
        <el-row v-loading="loading"
                element-loading-text="标签列表加载中">
            <el-col :span="style.isPC?15:24">
                <div v-if="tagList.length>0">
                    <el-tag v-for="tag in tagList"
                            :key="tag.mid"
                            @close="delTag(tag)"
                            closable>
                        {{tag.name}}
                    </el-tag>
                </div>
                <div v-else>
                    <h3>暂无标签，请在右侧添加新的标签.</h3>
                </div>
            </el-col>
            <el-col :span="style.isPC?9:24"
                    style="float:right">
                <ul>
                    <li>
                        <h4>标签名称<sup style="color:red">*</sup></h4>
                        <el-input placeholder="请输入内容"
                                  v-model="tagName"
                                  @keydown.enter.native="addTag"
                                  maxlength="15"
                                  show-word-limit></el-input>
                        <span class="input-hint">标签名称</span>
                    </li>
                    <li class="input-button">
                        <el-button type="primary"
                                   @click="addTag">添加标签</el-button>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </adminFrame>
</template>

<script>
import adminFrame from "../components/common/adminFrame.vue";
export default {
    name: "manageTag",
    components: {
        adminFrame
    },
    data() {
        return {
            loading: true,
            tagName: ""
        };
    },
    computed: {
        style() {
            return this.$store.getters.globalStyle;
        },
        tagList() {
            return this.$store.state.tag.tagList;
        }
    },
    watch: {
        "$store.state.tag.tagList": function() {
            this.loading = false;
        }
    },
    mounted() {
        this.getTagList();
    },
    methods: {
        getTagList() {
            this.loading = true;
            this.$store.dispatch("getTagListAction");
        },
        delTag(tag) {
            this.$confirm("此操作将永久删除该标签, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$store.dispatch("delTagAction", tag.mid);
                })
                .catch(() => {});
        },
        addTag() {
            if (this.tagName) {
                this.$store.dispatch("addTagAction", this.tagName);
                this.tagName = "";
                this.loading = true;
            } else {
                this.$notify({
                    title: "失败",
                    message: "标签名不能为空",
                    type: "error",
                    offset: 50
                });
            }
        }
    }
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 480px) {
} /* 超小设备（手机，小于 480px） */

.el-tag {
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto;
    margin-right: 10px;
}
h4 {
    text-align: left;
    font-weight: 900;
}
.input-button {
    margin: 20px auto;
    text-align: left;
}
.input-hint {
    width: 100%;
    font-size: 13px;
    display: inline-block;
    text-align: left;
    color: rgb(255, 136, 0);
}
</style>
