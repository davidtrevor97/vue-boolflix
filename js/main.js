// <i  v-for="n in getVote(voto)"">
//
//
// getVote(voto) {
// 	return voto / 2;
// }
//180223961313acb0a2739bfabe754841
// <i  v-for="n in 5 - getStars(voto)">
const app = new Vue({
  el:".app",
  data:{
    actualSearch: "",
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
      this.picturesArray = result.data.results;
      return result.data.results;
    })
    .catch( error => {
      console.log(error)
      this.errored = true
    } );
   },
   getStars(picturesArray){
     for (var i = 0; i < this.picturesArray.length; i++) {
       return Math.floor(this.picturesArray[i].vote_average  / 2);
     }
   },
  }
});
