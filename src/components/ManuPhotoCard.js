import React from 'react'
import "./ManuPhotoCard.css"

function ManuPhotoCard(props) {

const styleButton= {
  height:"2rem",
  width:"4rem",
  backgroundColor:"rgba(255, 123, 0, 1)",
  padding:"7px 7px 7px 7px",
  fontFamily:"poppins",
  textDecoration:"none",
  color:"white",
  borderRadius:"4px",
  boxShadow:"rgba(0, 0, 0, 0.218) 5px 2px 2px"

}

  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={props.photo} alt="Card image cap" />
  <div class="card-body">
    <a href={props.photo} class="btnstyling " >View Script</a>
  </div>
</div>
    </div>
  )
}

export default ManuPhotoCard
