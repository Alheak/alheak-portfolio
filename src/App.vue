<template>
  <div id="app">
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  metaInfo: {
    titleTemplate: '%s :: Alheak'
  },
  components: {
    navbar: Navbar
  }
}
</script>

<style>
@font-face {
  font-family: "PC98";
  src: url('/src/assets/fonts/tspc98.ttf');
}

body {
  position: relative;
  height: 100vh;
  margin: 0 auto;
  width: 1244px;
  font-family: "PC98", monospace;
  background-color: #000;
  color: #963;
  font-size: 15px;
  line-height: 24px;
  font-size-adjust: auto;
}

#app {
  padding-top: 20px;
}

.content {
  text-align: center;
}

.frame {
  max-width: 720px;
  width: calc(100vw - 4px);
  height: 720px;
  margin: auto;
  margin-bottom: 10px;
  border: 2px inset #963;
}

@media (max-width: 1243px) {
  body {
    width: 100vw;
    max-width: 724px;
  }
}

@media (max-width: 724px) {
  #app {
    padding-top: 56px;
  }

  .frame {
    max-width: 450px;
    width: 100vw;
    height: 450px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
}
</style>
