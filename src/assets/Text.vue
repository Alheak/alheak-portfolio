<template>
  <div class="text-container">
    「 <span class="text">{{ prevText === textToDisplay ? prevText : textToDisplay.substr(0, i) }}</span><caret></caret> 」
  </div>
</template>

<script>
import Caret from './Caret.vue'

export default {
  components: {
    'caret': Caret
  },
  props: {
    textToDisplay: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      i: 1,
      interval: 60,
      prevText: ''
    }
  },
  methods: {
    displayText () {
      if (this.i < this.textToDisplay.length) {
        setTimeout(() => {
          this.textToDisplay.charAt(this.i) === '.' ? this.interval = 1000 : this.interval = 60
          this.i++
        }, this.interval)
      } else {
        this.prevText = this.textToDisplay
        this.i = 1
        this.interval = 60
      }
    }
  },
  mounted () {
    this.displayText()
  },
  updated () {
    if (this.prevText !== this.textToDisplay) {
      this.displayText()
    }
  }
}
</script>

<style>
@keyframes changePosition {
  0% {
    position: relative;
    top: -240px;
  }

  95% {
    position: relative;
    top: -240px;
  }

  100% {
    position: relative;
    top: 0;
  }
}

.text-container {
  position: relative;
  top: 0;
  transform: translateY(0);
  animation: changePosition 6s linear;
}

.text {
  white-space: pre-line;
}
</style>
