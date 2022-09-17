import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-ethers");
require("solidity-coverage")

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      gasPrice:2,
      initialBaseFeePerGas:1,
      accounts:{
        count: 500,
        accountsBalance: '2000000000000000000000000'
      },
      allowUnlimitedContractSize: true
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
