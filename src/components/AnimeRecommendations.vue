<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Rekomendasi</h2>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="recommen in recommendations" :key="recommen.entry.mal_id">
                <router-link :to="{name: 'getAnime', params: {id: recommen.entry.mal_id}}">
                    <img :src="recommen.entry.images.webp.image_url" class="object-cover">
                    <p class="font-semibold text-center text-xs md:text-sm mt-1">{{ recommen.entry.title }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AnimeRecommendations',
        props: ['recommendations']
    }
</script>