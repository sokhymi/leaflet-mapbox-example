const response = await fetch("eutrophication.geojson");
const geojsonData = await response.json();

const geoLayer = L.geoJSON(geojsonData, {style:style}).addTo(map);