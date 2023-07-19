import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:707-630-7630">707-630-7630</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:raphael.guerrero301@gmail.com">raphael.guerrero301@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>

          <SocialIcons href="https://github.com">
          <AiFillGithub size = "3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size = "3rem"/>
        </SocialIcons>
          
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
