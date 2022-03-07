<template>
  <div>
    <nav class="navbar navbar-dark bg-primary navbar-expand-md">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/logo.svg" alt="" height="40" class="d-inline-block align-text-center">
          Pokedex
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <footer class="py-3 bg-primary">
      <div class="container text-center text-light">
        <span class="">&copy; 2022 Pokedex</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
background-color: #0093E9;
background-image: linear-gradient(315deg, #0093E9 0%, #80D0C7 100%);
min-height: 100vh;
}
footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>