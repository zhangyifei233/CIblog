import axios from 'axios'
import router from '@/router'

import {
    Notification
} from 'element-ui';

export default {
    state: {
        categoryList: []
    },
    mutations: {
        setCategoryList(state, data) {
            state.categoryList = data;
        }
    },
    actions: {
        getCategoryListAction(context) {
            axios
                .post("/api/api/client/category")
                .then(res => {
                    context.commit('setCategoryList', res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        addCategoryAction(context, data) {
            axios
                .post("/api/api/client/category/add", {
                    name: data.name,
                    description: data.description
                })
                .then(res => {
                    if (res.data.code == 200) {
                        router.push('/admin/manage_category')
                        Notification({
                            title: "成功",
                            message: "分类删除成功！",
                            type: "success"
                        });
                        context.dispatch('getCategoryListAction');
                    } else {
                        Message({
                            message: res.data.message,
                            type: "error"
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        delCategoryAction(context, data) {
            axios
                .post("/api/api/client/category/del", {
                    mid: data
                })
                .then(res => {
                    if (res.data.code == 200) {
                        Notification({
                            title: "成功",
                            message: "分类删除成功！",
                            type: "success"
                        });
                        context.dispatch('getCategoryListAction');
                    } else {
                        Notification({
                            title: "失败",
                            message: res.data.message,
                            type: "error"
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    modules: {}
}