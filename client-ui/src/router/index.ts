import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const dynamicRoutes = [
  {
    path: "/produits",
    redirect: "/",
    component: () =>
      import(
        /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
      ),
    children: [
      {
        path: "",
        name: "produit-list",
        component: () =>
          import(
            /* webpackChunkName: "produit-list" */ "@/views/main/produit/ProduitList.vue"
          ),
      },
      {
        path: "create",
        name: "create-produit",
        component: () =>
          import(
            /* webpackChunkName: "create-produit" */ "@/views/main/produit/ProduitCreate.vue"
          ),
      },
      {
        path: "edit",
        name: "edit-produit",
        component: () =>
          import(
            /* webpackChunkName: "edit-produit" */ "@/views/main/produit/ProduitEdit.vue"
          ),
      },
    ],
  },
  {
    path: "/categories",
    redirect: "/",
    component: () =>
      import(
        /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
      ),
    children: [
      {
        path: "",
        name: "category-list",
        component: () =>
          import(
            /* webpackChunkName: "category-list" */ "@/views/main/category/CategoryList.vue"
          ),
      },
      {
        path: "create",
        name: "create-category",
        component: () =>
          import(
            /* webpackChunkName: "create-category" */ "@/views/main/category/CategoryCreate.vue"
          ),
      },
      {
        path: "edit",
        name: "edit-category",
        component: () =>
          import(
            /* webpackChunkName: "edit-category" */ "@/views/main/category/CategoryEdit.vue"
          ),
      },
    ],
  },
];

const staticRoutes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "auth_layout" */ "@/components/layouts/Auth.vue"
      ),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import(/* webpackChunkName: "sign_in" */ "@/views/auth/SignIn.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import(
            /* webpackChunkName: "sign_up" */
            "@/views/auth/SignUp.vue"
          ),
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import(
            /* webpackChunkName: "password_reset" */ "@/views/auth/ResetPassword.vue"
          ),
      },
      {
        path: "/email-reset-password",
        name: "email-reset-password",
        component: () =>
          import(
            /* webpackChunkName: "password_reset" */ "@/views/auth/EmailResetPassword.vue"
          ),
      },
    ],
  },
  {
    path: "",
    component: () =>
      import(
        /* webpackChunkName: "layout" */ "@/components/layouts/mainLayout/Layout.vue"
      ),
    children: [
      {
        name: "home",
        path: "/",
        component: () =>
          import(/* webpackChunkName: "HomePage" */ "@/views/Home.vue"),
      },
    ],
  },
];

const routes: Array<RouteRecordRaw> = [...staticRoutes, ...dynamicRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
