import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/scss/_reset.scss";
import "@/plugins/fbSDK.js";

// step 2： 初始化，這裡的寫法和Chris的有小差異，因為用的是Vue3版本

createApp({
  created() {
    // Google Sign-in initial
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "684180230244-7nug01i2nnqd5e4hgteenot3034qiibn.apps.googleusercontent.com",
      });
    });
  },
  mounted() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "679666910083413",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v12.0",
      });
    };
    window.FB.AppEvents.logPageView();

    window.FB.getLoginStatus((response) => {
      console.log("res", response); // 這裡可以得到 fb 回傳的結果
    });
  },
  render: () => h(App),
})
  .use(store)
  .use(router)
  .mount("#app");
