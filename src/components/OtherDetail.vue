<template>
    <div class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <div class="flex justify-center gap-2 mb-5">
            <Button v-for="btn in btnValue" :key="btn.id" @click="handleClick(btn.id)">{{ btn.value }}</Button>
        </div>
        <AllCharacter :characters="characters" v-if="otherAktif === 1"></AllCharacter>
        <GalleryAnime :pictures="pictures" v-if="otherAktif === 2"></GalleryAnime>
        <AllEpisode :episodes="episodes" v-if="otherAktif === 3"></AllEpisode>
        <AnimeReview :reviews="reviews" v-if="otherAktif === 4"></AnimeReview >
        <AnimeRecommendations :recommendations="recommendations" v-if="otherAktif === 5"></AnimeRecommendations>
    </div>
</template>

<script>
    import GalleryAnime from '@/components/GalleryAnime.vue';
    import AllCharacter from '@/components/AllCharacter.vue';
    import AllEpisode from '@/components/AllEpisode.vue';
    import AnimeRecommendations from '@/components/AnimeRecommendations.vue';
    import AnimeReview from '@/components/AnimeReview.vue';
    import Button from '@/components/Button.vue';

    export default {
        name: 'OtherDetail', 
        data() {
            return {
                btnValue: [
                    {id: 1, value: 'Karakter'},
                    {id: 2, value: 'Gallery'},
                    {id: 3, value: 'Episode'},
                    {id: 4, value: 'Review'},
                    {id: 5, value: 'Rekomendasi'},
                ]
            }
        },
        created() {
            const id = this.$route.params.id
            if(this.otherAktif === 1) {
                this.$store.dispatch('animeCharacters', id);
            } else if(this.otherAktif === 2) {
                this.$store.dispatch('animePictures', id);
            } else if(this.otherAktif === 3) {
                this.$store.dispatch('animeEpisodes', id);
            } else if(this.otherAktif === 4) {
                this.$store.dispatch('animeReviews', id);
            } else if(this.otherAktif === 5) {
                this.$store.dispatch('animeRecommendations', id);
            }
        },
        updated() {
            const id = this.$route.params.id
            if(this.otherAktif === 1) {
                this.$store.dispatch('animeCharacters', id);
            } else if(this.otherAktif === 2) {
                this.$store.dispatch('animePictures', id);
            } else if(this.otherAktif === 3) {
                this.$store.dispatch('animeEpisodes', id);
            } else if(this.otherAktif === 4) {
                this.$store.dispatch('animeReviews', id);
            } else if(this.otherAktif === 5) {
                this.$store.dispatch('animeRecommendations', id);
            }
        },
        components: {
            GalleryAnime,
            AllCharacter,
            AllEpisode,
            AnimeRecommendations,
            AnimeReview,
            Button
        },
        computed: {
            otherAktif: {
                get() {
                    return this.$store.state.otherAktif
                },
                set(val) {
                    this.$store.commit('setOtherAktif', val);
                    console.log(this.$store.state.otherAktif)
                }
            },
            characters() {
                return this.$store.state.characters
            },
            pictures() {
                return this.$store.state.pictures
            },
            episodes() {
                return this.$store.state.episodes
            },
            recommendations() {
                return this.$store.state.recommendations
            },
            reviews() {
                return this.$store.state.reviews
            },
        },
        methods: {
            handleClick(val) {
                this.otherAktif = val
            }
        }
    }
</script>