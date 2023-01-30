import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Blockchain?" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Decentralized" text="The blockchain network is decentralized which means that there is no central governing authority that will responsible for all the decisions. Rather a group of nodes makes and maintain the network." />
      <Feature title="Distributed" text="All network participants have a copy of the ledger for complete transparency. A public ledger will provide complete information about all the participants on the network and transactions." />
      <Feature title="Immutable" text="Immutability means that the blockchain is a permanent and unalterable network. Blockchain technology functions through a collection of nodes. Every node in the network has a copy of the digital ledger." />
    </div>
  </div>
);

export default WhatGPT3;
