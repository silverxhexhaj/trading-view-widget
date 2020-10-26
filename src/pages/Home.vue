<template>
    <div>
        <div class="flex space-x-2 m-2">
            <h1 class="p-2 bg-blue-900 text-white rounded">Home</h1>
            <router-link to="/about">
                <button class="p-2 border-transparent rounded border border-transparent hover:border-blue-900">About
                </button>
            </router-link>
        </div>
        <button class="m-2 rounded p-2 bg-blue-200 border hover:border-blue-700"
                @click="testAxios">
            Test axios
        </button>
        <span v-if="isSuccess === true"
              class="font-bold text-green-600 text-xs">
            Success
        </span>
        <span v-else-if="!isSuccess === false"
              class="font-bold text-red-600 text-xs">
            Error
        </span>
        <code v-if="responseData"
             class="flex m-2 p-2 text-sm font-mono bg-gray-300 rounded">
            {{ responseData }}
        </code>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            isSuccess: null,
            responseData: null
        }
    },
    methods: {
        testAxios() {
            axios.get('/api/lorem')
                .then((response) => {
                    this.responseData = response.data
                    this.isSuccess = true
                })
                .catch((error) => {
                    this.responseData = error.data
                    this.isSuccess = false
                })
        }
    }
};
</script>
