import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My Personal<br />
        Coding Portfolio
      </SectionTitle>
      <Button onClick ={() => window.location = 'https://github.com/RaphaelG76/Projects'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;