import React from 'react';
import {HomeObjTree} from './Data';
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection  {...HomeObjTree}/>
        </>
    )
}

export default Home
