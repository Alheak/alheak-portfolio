<template>
  <div class="content">
    <div id="leak" class="frame">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
    title: 'data leak'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
#leak {
  background: url('./data-leak.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #leak {
    background-image: url('./data-leak-sm.gif');
  }
}
</style>
