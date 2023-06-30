<template>
    <div class="h-screen w-full bg-black-transparant  z-10">
        <button @click="hiddenSlider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <button v-if="showNext" @click="nextImage">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <img :src="images[0].jpg.image_url" class="">
        <button v-if="showPrevious" @click="previousImage">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
</template>
 
<script>
    export default{
        name: "SliderPicture",
        props: ['images'],
        data() {
            return{
                imageAktif: 0,
            }
        },
        computed: {
            showNext() {
                return this.imageAktif != 0
            },
            showPrevious() {
                return this.imageAktif != this.images.length
            },
        },
        methods: {
            hiddenSlider() {
                return this.$store.commit('setShowSlider', false)
            },
            nextImage() {
                return this.imageAktif + 1
            },
            previousImage() {
                return this.imageAktif - 1 
            },
        }
    }
</script>

<style scope="">
    .bg-black-transparant{
        background-color: rgba(0, 0, 0, 0.1);
    }
</style>