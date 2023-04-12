import React, { useRef } from "react";
import BlackBtn from "../../Components/Buttons/BlackBtn";
import BlueBtn from "../../Components/Buttons/BlueBtn";
import "./style.scss";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Graphics from "../../Components/Graphics";
import TeamCard from "../../Components/TeamCard";
import { BsCheck } from "react-icons/bs";
import ServiceCard from "../../Components/ServiceCard";
// import TeamCard from "../../Components/TeamCard";
import Carousel from "../../Components/Carousel";
import TestimonialsCard from "../../Components/TestimonialsCard";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaLaptopCode, FaWordpress } from "react-icons/fa";
import { BsVectorPen } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import {HiBadgeCheck} from "react-icons/hi";
import { useState } from "react";
import emailjs from '@emailjs/browser';



// import SwipeableTemporaryDrawer from "../../Components/NavDrawer";
const Home = () => {


  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     setName('')
     setEmail('')
     setSubject('')
     setMessage('')
    alert('Email Send Successfully.')
    emailjs.sendForm('service_2rndgl5', 'template_t1di4gb', form.current, 'ChqrZlCEnFW714yIy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     
  }




  return (
    <>
      <div id="home" className="over">
        <div className="hero py-sm-5 pb-5">
          <div className="hero-vectors d-none d-sm-flex pt-5 justify-content-between">
            <div className="col-md-2">
              <img
                src="./Images/heroVector1.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-7">
              <img
                src="./Images/heroVector2.webp"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="d-lg-flex align-items-center content">
            <div className="col-xxl-2 col-xl-1"></div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 ps-xxl-0 ps-lg-5 pt-0 p-sm-5 p-3 ">
              <h6 className="fs-6 primary fw-semibold ">WESTCOMBE</h6>
              <h1 className="h1 fw-light text-white text-lg-black">
                <span className="fw-bold ">Technology & IT</span> <br />{" "}
                Solutions
              </h1>
              <p style={{ maxWidth: 600 }} className="pt-2  pb-5 text-white ">
                We are a leading provider of innovative software solutions. We
                offer a wide range of software products and services that help
                businesses and organizations drive better results.
              </p>
              <BlackBtn src="services" title="Get Started" />
            </div>
            <div className="col-lg-6 hero-img">
              {/* <video > */}
              {/* <source src="" type="video/mp4"/> */}
              {/* </video> */}
              <video
                loop
                autoPlay
                id="myVideo"
                src="./Images/video.mp4"
              ></video>
              {/* <img
              className="vector"
              src="./Images/heroVector2.webp"
              alt=""
              height={566}
            /> */}
              {/* <img className="img img-fluid" src="/Images/head.webp" alt="" /> */}
            </div>
          </div>
        </div>

        {/*------------- About Us ---------------*/}

        <div id="about" className="about text-white margin">
          <div className="about-content">
            <div className="py-5 about-logos d-md-flex justify-content-between align-items-center">
              <img
                src="/Images/fiver.svg"
                alt=""
                width={100}
                className="d-block d-md-flex about-logo"
              />
              <img
                src="/Images/freelancer.svg"
                alt=""
                width={100}
                className="d-block d-md-flex about-logo pt-md-0 pt-4"
              />
              <img
                src="/Images/upwork.svg"
                alt=""
                width={100}
                className="d-block d-md-flex about-logo pt-md-0 pt-4"
              />
              <img
                src="/Images/linkedin.svg"
                alt=""
                width={100}
                className="d-block d-md-flex about-logo pt-md-0 pt-4"
              />
              <img
                src="/Images/limewhite.png"
                alt=""
                width={100}
                className="d-block d-md-flex about-logo pt-md-0 pt-4"
              />
            </div>
            <div className="d-md-flex pt-5 mt-4">
              <div className="col-md-6">
                <h5
                  className="fs-4 fw-bold d-md-block d-none"
                  style={{ lineHeight: 1.5 }}
                >
                  “Technology is best <br /> when it brings people <br />
                  together.”
                </h5>
                <h5
                  className="fs-4 fw-bold d-block d-md-none"
                  style={{ lineHeight: 1.5 }}
                >
                  “Technology is best when it brings people together.”
                </h5>
                <p className="pt-2" style={{ fontSize: 14 }}>
                  PATRICIA CROSS
                </p>
              </div>
              <div className="col-md-6 pt-md-0 pt-4">
                <p className="fw-semibold mb-4">
                  We are a leading software house that specializes in developing
                  high quality software products.
                </p>
                <p className="pb-5">
                  Our products are used by millions of people around the world
                  and are highly rated by our customers. We have a strong team
                  of experienced and talented software developers who are always
                  ready to take on new challenges. We are always looking for new
                  ways to improve our products and services.
                </p>
              </div>
            </div>
            <div className="row gx-5 py-4 d-flex justify-content-between align-items-center">
              <div className="col-md-3 d-flex align-items-center">
                <p className="fs-1 fw-bold pe-3">
                  <CountUp end={5} duration={3} />+
                </p>
                <p style={{ fontSize: 13 }}>YEARS OF EXPERIENCE</p>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <p className="fs-1 fw-bold pe-3">
                  <CountUp end={3} duration={3} />+
                </p>
                <p style={{ fontSize: 13 }}>AWARDS ACHEIVED</p>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <p className="fs-1 fw-bold pe-3">
                  <CountUp end={27} duration={3} />+
                </p>
                <p style={{ fontSize: 13 }}>PROJECTS COMPLETED</p>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <p className="fs-1 fw-bold pe-3">
                  <CountUp end={18} duration={3} />+
                </p>
                <p style={{ fontSize: 13 }}>
                  SATISFIED CLIENTS ON 24 COUNTRIES
                </p>
              </div>
            </div>
          </div>
        </div>

        <Graphics />

        {/*------------- Services ---------------*/}

        <div id="services" className="services m-lg-5 my-5 mx-md-4 p-sm-5 p-3">
          <h6 className="fs-6 primary fw-semibold text-center">OUR SERVICES</h6>
          <h1 className="fs-2 fw-light text-center">
            <span className="fw-bold">Perfect IT Solutions</span> For Your
            Business
          </h1>
          <div className="row g-4 my-4">
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="App Development"
                count="01"
                icon={<MdOutlineAppSettingsAlt />}
                desc="Searching for a reputable and skilled app development business? Our team of professionals is your best option."
                tag1="Flutter"
                tag2="React Native"
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="Web Development"
                count="02"
                icon={<FaLaptopCode />}
                desc="Websites require a strong foundation, a well-designed structure, and routine upkeep much like houses do."
                tag1="Laravel"
                tag2="MERN"
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="Graphic Designing"
                count="03"
                icon={<BsVectorPen />}
                desc="Looking for a unique and inexpensive approach to draw attention to your company? Our goal is to assist you."
                tag1="UI/UX"
                tag2="Illustrator/Photoshop"
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="Quality Assurance"
                count="04"
                icon={<HiBadgeCheck />}
                desc="You can use SQA services to make sure your programme is efficient and error-free. We'll aid in the software testing."
                tag1="Testing"
                tag2="QC"
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="WordPress"
                count="05"
                icon={<FaWordpress />}
                desc="Through numerous digital channels, digital marketing services assist firms in connecting with their clients online."
                tag1="Plugins"
                tag2="Themes"
              />
            </div>
            <div className="col-xl-4 col-md-6">
              <ServiceCard
                title="Digital Marketing"
                count="06"
                icon={<TfiAnnouncement />}
                desc="Through numerous digital channels, digital marketing services assist firms in connecting with their clients online."
                tag1="SEO"
                tag2="SMM"
              />
            </div>
          </div>
        </div>

        {/*------------- Why Choose Us ---------------*/}

        <div className="d-md-flex why ">
          <div className="col-md-6">
            <div className="rel d-flex justify-content-center align-items-center">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="circle1 d-flex justify-content-center align-items-center">
                  <div className="circle2"></div>
                </div>
              </div>
            </div>
            <div
              className=""
              element_type="widget"
              style={{ position: "absolute" }}
            >
              <div>
                <img
                  className="why-circles d-none d-md-block"
                  src="https://iteck.themescamp.com/agency/wp-content/uploads/sites/2/2022/03/choose_bubbles.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="why-logos d-none d-md-block">
              <img
                src="https://iteck.themescamp.com/agency/wp-content/uploads/sites/2/2022/03/choose_brands.png"
                className="attachment-full size-full"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="why-content col-md-6 mt-5">
            <h6 className="fs-6 primary fw-semibold pb-3">WESTCOMBE</h6>
            <h1 className="fs-2 fw-light ">
              <span className="fw-bold">Boost Your Business</span> <br /> With
              New Tech
            </h1>
            <p className="py-4">
              We transform businesses of most major sectors with powerful and
              adaptable digital solutions that satisfy the needs of today.
            </p>

            <div>
              <li className="py-2 fs-6">
                <BsCheck className="check-icon" /> Latest IT Solutions &
                Integration
              </li>
              <li className="py-2 fs-6">
                <BsCheck className="check-icon" /> Highly Experienced Team
              </li>
              <li className="py-2 fs-6">
                <BsCheck className="check-icon" /> Competitive Pricing Structure
              </li>
              <li className="py-2 fs-6">
                <BsCheck className="check-icon" /> Dedicated Support 24/7
              </li>
              <li className="py-2 fs-6">
                <BsCheck className="check-icon" /> Learning and Growing
                Environment
              </li>
            </div>
            <div className="mt-5">
              <BlueBtn src="contact" title="Let's Connect" />
            </div>
          </div>
        </div>

        {/*------------- Portfolio ---------------*/}

        <div id="projects" className="portfolio py-5">
          <div className="portfolio-vectors pt-5 d-flex justify-content-between">
            <div className="align-self-end">
              <img
                src="./Images/portfolio-vector1.webp"
                alt=""
                className="img-fluid align-self-end d-md-block d-none"
              />
            </div>
            <div>
              <img
                src="./Images/portfolio-vector2.png"
                alt=""
                className="img-fluid"
                style={{ opacity: 0.1 }}
              />
            </div>
          </div>
          <div className="portfolio-content p-sm-5 p-4">
            <h6 className="fs-6 primary fw-semibold text-center">
              OUR PORTFOLIO
            </h6>
            <h1 className="fs-2 fw-light text-center">
              <span className="fw-bold">Latest Projects</span> From Our Team
            </h1>
            <Carousel />
          </div>
        </div>

        {/* ---------------Testomonial--------------- */}

        <div className="testimonials mt-5 pt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-6 tes">TESTIMONIALS</h5>
            <p className="fs-3">
              The <strong>Trust</strong> From Clients
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="row d-flex align-items-center container  p-sm-5 p-3">
              <div className="col-lg-6 d-flex justify-content-center">
                <div>
                  <img
                    className="t-pic  img-fluid"
                    src="./Images/testimonials.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column  justify-content-center  mt-lg-0 mt-5">
                <TestimonialsCard
                  src="./Images/test1.jpg"
                  test="We can't understand how we've been living without Software Compnay. Software Compnay has really helped our business. We were treated like royalty."
                  name="Agata U."
                />
                <TestimonialsCard
                  src="./Images/test2.jpg"
                  test="This app is the best! I've never seen anything like it. It's so easy to use and it's so much fun. I love it!"
                  name="Matthew F."
                />
                <TestimonialsCard
                  src="./Images/test3.jpg"
                  test="It's so easy to use and has helped me rent my houses so quickly. I would definitely recommend it to anyone looking to buy/sell or rent a roperty."
                  name="Samantha J."
                />
              </div>
            </div>
          </div>
        </div>

        {/*------------- Meet Our Team ---------------*/}

        <div className="services m-sm-5 p-sm-5 px-3 py-5">
          <h6 className="fs-6 primary fw-semibold text-center">
            MEET OUR EXPERTS
          </h6>
          <h1 className="fs-2 fw-light text-center">
            <span className="fw-bold">The Trust</span> From Clients
          </h1>
          <div className="row g-4 my-4">
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Ayaz Baloch"}
                designation={"CEO Westcombe"}
                img="./Images/ayaz.jpg"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Mohsin Sheraz"}
                designation={"CFO"}
                img="./Images/mohsin.jpg"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Adeel Arif"}
                designation={"CTO"}
                img="./Images/adeel.jpg"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Daleep Kumar"}
                designation={"Laravel Developer"}
                img="./Images/daleep1.jpg"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Nisha Fatima"}
                designation={"React Developer"}
                img="./Images/nisha.jpg"
              />
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <TeamCard
                name={"Qadir Ali"}
                designation={"App Developer"}
                img="./Images/qadir.jpg"
              />
            </div>
          </div>
          {/* <div className="d-md-flex justify-content-center pt-4 center-btn">
            <BlackBtn src="" title="See All Team" />
            &nbsp; &nbsp;&nbsp;
            <BlueBtn src="" title="Join Our Team" />
          </div> */}
        </div>

        {/*------------- Contact Us ---------------*/}

        <div id="contact" className="contact text-white">
          <div className="contact-img col-6">
            <img src="./Images/contact_globe.svg" alt="" />
          </div>
          <div className="contact-content py-5">
          <h6 className="pt-4 fs-6 primary fw-semibold text-center text-white">
            CONTACT US
          </h6>
          <h1 className="fs-2 fw-light text-center text-white">
            <span className="fw-bold">Request Free</span> Consultancy
          </h1>
          <div className="cont-content">
          <div className="d-md-flex justify-content-center">
            <div className="col-md-6 mt-4">
              <h6>Hotline 24/7</h6>
              <h5 className="mb-5">+44 7771 676345</h5>
              <h6 className="fw-light my-3"><span className="fw-semibold">Address:</span> 5 Littlecombe London SE7 7HS</h6>
              <h6 className="fw-light my-3"><span className="fw-semibold">Email:</span> info@westcombe.com <br />sales@westcombe.com</h6>
              <h6 className="fw-light my-3"><span className="fw-semibold">Working Hours:</span> 10:00 - 18:00</h6>
              {/* <a href="/" className="text-white mt-5" style={{textDecoration:"none"}}>Get Direction</a> */}
              
            </div>
            <div className="col-md-6 pt-md-0 pt-5">
             <form ref={form} onSubmit={sendEmail}>
              <div className="d-flex justify-content-between">
              <input onChange={(e)=>{
                setName(e.target.value)
              }} value={name} required className="col-md-6 input"  name="from_name" type="text" placeholder="Name"/>
              <input onChange={e=>{setEmail(e.target.value)}} value={email} required className="col-md-6 input"  name="to_email" type="text" placeholder="Email"/>
              </div>
              <input onChange={e=>{setSubject(e.target.value)}} value={subject} required  name="user_subject" type="text" placeholder="Subject"/> <br />
              <textarea onChange={e=>{setMessage(e.target.value)}} value={message} required name="message" id="" cols="30" rows="5" placeholder="Message" className="mb-5"></textarea>
              <input type="submit" value="Send" style={{width:120, color:'white',backgroundColor:'rgb(9, 29, 29)'}} />
              {/* <BlackBtn src="/" title="Submit"/> */}
             </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Home;
