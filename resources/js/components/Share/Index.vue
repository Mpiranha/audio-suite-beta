<template>
  <div class="nav flex-column share-wrap">
    <span class="flaticon-share-1 icons share-icon" @click="show"></span>
    <transition name="drop">
      <ul v-if="isShowing" class="nav flex-column share-contents">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-podcast-2 icons podcast"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-facebook-1 icons facebook"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-instagram-1 icons instagram"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-tik-tok icons tiktok"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-youtube icons youtube"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-cloud icons sound-cloud"></span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>
</style>


<script src="./main.js">
</script>
