<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Karakter</h2>
        <div class="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 grid-cols-xs gap-4">
            <div v-for="character in characters" :key="character.character.mal_id" class="p-2">
                <router-link :to="{name: 'getCharacter', params: {id: character.character.mal_id}}">
                    <img :src="character.character.images.jpg.image_url" class="w-full hover:grayscale transition duration-250 object-cover mx-auto rounded-sm mb-1">
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