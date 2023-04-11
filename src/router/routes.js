const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/auth/login/Login.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/home/Home.vue'),
      },
      {
        path: 'edit',
        component: () => import('@/views/home/Edit.vue'),
      },
    ],
  },
]

export default routes
