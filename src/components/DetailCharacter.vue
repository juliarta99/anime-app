<template>
    <div>
        <h5 class="font-bold text-lg text-center mb-2">{{ character.name }}</h5>
        <div class="flex justify-center w-full gap-4 mb-4">
            <div class="relative w-max">
                <p class="absolute right-0 bg-yellow-300 p-2 font-semibold text-sm">{{ character.favorites }}</p>
                <img :src="character.images.webp.image_url" :alt="character.name" class="h-80 object-cover">
            </div>
            <div class="w-3/6" v-if="character.about">
                <p v-html="formatText(cekAbout)" class="text-sm text-justify"></p>
                <button v-if="textBtn" class="text-blue-500 text-sm" @click="showOrExpandSynopsis">{{ textBtn }}</button>
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
                about: '',
                pangkas: true,
                btnReadMore : true,
                textBtn: ''
            }
        },
        computed: {
            cekAbout() {
                const maxLength = 500; 
                if (this.pangkas === true && this.character.about.length > maxLength) {
                    this.about = this.character.about.slice(0, maxLength) + '...';
                    this.textBtn = 'selengkapnya';
                    return this.about
                } else if(this.pangkas === true && this.character.about.length < maxLength) {
                    this.about = this.character.about;
                    this.textBtn = '';
                    return this.about;
                }
                this.about = this.character.about;
                return this.about
            }
        },
        methods: {
            formatText(text) {
                return text.replace(/\n/g, '<br>');
            },
            showOrExpandSynopsis() {
                if(this.btnReadMore === true){
                    this.btnReadMore = false
                    this.pangkas = false
                    this.textBtn = "tutup"
                } else {
                    this.btnReadMore = true
                    this.pangkas = true
                    this.textBtn = "selengkapnya"
                }
            }
        }
    }
</script>