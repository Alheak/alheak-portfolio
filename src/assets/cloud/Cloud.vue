<template>
  <div class="content">
    <div id="city" class="frame background-image">
      <div id="cloud" class="background-image" :class="{ visible: connected }">
        <button type="button" class="button" v-on:click="load" v-if="!connected" :class="{ fadeOut: i == 100 }">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'the cloud'
  },
  data () {
    return {
      connected: false,
      buttonText: "Connect to the Cloud",
      i: 0
    }
  },
  methods: {
    load () {
      if(this.i < 100) {
        setTimeout(() => {
          this.buttonText = this.i + '%'
          this.i++
          this.load()
        }, ((Math.random() * 10) * (Math.random() * 20)))
      } else {
        this.connect()
      }
    },
    connect () {
      this.buttonText = "Connected"

      setTimeout(() => { this.connected = true }, 1000)
    }
  }
}
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#city {
  background-color: #000;
  background-image: url('./bg.gif');
  background-position: center bottom;
  background-repeat: no-repeat;
}

#cloud {
  height: 100%;
}

.visible {
  background-image: url('./the-cloud.gif');
  background-position: center top;
  background-repeat: no-repeat;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-iteration-count: 1;
}

@media (max-width: 724px), (max-height: 801px) {
  #city {
    background-image: url('./bg-sm.gif');
  }

  .visible {
    background-image: url('./the-cloud-sm.gif');
  }
}

.button {
  display: block;
  position: relative;
  top: 50%;
  font-family: "Abel", monospace;
  background-color: #000;
  color: #963;
  border: 2px outset #963;
  padding: 8px;
  margin: auto;
  transform: translateY(-50%);
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button:active {
  border: 2px inset #963;
}

fadeOut {
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-direction: reverse;
}
</style>
