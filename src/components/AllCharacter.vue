<template>
    <div v-if="showCharacters" class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Karakter</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="character in displayedCharacters" :key="character.character.mal_id" class="p-2">
                <router-link :to="{name: 'getCharacter', params: {id: character.character.mal_id}}">
                    <img :src="character.character.images.jpg.image_url" class="w-20 mx-auto rounded-sm mb-1">
                    <p class="text-xs text-center opacity-50">{{ character.role }}</p>
                    <p class="text-sm font-semibold text-center">{{ character.character.name }}</p>
                </router-link>
            </div>
        </div>
        <div v-if="btnText" class="flex justify-center">
            <button class="px-3 py-1 bg-blue-500 rounded-md text-sm font-semibold" @click="showOrHideCharacters">{{ btnText }}</button>
        </div>
        <p v-if="!btnText" class="text-center">Tidak ada data karakter</p>
    </div>
</template>

<script>
    export default{
        name: 'AllCharacter',
        props: ['characters'],
        data() {
            return {
                showCharacters: true,
                showAllCharacters: false,
                btnText : ''
            };
        },
        computed: {
            displayedCharacters() {
                if (this.showAllCharacters) {
                    return this.characters;
                } else {
                    if(this.characters.length > 14){
                        this.btnText = 'Tampilkan Semua'
                        return this.characters.slice(0, 14);
                    } else if(this.characters.length > 0) {
                        this.btnText = true
                        return this.characters
                    } else {
                        return this.btnText = ''
                    }
                }
            }
        },
        methods: {
            showOrHideCharacters() {
                if(this.showAllCharacters === false) {
                    this.showAllCharacters = true
                    this.btnText = 'Sembunyikan'
                } else {
                    this.btnText = 'Tampilkan Semua'
                    this.showAllCharacters = false
                }
            }
        }
    }
</script>