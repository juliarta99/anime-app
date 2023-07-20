<template>
    <div class="flex md:justify-between flex-col-reverse md:flex-row gap-2">
        <div class="flex">
            <button @click="previous" :class="(pageAktif > 1) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                <ArrowPanjang></ArrowPanjang>
                Previous
            </button>
            <button @click="next" :class="(pagination.has_next_page) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="px-4 py-2 inline-flex items-center text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                Next
                <ArrowPanjang class="rotate-180"></ArrowPanjang>
            </button>
        </div>
        <p class="text-sm font-medium mt-2">Page
            <input type="number" name="pageAktif" min="1" class="w-max text-sm p-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-950" @change="debouncePage" @input="debouncePage" :max="pagination.last_visible_page" v-model="pageAktif">
            of {{ pagination.last_visible_page }}
        </p>
    </div>
</template>

<script>
    import { debounce } from 'lodash'
    import ArrowPanjang from './icons/ArrowPanjang.vue';

    export default{
        name: "Pagination",
        components: {
            ArrowPanjang
        },
        computed: {
            pagination() {
                return this.$store.state.pagination
            },
            pageAktif: {
                get() {
                    return this.$store.state.pageAktif;
                },
                set(value) {
                    this.$store.commit('setPageAktif', value);
                }
            } 
        },
        methods: {
            previous() {
                if (this.pageAktif > 1) {
                    this.pageAktif--;
                    this.debouncePage();
                }
            },
            next() {
                if (this.pagination.has_next_page) {
                    this.pageAktif++;
                    this.debouncePage();
                }
            },
            debouncePage: debounce(function() {
                this.getDataAnime();
            }, 334),
            getDataAnime() {
                    // cek page aktif
                if(this.pageAktif > this.pagination.last_visible_page) {
                    this.pageAktif = this.pagination.last_visible_page
                } else if(this.pageAktif < 1) {
                    this.pageAktif = 1
                }
                // get data 
                if(!this.$store.state.search) {
                    this.$store.dispatch('fetchAnimeData')
                } else if(this.$store.state.search) {
                    this.$store.dispatch('searchDataAnime')
                }
            }
        }
    }
</script>