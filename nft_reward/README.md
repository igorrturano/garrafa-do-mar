# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

## Install Dependencies:

```shell
npm install
```
These are the dependencies that will be installed by default

```shell
  "devDependencies": {
    "@nomiclabs/hardhat-ethers": "^2.2.3",
    "@truffle/dashboard-hardhat-plugin": "^0.2.15",
    "dotenv": "^16.3.1",
    "ethers": "^5.7.2",
    "hardhat": "^2.17.3",
    "truffle": "^5.11.5"
  },
  "dependencies": {
    "@openzeppelin/contracts": "^4.9.3",
    "nft.storage": "^7.1.1"
  }
```

## nft.storage

[Site do nft.storage](https://nft.storage/)

You can login to nft.storage using github account

You need to create an api key to interact with nft.storage, go to the "API Keys" tab, click on "New Key", give your API Key a name and click on "Create"

This API Key can be placed in an .env

```shell
NFT_STORAGE_API_KEY="YOUR_API_KEY"
```

## Storing data with nft.storage

```shell
npx hardhat run scripts/storageData.js
```

## Compile the project

```shell
npx hardhat compile
```

## Deploy using Truffle Dashboard

Open the terminal and run: 

```shell
truffle dashboard
```
This command will open the Dashboard in your browser, connect your metamask to the desired network
and click "Click to connect" to link your metamask to the Dashboard

Open a new terminal and run:

```shell
npx hardhat run scripts/deploy.js --network truffleDashboard
```

## Minting an NFT

```shell
npx hardhat run scripts/mintNFT.js --network truffleDashboard
```