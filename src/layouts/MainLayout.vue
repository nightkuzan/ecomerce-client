<template>
  <nav>MainLayout</nav>
  <Navbar />
  <router-view />
</template>

<script>
  import Navbar from '@/layouts/components/Navbar.vue'

  export default {
    name: 'MainLayout',
    components: {
      Navbar,
    },
  }
</script>
