<template>
    <div class="grid grid-header gap-3">
        <router-link :to="{name: 'Home'}" class="font-bold text-2xl uppercase">Anime App</router-link>
        <Search></Search>
        <ButtonRandom></ButtonRandom>
        <SelectedDropdown :options="dropdownOptions"></SelectedDropdown>
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
.grid-header{
    grid-template-columns: 1fr 3fr 1fr 1fr;
}
</style>