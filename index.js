const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Azure Web Apps");
});

app.listen(process.env.PORT || 5001, () => {
    console.log("Server is running on port " + (process.env.PORT || 5001));
});