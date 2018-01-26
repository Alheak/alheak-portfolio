<template>
  <div class="content">
    <div id="anomaly" class="frame" :class="{ boxGlitch: glitched }">
      <div id="earth" :style="{ backgroundPosition: 'right ' + offsetTop + 'px' }">
        <div id="spaceman" :class="{ glitched: glitched }" :style="{ backgroundPosition: 'center ' + (offsetTop * 10) + 'px' }"></div>
      </div>
    </div>
    <textPrompt :textToDisplay="whichText" :class="{ textGlitch: glitched }"></textPrompt>
  </div>
</template>

<script>
import TextPrompt from '../Text.vue'

export default {
  metaInfo: {
    title: 'anomaly'
  },
  components: {
    'textPrompt': TextPrompt
  },
  data () {
    return {
      offsetTop: 0,
      glitched: false,
      firstText: 'Something weird is happ- E͍Ａ̴̈́̕ﾙBg.\nﾇ玲j, Ｈ̉͗Ａ̴͕̭́̈́̉̌̆̈́̕̚͜͝lp me!',
      secondText: 'AAAAAAaaaaaaaaaaaｿ ・・̰̣͚ﾊ=$#ｧ・・ '
    }
  },
  computed: {
    whichText () {
      return this.glitched ? this.secondText : this.firstText
    }
  },
  methods: {
    parallax (e) {
      var delta = e.wheelDelta || -1 * e.deltaY // For compability

      // Changes the background position from the top depending on the direction of the scroll
      if(this.offsetTop >= 0) {
        delta < 0 ? this.offsetTop-- : this.offsetTop = 0
      } else {
        delta < 0 ? this.offsetTop-- : this.offsetTop++
      }

      if(this.offsetTop <= -69) {
        this.glitched = true
      }
    }
  },
  mounted () {
    window.addEventListener('wheel', this.parallax)
  }
}
</script>

<style>
@keyframes text-shadow-glitch {
  0% {text-shadow: 1px 1px 0 #663300;}
  4% {text-shadow: 1px 1px 0 #663300;}
  5% {text-shadow: 2px 1px 0 #663300;}
  7% {text-shadow: 2px 1px 0 #663300;}
  8% {text-shadow: 1px 1px 0 #663300;}
  10% {text-shadow: inset 1px 1px 0 #663300;}
  11% {text-shadow: inset 2px 1px 0 #663300;}
  13% {text-shadow: inset 2px 1px 0 #663300;}
  14% {text-shadow: inset 1px 1px 0 #663300;}
  19% {text-shadow: 1px 1px 0 #663300;}
  20% {text-shadow: 2px 1px 0 #663300;}
  22% {text-shadow: 2px 1px 0 #663300;}
  23% {text-shadow: 1px 1px 0 #663300;}
  32% {text-shadow: 1px 1px 0 #663300;}
  33% {text-shadow: 4px 1px 0 #669999;}
  35% {text-shadow: 4px 1px 0 #663300;}
  36% {text-shadow: 2px 1px 0 #669999;}
  38% {text-shadow: 2px 1px 0 #663300;}
  39% {text-shadow: 1px 1px 0 #663300;}
  57% {text-shadow: 1px 1px 0 #663300;}
  60% {text-shadow: -4px -1px 0 #669999;}
  63% {text-shadow: 1px 1px 0 #663300;}
  69% {text-shadow: 1px 1px 0 #663300;}
  70% {text-shadow: 2px 1px 0 #663300;}
  72% {text-shadow: 2px 1px 0 #663300;}
  73% {text-shadow: 1px 1px 0 #663300;}
  75% {text-shadow: inset 1px 1px 0 #663300;}
  76% {text-shadow: inset 2px 1px 0 #663300;}
  78% {text-shadow: inset 2px 1px 0 #663300;}
  79% {text-shadow: inset 1px 1px 0 #663300;}
  84% {text-shadow: 1px 1px 0 #663300;}
  85% {text-shadow: 2px 1px 0 #663300;}
  87% {text-shadow: 2px 1px 0 #663300;}
  88% {text-shadow: 1px 1px 0 #663300;}
  100% {text-shadow: 1px 1px 0 #663300;}
}

@keyframes box-shadow-glitch {
  0% {box-shadow: 1px 1px 0 #663300;}
  4% {box-shadow: 1px 1px 0 #663300;}
  5% {box-shadow: 2px 1px 0 #663300;}
  7% {box-shadow: 2px 1px 0 #663300;}
  8% {box-shadow: 1px 1px 0 #663300;}
  10% {box-shadow: inset 1px 1px 0 #663300;}
  11% {box-shadow: inset 2px 1px 0 #663300;}
  13% {box-shadow: inset 2px 1px 0 #663300;}
  14% {box-shadow: inset 1px 1px 0 #663300;}
  19% {box-shadow: 1px 1px 0 #663300;}
  20% {box-shadow: 2px 1px 0 #663300;}
  22% {box-shadow: 2px 1px 0 #663300;}
  23% {box-shadow: 1px 1px 0 #663300;}
  32% {box-shadow: 1px 1px 0 #663300;}
  33% {box-shadow: 4px 1px 0 #669999;}
  35% {box-shadow: 4px 1px 0 #663300;}
  36% {box-shadow: 2px 1px 0 #669999;}
  38% {box-shadow: 2px 1px 0 #663300;}
  39% {box-shadow: 1px 1px 0 #663300;}
  57% {box-shadow: 1px 1px 0 #663300;}
  60% {box-shadow: -4px -1px 0 #669999;}
  63% {box-shadow: 1px 1px 0 #663300;}
  69% {box-shadow: 1px 1px 0 #663300;}
  70% {box-shadow: 2px 1px 0 #663300;}
  72% {box-shadow: 2px 1px 0 #663300;}
  73% {box-shadow: 1px 1px 0 #663300;}
  75% {box-shadow: inset 1px 1px 0 #663300;}
  76% {box-shadow: inset 2px 1px 0 #663300;}
  78% {box-shadow: inset 2px 1px 0 #663300;}
  79% {box-shadow: inset 1px 1px 0 #663300;}
  84% {box-shadow: 1px 1px 0 #663300;}
  85% {box-shadow: 2px 1px 0 #663300;}
  87% {box-shadow: 2px 1px 0 #663300;}
  88% {box-shadow: 1px 1px 0 #663300;}
  100% {box-shadow: 1px 1px 0 #663300;}
}

#anomaly {
  position: relative;
  background-image: url('./bg-repeat.gif');
}

#earth {
  height: 100%;
  background: url('./earth.gif') no-repeat;
  background-position: right 0px;
}

#spaceman {
  height: 100%;
  background: url('./anomaly.gif') no-repeat center center;
}

.glitched {
  background-image: url('./glitch.gif') !important;
}

@media (max-width: 724px) {
  #spaceman {
    background-image: url('./anomaly-sm.gif');
  }

  .glitched {
    background-image: url('./glitch-sm.gif') !important;
  }
}

.box-shadow {
  color: #669999 !important;
  background-color: #000 !important;
  border: 1px solid;
  border-color: #669999 !important;
  border-radius: 0 !important;
  box-shadow: 1px 1px 0 #663300 !important;
}

.box-shadow:focus {
  outline: none !important;
}

.boxGlitch, .textGlitch {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

.boxGlitch {
  animation-name: box-shadow-glitch;
}

.textGlitch {
  animation-name: text-shadow-glitch;
}
</style>
