import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AnimeView from '@/views/AnimeView.vue'
import CharacterView from '@/views/CharacterView.vue'

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
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router