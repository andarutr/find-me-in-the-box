const app = Vue.createApp({
	data() {
		return {
			pesan: '',
			boxAStatus: false,
			boxBStatus: false,
			boxCStatus: false,
			boxDStatus: false,
			boxEStatus: false,
			boxFStatus: false,
			boxGStatus: false,
			boxHStatus: false,
			boxIStatus: false,
			boxJStatus: false,
			boxKStatus: false,
			boxLStatus: false
		};
	},
	methods: {
		boxSelected(box) {
			if(box === 'A') {
				this.boxAStatus = !this.boxAStatus;
			} else if (box === 'B') {
				this.boxBStatus = !this.boxBStatus;
			} else if (box === 'C') {
				this.boxCStatus = !this.boxCStatus;
			} else if (box === 'D') {
				this.boxDStatus = !this.boxDStatus;
			} else if (box === 'E') {
				this.boxEStatus = !this.boxEStatus;
			} else if (box === 'F') {
				this.boxFStatus = !this.boxFStatus;
			} else if (box === 'G') {
				this.boxGStatus = !this.boxGStatus;
			} else if (box === 'H') {
				this.boxHStatus = !this.boxHStatus;
			} else if (box === 'I') {
				this.boxIStatus = !this.boxIStatus;
			} else if (box === 'J') {
				this.boxJStatus = !this.boxJStatus;
			} else if (box === 'K') {
				this.boxKStatus = !this.boxKStatus;
			} else if (box === 'L') {
				this.boxLStatus = !this.boxLStatus;
				this.pesan = 'Whoaaaa you know me?'
			}
		}
	}
});

app.mount('#app');