<template>
    <div>
        <ArrowLeft @click="$router.back()" class="cursor-pointer">Kembali</ArrowLeft>
        <div class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
            <h5 class="font-bold text-lg text-center mb-2">{{ character.name }}</h5>
            <div class="flex justify-center w-full gap-4 mb-4">
                <div class="relative w-max">
                    <p class="absolute right-0 bg-yellow-300 p-2 font-semibold text-sm">{{ character.favorites }}</p>
                    <img :src="character.images.webp.image_url" :alt="character.name" class="h-80 object-cover">
                </div>
                <div class="w-3/6">
                    <p v-html="formatText(character.about)" class="text-sm text-justify"></p>
                </div>
            </div>
            <div>
                <h5 class="font-bold text-lg text-center mb-2">Gallery</h5>
                <div class="grid grid-cols-7 gap-4">
                    <div v-for="picture in characterPictures" :key="picture">
                        <img :src="picture.jpg.image_url" class="object-cover">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArrowLeft from '@/components/icons/ArrowLeft.vue'

    export default {
        name: 'CharacterView',
        created() {
            const id = this.$route.params.id
            this.$store.dispatch('animeCharacter', id)
            this.$store.dispatch('animeCharacterPictures', id)
        },  
        components: {
            ArrowLeft
        },
        computed: {
            character() {
                return this.$store.state.character
            },
            characterPictures() {
                return this.$store.state.characterPictures
            }
        },
        methods: {
            formatText(text) {
                return text.replace(/\n/g, '<br>');
            },
        }
    }
</script>