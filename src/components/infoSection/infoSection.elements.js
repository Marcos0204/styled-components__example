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
  //margin-bottom: 15px;
  //margin-right: 15px;
  //margin-left: 15px;
  flex: 1;
  //max-width: 50%;
  flex-basis: 50%;
  //background-color: yellow;
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