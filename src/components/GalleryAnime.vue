<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Gallery</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="picture in pictures" :key="picture">
                <img :src="picture.webp.image_url" class="object-cover h-full">
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'GalleryAnime',
        props: ['pictures']
    }
</script>