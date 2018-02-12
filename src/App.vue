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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
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
  overflow-x: hidden;
}

#app {
  padding-top: 20px;
}

.content {
  text-align: center;
}

#navbar, .frame {
  animation: fadeIn 8s linear;
}

.frame {
  max-width: 720px;
  width: calc(100vw - 4px);
  height: 720px;
  margin: auto;
  margin-bottom: 10px;
  border: 2px inset #963;
}

@media (max-width: 1243px), (max-height: 801px) {
  body {
    width: 100vw;
    max-width: 724px;
  }
}

@media (max-width: 724px), (max-height: 801px) {
  .frame {
    max-width: 450px;
    width: 100vw;
    height: 450px;
  }
}

@media (max-width: 724px) {
  #app {
    padding-top: 56px;
  }

  .frame {
    border-top: 0;
  }
}
</style>
