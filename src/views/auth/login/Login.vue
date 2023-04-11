<template>
  <div class="flex justify-center items-center h-screen">
    <form class="bg-white p-6 rounded-lg shadow-md" @submit.prevent="onLoginClick">
      <h1 class="text-2xl font-bold mb-6">Login</h1>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username"> Username </label>
        <input
          class="border rounded-lg py-2 px-3 w-full"
          type="text"
          id="identifier"
          name="username"
          placeholder="Username"
          ref="identifier"
          v-model="identifier"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="password"> Password </label>
        <input
          class="border rounded-lg py-2 px-3 w-full"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          ref="password"
          v-model="password"
        />
      </div>
      <div class="flex justify-end">
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        identifier: '',
        password: '',

        loading: false,
      }
    },
    methods: {
      onLoginClick() {
       

        this.loading = true
        this.$api.authentication
          .authLocalLogin(this.identifier, this.password)
          .then((res) => {
            console.log(res)  ;
            this.loading = false
            this.$router.replace('/home')
            this.$toast.success('Login success')
          })
          .catch(() => {
            this.loading = false
            this.$swal.fire({
              icon: 'error',
              title: 'Login failed',
              text: 'Please try again',
            })
          })
      },
    },
  }
</script>
