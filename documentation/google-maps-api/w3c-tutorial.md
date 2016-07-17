
http://www.w3schools.com/googleapi/google_maps_basic.asp

## Create a Basic Google Map

```html
<!DOCTYPE html>
<html>
<head>
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script>
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>

<body>
<div id="googleMap" style="width:500px;height:380px;"></div>
</body>

</html>
```

### Asynchronously Loading

It is also possible to load the Google Maps API on demand.

The example below uses window.onload to load the Google Maps API after the page has fully loaded.

The loadScript() function creates the Google Maps API <script> tag. In addition, the callback=initialize parameter is added to the end of the URL to execute the initialize() function after the API is fully loaded:

```html
function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  document.body.appendChild(script);
}

window.onload = loadScript;


### Google API Key

Google allows your web site to call any Google API, many thousand times per day.

If you plan for heavier traffic, you should get a free API key from Google.

Go to https://console.developers.google.com to get a free key.

Google Maps expects to find the API key in the key parameter when loading an API:

```html
<script src="http://maps.googleapis.com/maps/api/js?key=YOUR_KEY"></script>
```

## Google Maps - Overlays

Overlays are objects on the map that are bound to latitude/longitude coordinates.

Google Maps has several types of overlays:

* Marker - Single locations on a map. Markers can also display custom icon images
* Polyline - Series of straight lines on a map
* Polygon - Series of straight lines on a map, and the shape is "closed"
* Circle and Rectangle
* Info Windows - Displays content within a popup balloon on top of a map
* Custom overlays

### Google Maps - Add a Marker

```html
var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
```

### Google Maps - Animate the Marker

```html
var marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
```

### Google Maps - Icon Instead of Marker

```hmtl
var marker=new google.maps.Marker({
  position:myCenter,
  icon:'pinkball.png'
  });

marker.setMap(map);
```

### Google Maps - InfoWindow

```html
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });

infowindow.open(map,marker);
```

## Google Maps Events

Click the marker to zoom - attach event handlers to Google maps.

### Click The Marker to Zoom

```html
// Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });
```

### Pan Back to Marker

```html
google.maps.event.addListener(map,'center_changed',function() {
  window.setTimeout(function() {
    map.panTo(marker.getPosition());
  },3000);
});
```

### Open an InfoWindow When Clicking on The Marker

```html
var infowindow = new google.maps.InfoWindow({
  content:"Hello World!"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });
```

### Set Markers and Open InfoWindow for Each Marker

```html
google.maps.event.addListener(map, 'click', function(event) {
  placeMarker(event.latLng);
  });

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() +
    '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
}
```
