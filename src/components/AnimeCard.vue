<template>
    <div class="grid gap-4 my-6" :class="animes.length > 1 ? 'grid-cols-5' : ''">
        <div v-for="anime in animes" :key="anime.mal_id" :class="animes.length > 1 ? 'w-full' : 'w-3/6 mx-auto'" class="relative rounded-md shadow-md p-3 bg-white">
            <router-link :to="{name: 'getAnime', params: {id: anime.mal_id}}">
                <p v-if="anime.score" class="bg-yellow-200 z-10 absolute rounded-tr-sm p-2 right-3">{{ anime.score }}</p>
                <p v-if="!anime.score" class="bg-yellow-200 z-10 absolute rounded-tr-sm p-2 right-3">0.0</p>
                <img class="h-80 w-full object-cover rounded-md mb-2" :src="anime.images.webp.image_url" :alt="anime.title">
                <h5 class="font-semibold text-center text-md" v-if="anime.title_english">{{ anime.title_english }}</h5>
                <h5 class="font-semibold text-center text-md" v-if="!anime.title_english">{{ anime.title }}</h5>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        name : 'AnimeCard',
        props: {
            animes: {
                type: Array,
                required: true
            }
        }
    }
</script>