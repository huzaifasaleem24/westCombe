import React from 'react'
import { Link } from 'react-scroll'
import "./style.scss";
const BlueBtn = (props) => {
  return (
    <div>
        <Link smooth={true} style={{cursor:'pointer'}} duration={100} className='blu-btn' to={props.src}>
            {props.title}
        </Link>
    </div>
  )
}

export default BlueBtn