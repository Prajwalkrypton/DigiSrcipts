import React from 'react';

import './Man1.css';
import Navbar2 from '../Navbar2';
import ManuPhotoCard from '../ManuPhotoCard';
import photo1 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.1.jpg';
import photo2 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.2.jpg';
import photo3 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.3.jpg';
import photo4 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.4.jpg';
import photo5 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.5.jpg';
import photo6 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.6.jpg';
import photo7 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.7.jpg';
import photo8 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.8.jpg';
import photo9 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.9.jpg';
import photo10 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.10.jpg';
import photo11 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.11.jpg';
import photo12 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.12.jpg';
import photo13 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.13.jpg';
import photo14 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.14.jpg';
import photo15 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.15.jpg';
import photo16 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.16.jpg';
import photo17 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.17.jpg';
import photo18 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.18.jpg';
import photo19 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.19.jpg';
import photo20 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.20.jpg';
import photo21 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.21.jpg';
import photo22 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.22.jpg';
import photo23 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.23.jpg';
import photo24 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.24.jpg';
import photo25 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.25.jpg';
import photo26 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.26.jpg';
import photo27 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.27.jpg';
import photo28 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.28.jpg';
import photo29 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.29.jpg';
import photo30 from 'D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos12\\3.30.jpg';

function Man1() {
  const arr = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17,
    photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25,
    photo26, photo27, photo28, photo29, photo30
  ];

  return (
    <div className="cover">
      <Navbar2 />
      <div className="container">
        <div className="row">
          {arr.map((el, index) => (
            <div key={index} className="element col-md-3">
              <ManuPhotoCard photo={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Man1;
