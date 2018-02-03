<template>
  <div class="content">
    <div id="uploading" class="frame">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
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
  background: url('./uploading.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #uploading {
    background-image: url('./uploading-sm.gif');
  }
}
</style>
