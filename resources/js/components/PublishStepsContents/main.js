export default {
    props: ["active"],
    data() {
        return {
            audioTitle: 'untitled project',
            settingSteps: ['drive', 'audio-platform', 'social-media'],
            stepCount: 0,
            currentSetting: '',
            socialMediaDate: '',
            audioDate: ''
        };
    },
    mounted() {
        console.log("Setup step Component mounted 55555555555.");
        this.currentSetting = this.settingSteps[this.stepCount];
        this.changeCurrentSettingStep(this.currentSetting);

    },
    methods: {

        changeCurrentSettingStep: function (payLoad) {
            return this.$store.commit('changePublishStep', payLoad);
        },
        nextStep: function () {
            this.stepCount++;
            if (this.stepCount >= this.settingSteps.length) return;

            this.currentSetting = this.settingSteps[this.stepCount];
            this.changeCurrentSettingStep(this.currentSetting);
        }

    },
    computed: {
        // currentActiveNav() {
        //   return this.$store.state.navActive;
        // }
    },

};
