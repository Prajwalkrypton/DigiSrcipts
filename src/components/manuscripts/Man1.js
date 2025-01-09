import React from 'react'

import './Man1.css'
import Navbar2 from '../Navbar2'
import ManuPhotoCard from '../ManuPhotoCard'
import photo1 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.2.jpg';
import photo2 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.3.jpg';
import photo3 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.4.jpg';
import photo4 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.5.jpg';
import photo5 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.6.jpg';
import photo6 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.7.jpg';
import photo7 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.8.jpg';
import photo8 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.9.jpg';
import photo9 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.10.jpg';
import photo10 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.11.jpg';
import photo11 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.12.jpg';
import photo12 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.13.jpg';
import photo13 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.14.jpg';
import photo14 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.15.jpg';
import photo15 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.16.jpg';
import photo16 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.17.jpg';
import photo17 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.18.jpg';
import photo18 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.19.jpg';
import photo19 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.20.jpg';
import photo20 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.21.jpg';
import photo21 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.22.jpg';
import photo22 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.23.jpg';
import photo23 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.24.jpg';





function Man1() {

  const arr = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, 
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, 
    photo18, photo19, photo20, photo21, photo22, photo23
  ];
  return (
    <div className="cover">
      <Navbar2 /> 
      <div className="container">
  <div className="row">
    {
     arr.map((el)=> {
      return (
        <div className="element col-md-3">
      <ManuPhotoCard photo={el}/>
      {console.log(el)}
      </div>

      )
     })
    }
    


  </div>
</div>
    </div>
  )
}

export default Man1
