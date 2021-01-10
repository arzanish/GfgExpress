const express = require("express"); // similar to import in java
const root = require("./routes/root");
const app = express(); // considering express as a class , so making an object
const port = 5000; // choosing a port

app.use("/", root);
app.listen(port, () => {
  console.log("console");
});
