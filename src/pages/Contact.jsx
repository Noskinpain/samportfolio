import React from 'react'
import styled from 'styled-components'
import { PhoneOutlined, RedEnvelopeOutlined, EnvironmentOutlined,
  FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined,
  GithubOutlined } from '@ant-design/icons'

const Overall = styled.div`
  background-color: black;
  
  h2{
    padding-top: 8%;
   color: #e31e3f;
   text-align: center;
  }
  span{
    color: white;
    font-size: 45px;
    text-align: center;
    font-weight: bold;
    padding-left: 31%;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    padding-left: 0;
    color: gray;
    margin-bottom: 50px;
  }
  .textbox p{
    font-weight: 400;
    font-size: 20px;
    color: gray;
    text-align: start;
    padding-left: 28%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
input, textarea{
  border: none;
  border-bottom: 2px solid #726565;
  background: transparent;
  width: 45%;
  margin-left: 27%;
}
button{
  margin-left: 27%;
  margin-top: 3%;
  width: 45%;
  height: 70px;
  margin-bottom: 50px;
  background-color:#e31e3f;
  font-weight: bold;
  color:white;
    font-size: 15px;
    cursor: pointer;
   border: none;
}
.lastgrid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
p{
  color: #e31e3f;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    padding-left: 3%;
}
span{
  font-weight: 400;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    padding-left: 30%;
    color: gray;
    margin-bottom: 50px;
}
}
.footer{
  display: flex;
  justify-content: center;
  margin: 8% 10% 15% 3%;
  gap: 50px;
  p{
    font-size: 15px;
padding-left: 20px;
    padding-right: 300px;
    
  }
}
`
const Contact = () => {
  return (
    <>
    <Overall>
    <h2>Contact</h2>
         <span>I'd Love To Hear From You</span><br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Odio reprehenderit tempore sint deserunt, nobis beatae modi <br/>possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
           <div className='textbox'>
           <p>Name</p>
           <input type="text" size="" autocomplete=""  required/>
           <p>Email</p>
           <input type="email" name="email"  id="email" />
           <p>Sybject</p>
           <input type="text" size="" autocomplete=""  required/>
           <p>Message</p>
           <textarea name="" id="" cols="0" rows="5"></textarea>
           </div>
           <button>Submit</button>
           <div className='lastgrid'>
            <div><EnvironmentOutlined style={{fontSize:"50px", color:"white",paddingLeft:"46%",
          paddingTop:"3%"}} />
            <p>WHERE TO FIND ME</p>
            <span>University of nigeria</span><br/><span>Nsukka, Enugu state.<br/></span>
            </div>
            <div><RedEnvelopeOutlined style={{fontSize:"50px", color:"white",paddingLeft:"42%",
          paddingTop:"3%"}}/>
            <p>EMAIL ME AT</p>
            <span>ebukasam108@gmail.com </span><br/>
               <span>samuelnoskinpain@gmail.com</span>
           
            </div>
            <div><PhoneOutlined style={{fontSize:"50px", color:"white",paddingLeft:"40%",
          paddingTop:"3%"}}/>
            <p>CALL ME AT</p>
            <span>phone: 08185276036 or</span> <br/> <span>09070756677</span>
            </div>
           </div>
           <div className='footer'>
<p>&copy; Copyright noskinpain 2022. &nbsp; &nbsp;|   &nbsp; &nbsp;  Design by styleshout</p>
            <div>
              <FacebookOutlined style={{fontSize:"25px"}}/>
              </div>
              <div><TwitterOutlined style={{fontSize:"25px"}} /></div>
              <div> <InstagramOutlined style={{fontSize:"25px"}}/></div>
              <div> <LinkedinOutlined style={{fontSize:"25px"}}/></div>
              <div><GithubOutlined style={{fontSize:"25px"}}/> </div>
           
           </div>
    </Overall>
    </>
  )
}

export default Contact