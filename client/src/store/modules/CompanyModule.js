import state from '../states/CompanyState';
import actions from '../actions/CompanyActions';
import mutations from '../mutations/CompanyMutation';
import getters from '../getters/CompanyGetters';

const CompanyModule = {
  state,
  mutations,
  actions,
  getters
}

export default CompanyModule;