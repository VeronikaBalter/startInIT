import Vue from 'vue'
import Vuex from 'vuex'
import authorization from "./module/authorization"
import user from "./module/user"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({ 
    storage: {
    getItem: key => localStorage.getItem(key),
    setItem: (key, value) => localStorage.setItem(key, value),
    removeItem: key => localStorage.removeItem(key)
  }})],
  modules: {
    authorization,
    user
  }
})
