<template>
  <div class="sign-in-modal">
    <h2>登入頁面</h2>
    <GoogleSignInButton
      @sign-in="oAuthSignIn('google', $event)"
    ></GoogleSignInButton>
    <button type="button" class="btn btn-outline-success" @click="login">
      Login
    </button>
  </div>
</template>

<script>
import GoogleSignInButton from "@/components/GoogleSignInButton";

export default {
  name: "SignIn",
  components: {
    GoogleSignInButton,
  },
  methods: {
    async oAuthSignIn(provider, id_token) {
      try {
        await this.$store.dispatch("oAuthLogIn", {
          provider,
          id_token,
        });
        this.$router.push({ name: "Home" });

        console.log("signed in", provider, id_token);
      } catch (error) {
        console.error(error);
      }
    },
    login() {
      console.log("clicked");
      window.FB.login(
        function (response) {
          console.log("res", response);
        },
        {
          scope: "email, public_profile",
          return_scopes: true,
        }
      );
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in-modal {
  max-width: 400px;
  margin: 0 auto;

  > * {
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
