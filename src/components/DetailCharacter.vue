<template>
    <div>
        <h5 class="font-bold text-lg text-center mb-2">{{ character.name }}</h5>
        <div class="flex sm:flex-row flex-col justify-center w-full gap-4 mb-4">
            <div class="relative w-max mx-auto sm:mx-0 w-xs">
                <p class="absolute right-0 bg-yellow-300 p-2 font-semibold text-xs sm:text-sm">{{ character.favorites }}</p>
                <img :src="character.images.webp.image_url" :alt="character.name" class="object-cover w-xs">
            </div>
            <div class="w-full sm:w-3/6 text-xs md:text-sm" v-if="character.about">
                <p v-html="formatText(cekAbout)" class="text-justify"></p>
                <button v-if="showBtn" class="text-blue-500" @click="showOrExpandAbout">{{ handleText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "DetailCharacter",
        props: ['character'],
        data() {
            return{
                maxLength: 500,
                readMore: true,
                showBtn: true,
            }
        },
        computed: {
            cekAbout() {
                if (this.readMore === true && this.character.about.length > this.maxLength) {
                    this.showBtn = true
                    return this.character.about.slice(0, this.maxLength) + '...'; 
                } else if(this.character.about.length < this.maxLength) {
                    this.showBtn = false
                    return this.character.about;
                }
                return this.character.about; 
            },
            handleText() {
                if(this.readMore === true) {
                    return "selengkapnya"
                } else if(this.readMore === false) {
                    return "tutup"
                }
            }
        },
        methods: {
            formatText(text) {
                return text.replace(/\n/g, '<br>');
            },
            showOrExpandAbout() {
                if(this.readMore === true){
                    this.readMore = false
                } else if(this.readMore === false) {
                    this.readMore = true
                }
            }
        }
    }
</script>