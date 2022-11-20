import React, {useState} from 'react'
import styled from 'styled-components'


const Overall = styled.div`
 background: linear-gradient(to bottom right, #F73759, #DB4B44);
   height: 320px;
`
const Slider = styled.div`
  padding-top: 80px;
  height: 250px;
   display: flex;
   justify-content: space-between;
   padding-left: 10%;
   padding-right: 10%;
   text-align: center;
  .flexes{
    padding-top: 11%;
    border-left: 1px solid #b9a3a3;
    padding: 50px;
  }
  .flexe{
    
    padding-top: 11%;
    padding: 50px;
  }

  
  h2{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size:30px;
   } 
   h5{
    text-align: center;
    font-size: 13px;
    color: #b9a3a3;
    font-weight: light;
   }
`
export const UseLoop = () => {
  return (
    <>
    <Overall>
    <Slider>
      <div className='flexe'><h2>1500</h2>
      <h5>PROJECTS COMPLETED</h5></div>
      <div className='flexes'><h2>900</h2>
      <h5>HAPPY CLIENT</h5></div>
      <div className='flexes'><h2>200</h2>
      <h5>AWARD RECIEVED</h5></div>
      <div className='flexes'><h2>120</h2>
      <h5>CRAZY IDEAS</h5></div>
      <div className='flexes'><h2>150</h2>
      <h5>COFFEE CUPS</h5></div>
      <div className='flexes'><h2>7200</h2>
      <h5>HOURS</h5></div>
      
    </Slider>
    </Overall>
    </>
  )
}

export default UseLoop