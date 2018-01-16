<template>
  <div class="content">
    <div id="contact" class="frame">
      <div class="infos">
        <p>
          E-mail:<br>
          alheak@gmail.com
        </p>
        <p>
          Facebook:<br>
          <a href="https://facebook.com/alheak" target="_blank">facebook.com/alheak</a>
        </p>
        <p>
          Twitter:<br>
          <a href="https://twitter.com/AlheakVapor" target="_blank">@AlheakVapor</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TextPrompt from './Text.vue'

export default {
  metaInfo: {
    title: 'Contact'
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
#contact {
  border: none !important;
}

.infos {
  position: relative;
  top: 360px;
  transform: translateY(-50%);
}

.infos p {
  margin: 0;
  padding-bottom: 10px;
}
</style>
