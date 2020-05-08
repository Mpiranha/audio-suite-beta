<template>
  <div class="container">
    <div v-if="currentSetting === 'connect-mic'" class="container-fluid x-padding">
      <div class="d-flex justify-content-between">
        <div class="title">Speaker</div>
        <div class="d-flex flex-column flex-grow-1">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-test"
              @click="startSpeakerTest"
            >{{!isTestingSpeaker ? 'Test' : 'Stop'}}</button>
            <div class="select-wrap ml-5">
              <select name="device-mic" id="device-mic">
                <option value="default">Built-in output (Internal Speaker)</option>
              </select>
              <span class="flaticon-up-and-down icons custom-icon"></span>
            </div>
          </div>
          <div class="d-flex mt-3 justify-content-end">
            <div class="sub-title mr-3">Output Level:</div>
            <div class="pids-wrapper-speaker">
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
            </div>
          </div>
          <div class="d-flex mt-3 justify-content-end">
            <div class="sub-title mr-3">Output Volume:</div>
            <div class="d-flex volume-wrap">
              <span class="flaticon-volume icons icon-speaker"></span>
              <input
                class="form-control volume-range"
                type="range"
                name="speaker-volume"
                id="speaker-volume"
                v-model="speakerVolume"
                @change="updateSpeakerVolume"
                min="0"
                max="100"
              />
              <span class="flaticon-speaker icons icon-speaker"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <div class="title">Microphone</div>
        <div class="d-flex flex-column flex-grow-1">
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-test"
              @click="startTest"
            >{{!isTestingMic ? 'Test' : 'Stop'}}</button>
            <div class="select-wrap ml-5">
              <select name="device-mic" id="device-mic">
                <option value="default">Built-in microphone (Internal Microphone)</option>
              </select>
              <span class="flaticon-up-and-down icons custom-icon"></span>
            </div>
          </div>
          <div class="d-flex mt-3 justify-content-end">
            <div class="sub-title mr-3">Input Level:</div>
            <div class="pids-wrapper">
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
              <div class="pid"></div>
            </div>
          </div>
          <div class="d-flex mt-3 justify-content-end">
            <div class="sub-title mr-3">Input Volume:</div>
            <div class="d-flex volume-wrap">
              <span class="flaticon-volume icons icon-speaker"></span>
              <input
                class="form-control volume-range volume-range-mic"
                type="range"
                name="mic-decibel"
                id="mic-decibel"
                v-model="micDecibel"
                @change="updateAudioDecibel"
                min="-120"
                max="-80"
              />
              <span class="flaticon-speaker icons icon-speaker"></span>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-2">
            <label class="checkbox-container workspace-checkbox">
              <input type="checkbox" name="select-all" id="select-all" />
              <span class="checkmark"></span>
              <span>Automatically adjust microphone volume</span>
            </label>
          </div>
        </div>
      </div>
      <div class="form-check form-check-block mt-4">
        <label class="checkbox-container workspace-checkbox">
          <input type="checkbox" name="simultaneous-audio" id="simultaneous-audio" />
          <span class="checkmark"></span>
          <span>Use seperate audio devices to play ringtone simultaneously</span>
        </label>
      </div>
      <hr />
      <div class="form-check form-check-block my-2">
        <label class="checkbox-container workspace-checkbox">
          <input type="checkbox" name="join-audio-checkbox" id="join-audio-checkbox" />
          <span class="checkmark"></span>
          <span>Join audio by computer when joining a meeting</span>
        </label>
      </div>
      <div class="form-check form-check-block my-2">
        <label class="checkbox-container workspace-checkbox">
          <input type="checkbox" name="mute-mic-checkbox" id="mute-mic-checkbox" />
          <span class="checkmark"></span>
          <span>Mute microphone when joining a meeting</span>
        </label>
      </div>
      <div class="form-check form-check-block my-2">
        <label class="checkbox-container workspace-checkbox">
          <input type="checkbox" name="space-unmute-checkbox" id="space-unmute-checkbox" />
          <span class="checkmark"></span>
          <span>Press and hold SPACE key to temporally unmute yourself</span>
        </label>
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-next" @click="nextStep">Next</button>
      </div>
    </div>
    <div v-else-if="currentSetting === 'invite-member'" class="container-fluid x-padding">
      <div class="header-title">Add Team Member</div>
      <form action method="post">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                class="form-control"
                placeholder="First Name"
                v-model="firstName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="last-name">Last Name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                class="form-control"
                placeholder="Last Name"
                v-model="lastName"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="user@domain.com"
                v-model="email"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for>Team Member Role</label>
              <div class="select-custom">
                <select class="form-control" name="member-role" id="member-role">
                  <option value="administrator">Administrator</option>
                  <option value="collaborator">Collaborator</option>
                  <option value="approver">Approver</option>
                </select>
                <span class="flaticon-up-and-down icons custom-icon"></span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for>User Type</label>
              <div class="select-custom">
                <select class="form-control" name="member-role" id="user-type">
                  <option selected value="team">Team</option>
                  <option value="collaborator">Collaborator</option>
                  <option value="approver">Approver</option>
                </select>
                <span class="flaticon-up-and-down icons custom-icon"></span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <p class="inner-title mb-0">Select Workspace(s)</p>
            <p class="inner-sub-title">Select the workspace to add your team member into.</p>
          </div>
          <div class="col-12">
            <div class="workspaces-wrap">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="nav-link" href="#">Slect All</span>
                  <label class="checkbox-container workspace-checkbox">
                    <input type="checkbox" name="select-all" id="select-all" />
                    <span class="checkmark workspace-select-checkbox"></span>
                  </label>
                </li>
                <li class="nav-item">
                  <span class="nav-link" href="#">Fastly Delivery</span>
                  <label class="checkbox-container workspace-checkbox">
                    <input type="checkbox" name="fast-delivery" id="fast-delivery" />
                    <span class="checkmark workspace-select-checkbox"></span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <button type="button" class="btn btn-add">Add</button>
              <button type="button" class="btn btn-next" @click="nextStep">Next</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div v-else-if="currentSetting === 'share-screen'" class="container-fluid x-padding">
      <div class="py-4 px-5">
        <div class="form-group">
          <label for="share-screen-input">
            <h1 class="title-share">Share Screen</h1>
          </label>
          <input
            type="text"
            name="share-screen-input"
            id="share-screen-input"
            class="form-control share-screen-input"
            placeholder="Share Key or Meeting ID"
          />
        </div>
        <div class="d-flex justify-content-between mt-5">
          <button type="button" class="btn btn-next">Cancel</button>
          <button type="button" class="btn btn-share">Share Screen</button>
          <button type="button" class="btn btn-next" @click="nextStep">Next</button>
        </div>
      </div>
    </div>
    <div v-else-if="currentSetting === 'schedule'" class="container-fluid x-padding">
      <div class="header-title">Schedule Meeting</div>
      <form action method="post">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="meeting-topic">Topic</label>
              <input
                type="text"
                name="meeting-topic"
                id="meeting-topic"
                class="form-control"
                placeholder="Topic"
                v-model="meeting"
              />
            </div>
          </div>
          <div class="col-12 pb-2">
            <label class="checkbox-container workspace-checkbox">
              <input
                type="checkbox"
                name="start-now-checkbox"
                id="start-now-checkbox"
                class="start-now-checkbox"
              />
              <span class="checkmark start-now"></span>
              <div class="check-label">Start Now</div>
              <div class="row schedule-date mt-3">
                <div class="col-3">
                  <div class="select-custom">
                    <select class="form-control select-start-now" name="from-date" id="from-date">
                      <option>21/4/2020</option>
                      <option></option>
                      <option></option>
                    </select>
                    <span class="flaticon-up-and-down icons custom-icon"></span>
                  </div>
                </div>
                <div class="col-2 no-gutters">
                  <div class="select-custom">
                    <select class="form-control select-start-now" name="from-time" id="from-time">
                      <option>5:00PM</option>
                      <option></option>
                      <option></option>
                    </select>
                    <span class="flaticon-up-and-down icons custom-icon"></span>
                  </div>
                </div>
                <div class="col-1">to</div>
                <div class="col-3">
                  <div class="select-custom">
                    <select class="form-control select-start-now" name="to-date" id="to-date">
                      <option>21/4/2020</option>
                      <option></option>
                      <option></option>
                    </select>
                    <span class="flaticon-up-and-down icons custom-icon"></span>
                  </div>
                </div>
                <div class="col-2 no-gutters">
                  <div class="select-custom">
                    <select class="form-control select-start-now" name="to-time" id="to-time">
                      <option>6:00PM</option>
                      <option></option>
                      <option></option>
                    </select>
                    <span class="flaticon-up-and-down icons custom-icon"></span>
                  </div>
                </div>
              </div>
            </label>
          </div>
          <div class="d-flex justify-content-between w-100 px-3">
            <div class="form-group">
              <label class="checkbox-container workspace-checkbox">
                <input
                  type="checkbox"
                  name="reccuring-checkbox"
                  id="reccuring-checkbox"
                  class="reccuring-checkbox"
                />
                <span class="checkmark start-now"></span>
              </label>
              <div class="ml-4 check-label">Reccurring Meeting</div>
            </div>
            <div class="d-flex form-group">
              <label for="time-zone">Time Zone:</label>
              <select class="form-control px-0" name="time-zone" id="time-zone">
                <option value="west africa standard time">West Africa Standard Time</option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <hr class="w-100" />
          <div class="col-12">
            <div class="form-group">
              <h5 class="desc-title">Meeting ID</h5>
              <div class="d-flex justify-content-between">
                <label class="radio-container">
                  <input type="radio" checked="checked" name="meeting-id" />
                  <span class="radio-checkmark"></span>
                  <span class="label">Generate Automatically</span>
                </label>

                <label class="radio-container">
                  <input type="radio" name="meeting-id" />
                  <span class="radio-checkmark"></span>
                  <span class="label">Personal Meeting ID 746-356-678</span>
                </label>
              </div>
            </div>
          </div>
          <hr class="w-100" />
          <div class="col-12">
            <div class="form-group">
              <h5 class="desc-title">Password</h5>
              <div class="d-flex justify-content-between">
                <label class="checkbox-container workspace-checkbox">
                  <input
                    type="checkbox"
                    name="select-all"
                    id="require-meeting-password"
                    class="require-meeting-password"
                  />
                  <span class="checkmark"></span>
                  <span class="label pt-1">Require meeting Password</span>
                  <input class="meeting-password" type="text" name id />
                </label>
              </div>
            </div>
          </div>
          <hr class="w-100" />
          <div class="col-12">
            <div class="form-group">
              <h5 class="desc-title">Video</h5>
              <div class="d-flex justify-content-between">
                <div class="form-group d-flex">
                  <p class="label">Host</p>
                  <label class="radio-container ml-3">
                    <span class="label">On</span>
                    <input type="radio" checked="checked" name="host-tooggle" />
                    <span class="radio-checkmark"></span>
                  </label>
                  <label class="radio-container ml-3">
                    <span class="label">Off</span>
                    <input type="radio" name="host-tooggle" />
                    <span class="radio-checkmark"></span>
                  </label>
                </div>
                <div class="form-group d-flex">
                  <p class="label">Participants</p>
                  <label class="radio-container ml-3">
                    <span class="label">On</span>
                    <input type="radio" checked="checked" name="participant-tooggle" />
                    <span class="radio-checkmark"></span>
                  </label>
                  <label class="radio-container ml-3">
                    <span class="label">Off</span>
                    <input type="radio" name="participant-tooggle" />
                    <span class="radio-checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr class="w-100" />
          <div class="col-12">
            <div class="form-group">
              <h5 class="desc-title">Audio</h5>
              <div class="form-group d-flex mb-0">
                <label class="radio-container ml-3">
                  <span class="label">Telephone</span>
                  <input type="radio" checked="checked" name="audio-type" />
                  <span class="radio-checkmark"></span>
                </label>
                <label class="radio-container ml-3">
                  <span class="label">Computer Audio</span>
                  <input type="radio" name="host-type" value="computer audio" />
                  <span class="radio-checkmark"></span>
                </label>
                <label class="radio-container ml-3">
                  <span class="label">Telephone and Computer Audio</span>
                  <input type="radio" name="host-type" value="telephone and computer audio" />
                  <span class="radio-checkmark"></span>
                </label>
              </div>
              <p>
                Dial in from United State
                <a href="#">Edit</a>
              </p>
            </div>
          </div>
          <hr class="w-100" />
          <div class="col-12">
            <div class="form-group">
              <h5 class="desc-title">Calendar</h5>
              <div class="form-group d-flex mb-0">
                <label class="radio-container ml-3">
                  <input type="radio" checked="checked" name="calendar-type" value="Ical" />
                  <span class="radio-checkmark"></span>
                  <span class="label">Ical</span>
                </label>
                <label class="radio-container ml-3">
                  <input type="radio" name="calendar-type" value="Google Calendar" />
                  <span class="radio-checkmark"></span>
                  <span class="label">Google Calendar</span>
                </label>
                <label class="radio-container ml-3">
                  <span class="label">Outlook</span>
                  <input type="radio" name="calendar-type" value="Outlook" />
                  <span class="radio-checkmark"></span>
                </label>
                <label class="radio-container ml-3">
                  <span class="label">Other</span>
                  <input type="radio" name="calendar-type" />
                  <span class="radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div class="d-flex w-100 justify-content-end mt-3">
            <button type="button" class="btn btn-next px-3">Cancel</button>
            <button type="button" class="btn btn-primary ml-4">Schedule</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" src="./style.scss" scoped>
</style>

<script src="./main.js">
</script>