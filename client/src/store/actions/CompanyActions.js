import * as COMPANY_ACTIONS from '@/constants/COMPANY_ACTIONS';

const actions = {
  COMPANY__SET_COMPANIES: ({ commit }) => {
    commit(COMPANY_ACTIONS.COMPANY__SET_COMPANIES)
  },
  COMPANY__UNSET_COMPANIES: ({ commit }) => {
    commit(COMPANY_ACTIONS.COMPANY__UNSET_COMPANIES)
  },
  COMPANY__SET_CURRENT_COMPANY: ({ commit }, payload) => {
    commit(COMPANY_ACTIONS.COMPANY__SET_CURRENT_COMPANY, payload)
  },
  COMPANY__UNSET_CURRENT_COMPANY: ({ commit }) => {
    commit(COMPANY_ACTIONS.COMPANY__UNSET_CURRENT_COMPANY)
  }
};

export default actions;