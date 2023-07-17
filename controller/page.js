import db from "../database/db.js";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();

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
export const homeRoutes = (req, res) => {
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

export const getPropertySearch = (req, res) => {
  const searchTerm = req.body.search;

  db.execute("SELECT * FROM propery").then((prop) => {
    const searchData = prop[0].filter((item) =>
      item.title.includes(searchTerm)
    );
    res.send(searchData);
  });
};

export const getAddProperty = (req, res) => {
  res.render("realEstate/addProperty");
};

export const getAddSignUp = (req, res) => {
  res.render("realEstate/agentSignUp");
};
export const dashboard = (req, res) => {
  db.execute("SELECT * FROM propery").then((property) => {
    db.execute("SELECT * FROM agent").then((agent) => {
      res.render("realEstate/dashboard", {
        agent: agent[0],
        properties: property[0],
      });
    });
  });
};
export const getPropertyDetails = (req, res) => {
  const id = req.params.id;
  db.execute("SELECT * FROM propery WHERE id=?", [id]).then((data) => {
    res.render("realEstate/propertyDetail", { data: data[0] });
  });
};
