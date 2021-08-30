import React from 'react'
import { LocationList } from './locations/LocationList.js'

export const KandyKorner = () => {
    return (
        <>
        <h1>Welcome to Kandy Korner</h1>
        <h2>Our Locations:</h2>
        <div><LocationList /></div>
        </>
    )
}