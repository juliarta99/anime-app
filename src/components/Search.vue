<template>
    <div>
        <input type="text" name="search" autocomplete="off" v-model="search" @keyup="getDataAnimeBySearch" placeholder="Cari anime kesukaan anda" class="bg-slate-200 w-full p-1 px-3 rounded-md outline-none">
    </div>
</template>

<script>
    export default {
        name: 'Search',
        computed: {
            search: {
                get() {
                    return this.$store.state.search
                },
                set(value) {
                    this.$store.commit('setSearch', value)
                }
            }
        },
        methods: {
            getDataAnimeBySearch() {
                this.$store.dispatch('searchDataAnime')
            }
        }
    }
</script>