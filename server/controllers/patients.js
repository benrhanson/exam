var mongoose = require('mongoose');
var Patient = mongoose.model('patient');

module.exports = (function(){
	return {
		//helps check is patient name already exists
		check: function(req, res){
			var checker = req.body.name;
			Patient.find({name: checker}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		//adds patient to database
		add: function(req, res){
			var patient = req.body.name;
			var newPatient = new Patient({name: patient});
			newPatient.save(function(err, results){
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