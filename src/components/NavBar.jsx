import React from 'react'
import {NavLink} from "react-router-dom"
import styled from 'styled-components'



const Nav = styled.nav`
    
padding-left: 300px;
display: flex;
flex-direction: column;
padding-right: 60px;
background-color: black;
width:10%;
display: none;
z-index: -1;
a{
    text-decoration: none;
    color: green;
    font-size: 20px;
}
`
const NavBar = () => {
  return (
    <>
     <Nav>
    <NavLink exact to= "/">Home</NavLink>
    <NavLink to= "/About">About</NavLink>
    <NavLink to= "/Contact">Contacts</NavLink>
    <NavLink to= "/SignIn">Resume</NavLink>
    <NavLink to= "/Portfolio">Portfolio</NavLink>
    <NavLink to= "/Services">Services</NavLink>
    </Nav>
    
    </>
  )
}

export default NavBar