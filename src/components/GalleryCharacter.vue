<template>
    <div>
        <h5 class="font-bold text-lg text-center mb-2">Gallery</h5>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="picture in displayedPictures" :key="picture">
                <img :src="picture.jpg.image_url" class="object-cover">
            </div>
        </div>
        <div v-if="btnText" class="flex justify-center mt-3">
            <Button @click="showOrHidePictures">{{ btnText }}</Button>
        </div>
        <p v-if="showEmpty" class="text-center mt-2">Tidak ada data gambar karakter</p>
    </div>
</template>

<script>
    import Button from './Button.vue';

    export default{
        name: "GalleryCharacter", 
        props: ['characterPictures'],
        data() {
            return {
                showAllPictures: false,
                btnText : ''
            };
        },
        components:{
            Button
        },
        computed: {
            showPictures() {
                return this.$store.state.showPictures
            },
            showEmpty() {
                if(!this.btnText && this.characterPictures.length == 0){
                    return 1
                } return 0
            },
            displayedPictures() {
                if (this.showAllPictures) {
                    return this.characterPictures;
                } else {
                    if(this.characterPictures.length > 7){
                        this.btnText = 'Tampilkan Semua'
                        return this.characterPictures.slice(0, 7);
                    } else if(this.characterPictures.length > 0) {
                        this.btnText = ''
                        return this.characterPictures
                    } else {
                        return this.btnText = ''
                    }
                }
            }
        },
        methods: {
            showOrHidePictures() {
                if(this.showAllPictures === false) {
                    this.showAllPictures = true
                    this.btnText = 'Sembunyikan'
                } else {
                    this.btnText = 'Tampilkan Semua'
                    this.showAllPictures = false
                }
            }
        }
    }
</script>