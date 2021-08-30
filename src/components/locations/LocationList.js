import React, { useState, useEffect } from 'react'

export const LocationList = () => {
    const [locations, updateLocations] = useState([])
    const [locationMessage, updateLocationMessage] = useState([])

    useEffect(
        () => {
        fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(
            (locationData) => {
                updateLocations(locationData)
            }
        )
        },
        []
    )

    useEffect(
        () => {
            console.log("Location state changed")
            const locationAddresses = locations.map(
                (location) => {
                    return location.address
                }
            )
            updateLocationMessage()

        },
        [locations]
    )


    
    return (
        locations.map(
            (location) => {
                return <li>{location.address}</li>
            }
        )
    )

}