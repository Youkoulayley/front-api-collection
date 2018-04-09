import Home from '../pages/Home.vue'
import Roles from '../pages/Roles.vue'
import Admin from '../pages/Admin.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/admin/', name: 'admin', component: Admin },
    { path: '/admin/roles/', name: 'admin.roles', component: Roles },
    { path: '*', redirect: { name: 'home' } }
];

export default routes
