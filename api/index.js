// create express server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const PORT = process.env.port || 5000;
const path = require("path");
require("dotenv").config();

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

app.use(express.static(path.join(__dirname, "./client/public/")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "/client/public/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err)); 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"images");
  }, 
  filename:(req, file, cb)=>{
    cb(null, req.body.name);
  }
});

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
});


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

 
//mongoose.connect(process.env.MONGO_URL, {
  //  useCreativrIndex: true,
//})
//.then(console.log("Connected to MongoDB"))
//.catch((err) => console.log(err));


app.listen("process.env.PORT || localhost:5000", async () => {
    console.log("Backend is running.")
});