const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');


app.use(express.json()); // Express middleware to parse JSON request bodies

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        console.log("User data received:", req.body); // Log the received user datas
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ error: "Error creating user" });
    }
});

// To get the user
app.get("/user", async (req, res) => {
    const userEmail = req.body.email;
    try{
        const user = await User.findOne({ email: userEmail }).exec();
        if (user.length == 0) {
            res.status(404).send("User not found");
        }
        else{
            res.status(200).send(user);
        }
    }
    catch (err) {
        res.status(500).send({ error: "Error fetching user" });
    }
});

// To get the feed data

app.get('/feed', async (req, res) => {
    try {
       console.log("Request body:", req.body); // Log the request body to see what is being sent
       const feedData = await User.findById(req.body.id); // Fetch all users as feed data
       res.status(200).send(feedData);
    }
    catch (error) {
        res.status(500).send({ error: "Error fetching feed data" });
    }
})

//To Delete the user
app.delete("/user", async (req, res) =>{
    try{
        const userId = req.body.id;
        await User.findByIdAndDelete(userId);
        res.status(200).send("User deleted successfully");
    }
    catch(error){
        res.status(500).send({ error: "Error deleting user" });
    }
})

// To update the user

app.patch("/user", async (req, res) => {
    try{
        const userId = req.body.userId;
        const updatedData = req.body;
        console.log("User ID to update:", userId); // Log the user ID being updated
        console.log("Updated data:", updatedData); // Log the updated data being sent
        const user = await User.findByIdAndUpdate(userId, updatedData, { 
            returnDocument: "before"
         });
        console.log("User before update:", user); // Log the user data before update
        res.status(200).send("User updated successfully");
    }
    catch(error){
        res.status(500).send({ error: "Error updating user" });
    }
})
connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () =>{
    console.log("Server is listening at 3000");
});
}).catch((err) => {
    console.log("Error connecting to database", err);
});

// app.use("/user",(req, res) => {
//   res.send("Hello World this is test route");
// });

// app.get("/ab*c",(req, res) => {
//     res.send({ "name" : "Harsh", "age" : 24 });
// });


// app.get("/user/:userId/:name/:password",(req, res) => {
//    console.log(req.params);
//    res.send("Hello World");
// });


// app.post("/user",(req, res) => {
//     console.log("This is post request");
//     res.send({ "This is post request" : "This is post request" });
// });

// app.delete("/user",(req, res) => {
//     console.log("This is delete request");
//     res.send({ "This is delete request" : "This is delete request" });
// });

// app.put("/user",(req, res) => {
//     console.log("This is put request");
//     res.send({ "This is put request" : "This is put request" });
// });

// app.patch("/user",(req, res) => {
//     console.log("This is patch request");
//     res.send({ "This is patch request" : "This is patch request" });
// });




// app.use("/hello", (req, res) =>{
//   res.send("Hello from hello route testing");
// });

// app.use("/hello/2", (req, res) =>{
//   res.send("Hello from hello 2 route testing");
// });


// app.use("/",(req, res) => {
//   res.send("Namaste Harsh, Welcome to DevTinder");
// });


// Middleware
// app.use("/admin", (req, res, next) => {
//     console.log("This is first middleware");
//     const token = "xyz";
//     if(token === "xyz") {
//         next();
//     } else {
//         console.log("Token is invalid");
//         res.send("Token is invalid");
//     }
// });

// app.get("/user", (req, res) => {
//     res.send("This is user route");
// });

// app.get("/admin/getAllData", (req, res) => {
//     res.send("This is admin route");
// });

// app.delete("/admin/deleteAllData", (req, res) => {
//     res.send("This is admin delete route");
// });

