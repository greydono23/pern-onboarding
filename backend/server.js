const express = require("express");
const cors = require("cors");
require("dotenv").config();

const workshopController = require("./controller/workshop.controller");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api/getData", (req, res) => {
  workshopController
    .getDemoTable()
    .then((data) =>
      res.status(200).json(data)
    );
});

app.post("/api/addInfo", (req, res) => {
  workshopController
    .addDemoInfo(req)
    .then((data) => {
      res.status(201).json({
        status: "success",
      })
    });
});

// Start Backend Port 
app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
});
