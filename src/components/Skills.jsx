import React from 'react';
import WaveSection from './WaveSection';
import dockerimg from './docker.svg'
import awsimg from '../assetes/skill/aws.svg'
import Marquee from "react-fast-marquee";
import Heading from './ReusebleComponents/Heading';
import SkillCard from './ReusebleComponents/SkillCard';
import Container from './ReusebleComponents/Container';
// import { skilldata } from '../data/Skillicon';

import skillIcons from '../data/Skillicon';
 


const Skills = () => {
 
  console.log(`skillicons array data: ${typeof(skillIcons)}`)
 
  return (
    <div id='skills'>
        <WaveSection fillcolor="var(--color-bg)" bgColor="bg-border"/>



     

    <Container bgcolor='bg'>
      {/* Grid background div */}
         <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z- 0"></div>
               
               
                <div className="flex justify-center my-5 lg:py-2 ">  
                <Heading text="Skills" bgcolor="border" textcolor="white" />
                </div>


        {/*  for text-border    */}
        <div className='py-10 flex items-center justify-center gap-x-32 space-x-6'>
 
                <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnHover={true}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                
                <div className="flex space-x-6">

                {/* {object.keys(skillIcons).map((key,value) => {
                  return   <SkillCard  iconPath={skilldata[0].icon} skillName="Docker"/> 
                })} */}

                {
                  skillIcons.map((skill,index)=>(

                    <SkillCard key={index} skill={skill} /> 
                  ))
                }

                 
               

                </div>
            </Marquee>
                

        </div> 


    </Container>

    </div>
  );
}

export default Skills;
