<template>
     <select class="cursor-pointer bg-blue-200 rounded-md p-1 outline-none" v-model="selected" @change="getDataAnime">
        <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
</template>

<script>
    export default {
        name : "Selected",
        computed: {
            selected: {
                get() {
                    return this.$store.state.selected;
                },
                set(value) {
                    this.$store.commit('setSelected', value);
                }
            }   
        },
        props : ['options'],
        methods: {
            getDataAnime() {
                this.$store.dispatch('fetchAnimeData')
            }
        }
    }
</script>