var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: new Date},
	updated_at: {type: Date, default: new Date}
})

mongoose.model('patient', PatientSchema);