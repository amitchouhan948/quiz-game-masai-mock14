const express = require("express");
const QuestionModel = require("../Models/Quiz.model");

const app = express.Router();

app.get("/", async (req, res) => {


  let questionList = await QuestionModel.find();
  
  res.send(questionList);

});

app.get("/find", async (req, res) => {

  let { cat, level, num } = req.query;

  num=Number(num)

  let questionList = await QuestionModel.find({category:cat, difficulty:level, }).limit(num);
  
  res.send(questionList);

});




module.exports = app;
