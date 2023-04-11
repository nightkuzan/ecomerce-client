import { createRouter, createWebHistory } from "vue-router";
// import _ from "lodash";

import routes from "./routes";
// import api from "@/api";

// import { auth } from "@/boot/me.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach(async (to, from, next) => {
//     // make it can go any page not need to login

// });

export default router;
