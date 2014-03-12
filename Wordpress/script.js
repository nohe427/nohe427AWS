function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(38.3453411,-75.6038331),
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      
      var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);
}

      google.maps.event.addDomListener(window, 'load', initialize);
