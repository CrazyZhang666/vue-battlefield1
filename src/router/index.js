import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/bf1/home"
    },
    {
        path: "/bf1",
        name: "bf1",
        component: () => import("@/views/bf1/BF1.vue"),
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("@/views/bf1/views/HomeView.vue"),
                meta: {
                    index: 1
                }
            },
            {
                path: "auth",
                name: "auth",
                component: () => import("@/views/bf1/views/AuthView.vue"),
                meta: {
                    index: 2
                }
            },
            {
                path: "server",
                name: "server",
                component: () => import("@/views/bf1/views/ServerView.vue"),
                meta: {
                    index: 3
                }
            },
            {
                path: "record",
                name: "record",
                component: () => import("@/views/bf1/views/RecordView.vue"),
                meta: {
                    index: 4
                }
            },
            {
                path: "admin",
                name: "admin",
                component: () => import("@/views/bf1/views/AdminView.vue"),
                meta: {
                    index: 5
                }
            },
            {
                path: "music",
                name: "music",
                component: () => import("@/views/bf1/views/MusicView.vue"),
                meta: {
                    index: 6
                }
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/views/bf1/views/AboutView.vue"),
                meta: {
                    index: 7
                }
            }
        ],
        meta: {
            index: 1
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
