import React from 'react'
import styled from "styled-components"
import img1 from "./../image/image2.jpg"
import img2 from "./../image/Capture1.PNG"
import img3 from "./../image/Capture2.PNG"
import img4 from "./../image/Capture3.PNG"
import img5 from "./../image/image6.jpg"
import img6 from "./../image/image7.jpg"

const Gallery = styled.div`
    text-align: center;
  
h2{
    padding-top: 8%;
   color: #e31e3f;
  }
  span{
    color: black;
    font-size: 45px;
    font-weight: bold;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    padding-left: 0;
    color: gray;
    
  }
 
  `
  const Grids = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 15%;
    margin-right: 20%;
    margin-bottom: 25%;
   
  
  .img1{
    background:  url(${img1});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width:530px;
   height: 800px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5),  url(${img1});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width:530px;
   height: 800px;
   }
  }
  .img2{
    background:  url(${img2});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5),  url(${img2});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: contain;
   transition: .2s ease-in-out;
   width: 530px;
   height: 600px;
   }
  }
  .img3{
    background:  url(${img3});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5),url(${img3});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   }
  }
  .img4{
    background:  url(${img4});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   margin-top: -200px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5),url(${img4});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   margin-top: -200px;
   }
  }
  .img5{
    background:  url(${img5});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5), url(${img5});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 600px;
   }
  }
  .img6{
    background:  url(${img6});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 800px;
   margin-top: -200px;
   :hover{
    background:linear-gradient(#000000cb,#000000b5),url(${img6});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   width: 530px;
   height: 800px;
   margin-top: -200px;
   }
  }
`


const Portfolio = () => {
  return (
    <>
    <Gallery>
     <h2>Portfolio</h2>
         <span>Check Out Some Of My Works.</span><br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Odio reprehenderit tempore sint deserunt, nobis beatae modi <br/>possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
           </Gallery>
           <Grids>
            <div className='img1'> </div>
            <div className='img2'> </div>
            <div className='img3'> </div>
            <div className='img4'> </div>
            <div className='img5'> </div>
            <div className='img6'> </div>
           </Grids>
    
    </>
  )
}

export default Portfolio