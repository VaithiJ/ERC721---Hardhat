const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("NFT");

  const contract = await nftContract.deploy();

  await contract.deployed();

  console.log(`The contract is deployed at the address : `, contract.address);
}

main();
