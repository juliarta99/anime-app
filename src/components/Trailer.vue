<template>
    <div class="w-10/12 py-5 px-8 mx-auto mt-5 rounded-md bg-white">
        <h2 class="font-bold uppercase text-lg text-center mb-4">Trailer</h2>
        <iframe :src="animeTrailer.url + '?autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1'" frameborder="0" class="rounded-md mx-auto w-5/6 h-64" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default{
        name: 'Trailer',
        props: ['animeTrailer']
    }
</script>