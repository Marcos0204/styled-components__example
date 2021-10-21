import React from 'react';
import { HomeObjFour } from './Data';
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection  {...HomeObjFour}/>
        </>
    )
}

export default Home
