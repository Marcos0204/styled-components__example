import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Button } from '../../globalStyles';
import { FooterContainer,
        FooterSubCription,
        FooterSubHeading,
        FooteSubText,
        Form,
        FormInput,
        FooterLinkContainer,
        FooterLinkWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcon,
        WebSiteRights,
        SocialIcons,
        SocialIconLink
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
                    <SocialMediaWrap>
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
                    </SocialMediaWrap>
                    <SocialMediaWrap>
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
                    </SocialMediaWrap>
                </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon/>
                        ULTRA
                    </SocialLogo>
                    <WebSiteRights>
                        ULTRA o 2021
                    </WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href='' target='_blank' arial-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' arial-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' arial-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' arial-label='Twitter'>
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' arial-label='Linkedin'>
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
