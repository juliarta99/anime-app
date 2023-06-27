<template>
    <div>
        <input type="text" name="search" autocomplete="off" v-model="search" @keyup="debounceSearch" placeholder="Cari anime kesukaan anda" class="bg-slate-200 w-full p-1 px-3 rounded-md outline-none">
    </div>
</template>

<script>
    import { debounce } from 'lodash'
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
            },
        },
        methods: {
            debounceSearch: debounce(function() {
                this.getDataAnimeBySearch();
            }, 334),
            getDataAnimeBySearch() {
                this.$store.dispatch('searchDataAnime');
            },
        }
    }
</script>