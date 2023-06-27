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
                Loadingg
            </template>
        </Suspense>
        <Suspense>
            <template #default>
                <OtherDetail></OtherDetail>
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