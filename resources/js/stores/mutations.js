export default {
    // changeNavActive: function(state, payLoad) {
    //     state.navActive = payLoad;

    //     // return newState;
    // }
    changeConnectMicStep: function(state, payLoad) {
        //state.changeSettingStep = payLoad;
        Vue.set(state, 'connectMicStep', payLoad);
    },
    changePublishStep: function(state, payload) {
        Vue.set(state, 'publishSettingStep', payload);
    }
}

