import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/index.vue";
import TodoList from "../pages/todos/index.vue";
import BasicFeature from "../pages/basic/index.vue";
import TestPage from "../pages/test/index.vue";
import Todo from "../pages/test/_id.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomePage",
            component: HomePage
        },
        {
            path: "/basic",
            name: "BasicFeature",
            component: BasicFeature
        },
        {
            path: "/todos",
            name: "TodoList",
            component: TodoList
        },
        {
            path: "/test",
            name: "TestPage",
            component: TestPage
        },
        {
            path: "/test/:id",
            name: "Todo",
            component: Todo
        },
    ]
})

export default router