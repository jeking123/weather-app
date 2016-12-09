// Spokane
$.simpleWeather({
    location: 'Spokane',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane .high').text(weather.high);
      $('.spokane .low').text(weather.low);
      $('.spokane .title').text(weather.title);
      $('.spokane i').addClass( 'wi-' + weather.code );
        $('.spokane .currently').text( weather.currently);
        $('.spokane .day').text( weather.forecast[0].day);
        $('.spokane .date').text( weather.forecast[0].date);
        
        
        //Forecast
        $('.spokane .forecast .date').text(weather.forecast[1].date);
        $('.spokane .forecast .day').text(weather.forecast[1].day);
        $('.spokane .forecast .high').text(weather.forecast[1].high);
        $('.spokane .forecast .low').text(weather.forecast[1].low);
          
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      $('body').append('<p>No Weather Found!</p>');
    }
  
  });

// Seattle
$.simpleWeather({
    location: '98105',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle .high').text(weather.high);
      $('.seattle .low').text(weather.low);
      $('.seattle .title').text(weather.title);
      $('.seattle i').addClass( 'wi-' + weather.code );
        $('.seattle .currently').text( weather.currently);
        $('.seattle .day').text( weather.forecast[0].day);
        $('.seattle .date').text( weather.forecast[0].date);
        
        
        //Forecast
        $('.seattle .forecast .day').text(weather.forecast[1].day);
        $('.seattle .forecast .date').text(weather.forecast[1].date);
        $('.seattle .forecast .high').text(weather.forecast[1].high);
        $('.seattle .forecast .low').text(weather.forecast[1].low);
        
     
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      $('body').append('<p>No Weather Found!</p>');
    }
  
  });

// Seattle
$.simpleWeather({
    location: 'cheney',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.cheney .temp').text(weather.temp);
      $('.cheney .city').text(weather.city);
      $('.cheney .high').text(weather.high);
      $('.cheney .low').text(weather.low);
      $('.cheney .title').text(weather.title);
      $('.cheney i').addClass( 'wi-' + weather.code );
        $('.cheney .currently').text( weather.currently);
        $('.cheney .day').text( weather.forecast[0].day);
        $('.cheney .date').text( weather.forecast[0].date);
        
        
        //Forecast
        $('.cheney .forecast .day').text(weather.forecast[1].day);
        $('.cheney .forecast .date').text(weather.forecast[1].date);
        $('.cheney .forecast .high').text(weather.forecast[1].high);
        $('.cheney .forecast .low').text(weather.forecast[1].low);
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      $('body').append('<p>No Weather Found!</p>');
    }
  
  });

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
        $('.geo button').hide();
    });
   
});

// 
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
        
        // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
      $('.geo .high').text(weather.high);
      $('.geo .low').text(weather.low);
      $('.geo .title').text(weather.title);
      $('.geo .code').text(weather.code);
      $('.geo i').addClass( 'wi-' + weather.code );
        
        $('.geo .currently').text( weather.currently);
        $('.geo .day').text( weather.forecast[0].day);
        $('.geo .date').text( weather.forecast[0].date);
        
        
        //Forecast
        $('.geo .forecast .day').text(weather.forecast[1].day);
        $('.geo .forecast .date').text(weather.forecast[1].date);
        $('.geo .forecast .high').text(weather.forecast[1].high);
        $('.geo .forecast .low').text(weather.forecast[1].low);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      $('body').append('<p>No Weather Found!</p>');
    }
    
  
  });
    
};

// Applying Weather Codes