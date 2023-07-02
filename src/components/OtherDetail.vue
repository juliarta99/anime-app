<template>
    <div class="w-full md:w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <div class="flex justify-center gap-2 mb-5 flex-wrap md:text-base text-sm">
            <Button v-for="btn in btnValue" :key="btn.id" @click="handleClick(btn.id)" :class="(otherAktif === btn.id) ? 'bg-yellow-300' : ''">{{ btn.value }}</Button>
        </div>
        <AllCharacter :characters="displayed(characters, 14)" v-if="otherAktif === 1"></AllCharacter>
        <GalleryAnime :pictures="displayed(pictures, 14)" v-if="otherAktif === 2"></GalleryAnime>
        <AllEpisode :episodes="displayed(episodes, 12)" v-if="otherAktif === 3"></AllEpisode>
        <AnimeReview :reviews="displayed(reviews, 1)" v-if="otherAktif === 4"></AnimeReview >
        <AnimeRecommendations :recommendations="displayed(recommendations, 14)" v-if="otherAktif === 5"></AnimeRecommendations>
        <div v-if="showBtn && otherAktif != 4" class="flex justify-center mt-4">
            <Button @click="showOrHide">{{ handleTextBtn }}</Button>
        </div>
        <p v-if="showEmpty(handleValue)" class="text-center">Tidak ada data {{ handleText }}</p>
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
                ],
                showAll: false,
                readMore : true,
                showBtn : true,
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
            handleValue() {
                if(this.otherAktif === 1) {
                    return this.characters
                } else if(this.otherAktif === 2) {
                    return this.pictures
                } else if(this.otherAktif === 3) {
                    return this.episodes
                } else if(this.otherAktif === 4) {
                    return this.reviews
                } else if(this.otherAktif === 5) {
                    return this.recommendations
                }
            },
            handleText() {
                if(this.otherAktif === 1) {
                    return "karakter"
                } else if(this.otherAktif === 2) {
                    return "gallery"
                } else if(this.otherAktif === 3) {
                    return "episode"
                } else if(this.otherAktif === 4) {
                    return "review"
                } else if(this.otherAktif === 5) {
                    return "rekomendasi"
                }
            },
            handleTextBtn() {
                if(this.readMore === true) {
                    return "Tampilkan Semua"
                } else if(this.readMore === false) {
                    return "Sembunyikan"
                }
            }
        },
        methods: {
            handleClick(val) {
                this.otherAktif = val
            },
            showEmpty(val) {
                if( (this.showBtn === false || this.otherAktif === 4) && val.length === 0){
                    return 1
                } return 0
            },
            displayed(val, length) {
                if (this.showAll && val.length > length || this.otherAktif === 4) {
                    this.showBtn = true
                    return val;
                } else {
                    if(val.length > length){
                        this.showBtn = true
                        return val.slice(0, length);
                    } else if(val.length > 0) {
                        this.showBtn = false
                        return val
                    } else if(val.length === 0) {
                        return this.showBtn = false
                    }
                }
            },
            showOrHide() {
                if(this.showAll === false) {
                    this.showAll = true
                    this.readMore = false
                } else if(this.showAll === true) {
                    this.showAll = false
                    this.readMore = true
                }
            }
        }
    }
</script>