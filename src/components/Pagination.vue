<template>
    <div class="flex md:justify-between flex-col-reverse gap-2 md:flex-row">
        <div class="flex">
            <button @click="previous" :class="(pageAktif > 1) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                Previous
            </button>
            <button @click="next" :class="(pagination.has_next_page) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="px-4 py-2 inline-flex items-center text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900">
                Next
                <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <p class="text-sm font-medium">Page
            <input type="number" name="pageAktif" min="1" class="w-max text-sm p-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-950" @change="debouncePage" @input="debouncePage" :max="pagination.last_visible_page" v-model="pageAktif">
            of {{ pagination.last_visible_page }}
        </p>
    </div>
</template>

<script>
    import { debounce } from 'lodash'

    export default{
        name: "Pagination",
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