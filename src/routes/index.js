// import vue router
import { createRouter, createWebHistory } from "vue-router";

// import js cookies
import Cookie from "js-cookie";

// utility to get the token
const getToken = () => Cookie.get("token");

// define a router
const routes = [
  {
    path: "/", //digunakan untuk alamat/url dari route
    name: "home", //digunakan untuk penamaan route
    component: () =>
      //lokasi file view yang dipanggil saat route diakses
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/auth/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/auth/login.vue"),
  },
  {
    path: "/admin/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "../views/admin/dashboard/index.vue"
      ),
    meta: { requireAuth: true }, //add meta field
  },
  {
    path: "/admin/users",
    name: "admin.users.index",
    component: () => import("../views/admin/users/index.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/admin/users/create",
    name: "admin.users.create",
    component: () => import("../views/admin/users/create.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/admin/users/:id",
    name: "admin.users.edit",
    component: () => import("../views/admin/users/edit.vue"),
    meta: { requireAuth: true },
  },
];

// create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes
});

// global navigation guard
router.beforeEach((to, from, next) => {
  // ambil token otentikasi pengguna
  const token = getToken();

  // jika rute tujuan membutuhkan otentikasi dan pengguna tidak memiliki token
  if (to.matched.some((record) => record.meta.requireAuth) && !token) {
    // alihkan pengguna ke halaman login
    next({ name: "login" });
  }
  // Jika rute tujuan adalah halaman login atau register dan pengguna sudah login
  else if ((to.name === "login" || to.name === "register") && token) {
    // Alihkan pengguna ke halaman dashboard
    next({ name: "dashboard" });
  }
  // Jika tidak ada kondisi khusus, izinkan navigasi ke rute tujuan
  else {
    next();
  }
});

export default router;
