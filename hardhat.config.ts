import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config()
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage")

const config: HardhatUserConfig = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      gasPrice:2,
      initialBaseFeePerGas:1,
      accounts:{
        count: 50,
        accountsBalance: '2000000000000000000000000'
      },
      allowUnlimitedContractSize: true
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.MATIC_PRIVATE_KEY]
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  mocha: {
  },
  solidity: {
    compilers: [
      {
        version: "0.5.11",
      },
      {
        version: "0.6.7",
        settings: {},
      },
      {
        version: "0.8.17",
      }
    ],
  }
};

export default config;
