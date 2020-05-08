export default {
    props: ["active"],
    data() {
      return {
        isUserDetailsVisible: false,
        audioTitle: "untitled project"
      };
    },
    mounted() {
      console.log("Component mounted.");
    },
    methods: {
      // changeState: function(payLoad) {
      //   return this.$store.commit("changeNavActive", payLoad);
      // }
      toggleUserDetails: function() {
        this.isUserDetailsVisible = !this.isUserDetailsVisible;
      }
    },
    computed: {
      // currentActiveNav() {
      //   return this.$store.state.navActive;
      // }
    }
  };