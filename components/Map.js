import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


function Map() {
    const position = [51.233334, 6.783333]
    return (
        <div>
            <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: '50vh', width: '50wh' }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map