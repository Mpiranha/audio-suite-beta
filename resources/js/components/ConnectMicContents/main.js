export default {
    props: [],
    data() {
        return {
            average: 0,
            isTestingSpeaker: false,
            isTestingMic: false,
            settingSteps: ['connect-mic', 'invite-member', 'share-screen', 'schedule'],
            stepCount: 0,
            currentSetting: '',
            micDecibel: -80,
            speakerVolume: 100
        };
    },
    mounted() {
        console.log("Setup step Component mounted 55555555555.");
        this.currentSetting = this.settingSteps[this.stepCount];
        this.changeCurrentSettingStep(this.currentSetting);
    },
    methods: {
        testSpeaker: function (elem, volume) {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            const url = '/audio/file_example_MP3_700KB.mp3';
            const audioContext = new AudioContext();
            let audioSource = new Audio(url);
            const gainNode = audioContext.createGain();
            //udioSource.play();

            let analyser = audioContext.createAnalyser();
            let audio = audioContext.createMediaElementSource(audioSource);
            let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            audio.mediaElement.play();
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;

            //gainNode.connect(audio);
            //gainNode.connect(audioContext.destination);
            audio.connect(analyser);
            audio.connect(audioContext.destination);
            analyser.connect(javascriptNode);
            javascriptNode.connect(audioContext.destination);
            gainNode.gain.value = 0.7;
            audioSource.volume = (volume / 100).toFixed(1);
            //audioSource.play();
            console.log('volume' + audioSource.volume);

            javascriptNode.onaudioprocess = () => {
                if (audioSource.ended || !this.isTestingSpeaker) {
                    this.isTestingSpeaker = false;
                    audioContext.close();
                } else {
                    var array = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(array);
                    var values = 0;

                    var length = array.length;
                    for (var i = 0; i < length; i++) {
                        values += (array[i]);
                    }

                    var average = values / length;
                    console.log(Math.round(average));
                    elem(Math.round(average), '.pids-wrapper-speaker .pid')
                }
            }

        },
        testMic: function (elem, minDecibels) {

            navigator.mediaDevices.getUserMedia({
                    audio: true
                })
                .then((stream) => {
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    let audioContext = new AudioContext();
                    let analyser = audioContext.createAnalyser();
                    let microphone = audioContext.createMediaStreamSource(stream);
                    let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);


                    analyser.smoothingTimeConstant = 0.8;
                    analyser.fftSize = 1024;

                    microphone.connect(analyser);
                    analyser.connect(javascriptNode);
                    javascriptNode.connect(audioContext.destination);
                    analyser.maxDecibels = -30;
                    analyser.minDecibels = minDecibels;

                    console.log('min decibel ' + analyser.minDecibels + 'max decibel ' + analyser.maxDecibels);

                    javascriptNode.onaudioprocess = () => {

                        if (!this.isTestingMic) return
                        var array = new Uint8Array(analyser.frequencyBinCount);
                        analyser.getByteFrequencyData(array);
                        var values = 0;


                        var length = array.length;
                        for (var i = 0; i < length; i++) {
                            values += (array[i]);
                        }



                        var average = values / length;
                        this.average = average;
                        console.log(Math.round(average));
                        elem(Math.round(average), '.pids-wrapper .pid');
                    }
                })
                .catch(function (err) {
                    /* handle the error */
                    console.log(err);
                });
        },
        colorPids: function (vol, elemClass) {
            let all_pids = document.querySelectorAll(elemClass);
            let amout_of_pids = Math.round(vol / 10);
            let elem_range = this.slice(all_pids, 0, amout_of_pids);
            for (var i = 0; i < all_pids.length; i++) {
                all_pids[i].style.backgroundColor = "#e6e7e8";
            }
            for (var i = 0; i < elem_range.length; i++) {

                // console.log(elem_range[i]);
                elem_range[i].style.backgroundColor = "#69ce2b";
            }
        },
        startTest: function () {
            this.isTestingMic = !this.isTestingMic;
            if (this.isTestingMic) {
                this.testMic(this.colorPids, this.micDecibel);
            }
        },
        startSpeakerTest: function () {
            this.isTestingSpeaker = !this.isTestingSpeaker;
            if (this.isTestingSpeaker) {
                this.testSpeaker(this.colorPids, this.speakerVolume);
            }
        },
        slice: function (elements, start, end) {
            var sliced = Array.prototype.slice.call(elements, start, end);
            return sliced;
        },
        changeCurrentSettingStep: function (payLoad) {
            return this.$store.commit("changeConnectMicStep", payLoad);
        },
        nextStep: function () {
            this.stepCount++;
            if (this.stepCount >= this.settingSteps.length) return;
            this.currentSetting = this.settingSteps[this.stepCount];
            this.changeCurrentSettingStep(this.currentSetting);
        },
        updateAudioDecibel: function () {
            console.log('mic decibel' + this.micDecibel);
            this.testMic(this.colorPids, this.micDecibel);
        },
        updateSpeakerVolume: function () {
            console.log('Speaker volume: ' + this.speakerVolume);
            this.testSpeaker(this.colorPids, this.speakerVolume);
        }

    },
    computed: {
        // currentActiveNav() {
        //   return this.$store.state.navActive;
        // }
    },

};
