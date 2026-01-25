const response = await fetch("eutrophication.geojson");
const geojsonData = await response.json();

const geoLayer = L.geoJSON(geojsonData, {style:style}).addTo(map);


https://api.mapbox.com/styles/v1/sokhymera/cmj8ixjg5000t01r51ubf2a05.html?title=true&access_token=pk.eyJ1Ijoic29raHltZXJhIiwiYSI6ImNtajhpZm03OTAwazkzaXIzb2NjMWpzeTYifQ.rXpcYv8_7Fx9aNhyWEN6SA#2.0/38.000000/-34.000000/0
https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29raHltZXJhIiwiYSI6ImNtajhpZm03OTAwazkzaXIzb2NjMWpzeTYifQ.rXpcYv8_7Fx9aNhyWEN6SA