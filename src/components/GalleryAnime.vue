<template>
    <div>
    <h2 class="text-lg font-bold uppercase mb-3 text-center">Gallery</h2>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="picture in pictures" :key="picture">
                <div class="h-full">
                    <img :src="picture.webp.image_url" class="object-cover h-full">
                </div>
            </div>
        </div>
        <Button @click="setShowSlider">Lihat</Button>
        <SliderPicture v-if="showSlider" :images="pictures"></SliderPicture>
    </div>
</template>

<script>
    import SliderPicture from '@/components/SliderPicture.vue';
    import Button from '@/components/Button.vue';
    export default{
        name: 'GalleryAnime',
        props: ['pictures'],
        components: {
            SliderPicture,
            Button
        },
        computed: {
            showSlider() {
                return this.$store.state.showSlider
            },
        },
        methods: {
            setShowSlider() {
                this.$store.commit('setShowSlider', true)
            }
        }
    }
</script>