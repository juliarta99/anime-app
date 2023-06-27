<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Karakter</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="character in characters" :key="character.character.mal_id" class="p-2">
                <router-link :to="{name: 'getCharacter', params: {id: character.character.mal_id}}">
                    <img :src="character.character.images.jpg.image_url" class="w-20 mx-auto rounded-sm mb-1">
                    <p class="text-xs text-center opacity-50">{{ character.role }}</p>
                    <p class="text-sm font-semibold text-center">{{ character.character.name }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AllCharacter',
        props: ['characters'],
    }
</script>