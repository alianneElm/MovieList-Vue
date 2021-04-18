<template>
  <div id="list">
      
    <div v-if="pelis.length > 0">
        <MovieCard v-for="(peli, index) in pelis" :key="index" :peli="peli"/>
    </div>  
    
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
export default {
    name:"MovieList",

    components:{
        MovieCard,
    },
    computed:{
        pelis(){
            return this.$store.state.pelis;
        }
    }
}
</script>

<style scoped>
#list {
    margin-top:56px;
    background-color:rgba(255, 255, 255, 0.26);
    padding:20px;
    border-radius: 0px 20px 0px 20px;
}

</style>