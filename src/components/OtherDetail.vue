<template>
    <div class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <div class="flex justify-center gap-2 mb-5">
            <Button>Karakter</Button>
            <Button>Gallery</Button>
            <Button>Episode</Button>
            <Button>Rekomendasi</Button>
            <Button>Review</Button>
        </div>
        <AllCharacter :characters="characters"></AllCharacter>
        <GalleryAnime :pictures="pictures"></GalleryAnime>
    </div>
</template>

<script>
    import GalleryAnime from './GalleryAnime.vue';
    import AllCharacter from './AllCharacter.vue';
    import Button from './Button.vue';

    export default {
        name: 'OtherDetail', 
        components: {
            GalleryAnime,
            AllCharacter,
            Button
        },
        computed: {
            characters() {
                return this.$store.state.characters
            },
            pictures() {
                return this.$store.state.pictures
            },
        }
    }
</script>