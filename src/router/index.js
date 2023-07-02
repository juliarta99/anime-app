import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AnimeView from '@/views/AnimeView.vue'
import CharacterView from '@/views/CharacterView.vue'
import EpisodeView from '@/views/EpisodeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Anime App'
        }
    },
    {
        path: '/anime/:id',
        name: 'getAnime', 
        component: AnimeView,
        meta: {
            title: 'Anime'
        }
    },
    {
        path: '/character/:id',
        name: 'getCharacter', 
        component: CharacterView,
        meta: {
            title: 'Karakter'
        }
    },
    {
        path: '/anime/:idAnime/episode/:idEpisode',
        name: 'getEpisode', 
        component: EpisodeView,
        meta: {
            title: 'Episode'
        }
    },
]


const router = createRouter({
    history : createWebHistory(),
    routes,
})

router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router