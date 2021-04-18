<template>
  <div id="card">
     <h3 id="titulo">{{peli.title}}</h3> 
     <h4>{{peli.genero}}</h4>
     <h5 id="rango">Rating: {{peli.rating}}/5</h5>
     <p id="description">{{peli.description}}</p>
     <button id="delete" @click="removeMovie">Delete Movie</button>
  </div>
</template>

<script>
export default {
 
  props: ["peli"],
  methods: {
    removeMovie(){
      this.$store.commit("deleteMovie", this.peli);
    }
  },
};
</script>

<style scoped>
#card{
  background-color: rgba(234, 220, 240, 0.534);
  border-radius: 0px 20px 0px 20px;
  margin-top: 10px;
}
#titulo{
  font-family: 'Alfa Slab One', cursive;
  font-size: 25px;
  color:rgb(49, 4, 58);
  text-shadow: 1px 2px #c58ddb;
  padding: 5px;
}
#rango{
   text-shadow: 1px 2px 1px #5c365a;
  font-size: 16px;
  color:rgb(218, 49, 195);
}
#description{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 0px 20px 10px 20px;
  text-shadow: 1px 2px #c58ddb;
}
#delete{
  border-radius: 30px;
    color:blueviolet;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 14px;
    background-color:rgb(219, 196, 240);
   text-shadow: 1px 2px #c58ddb;
   margin-bottom:15px;
}

</style>
