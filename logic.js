// let newYorkCoords = [40.73, -74.0059];
// let mapZoomLevel = 12;

// Create the createMap function.
function createMap(bikeStations) {
  

  // Create the tile layer that will be the background of our map.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

  // Create a baseMaps object to hold the lightmap layer.
  let baseMaps = {
    Street: street    
  }; 

  // Create an overlayMaps object to hold the bikeStations layer.
  // Call createMarkers when it completes.
  let bikeMarkers = [];

  for (let i = 0; i < bikeStations.length; i++) {
    // loop through the cities array, create a new marker, and push it to the bikeStations array
    bikeMarkers.push(
      L.marker([bikeStations[i].lat, bikeStations[i].lon]).bindPopup("<h1>" + bikeStations[i].name + "</h1>")
    );
  }
  let bikeLayer = L.layerGroup(bikeMarkers);
  // Create the map object with options.
  let myMap = L.map("map-id", {
    center: [40.7128, -74.0059],
    zoom: 12,
    layers: [street, bikeLayer]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
}

// Perform an API call to the Citi Bike API to get the station information. 
let url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
d3.json(url).then(function(response) {
  console.log(response);
  createMap(response.data.stations);

});

