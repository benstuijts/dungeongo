

window.onload = function() {

  /* Check if player exists. When player is new to the game, run the newGame function. Otherwise run the continueGame function. */

  socket.emit("REGISTER_PLAYER", {
      player:  {
        name: "Ben Stuijts",
        _id: "abcde"
      }
  }, function(response){
    console.log(response);
  });

  socket.emit("NEW_GAME", {}, function(response){
    console.log(response);
  });

  socket.emit("TEST", {data: "some data"});

  var user, map;
  /* Huidige positie van de speler opvragen */

  navigator.geolocation.getCurrentPosition(function(position){
    user = {
      name: "username",
      location: position.coords
    }
    console.log(user);
    // send this to the server...
    // response from the server...
    initializeGoogleMaps(user);
    initializeGame(user.location);
  });

};

function newGame() {
  navigator.geolocation.getCurrentPosition(function(position){
    // send position to the server on socket 'NEW_GAME'
    socket.emit("NEW_GAME", { name: "Ben" + Math.round(Math.random()*10) }, function(response){
      console.log(response);
    });
  });
}

function continueGame() {
  navigator.geolocation.getCurrentPosition(function(position){



  });
}




function initializeGame(user) {
  //displayDungeon(user);
}

function initializeGoogleMaps(location) {

  var mapProp = {
    center:new google.maps.LatLng(location.latitude,location.longitude),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scaleControl: true
  };

  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  google.maps.event.addListener(map, 'click', function(event) {
    console.log(event.latLng);
    placeMarker(event.latLng);
  });
}
//google.maps.event.addDomListener(window, 'load', initialize);

function displayDungeon(location) {

  var myCenter=new google.maps.LatLng(location.latitude,location.longitude);
  var marker = new google.maps.Marker({
    position: myCenter,
    map: map,
  });
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  /*
  var infowindow = new google.maps.InfoWindow({
    content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
  });
  infowindow.open(map,marker);
  */
}



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function position(position) {
  console.log(position.coords);
  return position.coords;
}

function showPosition(position) {
    document.getElementById("info").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
