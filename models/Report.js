const mongoose = require('mongoose');
const { report } = require('../routes/reports');

const ReportSchema = new mongoose.Schema({
  title: String,
  content: String,
  archived: { type: Boolean, default: false },
  dateOfArchive: Date
}, { timestamps: true });

const Report = mongoose.model('Report', ReportSchema);

module.exports = mongoose.model('Report', ReportSchema);
