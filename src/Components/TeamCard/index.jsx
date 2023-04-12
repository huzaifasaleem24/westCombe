import React from 'react'
import "./style.scss";
import Twitter from '@mui/icons-material/Twitter';
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa"
import { GitHub} from '@mui/icons-material';
import {Link} from "react-router-dom"

const TeamCard = (props) => {
  return (
    <div className='text-center team'>
        <img className='team-img' src={props.img} alt="" width={135} height={135}/>
        <h6 className='fw-bold mt-4 m-0'>{props.name}</h6>
        <p className='team-p'>{props.designation}</p>
        <div className="d-flex justify-content-center">
        {/* <Link to="/" className='icons'><Twitter style={{fontSize:13}}/></Link>
        <Link to="/" className='icons'><FaFacebookF style={{fontSize:13}}/></Link>
        <Link to="/" className='icons'><FaLinkedinIn style={{fontSize:13}}/></Link>
        <Link to="/" className='icons'><GitHub style={{fontSize:13}}/></Link> */}
        </div>
    </div>
  )
}

export default TeamCard