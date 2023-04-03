require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  }
};
