import React from 'react';
import {Sectionpara,Section1,SectionContainer,SectionHead,Sectionpara1} from '../section/sectionStyle'
import Button from '../Button/Button';
import B1 from '../../assets/Image.png'
const Section = () => {
  return (
    <>
    <SectionContainer>
      <Section1>
    <Sectionpara>LET'S SHIFT YOUR BUSINESS</Sectionpara>  
    <SectionHead>Shift your business <br /> fast with Shade Pro.</SectionHead>
    <Sectionpara1>With lots of unique blocks, you can  easily build a page without coding.Build your nextconsultancy website within  few minutes.</Sectionpara1>
    <div>

    <Button  data={'Get started a project'}/>
    </div>
    </Section1>
{/* image   */}
    <div>
        <img src={B1} alt="" />
    </div>
    </SectionContainer>
    </>
  );
}

export default Section;
