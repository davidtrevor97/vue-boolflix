// <i  v-for="n in getVote(voto)"">
//
//
// getVote(voto) {
// 	return voto / 2;
// }
//180223961313acb0a2739bfabe754841
// <i  v-for="n in 5 - getVote(voto)">
const app = new Vue({
  el:".app",
  data:{
    actualSearch: "",
  },
  methods:{
    movieSrc(){
      axios.get("https://api.themoviedb.org/3/search/movie" , {
        params: {
          api_key: "180223961313acb0a2739bfabe754841",
          query: "revenant",
        }
      })
      .then( result => {
      console.log(result.data.results);
    })
    }
  },
  computed:{
    movieSearch(){
      axios.get("https://api.themoviedb.org/3/movie/76341?api_key=180223961313acb0a2739bfabe754841&query=ritorno+al+futuro")
      .then( result => {
        return result.filter( (movie) => {
          return movie.title.match(this.actualSearch)
        })
      })
      .catch( result => {});

    }
  }
});
