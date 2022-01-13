const HDWalletProvider = require('@truffle/hdwallet-provider');  // 导入模块
require('dotenv').config()

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(process.env.ROPSTEN_MNEMONIC, process.env.ROPSTEN_RPC_URL);
      },
      network_id: "3",
      skipDryRun: true,
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(process.env.RINKEBY_MNEMONIC, process.env.RINKEBY_RPC_URL);
      },
      network_id: "4",
      skipDryRun: true,
    },
  },

  environments: {
    development: {
      ipfs: {
        address: "http://127.0.0.1:5001", // defaults to local IPFS node
      },
      filecoin: {
        address: "http://localhost:7777/rpc/v0", // defaults to ganache / local Filecoin node
        // token: "FILECOIN_NODE_AUTH_TOKEN",
        storageDealOptions: {
          epochPrice: "2500",
          duration: 518400,
        }
      },
      buckets: {
        key: "MY_BUCKETS_KEY",
        secret: "MY_BUCKETS_SECRET",
        bucketName: "MY_BUCKET_NAME",
      }
    }
  },

  compilers: {
    solc: {
      version: "0.8.4",
    }
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  plugins: [
    "truffle-plugin-verify"
  ]
}
