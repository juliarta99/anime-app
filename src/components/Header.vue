<template>
    <div class="grid grid-header gap-3">
        <router-link :to="{name: 'Home'}" class="font-bold text-lg xl:text-2xl lg:text-xl uppercase">Anime App</router-link>
        <Search></Search>
        <div class="flex gap-3 sm:flex-nowrap flex-wrap">
            <ButtonRandom></ButtonRandom>
            <SelectedDropdown :options="dropdownOptions"></SelectedDropdown>
        </div>
    </div>
</template>

<script>
    import Search from '@/components/Search.vue'
    import ButtonRandom from '@/components/ButtonRandom.vue'
    import SelectedDropdown from '@/components/SelectedDropdown.vue'

    export default{
        name: 'Header',
        data() {
            return {
                dropdownOptions: [
                    {value: 1, label: 'Top Populer'},
                    {value: 2, label: 'Top Favorit'},
                    {value: 3, label: 'Season Upcoming'}
                ]
            }
        },
        components: {
            Search,
            ButtonRandom,
            SelectedDropdown
        }
    }
</script>

<style scoped>
@media (min-width:800px) {
    .grid-header{
        grid-template-columns: .9fr 3fr 1.2fr;
    }
}
</style>