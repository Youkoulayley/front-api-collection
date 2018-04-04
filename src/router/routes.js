import Home from '../pages/Home.vue'
import Tutorial from '../pages/Tutorial.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/tutorial/:id', name: 'tutorial', component: Tutorial },
    { path: '*', redirect: { name: 'home' } }
];

export default routes
