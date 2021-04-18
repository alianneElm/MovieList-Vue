import { createStore } from "vuex";

export default createStore({
  state: {
    pelis: [
      {
        title: "Star Wars",
        rating: 5,
        genero: "Sci-Fi",
        description: "Star Wars is an American epic space operamedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon."
      },
      {
        title: "Paris, je t'aime",
        rating: 5,
        genero: "Documentary",
        description: "Is a 2006 anthology film starring an ensemble cast of actors of various nationalities. The two-hour film consists of eighteen short films set in different arrondissements."
      },
      {
        title: "Babel",
        rating: 4,
        genero: "Drama",
        description: " “Babel” weaves stories from Morocco, America, Mexico and Japan, all connected by the thoughtless act of a child, and demonstrates how each culture works against itself to compound the repercussions."
      },
    ]
  },

  mutations: {
    deleteMovie(state, theMovie){
      state.pelis = state.pelis.filter((unaPeli)=> theMovie !==unaPeli);
    },
    createMovie(state, movie){
      state.pelis.unshift(movie);
      alert("New movie added to the list!")
    }
  },
});
