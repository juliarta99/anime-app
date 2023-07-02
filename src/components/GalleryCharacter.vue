<template>
    <div>
        <h5 class="font-bold text-lg text-center mb-2">Gallery</h5>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="(picture, index) in displayedPictures" :key="index">
                <div class="h-full overflow-hidden">
                    <img :src="picture.jpg.image_url" @click="setShowSlider(index)" class="object-cover h-full cursor-pointer hover:scale-125 hover:opacity-75 transition duration-250">
                </div>
            </div>
        </div>
        <div v-if="showBtn" class="flex justify-center mt-3">
            <Button @click="showOrHidePictures">{{ handleText }}</Button>
        </div>
        <p v-if="showEmpty" class="text-center mt-2">Tidak ada data gambar karakter</p>
        <SwiperPicture v-if="showSlider" :images="characterPictures"></SwiperPicture>
    </div>
</template>

<script>
    import Button from '@/components/Button.vue';
    import SwiperPicture from '@/components/SwiperPicture.vue';

    export default{
        name: "GalleryCharacter", 
        props: ['characterPictures'],
        data() {
            return {
                showAllPictures: false,
                readMore : true,
                showBtn : true,
                maxLength: 7,
            };
        },
        components:{
            Button,
            SwiperPicture
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
            },
            showSlider() {
                return this.$store.state.showSlider
            },
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
            },
            setShowSlider(index) {
                document.body.classList.add('overflow-hidden')
                this.$store.commit('setImageAktif', index)
                this.$store.commit('setShowSlider', true)
            }
        }
    }
</script>