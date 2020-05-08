<template>
  <nav class="nav flex-column padding">
    <li class="nav-item" :class="active === 'connect-mic' ? 'active' : ''">
      <div class="setup-wrap mic">
        <span class="flaticon-mic icons setup-icon"></span>
        <div class="desc-text">CONNECT MIC</div>
        <span v-if="micActive" class="flaticon-tick icons mic-checked"></span>
      </div>
    </li>
    <li class="nav-item" :class="active === 'invite-member' ? 'active' : ''">
      <div class="setup-wrap invite-member">
        <span class="flaticon-plus-symbol-in-a-rounded-black-square icons setup-icon"></span>
        <div class="desc-text">INVITE MEMBER</div>
      </div>
    </li>
    <li class="nav-item" :class="active === 'share-screen' ? 'active' : ''">
      <div class="setup-wrap share">
        <span class="flaticon-share icons setup-icon"></span>
        <div class="desc-text">SHARE SCREEN</div>
      </div>
    </li>
    <li class="nav-item" :class="active === 'schedule' ? 'active' : ''">
      <div class="setup-wrap schedule-meeting">
        <span class="flaticon-event icons setup-icon"></span>
        <div class="desc-text">SHARE SCREEN</div>
      </div>
    </li>
  </nav>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>

</style>

<script src="./main.js">
</script>