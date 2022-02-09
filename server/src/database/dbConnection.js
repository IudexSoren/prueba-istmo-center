import mysql from "mysql";
import dotenv from "dotenv";
import util from "util";

dotenv.config();

const createConnection = () => {
  try {
    const conn = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return {
      query(sql, args) {
        return util.promisify(conn.query).call(conn, sql, args);
      },
      close() {
        return util.promisify(conn.end).call(conn);
      },
    };
  } catch (error) {
    console.log(error);
  }
};
const connection = createConnection();

export default connection;
