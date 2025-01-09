import React, { useState } from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from './Card'

function Page2(props) {
    

  return (
    <div className="completeCover">
        <Navbar
          handleChange={props.handleChange}
          name={props.name}
          setName={props.setName}
          year={props.year}
          search={props.search}
          setSearch={props.setSearch}
          setYear={props.setYear}
          description={props.description}
          setDescription={props.setDescription}
        />
        <Card name={props.name} description={props.description} year={props.year} dynNum={props.dynNum} setDynNum={props.setDynNum} />
    </div>
  )
}

export default Page2
