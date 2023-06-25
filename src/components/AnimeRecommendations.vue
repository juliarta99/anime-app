<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Rekomendasi</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="recommen in recommendations" :key="recommen.entry.mal_id">
                <router-link :to="{name: 'getAnime', params: {id: recommen.entry.mal_id}}">
                    <img :src="recommen.entry.images.webp.image_url" class="h-5/6 object-cover">
                    <p class="font-semibold text-center text-sm">{{ recommen.entry.title }}</p>
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