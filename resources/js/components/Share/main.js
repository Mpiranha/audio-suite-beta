export default {
    data() {
        return {
            isShowing: false
        };
    },
    mounted() {
        console.log('Share component mounted');
    },
    methods: {
        // changeState: function(payLoad) {
        //   return this.$store.commit("changeNavActive", payLoad);
        // }
        show: function () {
            this.isShowing = !this.isShowing;
        }
    },
    computed: {
    }
}
