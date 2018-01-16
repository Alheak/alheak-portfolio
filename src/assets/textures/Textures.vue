<template>
  <div class="content">
    <div id="textures" class="frame">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
    title: 'textures'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      text: 'Loading textures...'
    }
  },
}
</script>

<style>
#textures {
  background: url('./textures.gif') no-repeat center center;
  height: 450px !important;
}
</style>
