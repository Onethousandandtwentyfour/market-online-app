import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginTokan: {
      userName: "张三",
      token: "1233123"
    }
  },
  mutations: {
    commitLoginToken(state, newVal) {
      state.loginTokan = newVal;
    }
  },
  actions: {
    setLoginToken({ commit }, newVal) {
      return new Promise(resove => {
        commit("commitLoginToken", newVal);
        resove();
      });
    }
  },
  modules: {}
});
