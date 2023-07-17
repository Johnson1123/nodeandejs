import mysql from "mysql2";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "propeties",
  password: "",
});

const connect = connection.promise();

export default connect;
