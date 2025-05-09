const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9]+$/ },
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
  dob: { type: Date, required: true },
  department: { type: String, required: true },
  enrollmentYear: { type: Number, required: true, min: 2000, max: new Date().getFullYear() },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Student', studentSchema);