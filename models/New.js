const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  title: String,
  content: String,
  archived: { type: Boolean, default: false },
  dateOfArchive: Date
}, { timestamps: true });

module.exports = mongoose.model('New', newSchema);
