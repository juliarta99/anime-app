<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Gallery</h2>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="(picture, index) in pictures" :key="index">
                <div class="h-full overflow-hidden">
                    <img :src="picture.webp.image_url" @click="setShowSlider(index)" class="object-cover h-full cursor-pointer hover:scale-125 hover:opacity-75 transition duration-250">
                </div>
            </div>
        </div>
        <SwiperPicture v-if="showSlider" :images="pictures"></SwiperPicture>
    </div>
</template>

<script>
    import SwiperPicture from '@/components/SwiperPicture.vue';
    import Button from '@/components/Button.vue';
    export default{
        name: 'GalleryAnime',
        props: ['pictures'],
        components: {
            SwiperPicture,
            Button
        },
        computed: {
            showSlider() {
                return this.$store.state.showSlider
            },
        },
        methods: {
            setShowSlider(index) {
                document.body.classList.add('overflow-hidden')
                this.$store.commit('setImageAktif', index)
                this.$store.commit('setShowSlider', true)
            }
        }
    }
</script>