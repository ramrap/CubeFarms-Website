import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PRIMARY, PRIMARY_DARK } from '../../utils/Colors'
import { FaChevronDown } from 'react-icons/fa'
import { RiMenu3Line } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'
import { Collapse } from 'react-bootstrap'
import SingleArrowButton from '../Buttons/SingleArrowButton'
import { useAuth } from "../../context/auth";
import { loadFirebase } from "../../context/firebase";

import { motion } from 'framer-motion'
import { useScrollPosition } from '../../utils/scrollDirection'

const logoWhite = '/static/logoWhite.png'
const logoBlack = '/static/logoBlack.png'
const HEADER_ITEMS = [
    {
        title: "Company",
        
        
    },
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About Us",
       
        path: "/#whoarewe"
    },
    
    {
        title: "Team",
       
        path: "/#team"
    },
   
    
    {
        title: "Contact Us",
        path: "/#contactUs"
    },
    {
        title: "Join Us",
        path: "/JoinUs"
    },
    {
        title: "Upload Image",
        path: "/upload"
        
    },
    {
        
        button: true
    }

]

const Container = styled.div`
    ${props => props.white ?
        `
            background: black;
        `
        :
        `
            background: white;
        `
    }
    ${props => props.transparent && `background: transparent;`}
    transition: 0.3s !important;
    position: fixed;
    z-index: 3;
    width: 100%;
    font-size: 0.9rem;
    font-family: helvetica-regular;
    img {
        max-height: 70px;
    }
    .menu-item {
        cursor: pointer;
        text-decoration: none;
        padding: 34px 20px;
        color: ${props => props.white ? "white" : "grey"};
        transition: 0.2s;
    }
    .menu-item-underline {
        position: absolute;
        bottom: 24px;
        left: 20px;
        height: 3px;
        width: 0px;
        background: ${PRIMARY};
        transition: 0.2s;
    }
    .menu-item:hover {
        color: ${props => props.white ? "white" : "black"};
    }
    .menu-item:hover > .menu-item-underline {
        width: 36px;
    }
    .active {
        font-weight: bold;
       
    }
    .full {
        width: 90vw;
        margin: 0px auto;
        justify-content: space-between;
    }
    .heading-bold {
        color: black;
    }
    .content {
        color: rgba(0,0,0,0.8);
    }
    .dropdown-container {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: -160px;
        transition: 0.3s opacity;
    }
    .dropdown {
        background: white;
        box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.2);
        border-radius: 6px;
        overflow: hidden;
    }
    .dropdown-item {
        padding: 30px 20px;
        width: 220px;
        white-space: normal;
        transition: 0.2s;
    }
    .dropdown-item-mobile {
        padding: 10px 35px;
    }
    .menu-item:hover + .dropdown-container {
        opacity: 1;
        top: 88px;
    }
    .dropdown-item:hover {
        background: ${PRIMARY};
    }
    .dropdown-item:hover .heading-bold {
        color: white;
    }
    .dropdown-item:hover .content {
        color: white;
    }
    .dropdown-container:hover {
        opacity: 1;
        top: 88px;
    }
    svg {
        transition: 0.5s;
    }
    .menu-item:hover > svg {
        transform: rotate(180deg);
    }
    .mobile-nav-container {
        position: fixed;
        background: black;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-left: 50px;
        transition: 0.4s;
    }
    .show-nav {
        top: 0vh;
    }
    .hide-nav {
        top -100vh;
    }
    .turned {
        transform: rotate(180deg);
    }
`

const variants = {
    hidden: {
        top: "-100%",
        opacity: 0,
        transition: {duration: 0.3}
    },
    visible: {
        top: "0px",
        opacity: 1,
        transition: {duration: 0.3}
    }
}

