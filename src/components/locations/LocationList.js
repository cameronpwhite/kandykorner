import React, { useState, useEffect } from 'react'

export const LocationList = () => {
    const [locations, updateLocations] = useState([])

    useEffect(
        () => {
        fetch("https:/localhost:8088/locations")
        .then(response => response.json())
        .then(
            (locationData) => {
                updateLocations(locationData)
            }
        )
        }
    )
    
    
    return (
        locations.map(
            (location) => {
                <div>{location.address}</div>
            }
        )
    )
}