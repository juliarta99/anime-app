<template>
    <div class="w-full h-full">
        <div class="flex justify-between">
            <ArrowLeft @click="$router.back()" class="cursor-pointer text-sm md:text-base">Kembali</ArrowLeft>
            <router-link to="/">
                <IconHome class="cursor-pointer"></IconHome>
            </router-link>
        </div>
        <p v-if="err" class="text-center mt-4">{{ err }}</p>
        <Suspense>
            <template #default>
                <DetailAnime :anime="anime"></DetailAnime>
            </template>
            <template #fallback>
                <div class="md:w-10/12 w-full py-5 px-8 mx-auto mt-5 rounded-md bg-white">
                    <div class="bg-slate-100 animate-pulse rounded-sm h-5 w-1/2 mx-auto"></div>
                    <div class="flex-col md:flex-row flex gap-4 my-4 w-full justify-center">
                        <div class="bg-slate-100 animate-pulse rounded-md h-80 w-64 mx-auto"></div>
                        <div class="w-full">
                            <div v-for="(index) in 7" :key="index" class="bg-slate-100 animate-pulse mt-1 rounded-sm h-5 w-full"></div>
                            <div class="flex gap-2 sm:justify-center md:justify-normal mt-2 flex-wrap">
                                <div v-for="(index) in 3" :key="index" class="bg-slate-100 animate-pulse rounded-md h-8 w-20"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-slate-100 animate-pulse rounded-sm h-20 w-full"></div>
                </div>
            </template>
        </Suspense>
        <Suspense>
            <template #default>
                <OtherDetail></OtherDetail>
            </template>
            <template #fallback>
                <div class="w-full md:w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
                    <div class="flex gap-2 justify-center flex-wrap">
                        <div v-for="(index) in 5" :key="index" class="h-8 w-20 animate-pulse rounded-md bg-slate-100"></div>
                    </div>
                    <div class="w-2/6 h-8 bg-slate-100 mt-2 mx-auto animate-pulse"></div>
                    <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4 mt-2">
                        <div v-for="(index) in 14" :key="index">
                            <div class="h-40 rounded-md bg-slate-100 animate-pulse"></div>
                            <div v-for="(index) in 2" :key="index" class="h-6 rounded-md animate-pulse bg-slate-100 mt-1"></div>
                        </div>
                    </div>
                    <div class="w-2/6 h-8 bg-slate-100 mt-2 mx-auto"></div>
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    import ArrowLeft from '@/components/icons/ArrowLeft.vue'
    import IconHome from '@/components/icons/Home.vue'

    const DetailAnime = defineAsyncComponent(async () => {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            const Component = await import('@/components/DetailAnime.vue');
                            return Component
                        });
    const OtherDetail = defineAsyncComponent(async () => {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            const Component = await import('@/components/OtherDetail.vue');
                            return Component
                        });

    export default{
        name: 'AnimeView',
        components: {
            DetailAnime,
            OtherDetail,
            IconHome,
            ArrowLeft
        },
        created() {
            const id = this.$route.params.id;
            this.$store.dispatch('animeById', id);
        },
        updated() {
            const id = this.$route.params.id;
            this.$store.dispatch('animeById', id);
        },
        computed: {
            anime() {
                return this.$store.state.anime
            },
            err() {
                return this.$store.state.err
            }
        }
    }
</script>