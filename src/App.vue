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
        getApi(type){
            axios.get(store.apiUrl + type, {
                params: {
                    api_key: store.key,
                    query: store.searchedInput
                }
            })
            .then(result => {
                store[type] = result.data.results
                console.log(store[type]);
                
            })
        },

    },
    mounted() {
        this.getApi('tv')
        this.getApi('movie')
        console.log(store.searchedInput);
        
    }
}
</script>

<template>
    <Header @searched ="getApi('tv') , getApi('movie')"/>
    <Main />
</template>

<style lang="scss" scoped>

</style>