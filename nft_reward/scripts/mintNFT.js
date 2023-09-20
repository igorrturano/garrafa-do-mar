const { ethers } = require('hardhat');

const contractAddress = process.env.CONTRACT_ADDRESS
const metadataURL = process.env.IPFS_URI

async function mintNFT(contractAddress, metadataURL) {
    const NFT = await ethers.getContractFactory("myNFT")

    const [owner] = await ethers.getSigners()
    await NFT.attach(contractAddress).mintNFT(owner.address, metadataURL)
    console.log("NFT minted for: ", owner.address)
}

mintNFT(contractAddress, metadataURL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
