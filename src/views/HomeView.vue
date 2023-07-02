<template>
    <Header></Header>
    <p v-if="err" class="text-center mt-4">{{ err }}</p>
    <Suspense>
        <template #default>
            <div>
                <AnimeCard :animes="animes"></AnimeCard>
            </div>
        </template>
        <template #fallback>
            <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-6">
                <div v-for="index in 10" :key="index" class="rounded-md shadow-md p-3 bg-white">
                    <div class="h-80 w-full rounded-md bg-slate-100 animate-pulse mb-2"></div>
                    <div class="h-3 w-4/5 bg-slate-100 animate-pulse"></div>
                </div>
            </div>
        </template>
    </Suspense>
    <Footer></Footer>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    
    export default{
        name: 'HomeView',
        components: {
            Header,
            Footer,
            AnimeCard: defineAsyncComponent(() => import('@/components/AnimeCard.vue')) 
        },
        created() {
            if(!this.$store.state.search) {
                this.$store.dispatch('fetchAnimeData')
            } else if(this.$store.state.search) {
                this.$store.dispatch('searchDataAnime')
            }
        },
        computed: {
            animes() {
                return this.$store.state.animes
            },
            err() {
                return this.$store.state.err
            },
            pagination() {
                return this.$store.state.pagination
            }
        }
    }
</script>