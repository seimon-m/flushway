import { createRouter, createWebHashHistory } from "vue-router";
import FlyTo from "../views/FlyTo.vue";
import FlyTo2 from "../views/FlyTo2.vue";

const routes = [
    {
        path: "/",
        name: "FlyTo",
        component: FlyTo,
    },
    {
        path: "/flyto2",
        name: "FlyTo2",
        component: FlyTo2,
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
