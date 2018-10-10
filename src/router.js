import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Home from './views/Home.vue'
import Page from './views/Page.vue'
import Article from "./views/Article.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'page' }
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:uid',
      name: 'article',
      component: Article,
      props: true
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
