<template>
  <div>
    <div id="uploading" class="frame background-image">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
    title: 'uploading'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      text: 'Uploading...'
    }
  },
}
</script>

<style>
#uploading {
  background: url('/static/uploading.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #uploading {
    background-image: url('/static/uploading-sm.gif');
  }
}
</style>
