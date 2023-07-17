const fs = require("fs");
const path = require("path");
const db = require("../database/db");

let agentJsonData = path.join(__dirname, "..", "data", "agent.json");
let propertyJsonData = path.join(__dirname, "..", "data", "properties.json");

let agents = [];
let properties = [];
fs.readFile(agentJsonData, (err, data) => {
  if (!err) {
    let dataArr = [];
    dataArr = JSON.parse(data);
    agents = dataArr;
  }
});

fs.readFile(propertyJsonData, (err, data) => {
  if (!err) {
    let dataArr = [];
    dataArr = JSON.parse(data);
    properties = dataArr;
  }
});
let property;
const homeRoutes = (req, res) => {
  db.execute("SELECT * FROM propery").then((property) => {
    db.execute("SELECT * FROM agent").then((agent) => {
      res.render("realEstate/index", {
        agent: agent[0],
        properties: property[0],
      });
    });
  });
  //
  // console.log(property);
};

const getPropertySearch = (req, res) => {
  const searchTerm = req.body.search;

  db.execute("SELECT * FROM propery").then((prop) => {
    const searchData = prop[0].filter((item) =>
      item.title.includes(searchTerm)
    );
    res.send(searchData);
  });
};

const getAddProperty = (req, res) => {
  res.render("realEstate/addProperty");
};

const getAddSignUp = (req, res) => {
  res.render("realEstate/agentSignUp");
};

const getPropertyDetails = (req, res) => {
  const id = req.params.id;
  db.execute("SELECT * FROM propery WHERE id=?", [id]).then((data) => {
    res.render("realEstate/propertyDetail", { data: data[0] });
  });
};

module.exports = {
  homeRoutes,
  getAddProperty,
  getAddSignUp,
  getPropertySearch,
  getPropertyDetails,
};
