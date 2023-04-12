import React from 'react'
import "./style.scss"

const PortfolioCard = (props) => {
  return (
    <div className=' d-flex justify-content-center'>
        <div className='portfolio-card'>
        <img src={props.img} alt="" className='img-fluid' />
        <div className="p-4">
        <h4 className='fw-semibold fs-5'>{props.title}</h4>
        <h6>{props.field}, WESTCOMBE</h6>
        <p className='portfolio-p mt-3'>{props.desc}</p>
        <p><span className='bttn fw-semibold pt-1 mt-2'>{props.tag1}</span> <span className='bttn fw-semibold pt-1 mt-2'>{props.tag2}</span></p>
        </div>
        </div>
    </div>
  )
}

export default PortfolioCard