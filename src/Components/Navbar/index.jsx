import React from 'react'
import { Link } from 'react-scroll'
import NavDrawer from '../NavDrawer'
import './style.scss'
// import NavDrawer from '../NavDrawer'
const Navbar = () => {
  return (
    <div style={{position:'sticky',top:0,zIndex:100}}>
      <div className="nav1">
        <div className="  d-flex justify-content-around align-items-center py-3">
          <div className="logo">
            <img src="./Images/logo.svg" alt=""/>
            {/* <NavDrawer /> */}
          </div>
          <div className="nav-list justify-content-center">
            <ul className='d-flex align-items-center'>
              <li className='mx-4' ><Link smooth={true} style={{cursor:'pointer'}} duration={100} to='home' >Home</Link></li>
              <li className='mx-4' ><Link smooth={true} style={{cursor:'pointer'}} duration={500} to='about'>About</Link></li>
              <li className='mx-4' ><Link smooth={true} style={{cursor:'pointer'}} duration={700} to='projects'>Projects</Link></li>
              <li className='mx-4' ><Link smooth={true} style={{cursor:'pointer'}} duration={1000} to='contact'>Contact</Link></li>
            </ul>
            </div>
            <div className="hotline">
            <div className="icon">  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg> 
            </div>
            <div className="ht">
            <p className='fs-6' >hotline 24/7</p>
              <p style={{fontSize:15}} className=' fw-bold'>(+44 7771 676345)</p>
            </div>
            </div>
            <div  className="sidebar">
            <NavDrawer />
            </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar