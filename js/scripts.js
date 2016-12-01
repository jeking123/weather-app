// Spokane
$.simpleWeather({
    location: 'Spokane',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane .title').text(weather.title);
      
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
      $('.seattle img').attr('src', weather.image);
      $('.seattle .title').text(weather.title);
      
      // If this condition so this icon
        if( 26 >= weather.code && 30 <= weather.code ){
            
            $('.spokane .wi').addClass('wi-day-cloudy');
            
        }
        
        
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
      $('.geo img').attr('src', weather.image);
      $('.geo .title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      $('body').append('<p>No Weather Found!</p>');
    }
    
  
  });
    
};