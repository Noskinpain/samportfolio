import React from 'react'
import styled from 'styled-components'


const Box = styled.div`
 text-align: center;
  h2{
    margin-top: 10%;
   color: #e31e3f;
  }
  span{
    color: black;
    font-size: 45px;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    text-align:  center;
    line-height: 40px;

    color: gray;
    padding-top: 2%;
  }
 

`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-top: 3%;
column-gap: 100px;
margin-left: 22%;
margin-right: 22%;
margin-bottom: 20%;
p{
  font-weight: bold;
  font-size: 25px;
  
}
.one{

}
.two{
padding: 0px;
margin: 0px;
}
.profile{
  font-weight: 400;
    font-size: 20px;
    text-align:  left;
    line-height: 40px;
    color: gray;
   font-family: 'Times New Roman', Times, serif;
   margin-bottom: 3%;
}
.skills{
  font-weight: 400;
    font-size: 20px;
    text-align:  left;
    line-height: 40px;
    color: gray;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 3%;
}
.left{
  font-weight: bold;
  font-size: 18px;
  margin-top: 3%;
  margin-bottom: 20px;
}
.left span{
  font-weight: 400;
  color: gray;
  margin-bottom: 20px;
  
}
.leftlast{
  font-weight: bold;
  font-size: 18px;
  margin-top: 3%;
  margin-bottom: 100px;
}
.leftlast span{
  font-weight: 400;
  color: gray;
  
  
}
.right input{
width: 400px;
}
.rightlast input{
width: 400px;
}




`
const Button = styled.button`
   width: 230px;
    height: 65px;
   
    background: ${props => props.primary ? "#000000ed" : "transparent"};
color: ${props => props.primary ? "white" : "black"};
    border: 4px solid black;
    margin-top: 2%;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    :hover{
     border-color:   ${props => props.primary ? "none" : "#e31e3f"};
     background: ${props => props.primary ? "black" : "transparent"};
     transition: 0.5s  ease-in-out;
    }
   
`

const About = () => {
  return (
    <>
    <Box>
      <h2>ABOUT<br/>
        <span>Let me introduce myself.</span>
      </h2>
      <p>Quality-oriented Computer Science major currently
         attending University of Nigeria,<br/> Nsukka. Aiming to 
         leverage proven problem-solving, research, and teamwork 
         skills<br/> to successfully fill the Front End Developer role
          at your company. Frequently praised <br/>as focused by my 
         peers, I can be relied upon to help your company achieve its goals.</p>
    </Box>
    <Grid>
      <div className='one'>
         <p>Profile</p>
      </div>
      <div className='two'>
       <p>Skills</p>
      </div>
      <div className='profile'>
      Skilled Developer with 2 years experience background in Training and
       building functional programs for web. A dept at code writing, mentoring 
        and learning new tech..{/* Able to write clear and concise technical
        specifications. Love to work with a team where my work makes a difference. */}
      </div>
      <div className='skills'>
      ReactJS, NextJS, Redux,<br/>JavaScript, CSS3, HTML5, <br/>content management, wix.
      </div>
      <div className='left'>
      FULLNAME:<br/>
<span>Ofordile Ebuka Samuel</span>
      </div>
      <div className='right'>
      <h5>HTML</h5>
         <input type="range" value="90"/>
      </div>
      <div className='left'>
      BIRTH DATE:<br/>
<span>July 22, 2002</span>

      </div>
      <div className='right'>
      <h5>CSS</h5>
         <input type="range" value="85"/>
      </div>
      <div className='left'>
      JOB:<br/>
<span>Freelancer, Frontend Developer</span>
      </div>
      <div className='right'>
      <h5>JAVASCRIPT</h5>
         <input type="range" value="75"/>
      </div>
      <div className='left'>
      WEBSITE:<br/>
<span>www.samportfolio.com</span>
      </div>
      <div className='right'>
      <h5>REACT</h5>
         <input type="range" value="85"/>
      </div>
      <div className='leftlast'>
      EMAIL:<br/>
<span>ebukasam108@gmail.com</span>
</div>
<div className='rightlast'>
<h5>CMS</h5>
         <input type="range" value="90"/>
</div>
<Button >HIRE ME</Button>
<Button primary>DOWNLOAD CV</Button>
    </Grid>
    </>
  )
}

export default About