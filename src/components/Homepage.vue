<template>
  <div id="home">
       <h2>"Never forget that the best movie 
           starts when you turn off the TV.</h2>
         
       <h2>In that movie you are the protagonist."</h2>    
         <AddMovie/>
        <MovieList/>
  </div>
</template>

<script>
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

export default {
    name: "Homepage",

    component:{
        MovieList,
        AddMovie,
    }

}
</script>

<style scoped>
#home {
  background: rgba(255, 255, 255, 0.219);
  padding-top: 20px;
  padding-bottom: 240px;
  border-radius: 0px 20px ;
  margin-top: 85px;
  margin-bottom: 10px;
}

h2 {
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  color: white;
  font-size: 25px;
  margin-top: 28px;
  margin-bottom: 28px;
  padding: 50px;
}

</style>