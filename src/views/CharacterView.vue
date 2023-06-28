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
                    Loading....
                </template>
            </Suspense>
            <Suspense>
                <template #default>
                    <GalleryCharacter :characterPictures="characterPictures"></GalleryCharacter>
                </template>
                <template #fallback>
                    Loading....
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