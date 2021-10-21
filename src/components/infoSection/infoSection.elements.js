import styled from 'styled-components';


export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ImgStart}) =>( ImgStart ? 'row-reverse' : 'row')};
  justify-content: space-between;
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  //margin-right: 15px;
  //margin-left: 15px;
  flex: 1;
  //max-width: 50%;
  //width: 100%;
  flex-basis: 50%;
  @media screen and (max-width: 768px){
  
    //width: 100vh;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    //background-color: red;

  }
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
  text-align: center;

  @media screen and (max-width: 768px){
    padding-bottom: 65px;
  }
`

export const TopLine = styled.div`
  color : ${({lighTopLine}) => (lighTopLine ? '#a9b3c1' :'#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;

`

export const Heading= styled.h1`
  margin-bottom: 2.4rem;
  font-size: 48px;
  //line-height: 10px;
  color : ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`

export const SubTitle = styled.p`
  max-width: 440px;
  margin: 0 auto 35px auto;
  //margin: 0 auto;
  font-size: 18px;
  line-height: 24px;
  color : ${({lightTextDes}) => (lightTextDes ? '#a9b3c1' : '#1c2237')};
`

export const ImgRapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start}) =>( start ? 'flex-start' : 'flex-end' )};
`

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`