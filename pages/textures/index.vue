<template>
  <div>
    <div id="textures" class="frame background-image">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
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
