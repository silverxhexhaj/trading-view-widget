<template>
    <div class="flex space-x-2 p-2">
        <router-link to="/">
            <button class="p-2 border-transparent rounded border border-transparent hover:border-blue-900">Home</button>
        </router-link>
        <h1 class="p-2 bg-blue-900 text-white rounded">About</h1>
    </div>
</template>

<script>
export default {
    name: "About"
};
</script>
