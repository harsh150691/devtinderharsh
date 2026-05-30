const express = require('express');

const app = express();

app.use("/test",(req, res) => {
  res.send("Hello World this is test route");
})

app.use("/hello", (req, res) =>{
  res.send("Hello from hello route testing");
})

app.listen(3000, () =>{
    console.log("Server is listening at 3000");
});