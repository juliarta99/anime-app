<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Episode</h2>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="episode in episodes" :key="episode.mal_id" class="p-2 bg-slate-100 relative rounded-sm text-xs md:text-sm">
                <router-link :to="{name: 'getEpisode', params: {idAnime: this.$route.params.id, idEpisode: episode.mal_id}}">
                    <p class="bg-yellow-300 p-1 absolute right-0 top-0">{{ episode.score }}</p>
                    <p class="italic">Episode {{ episode.mal_id }}</p>
                    <h5 class="font-semibold">{{ episode.title }}</h5>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AllEpisode',
        props: ['episodes']
    }
</script>