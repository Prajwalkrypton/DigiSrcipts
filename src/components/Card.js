import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Card(props) {
  const photo = "../photos/ManuPhotos/ManuPhotos1/1.10.jpg";
  const store =
    "D:\\program\\React Js\\learn React\\DigiScripts\\digiscripts\\src\\photos\\ManuPhotos\\ManuPhotos1\\1.2.jpg";
  const handleStyle = {
    background: `url(${photo})`,
    height: "100%",
    width: "70%",
    backgroundSize: "contain",
    border: " 1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="outerCover">
      <div className="innerArea">
        <div className="titleSection">
          <span>{props.name}</span>
          <span>
            Year:{props.year != "" ? props.year : "Data isn't available"}
          </span>
        </div>
        {/* <div className="photoSection"><div className="photoArea" style={handleStyle} >
                <div id="toPutPhoto">
                </div>
                 </div></div> */}
        <div className="descriptionSection">
          {props.description !== ""
            ? props.description
            : "Data is not available in the DataBase"}
          ... <i>readmore</i>
        </div>
        <div className="buttonSection">
          <div className="readMorebtn  ">
            <a
              target="main"
              href={`https://en.wikipedia.org/wiki/${props.name}`}
            >
              Read More
            </a>
          </div>
          <Link to={`/man${Math.ceil(props.dynNum / 2)}`}>
            <div className="Accessbtn ">Access the Manuscripts</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
