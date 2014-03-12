function initialize() {
<<<<<<< HEAD
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(49.265984,-123.127491)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var weatherLayer = new google.maps.weather.WeatherLayer({
=======
        var mapOptions = {
          center: new google.maps.LatLng(38.3453411,-75.6038331),
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      var weatherLayer = new google.maps.weather.WeatherLayer({
>>>>>>> parent of af8e44e... Update script.js
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);
}
<<<<<<< HEAD

google.maps.event.addDomListener(window, 'load', initialize);
=======
>>>>>>> parent of af8e44e... Update script.js
