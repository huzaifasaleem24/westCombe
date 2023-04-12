import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
import {  CiPhone, CiMail, CiTimer } from "react-icons/ci";
import {  IoLocationOutline } from 'react-icons/io5';
import "./style.scss"

const Footer = () => {
  
  const call = () =>{
    window.open('tel:+44 7771 676345');
  }

  return (
    <div>
        <div className="footer">
        <div className="mx-sm-5 mx-4 row pt-5 justify-content-center px-lg-5 pb-5">
          <div className="col-lg-4 col-sm-7 pe-5 pt-4">
            <img src="/Images/logowhite.svg" alt="" width={200} />
            <p className="mt-3 mb-4">
            We offer high-quality products and services at reasonable prices. Providing you with the highest quality is at the top of our priority list.
            </p>
            <div>
              <div className="d-flex">
                {/* <a href="" target='_blank'  ><FaFacebookF className="icon me-2" /></a>
                <a href="" target='_blank'  ><FaInstagram className="icon mx-2" /></a>
                <a href="" target='_blank'  ><FaTwitter className="icon mx-2" /></a> */}
                <a href="https://www.linkedin.com/company/westcombetechnologies-ltd/" target='_blank'  >LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-5 pt-sm-4 pt-5 ps-xl-5 ps-sm-4">
            <h5 className="mb-4">IT Services</h5>
            <ul>
              <li>App Development</li>
              <li>Web Development</li>
              <li>WordPress</li>
              <li>Software Quality Assurance</li>
              <li>Graphic Designing</li>
              <li>Digital Marketing</li>
            </ul>


          </div>
          <div className="col-lg-4 pt-lg-4 pt-md- pt-4">
            <h5 className="mb-4">Contact Info</h5>
            <div className="d-flex align-items-center my-3">
              <IoLocationOutline className="location" />
              <a className="ps-3 mb-0">5 Littlecombe London SE7 7HS</a>
            </div>
            <div className="d-flex align-items-center my-3">
              <CiPhone className="icons" />
              <p className="ps-3 mb-0" onClick={call} style={{cursor:"pointer"}}>+44 7771 676345</p>
            </div>
            <div className="d-flex align-items-center my-3">
              <CiMail className="icons" />
              <div>
              <a className="ps-3 mb-0" target="_blank" href='mailto:info@westcombe.com' rel="noreferrer">info@westcombe.com</a>
              <br />
              <a className="ps-3 mb-0" target="_blank" href='mailto:sales@westcombe.com' rel="noreferrer">sales@westcombe.com</a>
              </div>

            </div>
            <div className="d-flex align-items-center my-3">
              <CiTimer className="icons" />
              <p className="ps-3 mb-0">Opening Hours: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
        <div><p className='text-center py-3 copy mx-5 mb-0'>A project by Westcombe Technologies Ltd. All rights reserved.</p></div>
      </div>
    </div>
  )
}

export default Footer