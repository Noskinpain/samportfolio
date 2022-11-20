import React from 'react'
import { Carousel } from 'antd'
import styled from 'styled-components'
import img8 from "./../image/image8.jpg"
import { FolderOpenOutlined, CodepenCircleOutlined, BranchesOutlined } from '@ant-design/icons'
import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons'

const CarouselWrap = styled.div`
  width: 100%;
 position: relative;
 
  text-align: center;
  .caro1{
    background: linear-gradient(#000,#000);
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width:100%;
   height: 1000px;

  }
  .caro2{
    background: linear-gradient(#000000cb,#000000b5),   url(${img8});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width:100%;
   height: 1000px;

  }
  h2{
    padding-top: 8%;
   color: #e31e3f;
  }
  span{
    color: white;
    font-size: 45px;
    font-weight: bold;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    padding-left: 0;
    color: #e6dddd;
    padding-bottom: 50px;
  }
`
const Grids = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
   text-align: center;
   color: white;
   margin-left: 10%;
   margin-right: 10%;
   .icons{
    font-size: 10px;
    padding-top: 30px;
    color: #e31e3f;
   }
.font{
  font-weight: bold;
  font-size: 30px;
  padding-top: 25px;
  
}
.text{
    padding-top:30px;
    color: #e6dddd;
    font-size: 18px;

}
`


export const Banner = () => {
 
      
  return (
    <>
    <CarouselWrap>
    <Carousel>
    <div className='caro1'>
    <h2>SERVICES</h2>
         <span>WHAT CAN I DO FOR YOU?</span><br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Odio reprehenderit tempore sint deserunt, nobis beatae modi <br/>possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
   
    <Grids>
        <div className='icon'><CodepenCircleOutlined style={{fontSize:"50px", color:"#e31e3f"}}/></div>
        <div className='icon'><FolderOpenOutlined style={{fontSize:"50px", color:"#e31e3f"}}/></div>
        <div className='icon'><BranchesOutlined style={{fontSize:"50px", color:"#e31e3f"}} /></div>
        <div className='font'>Web Design</div>
        <div className='font'>Web Development</div>
        <div className='font'>Branding</div>
        <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio reprehenderit tempore sint deserunt, nobis beatae modi possimus
           harum quidem dicta iste omnis ut optio reiciendis</div>
        
        <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio reprehenderit tempore sint deserunt, nobis beatae modi possimus
           harum quidem dicta iste omnis ut optio reiciendis</div>
        
        <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio reprehenderit tempore sint deserunt, nobis beatae modi possimus
           harum quidem dicta iste omnis ut optio reiciendis</div>
    </Grids>
    </div>
    <div className='caro2'>
    <h2>SERVICES</h2>
         <span>WHAT CAN I DO FOR YOU?</span><br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Odio reprehenderit tempore sint deserunt, nobis beatae modi <br/>possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
    </div>
   
  </Carousel>
    </CarouselWrap>
    
    </>
  )
}

export default Banner