import React from 'react'
import img from "./../image/image1.jpg"
import styled from "styled-components"
import { GithubFilled, MailOutlined, LinkedinOutlined,
  FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
  import NavBar from '../components/NavBar'

const Banner = styled.div`
  
  background:linear-gradient(#000000cb,#000000b5),url(${img});
  height: 880px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
   text-align: center;
   z-index: 1;
   /* margin-top: -190px; */
   *{
    margin: 0;
    padding: 0;
   }
   h5{
     color: #e31e3f;
    padding-top: 17%;
    font-size:30px ;
   }
   span{
     color: white;
     font-size: 70px;
    line-height: 100px;
   }
   p{
    color: white;
    font-size: 25px;
   }
   button{
    width: 230px;
    height: 65px;
    background: transparent;
    color: white;
    border: 4px solid gray;
    margin-top: 2%;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    :hover{
     border-color: #e31e3f;
     transition: 0.5s  ease-in-out;
    }
   }
   .icons{
    margin-top: 8%;
    font-size: 5px;
    display: flex;
    gap: 50px;
    justify-content: center;
    cursor: pointer;
    color: green;
    *:hover{
    color: #e31e3f;
    transition: 0.1s ease-in-out;
   }
   }
   
`

const Home = () => {
  return (
    <>
    <NavBar/>
    <Banner>
      <h5>Hi<br/>
      <span>I'm Ofordile Ebuka Samuel.</span></h5>
      <p>| FRONT-END DEVELOPER |</p>
      <button>MORE ABOUT ME </button>
      <div className='icons'>
      <GithubFilled style={{fontSize:"45px"}}/>
             <MailOutlined style={{fontSize:"45px"}}/>
             <LinkedinOutlined style={{fontSize:"45px"}}/>
             <FacebookOutlined style={{fontSize:"45px"}} spin= "true" />
             <TwitterOutlined style={{fontSize:"45px"}} />
      </div>
    </Banner>
    </>
  )
}

export default Home