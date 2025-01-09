import React from 'react'
import Navbar from './Navbar'
import './Open.css'
import { Link } from 'react-router-dom'
function Open(props) {





    return (
    <div className='completeCoverO'>
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

       <div className="blurOverlayO"></div>

<div className="mainDivO">
  <div className="UpperTextO" style={{marginLeft:"-60rem"}}>
    <span >Digi<span style={{ color: "rgba(255, 123, 0, 1)" ,boxShadow:""}}>Scripts</span></span>
  </div>
  <div className="lowerSearchAreaO">   
  <div className="infoO" >
  <span>Explore the world of ancient knowledge with Digiscripts, a digital archive bringing</span>
<span>centuries-old manuscripts to your fingertips. Discover a collection of historical</span>
<span>treasures from various dynasties, all organized for easy access.</span>
<span>Whether you're a history enthusiast or simply curious, Digiscripts </span>
<span>makes it easy to uncover the secrets of India's past. Search, </span>
<span>discover, and immerse yourself in the wisdom of ancient civilizations!</span>
    
        </div>
  </div>
  <div className="btnDivO">
    <Link to="/search">
    <button className="letsStartbtnO">Let's Get Started..  </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default Open
