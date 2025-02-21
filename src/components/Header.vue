<script>
import { store } from '../data/store'
export default {
    name: 'Header',
    components: {

    },
    
    data() {
        return {
            store
        }
    },
    methods: {
        searched(){
            console.log(store.searchedInput);
            
            this.$emit('searched')
        }
    }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boolflix</a>
    <div  class="inputContainer d-flex justify-content-center">
        <input v-model="store.searchedInput" class="input" type="text">
        <button @click="searched" class="btn btn-secondary">cerca</button>
    </div>
  </div>
</nav>
</template>

<style lang="scss" scoped>
.inputContainer{
    .input{
        margin-right: 10px;
    }
}
</style>