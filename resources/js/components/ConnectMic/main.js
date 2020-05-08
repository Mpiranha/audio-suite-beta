export default {
    props: [],
    data() {
        return {
            isAudioEnable: false
        };
    },
    mounted() {
        this.checkMicrophone();
    },
    methods: {
        // changeState: function(payLoad) {
        //   return this.$store.commit("changeNavActive", payLoad);
        // }
        checkMicrophone: function () {
            navigator.permissions.query({
                name: 'microphone'
            }).then( (permissionStatus) => {

                console.log(permissionStatus.state); // granted, denied, prompt
                this.setMicState(permissionStatus.state);

                permissionStatus.onchange = () => {
                    console.log("Permission changed to " + permissionStatus.state);
                    this.setMicState(permissionStatus.state);
                }

            });
        },
        setMicState: function (data) {
            switch (data) {
                case 'granted':
                    //Vue.set(this.data, 'isAudioEnable', true);
                    this.isAudioEnable = true;
                    break;
                case 'denied':
                    this.isAudioEnable = false;
                    break;
                default:
                    this.isAudioEnable = false;
                    break;
            }
        }
    },
    computed: {
        // currentActiveNav() {
        //   return this.$store.state.navActive;
        // }
        currentMicActive() {
            return this.$store.state.connectMicStep;
        },
        getAudioState() {
            return this.isAudioEnable;
        }
    },

};
