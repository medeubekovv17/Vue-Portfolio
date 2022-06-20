<template>
  <div id="app">
    <!-- Menu -->
    <header class="header" id="header">
    <nav class="navbar navbar-expand-md fixed-top">
    <div class="container">
    <div class="logo"><a><router-link class="navbar-brand" :to="'/main'">MS</router-link></a>
    </div>
    <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/portfolio'">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/myskills'">My Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="'/contacts'">Contacts</router-link>
        </li>
        </ul>
      </div>
     </div>
    </nav>
    </header>
    <router-view/>

  </div>
</template>

<script>

  export default {
  components: { 
  }
}
</script>

<style>
#app {
  font-family: 'Bebas Neue', cursive;
  font-family: 'Fjalla One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
}
body {
  background-color: black;
  width: 100%;
  overflow-x: hidden;
  margin: 0;
}

.navbar-nav .nav-link {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 20px;
}

.navbar-nav .nav-link:hover {
    color: #8E8CA1;
    text-transform: uppercase;
}

.navbar-expand-md .navbar-nav .nav-link {
    margin-right: 50px;
}

.logo a {
  color: black;
  font-size: 50px;
  font-family: 'Bebas Neue', cursive;
  font-family: 'Fjalla One', sans-serif;
  text-shadow: 2px 2px 4px white;
}

</style>
