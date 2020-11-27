// <i  v-for="n in getVote(voto)"">
//
//
// getVote(voto) {
// 	return voto / 2;
// }
//180223961313acb0a2739bfabe754841
// this.results.concat(res)
const app = new Vue({
  el:".app",
  data:{
    actualSearch: "",
    filmsArray: [],
    pictureUrl: "",
    picturesArray: [],
    genresArray:[],
    actualGenre: "",
  },
  methods:{
    movieSrc(){
      axios.get("https://api.themoviedb.org/3/search/movie" , {
        params: {
          api_key: "180223961313acb0a2739bfabe754841",
          query: this.actualSearch,
        }
      })
      .then( result => {
      this.filmsArray = result.data.results;
      return result.data.results;
    })
    .catch( error => {
      console.log(error)
      this.errored = true
    } );
  },
   getStars(vote){
       return Math.floor(vote / 2);
   },
   getGenres(){
     axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=180223961313acb0a2739bfabe754841&language=it")
     .then( result => {
       console.log(result.data);
       this.genresArray = result.data.genres;
       return  result.data;
     })
     .catch( error => {
       console.log(error)
       this.errored = true
     } );
   },
   filteredGenres(actualGenre){
     console.log(actualGenre);
     console.log(this.filmsArray);
     this.filmsArray = this.filmsArray.filter( (film) => {
       return film.genre_ids === actualGenre;
     })
   },
   getActualGenre(genre){
     this.actualGenre = genre;
   }
  }
});

// seriesSrc(){
//   axios.get("https://api.themoviedb.org/3/search/tv" , {
//     params: {
//       api_key: "180223961313acb0a2739bfabe754841",
//       query: this.actualSearch,
//     }
//   })
//   .then( result => {
//   this.filmsArray = this.results.concat(result);
//   return this.results.concat(result);
// })
// .catch( error => {
//   console.log(error)
//   this.errored = true
// } );
// },
