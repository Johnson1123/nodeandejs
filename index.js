const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3002;
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const day = new Date();
const currentDay = day.getDate();

const pageRoutes = require("./routes/page.js");
const authRoutes = require("./routes/auth.js");

app.use(pageRoutes);
app.use(authRoutes);

// app.post("/add-property", (req, res, next) => {
//   property.push(req.body);
//   console.log(property);
//   res.redirect("/product");
// });

app.listen(port, () => console.log(`sever running on port ${port}`));
