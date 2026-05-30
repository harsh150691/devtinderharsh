const express = require('express');

const app = express();

// app.use("/user",(req, res) => {
//   res.send("Hello World this is test route");
// });

app.get("/user",(req, res) => {
    res.send({ "name" : "Harsh", "age" : 24 });
});

app.post("/user",(req, res) => {
    console.log("This is post request");
    res.send({ "This is post request" : "This is post request" });
});

app.delete("/user",(req, res) => {
    console.log("This is delete request");
    res.send({ "This is delete request" : "This is delete request" });
});

app.put("/user",(req, res) => {
    console.log("This is put request");
    res.send({ "This is put request" : "This is put request" });
});

app.patch("/user",(req, res) => {
    console.log("This is patch request");
    res.send({ "This is patch request" : "This is patch request" });
});




// app.use("/hello", (req, res) =>{
//   res.send("Hello from hello route testing");
// });

// app.use("/hello/2", (req, res) =>{
//   res.send("Hello from hello 2 route testing");
// });


// app.use("/",(req, res) => {
//   res.send("Namaste Harsh, Welcome to DevTinder");
// });

app.listen(3000, () =>{
    console.log("Server is listening at 3000");
});