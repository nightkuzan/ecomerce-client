<template>
  <v-app-bar color="info" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <div class="col-span-7 hidden sm:block">
      <Breadcrumb class="pt-6" />
    </div>

    <v-app-bar-title>Photos</v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
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
