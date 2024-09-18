const Report = require("../models/Report");

const ReportController = {
    async createReport(req, res) {
        try {
            const report = await Report.create(req.body)
            res.status(201).send(report)
        } catch (error) {
            console.error(error)
            res.status(500).send({ msg: 'Ha habido un problema al crear la noticia', error })
        }
    },
}

module.exports = ReportController;
