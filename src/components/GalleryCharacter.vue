<template>
    <div>
        <h5 class="font-bold text-lg text-center mb-2">Gallery</h5>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="picture in displayedPictures" :key="picture">
                <img :src="picture.jpg.image_url" class="object-cover">
            </div>
        </div>
        <div v-if="showBtn" class="flex justify-center mt-3">
            <Button @click="showOrHidePictures">{{ handleText }}</Button>
        </div>
        <p v-if="showEmpty" class="text-center mt-2">Tidak ada data gambar karakter</p>
    </div>
</template>

<script>
    import Button from '@/components/Button.vue';

    export default{
        name: "GalleryCharacter", 
        props: ['characterPictures'],
        data() {
            return {
                showAllPictures: false,
                readMore : true,
                showBtn : true,
                maxLength: 7
            };
        },
        components:{
            Button
        },
        computed: {
            showEmpty() {
                if( this.showBtn === false  && this.characterPictures.length === 0){
                    return 1
                } return 0
            },
            displayedPictures() {
                if (this.showAllPictures) {
                    return this.characterPictures;
                } else {
                    if(this.characterPictures.length > this.maxLength){
                        this.showBtn = true
                        return this.characterPictures.slice(0, this.maxLength);
                    } else if(this.characterPictures.length > 0) {
                        this.showBtn = false
                        return this.characterPictures
                    } else if(this.characterPictures.length === 0) {
                        return this.showBtn = false
                    }
                }
            },
            handleText() {
                if(this.readMore === true) {
                    return "Tampilkan Semua"
                } else if(this.readMore === false) {
                    return "Sembunyikan"
                }
            }
        },
        methods: {
            showOrHidePictures() {
                if(this.showAllPictures === false) {
                    this.showAllPictures = true
                    this.readMore = false
                } else if(this.showAllPictures === true) {
                    this.showAllPictures = false
                    this.readMore = true
                }
            }
        }
    }
</script>