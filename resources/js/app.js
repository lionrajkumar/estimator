require('./bootstrap');
window.Vue = require('vue');

import BaseTemplate from "./components/BaseTemplate";
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(BaseTemplate),
});
