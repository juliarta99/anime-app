import { createStore } from "vuex";
import axios from 'axios';

const BASEURL = import.meta.env.VITE_API_ENDPOINT;

const store = createStore({
    state: {
        err: '',
        animes: [],
        anime: [],
        selected: 1,
        search: '',
        characters: [],
        pictures: [],
        episodes: [],
        episode: [],
        recommendations: [],
        reviews: [],
        character: [],
        characterPictures: [],
        otherAktif: 1,
        showSlider: false,
        imageAktif: 0
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
        },
        setEpisodes(state, episodes) {
            state.episodes = episodes;
        },
        setRecommendations(state, recommendations) {
            state.recommendations = recommendations;
        },
        setReviews(state, reviews) {
            state.reviews = reviews;
        },
        setCharacter(state, character) {
            state.character = character;
        },
        setCharacterPictures(state, characterPictures) {
            state.characterPictures = characterPictures;
        },
        setOtherAktif(state, otherAktif) {
            state.otherAktif = otherAktif;
        },
        setEpisode(state, episode) {
            state.episode = episode;
        },
        setShowSlider(state, showSlider) {
            state.showSlider = showSlider;
        },
        setImageAktif(state, imageAktif) {
            state.imageAktif = imageAktif;
        }
    },
    actions: {
        fetchAnimeData({ commit, state }) {
            let apiEndPoint = '';
            const selected = state.selected;

            if(selected === 1) {
                apiEndPoint = BASEURL + 'top/anime?filter=bypopularity&limit=10';
            } else if(selected === 2) {
                apiEndPoint = BASEURL + 'top/anime?filter=favorite&limit=10';
            } else if(selected === 3) {
                apiEndPoint = BASEURL + 'seasons/upcoming?limit=10';
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
            axios.get(BASEURL + `anime?q=${value}&limit=10`)
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
            axios.get( BASEURL + 'random/anime')
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
            axios.get(BASEURL + `anime/${paramId}`)
                .then(res => {
                    commit('setAnime', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },
        animeCharacters({commit}, paramId) {
            axios.get(BASEURL + `anime/${paramId}/characters`)
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
            axios.get(BASEURL + `anime/${paramId}/pictures`)
                .then(res => {
                    commit('setPictures', res.data.data);
                    commit('setError', null);
                })            
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })  
        },
        animeEpisodes({commit}, paramId){
            axios.get(BASEURL + `anime/${paramId}/episodes`)
                .then(res => {
                    commit('setEpisodes', res.data.data);
                    commit('setError', null);
                })
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },     
        animeRecommendations({commit}, paramId){
            axios.get(BASEURL + `anime/${paramId}/recommendations`)
                .then(res => {
                    commit('setRecommendations', res.data.data);
                    commit('setError', null);
                })
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },     
        animeReviews({commit}, paramId){
            axios.get(BASEURL + `anime/${paramId}/reviews`)
                .then(res => {
                    commit('setReviews', res.data.data);
                    commit('setError', null);
                })
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },     
        animeCharacter({commit}, paramId){
            axios.get(BASEURL + `characters/${paramId}`)
                .then(res => {
                    commit('setCharacter', res.data.data);
                    commit('setError', null);
                })
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },     
        animeCharacterPictures({commit}, paramId){
            axios.get(BASEURL + `characters/${paramId}/pictures`)
                .then(res => {
                    commit('setCharacterPictures', res.data.data);
                    commit('setError', null);
                })
                .catch(err => {
                    console.log(err);
                    commit('setError', err.message);
                })
        },     
        animeEpisode({commit}, {idAnime, idEpisode}){
            axios.get(BASEURL + `anime/${idAnime}/episodes/${idEpisode}`)
                .then(res => {
                    commit('setEpisode', res.data.data);
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