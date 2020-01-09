/* eslint-disable promise/param-names */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: Routers,
  scrollBehavior (_to, _from, _savedPosition) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 200)
    })
  }
})

export default router
