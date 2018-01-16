<template>
  <div class="content">
    <div id="home" class="frame">
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
  data () {
    return {
      text: 'Welcome.'
    }
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

@media (max-width: 724px) {
  #home {
    height: 450px;
    background-image: url('./logo-alheak-sm.gif');
  }
}
</style>
