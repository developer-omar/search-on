import { createRouter, createWebHistory } from 'vue-router'

import Options from '../pages/Options.vue'
import SearchEngines from '../pages/SearchEngines.vue';
import AddSearchEngine from '../pages/AddSearchEngine.vue';
import EditSearchEngine from '../pages/EditSearchEngine.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const routes = [
  { path: '/', redirect: "/options" },
  { path: '/options', component: Options },
  { path: '/search-engines', component: SearchEngines },
  { path: '/add-search-engine', component: AddSearchEngine },
  { path: '/edit-search-engine/:searchEngineId', component: EditSearchEngine },
  { path: '/:pathMatch(.*)*', component: PageNotFound },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
