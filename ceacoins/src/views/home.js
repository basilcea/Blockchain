import React  from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Home  = () => {

    return (
        <div> 
            <h1>CeaCoins</h1>
            <p></p>
            <button> <Link to='/wallet'>View Wallet</Link></button>
            <button><Link to='/mine'>Mine a Coin</Link></button>
        </div>
    )
}
export default Home