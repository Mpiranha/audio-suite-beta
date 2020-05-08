export default {
    props: [],
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {
        // changeState: function(payLoad) {
        //   return this.$store.commit("changeNavActive", payLoad);
        // }
    },
    computed: {
        // currentActiveNav() {
        //   return this.$store.state.navActive;
        // }
        currentPublishStep() {
            return this.$store.state.publishSettingStep;
        }
    },

};
