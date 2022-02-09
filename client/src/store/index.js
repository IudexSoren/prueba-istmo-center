import { createStore } from 'vuex';

import CompanyModule from './modules/CompanyModule';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Company: CompanyModule
  }
})
