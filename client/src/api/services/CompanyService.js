import API from '../API';

export const GetCompanies = async () => {
  try {
    const response = await API.get('/company');

    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
}