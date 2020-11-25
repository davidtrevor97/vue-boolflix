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
  },
  created(){
    axios.get("https://api.themoviedb.org/3/movie/76341?api_key=180223961313acb0a2739bfabe754841")
    .then( result => {
    })
    .catch( result => {});
  },
  methods:{

  },
});
