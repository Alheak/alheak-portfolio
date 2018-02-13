<template>
  <div class="content" :class="{'change-position': loaded}">
    <div id="home" class="frame background-image" :class="{'fade-in': loaded}">
    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    'textPrompt': TextPrompt
  },
  props: {
    loaded: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = 'Loading...'

    setTimeout(() => {
      this.text = 'Welcome.'
    }, 4000)
  }
}
</script>

<style>
#home {
  height: 720px;
  background-color: #000;
  background-image: url('./logo-alheak.gif');
  background-position: center center;
  background-repeat: no-repeat;
  border: none !important;
}

@media (max-width: 724px), (max-height: 801px) {
  #home {
    height: 450px;
    background-image: url('./logo-alheak-sm.gif');
  }
}
</style>
