<script>
import { store } from '../../data/store'
export default {
    name: 'Card',
    data() {
        return {
            store,
            max: 5
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
        voteAverage(vote){
        
        return  Math.ceil(vote / 2)            
        }
    },
}
</script>

<template>
        <div  class="card m-3">
            <img :src="`https://image.tmdb.org/t/p/w500/${img}`" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <img :src="`/flags/${lenguage}.svg`" class="flag" :alt="lenguage">
            <p class="card-text">{{ resume }}</p>
            <div class="card-text vote">
                <div class="fullStar" >
                    <span>vote:</span>
                    <i v-for="n in max"
                     :key="n"  
                     :class="{'fa-solid fa-star': n <= voteAverage(vote), 'fa-regular fa-star': n > voteAverage(vote)}"
                     ></i>
                </div>  
            </div>
          </div>  
        </div>   
</template>

<style lang="scss" scoped>
.card{
    width: 20%;
    .flag{
        width: 20px;
    }
    .vote{
        display: flex;
        i{
            color: gold;
        }
    }
}
</style>