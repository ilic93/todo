<template>
  <div id="app" class="container">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <h1>#todo</h1>
    <div id="nav">
      <router-link to="/">All</router-link> |
      <router-link to="/active">Active</router-link> |
      <router-link to="/completed">Completed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#nav {
  padding: 2px;
  display: inline-block;
  border-bottom: 2px solid grey;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  width: 20%;
  display: inline-block;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 4px solid blue;
}
</style>
