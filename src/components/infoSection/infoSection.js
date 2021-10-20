import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from  '../../globalStyles';
import { InfoSec,
        InfoRow,
        InfoColumn,
        TextWrapper,
        TopLine,
        Heading,
        SubTitle,

    } from './InfoSection.elements'

const infoSection = ({
    lightBg,
    ImgStart,
    lighTopLine,
    topLine,
    lightText,
    headLine,
    lightTextDes,
    description,
    primary,
    bottomLabel

    }) => {
    return (
        <>
            <InfoSec lightBg={lightBg} >
                <Container>
                    <InfoRow ImgStart={ImgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lighTopLine={lighTopLine} >{topLine}</TopLine>
                                <Heading lightText={lightText}> {headLine} </Heading>
                                <SubTitle lightTextDes={lightTextDes}>{description}</SubTitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {bottomLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default infoSection
