<template>
    <div>
        <input type="text" name="search" autocomplete="off" v-model="search" @keyup="debounceSearch" @touchend="debounceSearch" @paste="debounceSearch" @touchstart="debounceSearch" placeholder="Cari anime kesukaan anda" class="bg-slate-200 w-full p-1 px-3 rounded-md outline-none lg:text-base text-sm">
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