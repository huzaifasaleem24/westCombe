import React from 'react'
import './style.scss'
const TestimonialsCard = (props) => {
  return (
    <div className='tes-cards'>
    <div className="client_card">
    <div className="user_img">
    <img width={80} src={props.src}alt=""/>
    </div>
    <div className="inf_content">
    <h6 className="review-text fw-bold ">“{props.test}”</h6>
    <p className="name mt-3 mb-0" >{props.name}</p>
    </div>
    </div>
    </div>
  )
}

export default TestimonialsCard