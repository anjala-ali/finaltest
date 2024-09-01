const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here
 var BlogModel=require("./model")
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/get", async (req, res) => {
  try {
    var data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.delete("/remove/:id", async (req, res) => {
  try {
     await BlogModel.findByIdAndDelete(req.params.id)
     res.send({message:"Deleted successfully!!!"})
  } catch (error) {
      console.log(error)
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    var data = await BlogModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({message:'updated successfully',data})
  } catch (error) {
    console.log(error)
  }
});

app.listen(PORT,3001, () => {
  console.log(`${PORT} is up and running`);
});
