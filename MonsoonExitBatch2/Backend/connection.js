const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect("mongodb+srv://anjalaali1122:Anjala@cluster0.wbde93e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
