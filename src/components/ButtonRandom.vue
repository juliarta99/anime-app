<template>
    <div>
        <button @click="getAnimeRandom" class="bg-blue-300 py-1 rounded-md px-4 text-sm lg:text-base">Random</button>
    </div>
</template>

<script>
    export default{
        name: 'ButtonRandom', 
        methods: {
            getAnimeRandom() {
                this.$store.dispatch('randomAnime');
            }
        }
    }
</script>