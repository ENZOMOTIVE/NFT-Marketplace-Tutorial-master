require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Import dotenv to load environment variables

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    //mumbai: {
   //   url: "https://rpc-mumbai.maticvigil.com",
    //  accounts: [process.env.MUMBAI_PRIVATE_KEY]
   // },
   
    polygon: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [''],
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
