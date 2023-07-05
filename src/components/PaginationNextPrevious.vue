<template>
    <div class="inline-flex mt-2 xs:mt-0">
        <button @click="previous" :class="(pageAktif > 1) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
            <ArrowPanjang></ArrowPanjang>
            Prev
        </button>
        <button @click="next" :class="(pagination.has_next_page) ? '' : 'pointer-events-none text-gray-50 bg-gray-700'" class="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900">
            Next
            <ArrowPanjang class="rotate-180"></ArrowPanjang>
        </button>
    </div>
</template>

<script>
    import ArrowPanjang from './icons/ArrowPanjang.vue'

    export default{
        name: 'PaginationNextPrevious',
        components: {
            ArrowPanjang
        },  
        computed: {
            pageAktif: {
                get(){
                    return this.$store.state.pageAktif
                },
                set(val) {
                    return this.$store.commit('setPageAktif', val)
                }
            },
            pagination() {
                return this.$store.state.pagination
            },
            otherAktif() {
                return this.$store.state.otherAktif
            }
        },
        methods: {
            previous() {
                if (this.pageAktif > 1) {
                    this.pageAktif--;
                }
            },
            next() {
                if (this.pagination.has_next_page) {
                    this.pageAktif++;
                }
            }
        }
    }
</script>