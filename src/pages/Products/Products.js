import React from 'react';
import { HomeObjTow,HomeObjTree, HomeObjFour } from './Data';
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection  {...HomeObjTow}/>
            <InfoSection  {...HomeObjTree}/>
            <InfoSection  {...HomeObjFour}/>
        </>
    )
}

export default Home
