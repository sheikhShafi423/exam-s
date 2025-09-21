const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 8080;
const uri = "mongodb+srv://exam:exam1234@cluster0.korcnge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);


async function run() {
  
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas!");
    const db = client.db("exam");
    const students = db.collection("students");

    // POST → Add new student
    app.post("/students", async (req, res) => {
     
        const student = req.body; // { name: "Ali", marks: 85 }
        const result = await students.insertOne(student);
        res.json({ message: "✅ Student added!", id: result.insertedId });
        console.log("done");
      }
    );

    // GET → Show all students
    app.get("/students", async (req, res) => {
        const data = await students.find().toArray();
        res.json(data); 
    });

    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    });
  } 

run().catch(console.dir);


app.get("/", (req, res) => {
    console.log(`os = ${req.headers['sec-ch-ua-platform']}`);
    console.log(`browser = ${req.headers['sec-ch-ua']}`);
    console.log(`version = ${req.headers['sec-ch-ua-version']}`);
    console.log(req.headers['user-agent']);
    console.log(req.ip);
    console.log(req.ips);
    console.log(req.hostname);
  res.send("Hello, Express server is running!");
});






