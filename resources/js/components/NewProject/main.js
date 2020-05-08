export default {
    data() {
      return {
        isNewProjectOpen: false
      };
    },
    mounted() {
      console.log(this.hasNewVoiceNotification);
    },
    methods: {
      // changeState: function(payLoad) {
      //   return this.$store.commit("changeNavActive", payLoad);
      // }
      toggleNewProject: function() {
        this.isNewProjectOpen = !this.isNewProjectOpen;
      }
    },
    computed: {
      hasNewVoiceNotification() {
        return this.$store.state.hasNewVoiceMail;
      }
    }
  };