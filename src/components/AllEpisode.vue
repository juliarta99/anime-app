<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Episode</h2>
        <div class="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="episode in episodes" :key="episode.mal_id" class="p-2 bg-slate-100 transition group duration-250 hover:bg-blue-500 rounded-sm text-xs md:text-sm">
                <router-link :to="{name: 'getEpisode', params: {idAnime: this.$route.params.id, idEpisode: episode.mal_id}}">
                    <div v-if="episode.score" class="bg-yellow-300 opacity-80 group-hover:opacity-100 p-1 flex items-center gap-1 w-max">
                        <Star></Star>
                        <p>{{ episode.score }}</p>
                    </div>
                    <p class="italic">Episode {{ episode.mal_id }}</p>
                    <h5 class="font-semibold">{{ episode.title }}</h5>
                </router-link>
            </div>
        </div>
        <Pagination v-if="pagination.last_visible_page > 1"></Pagination>
    </div>
</template>

<script>
    import Pagination from '@/components/PaginationNextPrevious.vue';
    import Star from '@/components/icons/Star.vue';
    export default{
        name: 'AllEpisode',
        components: {
            Star,
            Pagination
        },  
        props: ['episodes'],
        computed:{
            pagination() {
                return this.$store.state.pagination
            }
        }
    }
</script>