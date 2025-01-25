import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/index.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

dbConnection()
.then(()=>{
  app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
})
.catch((err)=>{
  console.log(err);
})

app.get("/", (req, res) => {
  res.send("Home");
  console.log(`the path is :${req.url}`);
});
app.get("/register", (req, res) => {
  res.send("this is register route");
  console.log(`the path is :${req.url}`);
});


