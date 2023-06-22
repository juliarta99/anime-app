<template>
    <div class="w-full h-full">
        <router-link to="/">
            <ArrowLeft>Kembali ke Beranda</ArrowLeft>
        </router-link>
        <p v-if="err" class="text-center mt-4">{{ err }}</p>
        <Suspense>
            <template #default>
                <DetailAnime :anime="anime"></DetailAnime>
            </template>
            <template #fallback>
                Loadingg
            </template>
        </Suspense>
        <Suspense>
            <template #default>
                <AllCharacter :characters="characters"></AllCharacter>
            </template>
            <template #fallback>
                Loadingg
            </template>
        </Suspense>
        <Suspense>
            <template #default>
                <GalleryAnime :pictures="pictures"></GalleryAnime>
            </template>
            <template #fallback>
                Loadingg
            </template>
        </Suspense>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    import ArrowLeft from '@/components/icons/ArrowLeft.vue'

    export default{
        name: 'AnimeView',
        components: {
            DetailAnime: defineAsyncComponent(() => import('@/components/DetailAnime.vue')),
            AllCharacter: defineAsyncComponent(() => import('@/components/AllCharacter.vue')),
            GalleryAnime: defineAsyncComponent(() => import('@/components/GalleryAnime.vue')),
            ArrowLeft
        },
        mounted() {
            const id = this.$route.params.id;
            this.$store.dispatch('animeById', id);
            this.$store.dispatch('animeCharacters', id);
            // this.$store.dispatch('animePictures', id);
        },
        computed: {
            anime() {
                return this.$store.state.anime
            },
            characters() {
                return this.$store.state.characters
            },
            pictures() {
                return this.$store.state.pictures
            },
            err() {
                return this.$store.state.err
            }
        }
    }
</script>