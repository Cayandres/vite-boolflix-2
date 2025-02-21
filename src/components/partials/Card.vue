<script>
import { store } from '../../data/store'
export default {
    name: 'Card',
    data() {
        return {
            store,
        }
    },
    props: {
        img: String,
        title: String,
        lenguage: String,
        resume: String,
        vote: Number,
    },
    methods: {
    },
}
</script>

<template>
        <div class="card m-3">
            <img :src="`https://image.tmdb.org/t/p/w500/${img}`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <img :src="`/flags/${lenguage}.svg`" class="flag" :alt="lenguage">
            <p class="card-text">{{ resume }}</p>
            <p class="card-text">vote: {{ vote.toFixed(1) }}</p>
          </div>  
        </div>   
</template>

<style lang="scss" scoped>
.card{
    width: 20%;
    .flag{
        width: 20px;
    }
}
</style>