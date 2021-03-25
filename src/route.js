import { createRouter, createWebHistory } from 'vue-router';
import Animals from './pages/Animals'
import Calander from './pages/Calander'
import MarkDown from './pages/MarkDewn'
import Home from './pages/Home'
const routes = [
    { path: '/animals', component: Animals },
    { path: '/calander', component: Calander },
    { path: '/markdown', component: MarkDown },
    { path: '/', component: Home },
  ]
  
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  export default router;