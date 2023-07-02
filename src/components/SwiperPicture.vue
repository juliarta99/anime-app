<template>
    <div class="h-screen w-full bg-black-transparant fixed top-0 left-0 p-4 pt-8">
        <div class="text-center">
            <button @click="hiddenSlider" class="bg-blue-200 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
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
                    <img :src="image.jpg.image_url" class="image-swiper max-h-full max-w-full object-cover">
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
        },
        components: {
            Swiper,
            SwiperSlide,
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