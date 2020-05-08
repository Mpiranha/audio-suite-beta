<template>
  <nav class="nav flex-column padding py-5">
    <li class="nav-item" :class="active === 'drive' ? 'active' : ''">
      <div class="setup-wrap drive">
        <span class="flaticon-download icons setup-icon"></span>
        <div class="desc-text">SAVED TO DRIVE/DESKTOP</div>
        <span v-if="isDriveConnected" class="flaticon-tick icons drive-checked"></span>
      </div>
    </li>
    <li class="nav-item" :class="active === 'audio-platform' ? 'active' : ''">  
      <div class="setup-wrap publish-audio">
        <span class="flaticon-plus-symbol-in-a-rounded-black-square icons setup-icon"></span>
        <div class="desc-text">PUBLISH TO AUDIO PLATFORMS</div>
      </div>
    </li>
    <li class="nav-item" :class="active === 'social-media' ? 'active' : ''">
      <div class="setup-wrap share">
        <span class="flaticon-share icons setup-icon"></span>
        <div class="desc-text">SHARE TO SOCIAL MEDIA</div>
      </div>
    </li>
  </nav>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>

</style>

<script src="./main.js">
</script>