export default function Header(props){
    const [ mobileNav, setMobileNav ] = React.useState(false)
    const [ mobileDropdown, setMobileDropdown ] = React.useState("")
    const [ navHidden, setNavHidden ] = React.useState(false)

    const {  firebaseUser, setFirebaseUser, token, setToken, loading } = useAuth()
    const handleSignIn = async () => {
      let firebase = await loadFirebase();
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      firebase.auth().signInWithPopup(provider)
        .then(() => {
          console.log("login success =>", provider)
          setToken(true)
          console.log(token)
        })
        .catch(err => {
          alert('Error Processing request, try again.');
          console.log(err);
        });
    }
    const handleLogout = async () => {
      var firebase = await loadFirebase();
      firebase.auth().signOut().then(function () {
        setFirebaseUser(null)
        setToken(null)
        // delete axiosInstance.defaults.headers.common['Authentication']
      }).catch(function (err) {
        alert('Error Processing request, try again.');
        console.log(err);
      });
    }

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y
        if (isShow === navHidden) setNavHidden(!isShow)
    }, [navHidden])
    const handleDropdown = (item) => {
        if(mobileDropdown == item.title){
            setMobileDropdown("")
        }else {
            setMobileDropdown(item.title)
        }
    }
    return (
        <Container white={props.white} transparent={navHidden}>
            <motion.div variants={variants} initial="visible" animate={navHidden ? "hidden" : "visible"} className={`position-relative d-flex align-items-center ${props.full ? "full" : "container justify-content-between"}`}>
                <div>
                    <a href="/" >
                        <h2>
                        Spirited.ai
                        </h2>
                    
                    </a>
                </div>
                <div className="d-block d-lg-none">
                    <div className="p-3 cursor-pointer" onClick={() => setMobileNav(true)}>
                        <RiMenu3Line size="26" color={props.white ? "white" : "black"} />
                    </div>
                    <div className={`mobile-nav-container font-12 ${mobileNav ? "show-nav" : "hide-nav"}`}>
                        <div className="mobile-nav">
                            <div className="mobile-nav-close text-right py-3 px-4 mr-2 cursor-pointer" onClick={() => setMobileNav(false)}>
                                <MdClose size="30" color="white" />
                            </div>
                            { HEADER_ITEMS.map((item, index1) => 
                                <React.Fragment key={index1}>
                                    {item.path && 
                                        <div className="py-2">
                                            <a href={item.path}>
                                                <div className={`position-relative ${ window.location.pathname == item.path ? "active" : "" }`}>
                                                    {item.title}
                                                    <div className="menu-item-underline"></div>
                                                </div>
                                            </a>
                                        </div>
                                    }
                                    {item.dropdown && 
                                        <div className="position-relative">
                                            <div className="py-2 text-white cursor-pointer" onClick={() => handleDropdown(item)}>
                                                {item.title}&nbsp;&nbsp;<FaChevronDown color={PRIMARY} size="16" className={`dropdown-icon ${mobileDropdown == item.title ? "" : "turned"}`} />
                                            </div>
                                            <Collapse in={mobileDropdown == item.title}>
                                                <div>
                                                    {item.items && item.items.map((child, index2) => 
                                                        <a href={child.path} key={index2}>
                                                            <div className="dropdown-item-mobile">
                                                                <div className="heading-bold font-12 text-white">{child.title}</div>
                                                            </div>
                                                        </a>
                                                    )}
                                                </div>
                                            </Collapse>
                                        </div>
                                    }
                                    {item.button &&
                                        <div className="text-center py-4 position-relative" style={{left: "-20px"}}>
                                            <SingleArrowButton>
                                                {item.title}
                                            </SingleArrowButton>
                                        </div>
                                    }
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    { HEADER_ITEMS.map((item, index1) => 
                        <React.Fragment key={index1}>
                            {item.path && 
                                <div>
                                    <a 
                                        href={item.path} 
                                        className={`menu-item position-relative ${ window.location.pathname == item.path ? "active" : "" }`}
                                    >
                                        {item.title}
                                        <div className="menu-item-underline"></div>
                                    </a>
                                </div>
                            }
                            {item.dropdown && 
                                <div className="position-relative">
                                    <div className="menu-item">
                                        {item.title}&nbsp;&nbsp;<FaChevronDown color={PRIMARY} size="16" className="dropdown-icon" />
                                        <div className="menu-item-underline"></div>
                                    </div>
                                    <div className="dropdown-container" style={{width: 220*item.items.length, left: -110*item.items.length + 55}}>
                                        <div className="dropdown d-flex align-items-center justify-content-center">
                                            {item.items && item.items.map((child, index2) => 
                                                <a href={child.path} key={index2}>
                                                    <div className="dropdown-item">
                                                        <div className="heading-bold font-12">{child.title}</div>
                                                        <div className="content font-08">{child.content}</div>
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                            {item.button &&
                                <div>
                                    <div className="btn btn-arrow ml-3 text-white">
                                    {token ? 
              <div className="p-2" onClick={() => handleLogout()}>
                Logout
              </div>
              :
              <div className="p-2" onClick={() => handleSignIn()}>
                Login with Google
              </div>
            }
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    )}
                    <div>

                    </div>
                </div>
            </motion.div>
        </Container>
    )
}
