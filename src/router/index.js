import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import FlyToOld from "../views/FlyTo-old.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/flyto-old",
        name: "FlyTo-old",
        component: FlyToOld,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
