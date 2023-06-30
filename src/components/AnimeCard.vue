<template>
    <div class="grid gap-4 my-6" :class="animes.length > 1 ? 'xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : ''">
        <div v-for="anime in animes" :key="anime.mal_id" :class="animes.length > 1 ? 'w-full' : 'w-full md:w-3/6 mx-auto'" class="relative rounded-md shadow-md p-2 lg:p-3 bg-white">
            <router-link :to="{name: 'getAnime', params: {id: anime.mal_id}}">
                <div v-if="anime.score" class="rounded-tr-sm absolute right-0 flex items-center gap-1 bg-yellow-200 p-2 text-sm mr-2 lg:mr-3">
                    <Star></Star>
                    <p>{{ anime.score }}</p>
                </div>
                <div v-if="!anime.score" class="rounded-tr-sm absolute right-0 flex items-center gap-1 bg-yellow-200 p-2 text-sm mr-2 lg:mr-3">
                    <Star></Star>
                    <p>{{ anime.score }}</p>
                </div>
                <img class="h-80 w-full object-cover rounded-md mb-2" :src="anime.images.webp.image_url" :alt="anime.title">
                <h5 class="font-semibold text-center text-base" v-if="anime.title_english">{{ anime.title_english }}</h5>
                <h5 class="font-semibold text-center text-base" v-if="!anime.title_english">{{ anime.title }}</h5>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Star from '@/components/icons/Star.vue';

    export default{
        name : 'AnimeCard',
        components: {
            Star
        },
        props: {
            animes: {
                type: Array,
                required: true
            }
        }
    }
</script>