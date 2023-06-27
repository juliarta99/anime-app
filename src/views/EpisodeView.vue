<template>
    <div>
        <div class="flex justify-between">
            <ArrowLeft @click="$router.back()" class="cursor-pointer">Kembali</ArrowLeft>
            <router-link to="/">
                <IconHome class="cursor-pointer"></IconHome>
            </router-link>
        </div>
        <p v-if="err" class="text-center mt-4">{{ err }}</p>
        <Suspense>
            <template #default>
                <DetailEpisode :anime="anime" :episode="episode"></DetailEpisode>
            </template>
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    import ArrowLeft from "@/components/icons/ArrowLeft.vue"
    import IconHome from "@/components/icons/Home.vue"

    const DetailEpisode = defineAsyncComponent(async () => {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            const Component = await import('@/components/DetailEpisode.vue');
                            return Component
                        });

    export default {
        name: "EpisodeView",
        components: {
            ArrowLeft,
            IconHome,
            DetailEpisode
        },
        created() {
            const idEpisode = this.$route.params.idEpisode
            const idAnime = this.$route.params.idAnime
            this.$store.dispatch('animeEpisode', {idAnime, idEpisode})
            this.$store.dispatch('animeById', idAnime)
        },
        computed: {
            err() {
                return this.$store.state.err
            },
            anime() {
                return this.$store.state.anime
            },
            episode() {
                return this.$store.state.episode
            },
        }
    }
</script>