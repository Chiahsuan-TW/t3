<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
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
};
</script>

<style lang="scss"></style>
