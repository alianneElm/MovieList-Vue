<template>
  <div id="add">
      
      <form>
        <h3>Title</h3>
        <input id="titulo" type="text" v-model="title"/>

        <h3>Rating:  {{rating}}</h3>
        <input id="rango" type="range" v-model="rating" min="1" max="5"/>

        <h3>Genre</h3>
        <select id="genero" v-model="genero">
            <option v-for="(genero, index) in generos" :key="index">
                {{genero}}
            </option>
        </select>

            <h3>Description</h3>
        <textarea
        id="description"
        cols="40"
        rows="10"
        v-model="description"
        ></textarea>  
      </form> 
      <button id="adding" @click="newMovie">Add Movie</button>   
  </div>
</template>

<script>
export default {
name: "AddMovie",

data(){
    return {
        title: "",
        rating: "",
        genero: "",
        description: "",
        generos:[
            "Comedy", 
            "Romance", 
            "Action", 
            "Drama", 
            "Documentary", 
            "Sci-Fi",
        ] 
    };
},

methods: {
    newMovie(){
        let movie = {
            title: this.title,
            rating: this.rating,
            genero: this.genero,
            description: this.description
        }
        this.$store.commit("createMovie", movie);
        this.$router.push("/list")
    },
  },
}
</script>

<style scoped>
#add {
    margin-top:56px;
    background-color:rgba(255, 255, 255, 0.26);
    padding:1px;
    border-radius: 0px 20px 0px 20px;
}
h3{
    text-align:center;
    margin-top:56px;
    margin-bottom: 5px;
    color: white;
    font-size: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
}
#titulo, #genero, #rango {
   border-radius: 20px;
   padding: 3px;
   width: 150px; 
}
#description{
     border-radius: 0px 20px 0px 20px;
     width: 500px; 
     margin-bottom: 10px;
}
#adding{
    border-radius: 30px;
    color:blueviolet;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 15px;
    background-color:rgb(219, 196, 240);
   text-shadow: 1px 2px #c58ddb;
   margin-bottom:65px;
}


 
</style>