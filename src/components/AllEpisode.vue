<template>
    <div>
        <h2 class="text-lg font-bold uppercase mb-3 text-center">Episode</h2>
        <div class="grid grid-cols-7 gap-4">
            <div v-for="episode in episodes" :key="episode">
                <p class="text-sm italic">Episode {{ episode.mal_id }}</p>
                <h5 class="text-sm font-semibold">{{ episode.title }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'AllEpisode',
        props: ['episodes']
    }
</script>