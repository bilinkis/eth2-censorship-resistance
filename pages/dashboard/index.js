import Head from 'next/head'
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import React from "react";
const web3 = createAlchemyWeb3("https://2DbbASnSDnIyLB0rBJhoZyLasyN:2763a08f83889d1f9a1bb17f0dde8541@eth2-beacon-prater.infura.io");
import axios from "axios";
import Dashboard from "../../components/Dashboard";
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks:[]
    }

  }
  componentDidMount = async () =>{
    this.checkBlocks();
    /*const response = await axios.get('https://eth2-beacon-prater.infura.io/eth/v1/beacon/headers/', {
    auth: {
        
    }
});
console.log(response)
        fetch("https://prater.beaconcha.in/api/v1/block/1000").then(async (block)=>{
      console.log(await block.json())
    })
    */
  }
  checkBlocks = () => {
    web3.eth.subscribe("newHeads",(error,event)=>{
      console.log(event)
      let newBlockObject = this.state.blocks;
      newBlockObject.push(event);
      this.setState({blocks:newBlockObject});
    })
  }
  render(){

  
  return (
    <div className="container">
      
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      <Dashboard></Dashboard>
        
        {/*this.state.blocks.map((block)=>{
          return(<h1 key={block.number}>{block.number}</h1>)
        })*/}
        
      </main>


    </div>
  )
}
}


