// Create a map object
var myMap = L.map("map", {
  center: [37, -95],
  zoom: 3.5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

//connect to database 
var pg = require("pg");

var connectionString = "postgres://postgres:AppleBanana12!@Servers/ip:25068/parks";

var pgClient = new pg.Client(connectionString);
pgClient.connect();

var query = pgClient.query("SELECT * FROM animal_locations'");

query.on("row", function(row,result){

  result.addRow(row);
  
  });



// Animal data

var animals = [
  {
    name: "Rocky Mountain National Park, Colorado",
    park: park
    
    location: [40.343182, -105.688103]
  },
  {
    name: "Katmai National Park and Preserve, King Salmon",
    location: [58.597813,	-154.693756]
  },
  {
    name: "Glacier Bay National Park and Preserve, Alaska",
    location: [58.665806,	-136.900208]
  },
  {
    name: "Channel Islands National Park, Ventura, CA",
    location: [33.998028,	-119.77294]
  },
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < animals.length; i++) {
  var animals = animals[i];
  L.marker(animals.location)
    .bindPopup("<h1>" + animals.name + "</h1>" )
    .addTo(myMap);
}

pgClient.end();