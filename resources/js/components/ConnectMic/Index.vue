<template>
  <div class="row">
    <div class="col-3">
      <connect-mic-steps :active="currentMicActive" :mic-active="getAudioState"></connect-mic-steps>
    </div>
    <div class="col-8">
      <connect-mic-contents></connect-mic-contents>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>
</style>

<script src="./main.js">
</script>