import mysql from "serverless-mysql";

// Initialize the connection
export const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "",
    database: "next_crud_db",
  },
});

// For connection testing
// async function testConnection() {
//   try {
//     const result = await pool.query("SELECT 1");
//     console.log("MySQL connection: ", result);
//   } catch (error) {
//     console.log("MySQL connection failed: ", error);
//   } finally {
//     await pool.end();
//   }
// }

// testConnection();
