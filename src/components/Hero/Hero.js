import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this portfolio is to give you a tool to get to know me better, show some of my latest personal projects and sharing my passion for programming.
        </SectionText>
        <a href='/CV - Giacomo Di Biagio.pdf' target="/CV - Giacomo Di Biagio.pdf"
           rel="noreferrer">
          <Button>View my CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
