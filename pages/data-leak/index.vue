<template>
  <div>
    <div id="leak" class="frame background-image">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
    title: 'data_leak'
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
  background: url('/static/data-leak.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #leak {
    background-image: url('/static/data-leak-sm.gif');
  }
}
</style>
