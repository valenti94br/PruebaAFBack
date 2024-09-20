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
    async getAll(req, res) {
        try {
            const reports = await Report.find()
            res.send(reports)
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: 'Ha habido un problema al cargar las noticias', error })
        }
    },
}

module.exports = ReportController;
