<template>
    <div class="md:w-10/12 w-full py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <p v-if="anime.title_english" class="font-bold uppercase text-lg text-center mb-3">{{ anime.title_english }}</p>
        <p v-if="!anime.title_english" class="font-bold uppercase text-lg text-center mb-3">{{ anime.title }}</p>
        <div class="flex-col md:flex-row flex gap-4 mb-4 w-full justify-center">
            <div class="relative w-max md:mb-0 mb-2 mx-auto md:mx-0 w-xs">
                <div class="rounded-tr-sm absolute right-0 flex items-center gap-1 bg-yellow-200 p-2 font-semibold text-md">
                    <Star></Star>
                    <p v-if="anime.score">{{ anime.score }}</p>
                    <p v-if="!anime.score">0.0</p>
                </div>
                <img class="rounded-md h-80 object-cover w-xs" :src="anime.images.webp.image_url">
            </div>
            <div class="sm:text-center md:text-left text-sm md:text-base">
                <p>Ranking : #{{ anime.rank }}</p>
                <p>Populer : #{{ anime.popularity }}</p>
                <p>Total Episode : {{ anime.episodes }}</p>
                <p>Season :  {{ anime.season }}</p>
                <p>Status : {{ anime.status }}</p>
                <p>Durasi : {{ anime.duration }}</p>
                <p v-if="anime.aired.string">Ditayangkan :  {{ anime.aired.string }}</p>
                <div class="flex gap-2 sm:justify-center md:justify-normal mt-2 flex-wrap">
                    <div v-for="genre in anime.genres" :key="genre.mal_id">
                        <div class="p-2 rounded-md bg-blue-200 font-semibold text-xs md:text-sm">{{ genre.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-justify text-xs md:text-sm" v-if="anime.synopsis">{{ cekSynopsis }} <button v-if="showBtn" class="text-blue-500 text-xs md:text-sm" @click="showOrExpandSynopsis">{{ handleText }}</button></p>
    </div>
    <!-- <Trailer :animeTrailer="anime.trailer"></Trailer> -->
</template>

<script>
    // import Trailer from '@/components/Trailer.vue'
    import Star from '@/components/icons/Star.vue';

    export default{
        name: 'DetailAnime',
        components: {
        //     Trailer
            Star
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