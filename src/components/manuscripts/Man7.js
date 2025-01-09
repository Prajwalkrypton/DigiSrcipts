import React from 'react'

import './Man1.css'
import Navbar2 from '../Navbar2'
import ManuPhotoCard from '../ManuPhotoCard'
import photo1 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.121.jpg';
import photo2 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.122.jpg';
import photo3 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.123.jpg';
import photo4 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.124.jpg';
import photo5 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.125.jpg';
import photo6 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.126.jpg';
import photo7 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.127.jpg';
import photo8 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.128.jpg';
import photo9 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.129.jpg';
import photo10 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.130.jpg';
import photo11 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.131.jpg';
import photo12 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.132.jpg';
import photo13 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.133.jpg';
import photo14 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.134.jpg';
import photo15 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.135.jpg';
import photo16 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.136.jpg';
import photo17 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.137.jpg';
import photo18 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.138.jpg';
import photo19 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.139.jpg';
import photo20 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.140.jpg';
import photo21 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.141.jpg';
import photo22 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.142.jpg';
import photo23 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.143.jpg';
import photo24 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.144.jpg';
import photo25 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.145.jpg';
import photo26 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.146.jpg';
import photo27 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.147.jpg';
import photo28 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.148.jpg';
import photo29 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.149.jpg';
import photo30 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos8\\1.150.jpg';

function Man1() {

  const arr = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, 
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, 
    photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25, 
    photo26, photo27, photo28, photo29, photo30
  ];

  return (
    <div className="cover">
      <Navbar2/> 
      <div className="container">
        <div className="row">
          {
            arr.map((el) => {
              return (
                <div className="element col-md-3">
                  <ManuPhotoCard photo={el}/>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Man1;
