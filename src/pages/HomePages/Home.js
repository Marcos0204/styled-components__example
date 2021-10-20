import React from 'react';
import { HomeObjOne } from './Data';
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection  {...HomeObjOne}/>
        </>
    )
}

export default Home
