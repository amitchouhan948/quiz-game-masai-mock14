const express = require("express");
const QuestionModel = require("../Models/Quiz.model");

const app = express.Router();

app.get("/", async (req, res) => {

try{

  let questionList = await QuestionModel.find();
  
  res.send(questionList);
}
catch(err){

  res.send(err)
}

});

app.get("/find", async (req, res) => {

  let { cat, level, num } = req.query;

  num=Number(num)

  try{

    let questionList = await QuestionModel.find({category:cat, difficulty:level, }).limit(num);
  
  res.send(questionList);
  }
  catch(err){
    res.send(err)
  }

});




module.exports = app;
