<template>
<div id="todo">
  <div id="header">
    <h1>MovieList</h1>
  </div>  
    <nav id="navbar">
    <router-link to="/">Home</router-link> 
    <router-link to="/add">Add Movie</router-link>
    <router-link to="/list">Movie List</router-link> 
    </nav>
 
  <router-view />
</div>
</template>
<script>

export default {
  components: {
  },
};
</script>

<style scoped>
* {
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
}
#todo{
  background-image: url("./assets/cine.jpg");
   text-align: center;
   background-size: cover;
    
}
#header, h1 {
  padding: 25px;
  font-size: 60px;
  font-family: Avenir, Helvetica, Arial,;
  text-shadow: 2px 2px 3px #ee9ce3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ede5f1;
  
}

#navbar {
  font-size: 25px;
  padding: 15px;
}

#navbar a {
 
  color: #2c3e50;
  text-decoration: none;
  color: #ede5f1;
}
#navbar > a:hover{
  font-size: 26px;
  text-shadow: 2px 2px 2px #dfb3dc;
}
#navbar > a.router-link-exact-active {
  color: #dc57e0;
  text-shadow: 2px 1px 2px #ffffff;
}

</style>
