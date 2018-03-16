<template>
  <div>
    <div id="loneliness" class="frame background-image" v-on:mousemove="trackCursor($event)" :style="{ backgroundPosition: (offset.x - windowWidth) + 'px ' + offset.y + 'px' }">
      <div id="overlay" class="background-image">
      </div>
    </div>
    <textPrompt :textToDisplay="whichText"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '@/components/Text.vue'

export default {
  head: {
    title: 'virtual_loneliness'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      windowWidth: 0,
      target: {
        x: 0,
        y: 0
      },
      offset: {
        x: 0,
        y: 0
      },
      factor: 50,
      reset: null,
      firstText: 'I- Is there... someone... something?...',
      secondText: '!',
      thirdText: 'It\'s gone...',
      whichText: ''
    }
  },
  methods: {
    setClientVariables () {
      this.windowWidth = window.innerWidth <= 450 ? (225 - window.innerWidth / 2) : 0
      this.factor = window.innerWidth <= 724 ? 30 : 50
    },
    resetPosition () {
      this.reset = setTimeout(() => {
        this.whichText = this.thirdText
        this.target.x = 0
        this.target.y = 0
      }, 4000)
    },
    trackCursor (e) {
      this.whichText = this.secondText

      setTimeout(() => {
        var xCursor = e.clientX - (window.innerWidth / 2)
        var yCursor = e.clientY - (window.innerWidth <= 724 ? 200 : 255)
        var xTrigo = Math.round(this.factor * Math.sin(Math.atan(xCursor / Math.abs(yCursor))))
        var yTrigo = Math.round(this.factor * Math.sin(Math.atan(yCursor / Math.abs(xCursor))))

        this.target.x = (Math.abs(xCursor) > Math.abs(xTrigo) && xCursor !== 0) ? xTrigo : xCursor
        this.target.y = (Math.abs(yCursor) > Math.abs(yTrigo) && yCursor !== 0) ? yTrigo : yCursor
      }, 100)

      clearTimeout(this.reset)
      this.resetPosition()
    }
  },
  mounted () {
    this.whichText = this.firstText

    this.setClientVariables()

    setInterval(() => {
      if (this.offset.x !== this.target.x || this.offset.y !== this.target.y) {
        var xProximity = Math.round(Math.sqrt(Math.abs(this.target.x - this.offset.x)))
        var yProximity = Math.round(Math.sqrt(Math.abs(this.target.y - this.offset.y)))

        this.offset.x += this.offset.x > this.target.x ? -xProximity : xProximity
        this.offset.y += this.offset.y > this.target.y ? -yProximity : yProximity
      }
    }, 1000 / 60)
  }
}
</script>

<style>
#loneliness {
  background: url('./eye.gif') no-repeat center center;
}

#overlay {
  height: 100%;
  background: url('./overlay.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #loneliness {
    background-image: url('./eye-sm.gif');
  }

  #overlay {
    background-image: url('./overlay-sm.gif');
  }
}
</style>
