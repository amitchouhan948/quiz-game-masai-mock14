const express = require("express");
// const port = 8000;
const cors=require("cors")
const dbConnect = require("../src/config/db");
const QuestionRoute=require("./Routes/Quiz.route")

require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/quiz",QuestionRoute)


app.get("/", (req, res) => {
  res.send("Quiz Game Api");
});

app.listen(PORT, async () => {
  await dbConnect()
  console.log(`server started at http://localhost:${PORT}`);
});
