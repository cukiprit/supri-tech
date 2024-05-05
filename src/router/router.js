import Beranda from '@/app/Beranda.vue';
import Hubungi from '@/app/Hubungi.vue';
import Layanan from '@/app/Layanan.vue';
import Tentang from '@/app/Tentang.vue';
import { createMemoryHistory, createRouter } from 'vue-router';


const routes = [
  { path: '/', component: Beranda },
  { path: '/tentang', component: Tentang },
  { path: '/layanan', component: Layanan },
  { path: '/hubungi', component: Hubungi },
]

const router = createRouter({
  linkActiveClass: 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500',
  linkExactActiveClass: 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
  history: createMemoryHistory(),
  routes,
})

export default router;