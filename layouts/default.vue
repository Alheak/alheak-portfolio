<template>
  <div id="app">
    <transition name="content" mode="out-in">
      <div class="content">
        <nuxt/>
      </div>
    </transition>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  head: {
    titleTemplate: '%s :: Alheak',
    meta: [
      {
        property: 'og:image',
        content: '/logo-alheak-sm.gif'
      }
    ]
  },
  components: {
    navbar: Navbar
  }
}
</script>

<style>
@font-face {
  font-family: 'Anonymous Pro';
  src: url('../static/AnonymousPro-Regular.ttf');
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
    width: 227px !important;
    height: 225px !important;
    background-size: contain !important;
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
