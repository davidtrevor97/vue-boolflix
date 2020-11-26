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
  seriesSrc(){
    axios.get("https://api.themoviedb.org/3/search/tv" , {
      params: {
        api_key: "180223961313acb0a2739bfabe754841",
        query: this.actualSearch,
      }
    })
    .then( result => {
    this.filmsArray = this.results.concat(result);
    return this.results.concat(result);
  })
  .catch( error => {
    console.log(error)
    this.errored = true
  } );
  },
    imgSrc(){
      for (var i = 0; i < this.filmsArray.length; i++) {
      pictureUrl =  this.filmsArray[i].poster_path;
      axios.get("https://image.tmdb.org/t/p/"+"w300"+pictureUrl)
      .then( result => {
        console.log(result.data);
    })
    .catch( error => {
      console.log(error)
      this.errored = true
    } );
  }
  },
   getStars(vote){
       return Math.floor(vote / 2);
   },
  }
});
