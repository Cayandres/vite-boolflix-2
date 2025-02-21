<script>
import { store } from '../data/store'
import CardVue from './partials/Card.vue'
export default {
    name: 'Main',
    components: {
        CardVue,
    },
    data() {
        return {
            CardVue,
            store
        }
    },
    methods: {
        getFlag(flag){
            if (flag) {
                card.original_language
            }
        }
    }
}
</script>

<template>
    <span class="fi fi-ja"></span> 
  <div class="container">
    <div class="card-container d-flex row">
     <CardVue v-for="card in store.filmsTrending" :key="card.id"
     :img = "card.poster_path"
     :title = "card.original_title || card.name"
     :lenguage = "card.original_language"
     :resume = card.overview
     :vote = card.vote_average
     />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>