require('@nomiclabs/hardhat-waffle');
require('ditenv').config();
module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'PROD_ALCHEMY_KEY',
      accounts: [process.env.PRIVETE_KEY],
    },
  },
};