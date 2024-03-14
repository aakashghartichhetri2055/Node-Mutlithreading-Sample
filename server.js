const express = require("express");
const { Worker, workerData } = require("worker_threads");

const app = express();
const port = process.env.PORT || 3000;

app.get("/non-blocking/", (req, res) =>{
  res.status(200).send("This page is non-blocking");
});

app.get("/blocking", async (req, res) => {
  const worker = new Worker("./worker.js", { workerData: null });

  worker.on("message", (data) => {
    res.status(200).send(`result is ${data}`);
  });

  worker.on("error", (error) => {
    res.status(404).send(`An error occurred ${error}`);
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
