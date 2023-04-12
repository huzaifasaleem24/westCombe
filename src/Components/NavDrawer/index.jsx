import React from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'
import {CgMenuGridR} from 'react-icons/cg'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-scroll'

const NavDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <div onClick={toggleDrawer}>
            <CgMenuGridR/>
            </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'

            >
                <div className="  d-flex flex-column justify-content-around align-items-center py-3">
          <div className="logo">
            <img src="./Images/logo.svg" alt="" />
            {/* <NavDrawer /> */}
          </div>
          <div className="nav-list1 justify-content-center">
            <ul className=' align-items-center'>
              <div  onClick={toggleDrawer} ><li className='mx-4 my-5 border-top-0' ><Link onClick={toggleDrawer}  to='home'>Home</Link></li></div>
              <div  onClick={toggleDrawer} ><li className='mx-4 my-5 border-top-0' ><Link onClick={toggleDrawer}  to='about'>About</Link></li></div>
              <div  onClick={toggleDrawer} ><li className='mx-4 my-5 border-top-0' ><Link onClick={toggleDrawer}  to='projects'>Projects</Link></li></div>
              <div  onClick={toggleDrawer} ><li className='mx-4 my-5 border-top-0' ><Link onClick={toggleDrawer}  to='contact'>Contact</Link></li></div>
            </ul>
            </div>
            
            
        </div>
            </Drawer>
        </>
    )
}

export default NavDrawer