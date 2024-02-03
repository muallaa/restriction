import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/sign',
        name: 'sign',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SignUp.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/LogIn.vue')

    },

    {
        path: '/homeuser',
        name: 'homeuser',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/HomeUser.vue')

    } ,
    {
        path: '/chat',
        name: 'chat',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ChatS.vue')

    },
    {
        path: '/storageuser',
        name: 'StorageUser',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/StorageUser.vue')

    },
    {
        path: '/allfolders',
        name: 'AllFolders',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AllFolders.vue')

    },
    {
        path: '/allfolders/:type',
        name: 'AllFoldersType',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AllFolders.vue')

    },
    {
        path: '/foldersSearch/:search',
        name: 'AllFoldersSearch',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AllFolders.vue')

    },
    {
        path: '/folder/:id_folder',
        name: 'FolderID',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AllFolders.vue')

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router