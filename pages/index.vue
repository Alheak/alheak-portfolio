<template>
  <div :class="{'change-position': loaded}">
    <div id="home" class="frame background-image" :class="{'fade-in': loaded}">
    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
    title: 'Home'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      text: '',
      loaded: false
    }
  },
  mounted () {
    this.text = 'Loading...'

    setTimeout(() => {
      this.text = 'Welcome.'
    }, 4000)

    setTimeout(() => {
      this.loaded = true
    }, 4800)
  }
}
</script>

<style>
#home {
  height: calc(50vh - 30px);
  background-color: #000;
  background-image: url('/static/logo-alheak.gif');
  background-position: center center;
  background-repeat: no-repeat;
  border: none !important;
  opacity: 0;
}

.fade-in {
  height: 720px !important;
  opacity: 1 !important;
  transition: opacity .8s, height .8s;
}

@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 724px), (min-resolution: 192dpi) and (max-width: 724px), (max-height: 801px) {
  #home {
    height: calc(50vh - 56px);
    background-image: url('/static/logo-alheak-sm.gif');
  }

  .fade-in {
    height: 450px !important;
  }
}
</style>
