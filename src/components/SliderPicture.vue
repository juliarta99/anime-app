<template>
    <div class="h-screen w-full bg-black-transparant fixed top-0 left-0 p-4">
        <button @click="hiddenSlider">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="flex justify-between">
            <button @click="previousImage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <img :src="images[imageAktif].jpg.image_url" class="">
            <button @click="nextImage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
</template>
 
<script>
    export default{
        name: "SliderPicture",
        props: ['images'],
        data() {
            return{
                imageAktif: 0,
                indexImage: this.images.length - 1
            }
        },
        methods: {
            hiddenSlider() {
                this.$store.commit('setShowSlider', false)
            },
            nextImage() {
                if(this.imageAktif < this.indexImage) {
                    this.imageAktif += 1
                } else if(this.imageAktif === this.indexImage){
                    this.imageAktif = 0
                }
            },
            previousImage() {
                if(this.imageAktif  != 0) {
                    this.imageAktif -= 1
                } else if(this.imageAktif === 0){
                    this.imageAktif = this.indexImage
                }
            },
        }
    }
</script>

<style scope>
    .bg-black-transparant{
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>