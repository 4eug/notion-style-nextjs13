import { Container, FooterContainer } from '../molecules/container';
import { Logo } from '../molecules/Icons/logo';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer className="mt-12 lg:mx-[155px]  py-[35px] ">
    <Container>
      <FooterContainer>
        <div className="flex items-center mr-8">
          <Logo />
        </div>
        <div className="flex items-center justify-center space-x-2 ml-8">
          <Instagram />
          <Twitter />
          <Linkedin />
          <Facebook />
          <Youtube />
        </div>
      </FooterContainer>
    </Container>
  </footer>
);
