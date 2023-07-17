import db from "../database/db.js";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();

/*let agentJsonData = path.join(__dirname, "..", "data", "agent.json");
let propertyJsonData = path.join(__dirname, "..", "data", "properties.json");

const postAgent = (req, res) => {
  let formData = req.body;
  console.log(formData);
  fs.readFile(agentJsonData, (err, data) => {
    if (!err) {
      let arrData = [];
      arrData = JSON.parse(data);
      arrData.push(formData);

      fs.writeFile(agentJsonData, JSON.stringify(arrData), (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/");
      });
    }
  });
};
const postProperties = (req, res) => {
  let formData = req.body;
  console.log(formData);
  fs.readFile(propertyJsonData, (err, data) => {
    if (!err) {
      let arrData = [];
      arrData = JSON.parse(data);
      arrData.push(formData);

      fs.writeFile(propertyJsonData, JSON.stringify(arrData), (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/");
      });
    }
  });
};

module.exports = { postAgent, postProperties };
*/

export const addProperty = (req, res) => {
  const { title, location, address, price, discount, type, desc, image } =
    req.body;
  db.execute(
    "INSERT INTO propery(title, location, Address, price, discount_price, type, description, image) VALUES(?,?,?,?,?,?,?,?)",
    [title, location, address, price, discount, type, desc, image]
  ).then((result) => {
    res.redirect("/");
  });
};
export const addAgent = (req, res) => {
  const {
    Fname,
    Lname,
    email,
    phone,
    address,
    qly,
    image,
    experience,
    letter,
  } = req.body;
  db.execute(
    "INSERT INTO agent(firstName, lastName, email, phone, address, qualification, image, experience, letter) VALUES(?,?,?,?,?,?,?,?,?)",
    [Fname, Lname, email, phone, address, qly, image, experience, letter]
  ).then((result) => {
    res.redirect("/");
  });
};

export const deleteProperty = (res, req) => {
  const id = req.body.id;
  db.execute("DELETE FROM propery WHERE id=?", [id]).then((res) => {
    res.redirect("/dashboard");
  });
};
