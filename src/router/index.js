import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AnimeView from '@/views/AnimeView.vue'
import CharacterView from '@/views/CharacterView.vue'
import EpisodeView from '@/views/EpisodeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/anime/:id',
        name: 'getAnime', 
        component: AnimeView
    },
    {
        path: '/character/:id',
        name: 'getCharacter', 
        component: CharacterView
    },
    {
        path: '/anime/:idAnime/episode/:idEpisode',
        name: 'getEpisode', 
        component: EpisodeView
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router