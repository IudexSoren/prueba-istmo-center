import { CurrentCompany__InitialState } from "../states/CompanyState";
import { GetCompanies } from "@/api/services/CompanyService";

const mutations = {
  COMPANY__SET_COMPANIES: async (state) => {
    state.companies = await GetCompanies();
  },
  COMPANY__UNSET_COMPANIES: (state) => {
    state.companies = [];
  },
  COMPANY__SET_CURRENT_COMPANY: (state, payload) => {
    state.currentCompany = payload;
  },
  COMPANY__UNSET_CURRENT_COMPANY: (state) => {
    state.currentCompany = { ...CurrentCompany__InitialState };
  },
}

export default mutations;