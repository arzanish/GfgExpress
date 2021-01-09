const express = require("express"); // similar to import in java
const app = express(); // considering express as a class , so making an object
const port = 5000; // choosing a port

app.get("/", (req, res) => {
  res.send("Hello Geeksforgeeks");
});

app.listen(port, () => {
  console.log("Using port" + port + ".");
}); // establishing connection to the port
