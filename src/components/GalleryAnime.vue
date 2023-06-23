<template>
    <div v-if="showPictures">
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Gallery</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="picture in pictures" :key="picture">
                <img :src="picture.webp.image_url" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'GalleryAnime',
        props: ['pictures'],
        computed: {
            showPictures() {
                return this.$store.state.showPictures
            }
        }
    }
</script>