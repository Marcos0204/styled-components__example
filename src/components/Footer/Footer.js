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
        </FooterContainer>
    )
}

export default Footer
