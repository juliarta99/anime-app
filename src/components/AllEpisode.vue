<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Episode</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="episode in episodes" :key="episode.mal_id" class="p-2 bg-slate-100 relative rounded-sm">
                <router-link :to="{name: 'getEpisode', params: {idAnime: this.$route.params.id, idEpisode: episode.mal_id}}">
                    <p class="text-sm bg-yellow-300 p-1 absolute right-0 top-0">{{ episode.score }}</p>
                    <p class="text-sm italic">Episode {{ episode.mal_id }}</p>
                    <h5 class="text-sm font-semibold">{{ episode.title }}</h5>
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