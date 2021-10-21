import React from 'react';
import { Button } from '../../globalStyles';
import { FooterContainer,
        FooterSubCription,
        FooterSubHeading,
        FooteSubText,
        Form,
        FormInput
} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubCription>
                <FooterSubHeading>
                    Join our exclusive menbership to 
                    receive the lastest news and trends.
                </FooterSubHeading>
                <FooteSubText>
                    You can unsubscribe at any time.
                </FooteSubText>
                <Form>
                    <FormInput 
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <Button > Suscribe</Button>
                </Form>
            </FooterSubCription>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign_up'>How to Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign_up'>How to Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign_up'>How to Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign_up'>How to Works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    
                </FooterLinkWrapper>
            </FooterLinkContainer>
        </FooterContainer>
    )
}

export default Footer
