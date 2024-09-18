const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  title: String,
  content: String,
  archived: { type: Boolean, default: false },
  dateOfArchive: Date
}, { timestamps: true });


module.exports = mongoose.model('Report', reportSchema);
