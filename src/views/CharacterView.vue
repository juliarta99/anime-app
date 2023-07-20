<template>
    <div>
        <div class="flex justify-between">
            <ArrowLeft @click="$router.back()" class="cursor-pointer text-sm md:text-base">Kembali</ArrowLeft>
            <router-link to="/">
                <IconHome class="cursor-pointer"></IconHome>
            </router-link>
        </div>
        <div class="w-full md:w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
            <p v-if="err" class="text-center mt-4">{{ err }}</p>
            <Suspense>
                <template #default>
                    <DetailCharacter :character="character"></DetailCharacter>
                </template>
                <template #fallback>
                    <div class="md:w-10/12 w-full py-5 px-8 mx-auto mt-5 rounded-md bg-white">
                        <div class="bg-slate-100 animate-pulse rounded-sm h-5 w-1/2 mx-auto"></div>
                        <div class="flex-col md:flex-row flex gap-4 my-4 w-full justify-center">
                            <div class="bg-slate-100 animate-pulse rounded-md h-80 w-64 mx-auto"></div>
                            <div class="w-full">
                                <div v-for="(index) in 6" :key="index" class="bg-slate-100 animate-pulse mt-1 rounded-sm h-5 w-full"></div>
                                <div class="bg-slate-100 animate-pulse rounded-sm h-40 w-full"></div>
                            </div>
                        </div>
                    </div>
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <GalleryCharacter :characterPictures="characterPictures"></GalleryCharacter>
                </template>
                <template #fallback>
                    <div class="w-full md:w-10/12 py-5 px-8 mx-auto rounded-md bg-white">
                        <div class="w-2/6 h-8 animate-pulse bg-slate-100 mt-2 mx-auto"></div>
                        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4 mt-2">
                        <div v-for="(index) in 7" :key="index" class="w-full animate-pulse bg-white">
                            <div class="h-40 w-full rounded-md animate-pulse bg-slate-100"></div>
                        </div>
                        </div>
                        <div class="w-2/6 h-8 animate-pulse bg-slate-100 mt-2 mx-auto"></div>
                    </div>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    import ArrowLeft from '@/components/icons/ArrowLeft.vue'
    import IconHome from '@/components/icons/Home.vue'
    
    const DetailCharacter = defineAsyncComponent( async () => {
                                await new Promise(resolve => setTimeout(resolve, 1000));
                                const Component = await import('@/components/DetailCharacter.vue');
                                return Component
                            });
    const GalleryCharacter = defineAsyncComponent( async () => {
                                await new Promise(resolve => setTimeout(resolve, 1000));
                                const Component = await import('@/components/GalleryCharacter.vue');
                                return Component
                            });
    export default {
        name: 'CharacterView',
        created() {
            const id = this.$route.params.id;
            this.$store.dispatch('animeCharacter', id);
            this.$store.dispatch('animeCharacterPictures', id);
        },  
        components: {
            DetailCharacter,
            GalleryCharacter,
            ArrowLeft,
            IconHome
        },
        computed: {
            err() {
                return this.$store.state.err
            },
            character() {
                return this.$store.state.character
            },
            characterPictures() {
                return this.$store.state.characterPictures
            }
        }
    }
</script>