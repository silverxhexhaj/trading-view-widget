import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
    },
});

Vue.config.productionTip = false;

import axios from 'axios';

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response;
        if (status === 401) {
            // do stuff
        }
    }
)
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost/';
}

window.axios = axios;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
