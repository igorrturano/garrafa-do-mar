const { NFTStorage, File } = require("nft.storage")
const fs = require("fs")
const dotenv = require("dotenv")
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

async function storeAsset() {
    const client = new NFTStorage({token: API_KEY})
    metadata = await client.store({
        name: 'myNFT',
        description: 'My NFT is very cool',
        image: new File(
            [await fs.promises.readFile('assets/zencon.jpg')],
            'zencon.jpg',
            {type: 'image/jpg'}
        )
    })
    console.log('Metadata stored in Filecoin and IPFS in the URL:', metadata.url)
}

storeAsset()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
    