const express = require("express")
const ReportController = require("../controllers/ReportController")
const router = express.Router()

router.post("/createReport",ReportController.createReport)

module.exports = router