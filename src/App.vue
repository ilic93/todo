<template>
  <div id="app">
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
}

#nav {
  padding: 2px;
  display: inline-block;
  border-bottom: 2px solid grey;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 4px solid blue;
}
</style>
