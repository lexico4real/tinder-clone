const { ethers } = require('hardhat');

const main = async () => {
  const tinderFactory = await ethers.getContractFactory('TinderERC721');
  const TinderContract = await tinderFactory.deploy();

  console.log('TinderContract address:', TinderContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error deploying contract', error);
    process.exit(1);
  });
