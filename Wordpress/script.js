function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(38.3453411,-75.6038331),
          zoom: 16
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);