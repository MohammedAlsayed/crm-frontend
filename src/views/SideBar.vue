<template>
  <aside class="offcanvas offcanvas-start sidebar-nav" tabindex="-1" data-bs-backdrop="true" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-body p-0">
      <nav class="navbar ms-3">
        <ul class="navbar-nav list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn-toggle align-items-center rounded sidebar-btn" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {{ $t('home') }}
          </button>
          <div class="collapse show" id="home-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <router-link to="/overview" class="link-dark rounded px-3">{{ $t('overview') }}</router-link>
            </ul>
          </div>
      </li>
      <li class="mb-1">
        <button class="btn-toggle align-items-center rounded collapsed sidebar-btn" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          {{ $t('crm') }}
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/client_accounts" class="link-dark rounded px-3">{{ $t('client_accounts') }}</router-link></li>
            <li><router-link to="/development_plan" class="link-dark rounded px-3">{{ $t('development_plans') }}</router-link></li>
            <li><router-link to="/forecast" class="link-dark rounded px-3">{{ $t('forecast') }}</router-link></li>
            <li><router-link to="/weekly_plans" class="link-dark rounded px-3">{{ $t('weekly_plans') }}</router-link></li>
            <li><router-link to="/visits" class="link-dark rounded px-3">{{ $t('visits') }}</router-link></li>
            <li><router-link to="/price_quotation" class="link-dark rounded px-3">{{ $t('price_quotation') }}</router-link></li>
            <li><router-link to="/purchase_order" class="link-dark rounded px-3">{{ $t('purchase_order') }}</router-link></li>
            <li><router-link to="/delivery_notes" class="link-dark rounded px-3">{{ $t('delivery_notes') }}</router-link></li>
            <li><router-link to="/sample_delivery" class="link-dark rounded px-3">{{ $t('sample_delivery') }}</router-link></li>
            <li><router-link to="/custody_operation" class="link-dark rounded px-3">{{ $t('custody_operation') }}</router-link></li>
            <li><router-link to="/stock_operation" class="link-dark rounded px-3">{{ $t('stock_operation') }}</router-link></li>
            <li><router-link to="/client_stock_level" class="link-dark rounded px-3">{{ $t('client_stock_level') }}</router-link></li>
            <li><router-link to="/product_line" class="link-dark rounded px-3">{{ $t('product_line') }}</router-link></li>
            <li><router-link to="/product" class="link-dark rounded px-3">{{ $t('product') }}</router-link></li>
            <li><router-link to="/target" class="link-dark rounded px-3">{{ $t('target') }}</router-link></li>
            <li><router-link to="/user_permission" class="link-dark rounded px-3">{{ $t('user_permission') }}</router-link></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn-toggle align-items-center rounded collapsed sidebar-btn" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          {{ $t('reports') }}
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded px-3">{{ $t('po_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('development_plan_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('visits_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('forecast_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('weekly_plan_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('delivery_report') }}</a></li>
          </ul>
        </div>
      </li>
      </ul>
      </nav>
    </div>
  </aside>
</template>

<style>
:root{
  --offcanvas-width: 230px;
  --topNavBarHeight: 64px;
  --sideBarBreakpoint: 992px;
}

.sidebar-nav{
  width: var(--offcanvas-width) !important;
  top: var(--topNavBarHeight) !important;
  height: calc(100% - var(--topNavBarHeight)) !important;
}

nav ul{
  width: var(--offcanvas-width) !important;
}

.sidebar-btn{
  margin-left: 0 !important;
  margin-right: 0!important;
  padding-left: -10px !important;
  width: var(--offcanvas-width) !important;
}

@media (min-width: 992px){
  .sidebar-nav{
    transform: none !important;
    visibility: visible !important;
  }
}
.offcanvas-backdrop { background-color: transparent !important; }

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .65);
  background-color: transparent;
  border: 0;
}
.btn-toggle:hover {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
  transition: 0.2s ease-in-out;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: .5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, .85);
}
.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: .1875rem .5rem;
  margin-top: .125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}
.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.router-link-active{
  background-color: #d2f4ea;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}

</style>