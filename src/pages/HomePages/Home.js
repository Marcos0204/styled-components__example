import React from 'react';
import { HomeObjOne, HomeObjTow,HomeObjTree, HomeObjFour } from './Data';
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection  {...HomeObjOne}/>
            <InfoSection  {...HomeObjTow}/>
            <InfoSection  {...HomeObjTree}/>
            <InfoSection  {...HomeObjFour}/>
        </>
    )
}

export default Home
