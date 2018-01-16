<template>
  <span>{{ caret }}</span>
</template>

<script>
export default {
  data () {
    return {
      caret: '＿'
    }
  },
  mounted () {
    setInterval(() => {
      this.caret = (this.caret === '＿') ? '　' : '＿'
    }, 500)
  }
}
</script>
