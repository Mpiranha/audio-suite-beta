<template>
  <div class="outter">
    <ul class="nav justify-content-center justify-content-md-start">
      <li class="nav-item">
        <span class="nav-link project-content" href="#">
          New Project
          <button
            @click="toggleNewProject"
            type="button"
            class="btn btn-project project"
          >
            +
            <div class="project-options">
              <div class="project-options-inner">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="flaticon-plus-symbol-in-a-rounded-black-square icons mr-2"></span>
                      Merge Audio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="ps-relative">
                        <span class="flaticon-support-1 icons mr-2"></span>
                        Transcribe Audio
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="flaticon-play icons mr-2"></span>
                      Audio to Visual
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="flaticon-font icons mr-2"></span>
                      Text to Audio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <span class="flaticon-voicemail icons mr-2"></span>
                      Voice mail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </button>
        </span>
      </li>
      <li class="nav-item">
        <span class="nav-link project-content" href="#">
          Saved
          <button type="button" class="btn btn-project saved">15</button>
        </span>
      </li>
      <li class="nav-item">
        <span class="nav-link project-content" href="#">
          Library
          <button type="button" class="btn btn-project library">5k</button>
        </span>
      </li>
      <li class="nav-item">
        <span class="nav-link project-content" href="#">
          Voice Mail
          <button type="button" class="btn btn-project voice-mail">
            20
            <span v-if="hasNewVoiceNotification" class="new-voice-mail-notify"></span>
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>

</style>

<script src="./main.js">

</script>
