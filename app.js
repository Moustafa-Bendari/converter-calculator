Vue.createApp({
    data() {
        return {
            mbAnswer: "",
            bytesInput: "",
            bAnswer: "",
            kilobytesInput: ""

        }
    },
    methods: {
        submitBytes() {
            this.mbAnswer = this.BtoMb(parseInt(this.bytesInput, 10));
        },
        BtoMb(bytes) {
            return (bytes * 8) / 10**6;
        },
        submitKilobytes() {
            this.bAnswer = this.KBtoB(parseInt(this.kilobytesInput, 10));
        },
        KBtoB(kilobytes) {
            return (kilobytes * 1024);
        }
    },
    created: function() {


    }
}).mount("#app")