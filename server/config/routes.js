var appointments = require('./../controllers/appointments.js');
var patients = require('./../controllers/patients.js');

module.exports = function(app) {

	//checks if patient is already in database
	app.post('/checkPatient', function(req, res){
		patients.check(req, res);
	});
	//adds new patient to database
	app.post('/addPatient', function(req, res){
		patients.add(req, res);
	});

	//logs off patient

	//creates a new appointment
	app.post('/makeAppointment', function(req, res){
		appointments.add(req, res);
	});

	//gets all appointments
	app.get('/getAppointment', function(req, res){
		appointments.get(req, res);
	});

	//deletes an appointment
	app.post('/deleteAppointment', function(req, res){
		appointments.destroy(req, res);
	});
}