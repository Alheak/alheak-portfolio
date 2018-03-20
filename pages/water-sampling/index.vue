<template>
  <div>
    <div id="water" class="frame background-image">

    </div>
    <textPrompt :textToDisplay="text"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
    title: 'water_sampling'
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
  background: url('/static/water-sampling.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #water {
    background-image: url('/static/water-sampling-sm.gif');
  }
}
</style>
