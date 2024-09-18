const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config")

app.use(express.json())

app.use("/reports",require("./routes/reports"))

dbConnection()

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));