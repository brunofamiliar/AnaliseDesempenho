export default [
    {
        path: '/account/login',
        name: 'login-adm',
        component: () => import('../components/Account/LoginAdm/index.vue'),
        meta: { 
            requiresAuth: false
        },
    },
    {
        path: '',
        redirect: '/account/login'
    }
]