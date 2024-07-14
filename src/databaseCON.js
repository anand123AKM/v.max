import { createConnection } from "mysql2";
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "##########",
  database: "userdata",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

export default connection;
