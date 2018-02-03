<template>
  <div class="content">
    <div id="water" class="frame">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
    title: 'water sampling'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      text: 'It looks like the physics engine has broken down here.\nIt feels strangely soothing though.'
    }
  }
}
</script>

<style>
#water {
  background: url('water-sampling.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #water {
    background-image: url('water-sampling-sm.gif');
  }
}
</style>
