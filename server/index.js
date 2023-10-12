const express = require("express");


const db = require('./database-mysql')

const app = express();
const PORT = process.env.PORT || 3000

 
app.use(express.json());


 

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
 