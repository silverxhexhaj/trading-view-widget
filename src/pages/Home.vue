<template>
  <div>
    <div class="flex space-x-2 m-2">
      <h1 class="p-2 bg-blue-900 text-white rounded">Home</h1>
      <router-link to="/about">
        <button class="p-2 border-transparent rounded border border-transparent hover:border-blue-900">About</button>
      </router-link>
    </div>
    <button class="m-2 rounded p-2 bg-green-200" @click="yoyo">Test axios</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    yoyo() {
      axios.get('/api/lorem')
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error.data)
        })
    }
  }
};
</script>
