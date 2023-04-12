import React from 'react'
import "./style.scss";

const ServiceCard = (props) => {
  return (
    <div className='service-card p-4'>
        <div className="d-flex justify-content-between align-items-center">
        <h4 className='fw-semibold fs-5'>{props.title}</h4>
        <p className='primary fs-5'>{props.count}</p>
        </div>
        <div className="mb-3 icon">
        {props.icon}
        </div>
        <p className='service-p'>{props.desc}</p>
        <p><span className='bttn fw-semibold pt-1 mt-2'>{props.tag1}</span> <span className='bttn fw-semibold pt-1 mt-2'>{props.tag2}</span></p>
    </div>
  )
}

export default ServiceCard