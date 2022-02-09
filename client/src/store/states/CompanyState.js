export const CurrentCompany__InitialState = {
  id: 0,
  name: '',
  catchphrase: '',
  bs: '',
  users: []
}

export const COMPANY__InitialState = {
  companies: [],
  currentCompany: CurrentCompany__InitialState
}

const state = () => ({
  ...COMPANY__InitialState
});

export default state;