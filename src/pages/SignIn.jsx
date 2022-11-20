import React from 'react'
import styled from 'styled-components'
import "react-vertical-timeline-component/style.min.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'


const Resume = styled.div`
  background-color: silver;
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
  .notch{
    font-size: 26px;
    font-weight: bold;
   color: #e31e3f;
   padding-top: 3%;
  }
  .experience{
    padding-bottom: 15%;
  }
`
const SignIn = () => {
  return (
    <>
    <Resume>
         <h2>Resume</h2>
         <span>More of my credentials.</span><br/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
           Odio reprehenderit tempore sint deserunt, nobis beatae modi <br/>possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
           <p className='notch'>Work Experience</p>
           <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
<p className='notch'>Education</p>
<div className='experience'>
      <VerticalTimeline lineColor={"#3e497a"}>
        <VerticalTimelineElement
        className={"vertical-timeline-element-education"}
        date= {"2010 - 2014"}
        iconStyle= {{background:"#3e497a", color: "#fff"}}
        // icon= {<HomeOutlined/>} 
        >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className={"vertical-timeline-element-education"}
        date= {"2010 - 2014"}
        iconStyle= {{background:"#3e497a", color: "#fff"}}
        // icon= {<HomeOutlined/>}
        >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className={"vertical-timeline-element-education"}
        date= {"2010 - 2014"}
        iconStyle= {{background:"#3e497a", color: "#fff"}}
        // icon= {<HomeOutlined/>}
         >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
          <h4 className='vertical-timtline-element-subtitle'>
            San Francisco, CA
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className={"vertical-timeline-element-education"}
        date= {"2010 - 2014"}
        iconStyle= {{background:"#3e497a", color: "#fff"}}
        // icon= {<HomeOutlined/>} 
        >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
</div>

           


    </Resume>
    
    </>
  )
}

export default SignIn