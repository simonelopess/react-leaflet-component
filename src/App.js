import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as parkData from './data/skateboard-parks.json';

import './App.css';

const skater = new Icon({
  iconUrl: '/skateboarding.svg',
  iconSize: [25, 25],
});

function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <div className="App">
      <Map center={[45.421532, -75.697189]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0],
            ]}
            onclick={() => {
              setActivePark(park);
            }}
            icon={skater}
          />
        ))}
        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0],
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default App;
