import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });
  return (
    <MapGL
      {...viewport}
      mapStyle="mapbox://styles/kareem2002shimes/cl9ogfais007a14o2dcf0byo6"
      mapboxAccessToken={process.env.MAPBOX_KEY}
      onMove={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              <img src="mapMarker.png" alt="*" />
            </p>
          </Marker>
          {console.log(selectedLocation)}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default Map;
