<template>
    <div class="w-10/12 py-5 px-8 mx-auto rounded-md bg-white">
        <h5 class="text-lg font-bold text-center mb-4">{{ episode.title }}</h5>
        <div class="flex gap-4 justify-center w-full">
            <div class="relative w-max flex justify-center">
                <p class="absolute top-0 right-0 p-2 bg-yellow-300 text-sm font-semibold">Episode {{ episode.mal_id }}</p>
                <img :src="anime.images.webp.image_url" :alt="anime.title">
            </div>
            <div class="w-3/6">
                <p class="text-md font-semibold">Anime : {{ anime.title }}</p>
                <p class="text-sm">Rilis pada : {{ episode.aired }}</p>
                <p class="text-sm">Durasi : {{ formattedTime }}</p>
                <p class="text-sm text-justify">{{ episode.synopsis }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'DetailEpisode',
        props: ['anime', 'episode'],
        computed: {
            formattedTime() {
                const hours = Math.floor(this.episode.duration / 3600);
                const minutes = Math.floor((this.episode.duration % 3600) / 60);
                const seconds = this.episode.duration % 60;

                let formatted = ''
                if(hours > 0) {
                    formatted += `${hours} jam`
                }
                if(minutes > 0) {
                    formatted += ` ${minutes} menit`
                }

                formatted += ` ${seconds} detik`
                return formatted
            },
        }
    }
</script>