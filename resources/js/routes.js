/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'list',
        path: '/list',
        component: UserList
    }
]
