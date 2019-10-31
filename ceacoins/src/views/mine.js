import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'
const url = 'http://localhost:2020'
const Mine  = () => {
    const [blockChain, setblockChain] = useState()
    const viewChain = async( ) => {
        const result = await axios.get(`${url}/chain`)
        console.log(result.data.chain)
        setblockChain(result.data.chain)
    }
    const mineCoin = async() => {
        
    } 
 
    return (
        <div> 
            <h1>CeaCoins</h1>
            <p></p>
            <button onClick={viewChain}> View Chain</button>
            {blockChain && <div>
                <h2>The Chain</h2>
                {blockChain.map(singleChain => <div key={singleChain.index}>
                    <h3>Index: {singleChain.index}</h3>
                    <p>Previous Hash: {singleChain.previous_hash}</p>
                    <p>Proof: {singleChain.proof}</p>
                    <p>Transactions:{singleChain.transactions}</p>
                </div>)}
            </div>}
            <button> Mine a Coin</button>
        </div>
    )
}
export default Mine