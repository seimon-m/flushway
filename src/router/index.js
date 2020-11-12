import { createRouter, createWebHashHistory } from "vue-router";
import FlyTo from "../views/FlyTo.vue";
import FlyToOld from "../views/FlyTo-old.vue";

const routes = [
    {
        path: "/",
        name: "FlyTo",
        component: FlyTo,
    },
    {
        path: "/flyto-old",
        name: "FlyTo-old",
        component: FlyToOld,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
