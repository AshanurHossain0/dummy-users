const cors=require("cors");
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", true);

mongoose.connect(
    "mongodb+srv://ashanur:nurasha2000@ashanurdb.x6brlcb.mongodb.net/dummy",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/", route);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
