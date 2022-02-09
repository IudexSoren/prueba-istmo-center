import connection from "../database/dbConnection.js";

export const GetCompanies = async () => {
  try {
    const result = await connection.query('CALL SP_ReadCompanies()', []);

    return result[0];
  } catch (error) {
    throw error;
  }
}

export const GetCompanyUsers = async (idCompany) => {
  try {
    const result = await connection.query('CALL SP_ReadCompanyUsers(?)', [idCompany]);

    return result[0];
  } catch (error) {
    throw error;
  }
}