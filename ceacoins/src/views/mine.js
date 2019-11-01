import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const url = "http://localhost:2020";
const Mine = () => {
  const [blockChain, setblockChain] = useState();
  const [mineClicked, setMineClicked] = useState(false);
  const [lastBlock, setLastBlock] = useState();
  useEffect(() => {
      const handleChange = async() => {
          const result = await axios.get(`${url}/chain`)
          setblockChain(result.data.chain)
      }
      handleChange()
  }, [] )

  const mineCoin = async () => {
    setMineClicked(true);
    const result = await axios.get(`${url}/last_block`);
    setLastBlock(result.data.chain);
  };

  return (
    <div>
      <h1>CeaCoins</h1>
      {!lastBlock && blockChain && (
        <div>
          <h2>The Chain</h2>
          <div>
            {blockChain.map(singleChain => (
              <div key={singleChain.index}>
                <h3>Index: {singleChain.index}</h3>
                <p>Previous Hash: {singleChain.previous_hash}</p>
                <p>Proof: {singleChain.proof}</p>
                <p>Transactions:{singleChain.transactions}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <button> Mine a Coin</button>
      <div></div>
    </div>
  );
};
export default Mine;
