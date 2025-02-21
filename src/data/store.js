import{ reactive } from 'vue'
// con questa funzione riesco a rendere globali tutti i dati che metto all'interno
export const store = reactive({

    apiUrl: 'https://api.themoviedb.org/3/search/tv',
    apiUrlTrending: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    key: '1c555d01e2b22b5cb83a63ec360a1234',
    filmsTrending: [],
    films: [],
    tvSeries: [],
    searchedInput: 'mario'

});