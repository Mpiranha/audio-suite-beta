<template>
  <div class="container">
    <div v-if="currentSetting === 'drive'" class="container-fluid x-padding">
      <form action method="post">
        <div class="row">
          <div class="col-12">
            <div class="d-flex">
              <label for="audio-title">project title:</label>
              <input
                type="text"
                class="form-control audio-title"
                v-model="audioTitle"
                id="audio-title"
                name="audio-title"
              />
              <div class="form-group mb-0 py-1 d-flex">
                <select class="form-control audio-format mr-3" name id>
                  <option value=".mp3">.mp3</option>
                  <option></option>
                  <option></option>
                </select>
                <label for="audio-format">Converter</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 no-gutters mt-5">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%;"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="col-12 mt-4 no-gutters">
          <ul class="nav flex-column">
            <li class="nav-item">
              <div class="nav-link d-flex justify-content-between">
                <p class="publish-items">Save Project to Drive</p>
                <span class="flaticon-save icons save-icon"></span>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link d-flex justify-content-between">
                <p class="publish-items">Download project to PC</p>
                <span class="flaticon-download icons save-icon"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="d-flex justify-content-end mt-3">
          <button type="button" class="btn btn-next" @click="nextStep">Next</button>
        </div>
      </form>
    </div>
    <div v-else-if="currentSetting === 'audio-platform'" class="container-fluid">
      <div class="row">
        <div class="col-2">
          <ul class="nav flex-column align-items-center audio-platforms">
            <li class="nav-item">
              <span class="flaticon-podcast-2 icons audio-platform-icons podcast">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
            <li class="nav-item">
              <span class="flaticon-youtube icons audio-platform-icons youtube">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
            <li class="nav-item">
              <span class="flaticon-cloud icons audio-platform-icons sound-cloud">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-5">
          <h5 class="title">Edit Post</h5>
          <hr />
          <h5 class="title mb-0">Post Schedule Setup</h5>
          <small class="text-muted">Customise your post</small>
          <div class="form-group">
            <label for="audio-url">Audio to Share</label>
            <input
              type="url"
              name="audio-url"
              id="audio-url"
              class="form-control"
              placeholder="audio url"
            />
          </div>
          <div class="form-group">
            <label for="audio-thumbnail">Upload audio thumbnail</label>
            <input type="file" class="form-control-file" name id placeholder />
          </div>
          <div class="form-group">
            <label for="content-share">Content to Share</label>
            <textarea class="form-control" name="content-share" id="content-share" rows="3">Share this</textarea>
          </div>
        </div>
        <div class="col-5">
          <h5 class="title mb-0">Schedule</h5>
          <small class="text-muted">Set a time too post</small>
          <div class="form-group">
            <label for></label>
            <select class="form-control" name id>
              <option value="post-later">Post Later</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <datetime
            v-model="audioDate"
            input-id="startDate"
            type="datetime"
            inputClass="form-control"
            class="date-picker"
          ></datetime>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <button type="button" class="btn btn-next" @click="nextStep">Next</button>
      </div>
    </div>
    <div v-else-if="currentSetting === 'social-media'" class="container-fluid">
      <div class="row">
        <div class="col-2">
          <ul class="nav flex-column align-items-center audio-platforms">
            <li class="nav-item">
              <span class="flaticon-facebook-1 icons audio-platform-icons facebook">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
            <li class="nav-item">
              <span class="flaticon-instagram-1 icons audio-platform-icons instagram">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
            <li class="nav-item">
              <span class="flaticon-tik-tok icons audio-platform-icons tiktok">
                <span class="flaticon-tick icons checked"></span>
              </span>
            </li>
          </ul>
        </div>
        <div class="col-5">
          <h5 class="title">Edit Post</h5>
          <hr />
          <h5 class="title mb-0">Post Schedule Setup</h5>
          <small class="text-muted">Customise your post</small>
          <div class="form-group">
            <label for="audio-url">Audio to Share</label>
            <input
              type="url"
              name="audio-url"
              id="audio-url"
              class="form-control"
              placeholder="audio url"
            />
          </div>
          <div class="form-group">
            <label for="audio-thumbnail">Upload audio thumbnail</label>
            <input type="file" class="form-control-file" name id placeholder />
          </div>
          <div class="form-group">
            <label for="content-share">Content to Share</label>
            <textarea class="form-control" name="content-share" id="content-share" rows="3">Share this</textarea>
          </div>
        </div>
        <div class="col-5">
          <h5 class="title mb-0">Schedule</h5>
          <small class="text-muted">Set a time too post</small>
          <div class="form-group">
            <label for></label>
            <select class="form-control" name id>
              <option value="post-later">Post Later</option>
              <option></option>
              <option></option>
            </select>
          </div>
          <datetime
            v-model="socialMediaDate"
            input-id="startDate"
            type="datetime"
            inputClass="form-control"
            class="date-picker"
          ></datetime>
        </div>
      </div>
      <div class="d-flex w-100 justify-content-end mt-3">
        <button type="button" class="btn btn-next px-3">Cancel</button>
        <button type="button" class="btn btn-primary ml-4">Schedule</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>
</style>

<script src="./main.js">
</script>