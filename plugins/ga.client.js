import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ isDev }) => {
	if (!isDev){
		Vue.use(VueGtag, {
			config: { id: process.env.GOOGLE_ANALYTICS_ID }
		});
	} else {
		console.log("Skipping GA in development")
	}
}