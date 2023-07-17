import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
const port = 3002;
const app = express();
const __dirname = path.resolve();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const day = new Date();
const currentDay = day.getDate();

import pageRoutes from "./routes/page.js";
import authRoutes from "./routes/auth.js";

app.use(pageRoutes);
app.use(authRoutes);

// app.post("/add-property", (req, res, next) => {
//   property.push(req.body);
//   console.log(property);
//   res.redirect("/product");
// });

app.listen(port, () => console.log(`sever running on port ${port}`));
