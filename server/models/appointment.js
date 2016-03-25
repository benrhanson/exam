var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
	patient: String, 
	day: {type: Date}, 
	time: {type: Date}, 
	reason: String,
	created_at: {type: Date, default: new Date},
	updated_at: {type: Date, default: new Date}
})

mongoose.model('appointment', AppointmentSchema);