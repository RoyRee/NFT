const { ethers } = require("hardhat");

async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy()
    await myNFT.deployed()
    console.log("Contract deployed to address:", myNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  //0x0de665a3F29B431c9Cc1F7E190e4D87102494048

  //0x5F3D35A110C600236d793E1CED4201B91b8401f0