import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers'
import NewCollections from "../Components/NewCollections/NewCollections"
import NeewwsLetter from '../Components/NeewwsLetter/NeewwsLetter';
import Footer from '../Components/Footer/Footer'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NeewwsLetter/>
      
    </div>
  )
}

export default Shop