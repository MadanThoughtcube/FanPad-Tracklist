import { Injectable } from '@angular/core';

import Web3 from 'web3';
import {Contract, ethers, providers, Signer} from 'ethers';

declare let require: any;
declare let window: any;

// let tokenAbi = require('./tokenContract.json');

// var rpcUrl = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";




@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  // private _account: string = "";
  // private web3: any;

  // private _tokenContract: any;
  // private _tokenContractAddress: string = "0x16522fAaD891bD5111495b92438985E6f0c47a61";

  // constructor() {
  //   if (typeof window.web3 !== 'undefined') {
  //     // Use Mist/MetaMask's provider
  //     this.web3 = new Web3(rpcUrl);

  //     if (this.web3.version.network !== '1') {
  //       alert('Please connect to the Ethereum network');
  //     }
  //   } else {
  //     console.warn(
  //       'Please use a dapp browser like mist or MetaMask plugin for chrome'
  //     );
  //   }
  // }

  
  private hasClaimed: boolean;

  constructor(){
    this.hasClaimed = false;
  }

  setHasClaimed(bool: boolean) {
    this.hasClaimed = bool;
  }

  getIsClaimed(){
    return this.hasClaimed;
  }

  connectWallet = async() => {
    if(window.ethereum){
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      try {
        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();
        // console.log(signer.getAddress())
      } catch (error) {
        console.log("Failed to connect wallet", error);
      }
    }else{
      console.warn("MetaMask not detected. . .");
    }
  }

  getBalance = async (tokenAddress: string) => {
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const abi = [
        // Read-Only Functions
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)",

        // // Authenticated Functions
        // "function transfer(address to, uint amount) returns (bool)",

        // // Events
        // "event Transfer(address indexed from, address indexed to, uint amount)"
      ];

      var balance: ethers.BigNumberish = 0;

      try {
        const contract = new ethers.Contract(tokenAddress, abi, provider);
        balance = await contract['balanceOf'](signer.getAddress());
        // const balance = (await contract['balanceOf']((await provider.getSigner()._address)).toString());
        // const balance = (await contract['balanceOf']((await provider.getSigner()._address)).toString());
        // console.log(contract['decimals']());
        console.log("Token Balance:", ethers.utils.formatEther(balance));
      } catch (error) {
        console.log("Failed to get wallet balance", error);
      }

      return ethers.utils.formatEther(balance);
    }else {
      // console.warn("MetaMask not detected. . .");
    }
    return "";
  }
} 