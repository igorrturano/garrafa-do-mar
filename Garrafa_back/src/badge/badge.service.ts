
import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers'

@Injectable()
export class UserBadgeService {
   constructor(private userBadgeService: UserBadgeService) {}

    mintAngelBadgeNFT(user) {
    const rpcUrlZeniqSmartChain = 'https://smart.zeniq.network:9545/';
    const chainIdZeniqSmartChain = 383414847825;
    const ABI = [
        "function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)"
    ]
    const provider = new ethers.providers.JsonRpcProvider(
        rpcUrlZeniqSmartChain,
        chainIdZeniqSmartChain,
    );
    
    const signer = ethers.Wallet.fromMnemonic(process.env.MNEMONIC);

    const address =
        '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const contract = new ethers.Contract(address, ABI, provider);
    contract.mintNFT(address, rpcUrlZeniqSmartChain)
  }

}
