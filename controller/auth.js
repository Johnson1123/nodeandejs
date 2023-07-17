const path = require("path");
const fs = require("fs");

const db = require("../database/db");

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

const addProperty = (req, res) => {
  const { title, location, address, price, discount, type, desc, image } =
    req.body;
  db.execute(
    "INSERT INTO propery(title, location, Address, price, discount_price, type, description, image) VALUES(?,?,?,?,?,?,?,?)",
    [title, location, address, price, discount, type, desc, image]
  ).then((result) => {
    res.redirect("/");
  });
};
const addAgent = (req, res) => {
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

module.exports = { addProperty, addAgent };
