import * as CompanyService from '../services/CompanyService.js';

export const GetCompanies = async (req, res) => {
  try {
    const result = await CompanyService.GetCompanies();

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: 'Something went wrong'
    });
  }
}