<template>
  <nav class="shadow-lg bg-success rounded-xl py-1">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <div class="flex-shrink-0 col-span-2 md:col-span-1 hidden sm:block">
          <!-- <img
            src="@/assets/img/logos/termtem-logo.png"
            style="margin-top: 2px; height: 38px"
            alt="main_logo"
          /> -->
          LOGO
        </div>
        <div class="col-7 d-sm-block d-none">
          <Breadcrumb style="padding-top: 6px" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import Breadcrumb from '@/layouts/components/Breadcrumb.vue'
  export default {
    name: 'Navbar',
    components: {
      Breadcrumb,
    },
  }
</script>
