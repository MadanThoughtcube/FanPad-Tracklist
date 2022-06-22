import { Component, OnInit } from '@angular/core';
// import { checkBalance } from '../thirdweb';
import { ContractsService } from '../contracts.service';

@Component({
  selector: 'app-gated-test',
  templateUrl: './gated-test.component.html',
  styleUrls: ['./gated-test.component.css'],
})
export class GatedTestComponent implements OnInit {

  isClaimed = false;

  constructor(private contractservice: ContractsService) { }

  async ngOnInit(): Promise<void> {
    // this.isClaimed = false;
    await this.checkBalance().catch((error) => console.error(error));
  }

  connectWallet = async() => {
    await this.contractservice.connectWallet();
    await this.checkBalance().catch((error) => console.error(error));
    // this.contractservice.getBalance("0x16522fAaD891bD5111495b92438985E6f0c47a61");
    // this.checkBalance();
  }

  getIsClaimed(){
    // console.log(this.isClaimed);
    return this.isClaimed;
  }

  // isClaimed(){
  //   const balance = this.checkBalance();
  //   var balanceString = "";
  //   balance.then(function(result){
  //     balanceString = result;
  //   })
  //   return +balanceString > 0;
  // }
  
  checkBalance = async () => {
    try {
      const balance = await this.contractservice.getBalance("0x16522fAaD891bD5111495b92438985E6f0c47a61");
      this.isClaimed = +balance > 4.0;
    } catch (error) {
      console.log("Failed to check wallet balance: ", error);
    }
    
  }

  

}
