<template>
    <div class="h-screen w-full bg-black-transparant fixed top-0 left-0 p-4 pt-8">
        <div class="text-center">
            <button @click="hiddenSlider" class="bg-blue-200 p-2 rounded-full">
                <Xmark></Xmark>
            </button>
        </div>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            navigation
            :loop="loop"
            :initialSlide="imageAktif"
            class="h-full"
        >
            <swiper-slide v-for="(image, index) in images" :key="index">
                <div class="h-full flex justify-center items-center">
                    <div class="w-max relative mx-auto">
                        <button @click="downloadImage(image.jpg.image_url)" class="absolute top-0 right-0 p-2 bg-blue-500 rounded-bl-md">Downlaod</button>
                        <img :src="image.jpg.image_url" class="image-swiper max-h-full max-w-full object-cover">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
 
<script>
    import { Navigation } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import Xmark from './icons/Xmark.vue';

    export default{
        name: "SwiperPicture",
        props: ['images'],
        data() {
            return {
                loop: true
            }
        },
        computed: {
            imageAktif() {
                return this.$store.state.imageAktif
            },
        },
        methods: {
            hiddenSlider() {
                document.body.classList.remove('overflow-hidden')
                this.$store.commit('setShowSlider', false)
            },
            async downloadImage(image) {
                try {
                    let response = await fetch(image);
                    let blob = await response.blob();

                    let dwnlnk = document.createElement('a');
                    dwnlnk.download = 'output.jpg';
                    dwnlnk.href = window.URL.createObjectURL(blob);

                    document.body.appendChild(dwnlnk);
                    dwnlnk.click();
                    document.body.removeChild(dwnlnk);
                    window.URL.revokeObjectURL(dwnlnk.href);
                } catch (error) {
                    console.error('Error while downloading image:', error);
                }
            },
        },
        components: {
            Swiper,
            SwiperSlide,
            Xmark
        },
        setup() {
            return {
                modules : [Navigation]
            }
        }
    }
</script>

<style scope>
    .bg-black-transparant{
        background-color: rgba(0, 0, 0, 0.8);
    }
    .image-swiper{
        animation: show .5s;
    }
    .swiper-button-next,
    .swiper-button-prev{
        color: rgb(188, 188, 248);
    }
    @keyframes show {
        0%{
            opacity: 0;
            transform: scale(0);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }
    @media (max-width: 420px) {
        .swiper-button-next,
        .swiper-button-prev{
            display: none;
        }
    }
</style>