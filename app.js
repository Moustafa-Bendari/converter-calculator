Vue.createApp({
    data() {
        return {
            mbAnswer: "",
            bytesInput: ""

        }
    },
    methods: {
        submitBytes() {
            this.mbAnswer = this.BtoMb(parseInt(this.bytesInput, 10));
        },
        BtoMb(bytes) {
            return (bytes * 8) / 10**6;
        }


    },
    created: function() {


    }
}).mount("#app")