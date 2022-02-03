import { createStore } from "vuex";

export default createStore({
  state: {
    userID: "",
    provider: "",
  },
  mutations: {},
  actions: {
    oAuthLogIn({ state }, { provider, id_token }) {
      // console.log("vuex", provider, id_token);
      state.userID = id_token;
      state.provider = provider;
    },
    oAuthLogOut({ state }) {
      // console.log("vuex", provider, id_token);
      state.userID = "";
      state.provider = "";
    },
  },
  modules: {},
});
