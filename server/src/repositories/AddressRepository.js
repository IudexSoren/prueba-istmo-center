import connection from "../database/dbConnection.js";

export const GetAddress = async (zipcode) => {
  try {
    const result = await connection.query('CALL SP_ReadAddress(?)', [zipcode]);

    return result[0][0];
  } catch (error) {
    throw error;
  }
}