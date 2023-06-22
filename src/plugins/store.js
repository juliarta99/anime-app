import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
    state: {
        err: '',
        animes: [],
        anime: [],
        selected: 1,
        search: '',
        characters: [],
        pictures: []
    },
    mutations: {
        setError(state, error) {
            state.err = error;
        },
        setAnimes(state, animes) {
            state.animes = animes;
        },
        setAnime(state, anime) {
            state.anime = anime;
        },
        setSelected(state, selected) {
            state.selected = selected;
        },
        setSearch(state, search) {
            state.search = search;
        },
        setCharacters(state, characters) {
            state.characters = characters;
        },
        setPictures(state, pictures) {
            state.pictures = pictures;
        }
    },
    actions: {
        fetchAnimeData({ commit, state }) {
            let apiEndPoint = '';
            const selected = state.selected;

            if(selected === 1) {
                apiEndPoint = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10';
            } else if(selected === 2) {
                apiEndPoint = 'https://api.jikan.moe/v4/top/anime?filter=favorite&limit=10';
            } else if(selected === 3) {
                apiEndPoint = 'https://api.jikan.moe/v4/seasons/upcoming?limit=10';
            } else {
                commit('setError', 'Data tidak ditemukan');
                return;
            }

            axios.get(apiEndPoint)
                .then(res => {
                    commit('setAnimes', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError',  err.message);
                })
        },
        searchDataAnime({commit, state}) {
            const value = state.search;
            axios.get(`https://api.jikan.moe/v4/anime?q=${value}&limit=10`)
                .then(res => {
                    commit('setAnimes', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', 'Terjadi kesalahan saat mengambil data');
                })
        },
        randomAnime({commit}) {
            axios.get('https://api.jikan.moe/v4/random/anime')
                .then(res => {
                    commit('setAnimes', [res.data.data]);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError',  err.message);
                })
        },
        animeById({commit}, paramId) {
            axios.get(`https://api.jikan.moe/v4/anime/${paramId}`)
                .then(res => {
                    commit('setAnime', [res.data.data][0]);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },
        animeCharacters({commit}, paramId) {
            axios.get(`https://api.jikan.moe/v4/anime/${paramId}/characters`)
                .then(res => {
                    commit('setCharacters', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },
        animePictures({commit}, paramId) {
            axios.get(`https://api.jikan.moe/v4/anime/${paramId}/pictures`)
                .then(res => {
                    commit('setPictures', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })  
        }
    }
})

export default store