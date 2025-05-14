import React from 'react'
import MainDiv from '../../companents/layout/MainDiv'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'
import SecFive from './secfive/SecFive'


const Home = () => {
  return (
    <MainDiv>
        <SecOne/>
        <SecTwo/>
        <SecThree/>
        <SecFour/>
        <SecFive/>
    </MainDiv>
  )
}

export default Home