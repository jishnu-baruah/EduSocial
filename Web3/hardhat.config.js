require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { HardhatUserConfig } = require("hardhat/config");

const config = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london",
    },
  },
  networks: {
    opencampus: {
      url: `https://open-campus-codex-sepolia.drpc.org`,
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

module.exports = config;
