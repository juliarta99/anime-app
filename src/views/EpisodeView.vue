<template>
    <div>
        <div class="flex justify-between">
            <ArrowLeft @click="$router.back()" class="cursor-pointer text-sm md:text-base">Kembali</ArrowLeft>
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
                <div class="md:w-10/12 w-full py-5 px-8 mx-auto mt-5 rounded-md bg-white">
                    <div class="bg-slate-100 animate-pulse rounded-sm h-5 w-1/2 mx-auto"></div>
                    <div class="flex-col md:flex-row flex gap-4 my-4 w-full justify-center">
                        <div class="bg-slate-100 animate-pulse rounded-md h-80 w-64 mx-auto"></div>
                        <div class="w-full">
                            <div v-for="(index) in 3" :key="index" class="bg-slate-100 animate-pulse mt-1 rounded-sm h-5 w-full"></div>
                            <div class="bg-slate-100 animate-pulse mt-1 rounded-sm h-48 w-full"></div>
                        </div>
                    </div>
                </div>
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