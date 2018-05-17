<template>
  <div>
    <div id="loneliness" class="frame background-image" v-on:mousemove="trackCursor($event)" :style="{ backgroundPosition: (offset.x - windowOverflowX) + 'px ' + offset.y + 'px' }">
      <div id="overlay" class="foreground">
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
      highDPI: false,
      windowOverflowX: 0,
      eyePosition: 255,
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
      this.highDPI = window.matchMedia('(-webkit-min-device-pixel-ratio: 2) and (max-width: 724px), (min-resolution: 192dpi) and (max-width: 724px)').matches

      this.windowOverflowX = window.innerWidth <= 454 && !this.highDPI ? (225 - window.innerWidth / 2) : 0

      if (window.innerWidth <= 724 && window.innerWidth > 454) {
        this.factor = 30
      } else if (window.innerWidth <= 454 || (window.innerWidth <= 724 && this.highDPI)) {
        this.factor = 20
      } else {
        this.factor = 50
      }

      if (window.innerWidth <= 724 && window.innerWidth > 454) {
        this.eyePosition = 200
      } else if (window.innerWidth <= 454 || (window.innerWidth <= 724 && this.highDPI)) {
        this.eyePosition = 128
      } else {
        this.eyePosition = 255
      }
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
        var yCursor = e.clientY - this.eyePosition
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
  background: url('/static/eye.gif') no-repeat center center;
}

#overlay {
  height: 100%;
  background: url('/static/overlay.gif') no-repeat center center;
}

@media (max-width: 724px), (max-height: 801px) {
  #loneliness {
    background-image: url('/static/eye-sm.gif');
  }

  #overlay {
    background-image: url('/static/overlay-sm.gif');
  }
}
</style>
