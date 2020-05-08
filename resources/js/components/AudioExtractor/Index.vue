<template>
  <div class="container-fluid">
    <div class="bg-dark outter-wrap">
      <div class="row align-items-center">
        <div class="col-12 col-md-8">
          <div class="form-group form-wrap">
            <input
              type="url"
              class="form-control url-input"
              name="video-url"
              id="video-url"
              placeholder="video url"
            />
            <button
              type="button"
              name="btn-video-url"
              id="btn-video-url"
              class="btn btn-primary btn-md btn-block btn-vid-url"
            >Extract Audio</button>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="d-flex justify-content-between">
            <ul class="nav justify-content-center flex-nowrap">
              <li class="nav-item">
                <a
                  v-if="isRecording"
                  @click="toggleRecord"
                  class="nav-link btn text-light d-flex align-items-center"
                  href="#"
                >
                  <span class="mr-2">Rec</span>
                  <span class="flaticon-circle icons recording"></span>
                </a>
                <a
                  v-else
                  @click="toggleRecord"
                  class="nav-link btn text-light d-flex align-items-center"
                  href="#"
                >
                  <span class="mr-2">Rec</span>
                  <span class="record-wrap">
                    <span class="flaticon-circle icons record"></span>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn" href="#">
                  <span v-if="isPlaying" @click="playOrPause" class="flaticon-pause icons pause"></span>
                  <span v-else @click="playOrPause" class="flaticon-play icons play"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn" href="#">
                  <span @click="stopAudio" class="flaticon-stop icons stop"></span>
                </a>
              </li>
            </ul>

            <ul class="nav justify-content-center">
              <li class="nav-item">
                <span class="nav-link btn px-0" href="#">
                  <span class="flaticon-show-more-button-with-three-dots icons more"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" ref="stylesheet/scss" src="./style.scss" scoped>

</style>

<script src="./main.js">

</script>
