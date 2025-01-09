import React from 'react'
import './Home.css'
import Navbar2 from './Navbar2'
import './About.css'
function About() {
  return (
    <>
    <div className='completeCover'>
    <Navbar2 />
        <div className="coverCover">
        <div className="coverDiv">
            <div className="leftPhotoDiv">
            namdu photo

            </div>
            <div className="rightInfoDiv">
                <div className="title"><span>DigiScripts</span></div>
                <div className="names">
                    <span>Preetham M R   : 1RV23IS092</span>
                    <span>Rohan R Gowda  : 1RV23IS099</span>
                    <span>Pavan P S      : 1RV23IS092</span>
                    <span>Prajwal T S    : 1RV23IS092</span>
                </div>
                <div className="brief">
                The project leverages ReactJS to build an intuitive interface for the preservation, categorization, and display of palm leaf manuscripts, which are fragile and culturally significant. Through digitalization, we safeguard these historical artifacts, enabling easy access for researchers and enthusiasts while ensuring their longevity. The platform's user-centric design streamlines the process of exploring and managing these manuscripts effectively, contributing to cultural preservation in the digital age.
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About
