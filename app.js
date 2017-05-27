(function(){


	var form = angular.module("form", []);

	form.controller("formControl", function(){

	var self = this;
	self.validity = false;
	self.user = {};

	self.states = [
		"Andhra Pradesh (AP)",
		"Arunachal Pradesh (AR)",
		"Assam (AS)",
		"Bihar (BR)",
		"Chhattisgarh (CG)",
		"Goa (GA)",
		"Gujarat (GJ)",
		"Haryana (HR)",
		"Himachal Pradesh (HP)",
		"Jammu and Kashmir (JK)",
		"Jharkhand (JH)",
		"Karnataka (KA)",
		"Kerala (KL)",
		"Madhya Pradesh (MP)",
		"Maharashtra (MH)",
		"Manipur (MN)",
		"Meghalaya (ML)",
		"Mizoram (MZ)",
		"Nagaland (NL)",
		"Odisha(OR)",
		"Punjab (PB)",
		"Rajasthan (RJ)",
		"Sikkim (SK)",
		"Tamil Nadu (TN)",
		"Telangan (TE)",
		"Tripura (TR)",
		"Uttar Pradesh (UP)",
		"Uttarakhand (UK)",
		"West Bengal (WB)",
	]

	self.submit = function(){
		if(self.validity)
		alert("Thank You for Registering.");
		self.reset();
	};

	self.reset = function(){
		self.user = {};
	}

	self.pass = function(){

		if(self.user.pass === self.user.cpass) {self.validity = true; return true; }
		else { self.validity = false; return false; }

	};

	});
})();