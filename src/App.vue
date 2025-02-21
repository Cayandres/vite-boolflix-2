<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import SearchBar from './components/partials/SearchBar.vue'
import { store } from './data/store'
import axios from 'axios';

export default {
    components: {
        Header,
        Main,
        Footer,
        SearchBar
    },
    data() {
        return {
            Header,
            Main,
            Footer,
            SearchBar,
            store
        }
    },
    methods: {
        getApi(){
            axios.get(store.apiUrl, {
                params: {
                    api_key: store.key,
                    query: store.searchedInput
                }
            })
            .then(result => {
                store.filmsTrending = result.data.results
                console.log(store.filmsTrending);
                
            })
        },

        ciao(){
            console.log('mi hai cliccato');
            
        }
    },
    mounted() {
        this.getApi()
        console.log(store.searchedInput);
        
    }
}
</script>

<template>
    <Header @searched ="getApi"/>
    <Main />
</template>

<style lang="scss" scoped>

</style>