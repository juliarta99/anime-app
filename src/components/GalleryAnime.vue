<template>
    <div v-if="showPictures">
        <div v-for="picture in pictures" :key="picture">
            <img :src="picture.webp.image_url" alt="">
        </div>
    </div>
</template>

<script>
    export default{
        name: 'GalleryAnime',
        props: ['pictures'],
        data() {
            return {
                showPictures: false
            }
        }
    }
</script>