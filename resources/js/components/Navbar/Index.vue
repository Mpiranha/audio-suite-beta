<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand logo-sm" href="#">logo</a>
    <span class="navbar-brand user-pic link-wrap" @click="toggleUserDetails">
      <span class="flaticon-user icons user-icon"></span>
      <span class="user-name-expanded">Austine Ejem</span>
      <div v-if="isUserDetailsVisible" class="user-more-details">
        <div class="user-more-inner">
          <a href="#" class="link-wrap">
            <div class="d-flex">
              <img src alt />
              <div class="d-flex flex-column px-3">
                <span class="user-name">Ejem Odinakachi Austin</span>
                <span class="profile-setup">PROFILE SETUP</span>
              </div>
            </div>
          </a>
          <hr class="divider" />
          <ul class="nav flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="flaticon-support icons user-details-icon"></span>
                Support
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="flaticon-exit icons user-details-icon"></span>
                Log me out
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <span class="icons user-details-icon"></span>
                Light theme
              </a>
            </li>
          </ul>
        </div>
      </div>
    </span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column user-pic-sm align-items-center w-100" href="#">
          <span
            class="d-flex flex-column align-items-center link-wrap mb-2"
            @click="toggleUserDetails"
          >
            H
            <span class="user-name">Austine Ejem</span>
          </span>
          <div v-if="isUserDetailsVisible" class="user-more-details">
            <span href class="link-wrap">
              <div class="d-flex">
                <img src alt />
                <div class="d-flex flex-column px-3">
                  <span class="user-name">Ejem Odinakachi Austin</span>
                  <span class="profile-setup">PROFILE SETUP</span>
                </div>
              </div>
            </span>
            <hr class="divider" />
            <ul class="nav flex-column">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <span class="flaticon-support icons user-details-icon"></span>
                  Support
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <span class="flaticon-exit icons user-details-icon"></span>
                  Log me out
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <span class="icons user-details-icon"></span>
                  Light theme
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" :class="active === 'dashboard' ? 'active' : ''">
          <a
            class="nav-link"
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="Dashboard"
          >
            <span class="flaticon-dashboard icons nav-icon"></span>
            <span class="nav-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item" :class="active === 'library' ? 'active' : ''">
          <a class="nav-link" href="#" data-toggle="tooltip" data-placement="right" title="Library">
            <span class="flaticon-mic icons nav-icon"></span>
            <span class="nav-text">Library</span>
          </a>
        </li>
        <li class="nav-item" :class="active === 'editor' ? 'active' : ''">
          <a class="nav-link" href="#" data-toggle="tooltip" data-placement="right" title="Editor">
            <span class="flaticon-stack icons nav-icon"></span>
            <span class="nav-text">Editor</span>
          </a>
        </li>
        <li class="nav-item" :class="active === 'settings' ? 'active' : ''">
          <a
            class="nav-link"
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="Settings"
          >
            <span class="flaticon-settings icons nav-icon"></span>
            <span class="nav-text">Settings</span>
          </a>
        </li>
        <li class="nav-item" :class="active === 'analysis' ? 'active' : ''">
          <a
            class="nav-link"
            href="#"
            data-toggle="tooltip"
            data-placement="right"
            title="Analytics"
          >
            <span class="flaticon-line-chart icons nav-icon"></span>
            <span class="nav-text">Analysis</span>
          </a>
        </li>
      </ul>
    </div>
    <span class="d-none d-md-block brand-md">Logout</span>
  </nav>
</template>

<script src="./main.js">
</script>

<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped></style>
