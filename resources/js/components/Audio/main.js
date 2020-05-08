export default {
    data() {
      return {
        isPlaying: false,
        file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        options: {
          xhr: {
            credentials: "Access-Control-Allow-Origin",
          }
        }
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
        this.isPlaying = !this.isPlaying;
        console.log("play or pause" + this.isPlaying);
      },
      stopAudio: function() {
        this.isPlaying = false;
        console.log("stop" + this.isPlaying);
      }
    },
    computed: {
      // currentActiveNav() {
      //   return this.$store.state.navActive;
      // }
    }
  };