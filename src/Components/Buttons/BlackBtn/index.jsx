import React from 'react'
import { Link } from 'react-scroll'
import "./style.scss";

const BlackBtn = (props) => {
  return (
    <div>
        <Link smooth={true} style={{cursor:'pointer'}} duration={100} className='blk-btn' to={props.src}>
            {props.title}
        </Link>
    </div>
  )
}

export default BlackBtn