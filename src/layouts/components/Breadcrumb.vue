<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <ol class="flex items-center space-x-1">
      <li class="text-sm breadcrumb-item">
        <router-link to="/" class="hover:text-green-700">
          <em class="fa-solid fa-house"></em>
        </router-link>
      </li>
      <li
        class="text-sm breadcrumb-item text-white"
        aria-current="page"
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb"
        :class="{ 'font-bold': index === breadcrumbs.length - 1 }"
      >
        {{ translateBreadcrumbToThai(breadcrumb) }}

        <template v-if="index !== breadcrumbs.length - 1"> / </template>
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    computed: {
      breadcrumbs() {
        return this.$route.fullPath.slice(1).split('?')[0].split('/')
      },
    },
    methods: {
      translateBreadcrumbToThai(breadcrumb) {
        switch (breadcrumb) {
          case 'home':
            return 'หน้าหลัก'
          case 'setting':
            return 'ตั้งค่าบัญชี'
          case 'register':
            return 'ลงทะเบียน'
          case 'edit':
            return 'แก้ไข'
          default:
            return breadcrumb
        }
      },
    },
  }
</script>
