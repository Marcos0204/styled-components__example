import React from 'react';
import { InfoSec } from './InfoSection.elements'
import { Container } from  '../../globalStyles';

const infoSection = ({lightBg}) => {
    return (
        <>
            <InfoSec lightBg={lightBg} >
                <Container>
                    <InfoRow ImgStart={ImgStart}>
                        <InfoColumn>
                            <TextWrapper>

                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default infoSection
