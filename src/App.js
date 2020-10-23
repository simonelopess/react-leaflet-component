import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

import './App.css';

function App() {
  return (
    <div className="App">
      <Map center={[-22.895751, -43.240692]} zoom={32}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
}

export default App;
