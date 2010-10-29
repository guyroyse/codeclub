describe 'Fahrenheit To Celsius'
  describe 'Controller'
    before_each
      controller = new Controller()
	  controller.view.stub('getSourceTemperature').and_return(42)
	  controller.view.stub('getConversionOption').and_return('fahrenheitToCelsius')
	  controller.model.stub('convertTemperature').and_return(23)
	  controller.view.stub('setResultTemperature')
    end
    
    it 'should retrieve the temperature from the view'
      controller.view.should.receive('getSourceTemperature', 'once').and_return(42)
	  controller.convertButtonClicked()
    end
    
    it 'should retrieve the conversion type from the view'
      controller.view.should.receive('getConversionOption', 'once').and_return('fahrenheitToCelsius')
      controller.convertButtonClicked()
    end
    
    it 'should retrive the converted value from the model'
      controller.model.should.receive('convertTemperature','once').with_args(42,'fahrenheitToCelsius').and_return(23)
      controller.convertButtonClicked()
    end
    
    it 'should return the converted value to the view'
      controller.view.should.receive('setResultTemperature', 'once').with_args(23)
      controller.convertButtonClicked()
    end
    
    after_each
      destub(controller.view)
    end
  end
  
  describe 'Model'
  	
  	before_each
  	  model = new Model()
  	end
  	
    it 'should convert Fahrenheit to Celsius'
      model.convertTemperature(212, 'fahrenheitToCelsius').should.be 100    
    end
    
    it 'should convert Celsius to Fahrenheit'
      model.convertTemperature(0, 'celsiusToFahrenheit').should.be 32
    end
    
  end
  
end