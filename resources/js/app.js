/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


import {
    store
} from './stores/store';
import 'vue-datetime/dist/vue-datetime.css';
import Vuelidate from 'vuelidate';
import { Datetime } from 'vue-datetime';
import AudioVisual from './components/vue-audio-visual';





// import {
//     waveform
// } from 'vue-waveform';
// import VueWaveSurfer from 'vue-wave-surfer'
require('jquery');
require('./bootstrap');


window.Vue = require('vue');
Vue.use(Vuelidate);
Vue.use(Datetime);
Vue.use(AudioVisual);
// Vue.use(waveform);
// Vue.use(VueWaveSurfer);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbar', require('./components/Navbar/Index.vue').default);
Vue.component('audio-extractor', require('./components/AudioExtractor/Index.vue').default);
Vue.component('new-project', require('./components/NewProject/Index.vue').default);
Vue.component('audio-file', require('./components/Audio/Index.vue').default);
Vue.component('audio-header', require('./components/Header/Index.vue').default);
Vue.component('connect-mic', require('./components/ConnectMic/Index.vue').default);
Vue.component('connect-mic-steps', require('./components/ConnectMicSteps/Index.vue').default);
Vue.component('connect-mic-contents', require('./components/ConnectMicContents/Index.vue').default);
Vue.component('publish-steps', require('./components/PublishSteps/Index.vue').default);
Vue.component('publish-content', require('./components/PublishStepsContents/Index.vue').default);
Vue.component('publish', require('./components/Publish/Index.vue').default);
Vue.component('share-social', require('./components/Share/Index.vue').default);
Vue.component('datetime', Datetime);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store
});
