require("dotenv").config();

const nodemailer = require("nodemailer");

const express = require("express");
const path = require("path");

const route = require("./route");

const app = express();
const port = process.env.PORT || 9090;

app.use(express.json());
app.use("/api", route);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/connect", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "connect.html"));
});

app.get("/sync", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sync.html"));
});

app.get("/api", (req, res) => {
  res;
});

app.listen(port, () => {
  console.log("Served!!!");
});
