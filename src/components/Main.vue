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

    }
}
</script>

<template>
    <span class="fi fi-ja"></span> 
  <div class="container">
    <div class="card-container d-flex row">
     <CardVue v-for="card in store.tv" :key="card.id"
     :img = "card.poster_path"
     :title = "card.original_title || card.name"
     :lenguage = "card.original_language"
     :resume = card.overview
     :vote = card.vote_average
     /> 
    <h1>movie</h1>
     <CardVue v-for="card in store.movie" :key="card.id"
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