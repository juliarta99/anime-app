<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Review</h2>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :pagination="{clickable: true}"
            :loop="loop"
            :autoplay="autoplay"
            class="w-11/12 md:w-2/3 lg:w-1/2"
        >
            <swiper-slide v-for="review in reviews" :key="review.mal_id" class="pb-10 md:pb-5">
                <img :src="review.user.images.webp.image_url" :alt="review.user.username" class="w-20 object-cover h-20 rounded-full mx-auto">
                <h5 class="font-semibold text-md text-center">{{ review.user.username }}</h5>
                <div v-for="(tag, index) in review.tags" :key="index" class="flex justify-center">
                    <p class="p-2 rounded-sm text-xs w-max" :class="(tag == 'Not Recommended') ? 'bg-red-500' : 'bg-blue-500 my-1'">{{ tag }}</p>
                </div>
                <p class="text-xs text-justify">{{ pangkasReview(review.review) }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import { Pagination, Autoplay } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    export default{
        name: 'AnimeReview',
        props: ['reviews'],
        data() {
            return{
                pangkas: true,
                maxLength: 500,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
            }
        },
        methods: {
            pangkasReview(val) {
                if(this.pangkas === true && val.length > this.maxLength) {
                    return val.slice(0,this.maxLength) + "...";
                } else{
                    return val
                }
            },
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules : [Pagination, Autoplay]
            }
        }
    }
</script>

<style scope>
    .swiper .swiper-pagination-bullets{
        bottom: 0px;
    }
</style>