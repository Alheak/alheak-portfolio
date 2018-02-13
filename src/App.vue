<template>
  <div id="app">
    <router-view :loaded="loaded"></router-view>
    <navbar :class="{'fade-in': loaded}"></navbar>
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
  },
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.loaded = true
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');

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

@keyframes changePosition {
  0% {
    position: relative;
    top: -240px;
  }

  96.5% {
    position: relative;
    top: -240px;
  }

  100% {
    position: relative;
    top: 0;
  }
}

body {
  position: relative;
  height: 100vh;
  margin: 0 auto;
  width: 1244px;
  font-family: "Anonymous Pro", monospace;
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

.change-position {
  animation: changePosition 6s ease-out;
}

.fade-in {
  animation: fadeIn 8s ease-out;
}

.content {
  text-align: center;
}

.frame {
  max-width: 724px;
  width: 100vw;
  height: 720px;
  margin: auto;
  margin-bottom: 10px;
  border: 2px inset #963;
  box-sizing: border-box;
}

@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 724px), (min-resolution: 192dpi) and (max-width: 724px) {
  .background-image {
    width: 225px !important;
    height: 225px !important;
    background-size: contain;
  }
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
