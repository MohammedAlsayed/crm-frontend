import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import OverviewView from '../views/OverviewView.vue'

import ClientAccounts from '../views/crm/ClientAccounts.vue'
import DevelopmentPlan from '../views/crm/DevelopmentPlan.vue'
import ForecastView from '../views/crm/ForecastView.vue'
import WeeklyPlans from '../views/crm/WeeklyPlans.vue'
import VisitsView from '../views/crm/VisitsView.vue'
import PriceQuotation from '../views/crm/PriceQuotation.vue'
import PurchaseOrder from '../views/crm/PurchaseOrder.vue'
import DeliveryNotes from '../views/crm/DeliveryNotes.vue'
import SampleDelivery from '../views/crm/SampleDelivery.vue'
import CustodyOperation from '../views/crm/CustodyOperation.vue'
import StockOperation from '../views/crm/StockOperation.vue'
import ClientStockLevel from '../views/crm/ClientStockLevel.vue'
import ProductLine from '../views/crm/ProductLine.vue'
import ProductView from '../views/crm/ProductView.vue'
import TargetView from '../views/crm/TargetView.vue'
import UserPermission from '../views/crm/UserPermission.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect: '/overview'
    },
    {
      path: '/',
      name: 'Main',
      component: MainView,
      children: [
        {
          path: '/overview',
          name: 'Overview',
          component: OverviewView
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
        },
        {
          path: '/forecast',
          name: 'Forecast',
          component: ForecastView
        },
        {
          path: '/weekly_plans',
          name: 'WeeklyPlans',
          component: WeeklyPlans
        },
        {
          path: '/visits',
          name: 'Visits',
          component: VisitsView
        },
        {
          path: '/price_quotation',
          name: 'PriceQuotation',
          component: PriceQuotation
        },
        {
          path: '/purchase_order',
          name: 'PurchaseOrder',
          component: PurchaseOrder
        },
        {
          path: '/delivery_notes',
          name: 'DeliveryNotes',
          component: DeliveryNotes
        },
        {
          path: '/sample_delivery',
          name: 'SampleDelivery',
          component: SampleDelivery
        },
        {
          path: '/custody_operation',
          name: 'CustodyOperation',
          component: CustodyOperation
        },
        {
          path: '/stock_operation',
          name: 'StockOperation',
          component: StockOperation
        },
        {
          path: '/client_stock_level',
          name: 'ClientStockLevel',
          component: ClientStockLevel
        },
        {
          path: '/product_line',
          name: 'ProductLine',
          component: ProductLine
        },
        {
          path: '/product',
          name: 'Product',
          component: ProductView
        },
        {
          path: '/target',
          name: 'Target',
          component: TargetView
        },
        {
          path: '/user_permission',
          name: 'UserPermission',
          component: UserPermission
        },
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
