import React from 'react';
import { InfoSec,
        InfoRow,
        InfoColumn,
        TextWrapper
    } from './InfoSection.elements'

import { Container } from  '../../globalStyles';

const infoSection = ({lightBg, ImgStart}) => {
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
