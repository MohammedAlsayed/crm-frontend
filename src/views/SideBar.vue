<template>
  <div class="offcanvas offcanvas-start sidebar-nav" tabindex="-1" data-bs-backdrop="true" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
    </div>
    <div class="offcanvas-body p-0">
      <nav class="mx-4 navbar">
        <ul class="navbar-nav list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            {{ $t('side_bar.home') }}
          </button>
          <div class="collapse show" id="home-collapse" style="">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/overview" class="link-dark rounded px-3">{{ $t('side_bar.overview') }}</router-link></li>
            </ul>
          </div>
      </li>
      <li class="mb-1">
        <button class="btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          {{ $t('side_bar.crm') }}
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/client_accounts" class="link-dark rounded px-3">{{ $t('side_bar.client_accounts') }}</router-link></li>
            <li><router-link to="/development_plan" class="link-dark rounded px-3">{{ $t('side_bar.development_plans') }}</router-link></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.forecast') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.weekly_plans') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.visits') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.price_quotation') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.purchase_order') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.delivery_notes') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.sample_delivery') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.custody_operation') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.stock_operation') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.client_stock_level') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.product_line') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.product') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.user_permission') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.target') }}</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          {{ $t('side_bar.reports') }}
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.po_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.development_plan_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.visits_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.forecast_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.weekly_plan_report') }}</a></li>
            <li><a href="#" class="link-dark rounded px-3">{{ $t('side_bar.delivery_report') }}</a></li>
          </ul>
        </div>
      </li>
      </ul>
      </nav>
    </div>
  </div>
</template>

<style>
:root{
  --offcanvas-width: 230px;
  --topNavBarHeight: 64px
}

.sidebar-nav{
  width: var(--offcanvas-width) !important;
}

@media (min-width: 992px){
  .sidebar-nav{
    transform: none !important;
    visibility: visible !important;
    top: var(--topNavBarHeight) !important;
    height: calc(100% - var(--topNavBarHeight)) !important;
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
.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, .85);
  background-color: #d2f4ea;
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
}

</style>