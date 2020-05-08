<template>
  <nav class="navbar navbar-expand-sm navbar-light audio-title-wrap">
    <div class="navbar-brand d-flex">
      <input type="text" class="form-control audio-title" v-model="audioTitle" />
      <div class="form-group">
        <select class="form-control audio-format" name id>
          <option value=".mp3">.mp3</option>
          <option></option>
          <option></option>
        </select>
      </div>
    </div>
    <div class="collapse navbar-collapse pb-2" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-save icons header-icon"></span>
            <span class="desc-text text-light">Save</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="flaticon-download icons header-icon"></span>
            <span class="desc-text text-light">Download</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link transcribe-audio">
            <span class="ps-relative">
              <span class="flaticon-support-1 icons mr-2"></span>
              Transcribe Audio
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <span class="add-wrap ml-3">
              <span class="flaticon-add icons add-icon"></span>
            </span>
          </a>
        </li>
      </ul>
      <span class="flaticon-error icons close-btn"></span>
    </div>
  </nav>
</template>



<style lang="scss" ref="stylesheet/scss" src="./style.scss" scoped>

</style>

<script src="./main.js">

</script>