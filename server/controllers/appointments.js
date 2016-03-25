var mongoose = require('mongoose');
var appointment = mongoose.model('appointment');

module.exports = (function(){
	return {
		//adds appointment
		add: function(req, res){
			//checks to make sure that customer hasn't already made an appointment for the day
			// var bouncer = appointment.find({name: req.body.name, day: req.body.day}, function(err, results){
			// 	if(results){
			// 		var error = 'You cannot have two appointments on the same day.';
			// 		console.log(error);
			// 		res.json(error);
			// 	}
				// else{
				//if they pass, appointment is added
					var newAppt = new appointment({patient: req.body.name, day: req.body.day, time: req.body.time, reason: req.body.reason});
					newAppt.save(function(err, results){
					if(err){
						console.log(err);
					}
					else{
						res.json(results);
				}
			})
				// }
			// })

		},

		//deletes an appointment
		destroy: function(req, res){
			var target = req.body.data;
			appointment.remove({_id: target}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json({});
				}
			})
		}, 

		//gets appointments
		get: function(req, res){
			console.log('what is happening here');
			var collection = appointment.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		} 


	}
})();