import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import Overview from '../views/Overview.vue'

import ClientAccounts from '../views/ClientAccounts.vue'
import NewClientAccount from '../views/NewClientAccount.vue'

import DevelopmentPlan from '../views/DevelopmentPlan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: '/overview'
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      children: [
        {
          path: '/overview',
          name: 'Overview',
          component: Overview
        },
        {
          path: '/client_accounts',
          name: 'ClientAccounts',
          component: ClientAccounts,
        },
        {
          path: '/development_plan',
          name: 'DevelopmentPlan',
          component: DevelopmentPlan
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
  ]
})

export default router
