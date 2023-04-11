<template>
  Home
  <div v-for="item in items">
    {{ item.attributes.name }}
    {{ item.attributes.image.data[0].attributes.url }}
    <!-- <img src={{ item.attributes.image.data[0].attributes.url }} /> -->
    {{ item.attributes.image.data[0].attributes.name }}
    <v-img
      class="bg-white"
      width="300"
      :aspect-ratio="1"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      class="bg-white"
      width="300"
      :aspect-ratio="1"
      :src="`${$baseURL}${item.attributes.image.data[0].attributes.url}`"
    ></v-img>
  </div>
  <button class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg" @click="logout">Logout</button>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        loading: false,
        items: [],
      }
    },
    created() {
      this.getItem()
    },
    methods: {
      logout() {
        this.$swal
          .fire({
            icon: 'question',
            title: 'Are you sure?',
            text: 'You will be logged out',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$api.authentication
                .authLocalLogout()
                .then(() => {
                  this.$router.replace('/login')
                  this.$toast.success('Logout success')
                })
                .catch(() => {
                  this.$swal.fire({
                    icon: 'error',
                    title: 'Logout failed',
                    text: 'Please try again',
                  })
                })
            }
          })
      },
      getItem() {
        const params = {
          populate: ['name', 'price', 'image'],
          sort: 'id:asc',
        }
        this.$api.item
          .getItems(params)
          .then((res) => {
            this.items = res.data
            console.log(this.items)
            this.loading = false
          })
          .catch(() => {
            this.$swal.fire({
              icon: 'error',
              title: 'Get items failed',
              text: 'Please try again',
            })
          })
      },
    },
  }
</script>
