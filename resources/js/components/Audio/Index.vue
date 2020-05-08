<template>
  <div class="col-6">
    <av-waveform
      class="audio-wrap"
      custom-control-play="flaticon-play-button icons control-icon"
      custom-control-pause="flaticon-player icons control-icon"
      audio-src="/audio/file_example_MP3_700KB.mp3"
      :playtime-clickable="true"
      :audio-controls="false"
      audio-title="David Beckham"
      audio-title-class="audio-title"
      canv-class="canvas-wave"
      :played-line-width="1"
      played-line-color="#ebe9ec"
      :noplayed-line-width="0.7"
      noplayed-line-color="#c1c1c1"
    ></av-waveform>
  </div>
</template>

<style lang="scss" rel='stylesheet/scss' src="./style.scss">
body {
  color: #c1c1c1;
}
</style>



<script src="./main.js">
</script>
