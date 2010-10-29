function View() {}

View.prototype.getSourceTemperature = function() {
	return parseInt($("#sourceTemperature").val());
}

View.prototype.getConversionOption = function() {
	return $('input:radio[name=conversionOption]:checked').val();
}

View.prototype.setResultTemperature = function(resultTemperature) {
	$("#resultTemperature").text(resultTemperature);
}

function Model() {}

Model.prototype.convertTemperature = function(sourceTemperature, conversionOption) {

	var converters = {
		'fahrenheitToCelsius': function convertFahrenheitToCelsius() {
			return (sourceTemperature -  32) * 5/9 
		}, 
		'celsiusToFahrenheit': function convertCelsiusToFahrenheit() {
			return (sourceTemperature * 9/5) + 32 
		} 
	};

	return converters[conversionOption]()
	
}

function Controller() {
	this.view = new View();
	this.model = new Model();
}

Controller.prototype.convertButtonClicked = function() {
	var sourceTemperature = this.view.getSourceTemperature();
	var conversionOption = this.view.getConversionOption();
	var resultTemperature = this.model.convertTemperature(sourceTemperature, conversionOption);
	this.view.setResultTemperature(resultTemperature);
}