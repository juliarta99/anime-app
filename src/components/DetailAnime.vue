<template>
    <div class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <p v-if="anime.title_english" class="font-bold uppercase text-lg text-center mb-3">{{ anime.title_english }}</p>
        <p v-if="!anime.title_english" class="font-bold uppercase text-lg text-center mb-3">{{ anime.title }}</p>
        <div class="flex-col md:flex-row flex gap-4 mb-4 w-full justify-center">
            <div class="relative w-max md:mb-0 mb-2 mx-auto">
                <p class="rounded-tr-sm absolute right-0 bg-yellow-200 p-2 font-semibold text-md">{{ anime.score }}</p>
                <img class="h-80 rounded-md object-cover" :src="anime.images.webp.image_url">
            </div>
            <div>
                <p class="text-sm md:text-base">Ranking : #{{ anime.rank }}</p>
                <p class="text-sm md:text-base">Populer : #{{ anime.popularity }}</p>
                <p class="text-sm md:text-base">Total Episode : {{ anime.episodes }}</p>
                <p class="text-sm md:text-base">Season :  {{ anime.season }}</p>
                <p class="text-sm md:text-base">Status : {{ anime.status }}</p>
                <p class="text-sm md:text-base">Durasi : {{ anime.duration }}</p>
                <p class="text-sm md:text-base" v-if="anime.aired.string">Ditayangkan :  {{ anime.aired.string }}</p>
                <div class="flex gap-2  mt-2 flex-wrap">
                    <div v-for="genre in anime.genres" :key="genre.mal_id">
                        <div class="p-2 rounded-md bg-blue-200 font-semibold text-xs md:text-sm">{{ genre.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-justify text-xs md:text-sm">{{ cekSynopsis }} <button v-if="showBtn" class="text-blue-500 text-sm" @click="showOrExpandSynopsis">{{ handleText }}</button></p>
    </div>
    <Trailer :animeTrailer="anime.trailer"></Trailer>
</template>

<script>
    import Trailer from '@/components/Trailer.vue'

    export default{
        name: 'DetailAnime',
        components: {
            Trailer
        },
        data() {
            return{
                maxLength: 500,
                readMore: true,
                showBtn: true,
            }
        },
        props: ['anime'],
        computed: {
            cekSynopsis() { 
                if (this.readMore === true && this.anime.synopsis.length > this.maxLength) {
                    this.showBtn = true
                    return this.anime.synopsis.slice(0, this.maxLength) + '...'; 
                } else if(this.anime.synopsis.length < this.maxLength) {
                    this.showBtn = false
                    return this.anime.synopsis;
                }
                return this.anime.synopsis; 
            },
            handleText() {
                if(this.readMore === true) {
                    return "selengkapnya"
                } else if(this.readMore === false) {
                    return "tutup"
                }
            }
        },
        methods: {
            showOrExpandSynopsis() {
                if(this.readMore === true){
                    this.readMore = false
                } else if(this.readMore === false) {
                    this.readMore = true
                }
            }
        },
    }
</script>