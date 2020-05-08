export default {
    data() {
      return {
        isPlaying: false,
        isRecording: false
      };
    },
    mounted() {
      console.log("Component mounted.");
    },
    methods: {
      // changeState: function(payLoad) {
      //   return this.$store.commit("changeNavActive", payLoad);
      // }
      playOrPause: function() {
        if (this.isRecording) return;
        this.isPlaying = !this.isPlaying;
        console.log("play or pause" + this.isPlaying);
      },
      stopAudio: function() {
        this.isPlaying = false;
        console.log("stop" + this.isPlaying);
      },
      toggleRecord: function() {
        this.isRecording = !this.isRecording;
      }
    },
    computed: {
      // currentActiveNav() {
      //   return this.$store.state.navActive;
      // }
    }
  };