// import logo from './logo.svg';
// import './App.css';
import Blockchain from "./dev/blockchain";


// const sha256 = require('sha256');
// const currentNodeUrl = process.argv[3];
// const uuid = require('uuid/v1');

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }







// function Blockchain(){
//   this.chain = [];
//   this.pendingTransactions = [];

//   this.currentNodeUrl = currentNodeUrl;
//   this.networkNodes = [];

//   this.createNewBlock(100, "0", "0"); //제네시스 블록 생성 

// }

// Blockchain.prototype.createNewBlock = function(nonce, previeousBlockHash, hash){
//   const newBlock = {
//         index: this.chain.length+1,
//         timestamp: Date.now(),
//         transactions: this.pendingTransactions,
//         nonce: nonce,
//         hash: hash,
//         previeousBlockHash: previeousBlockHash

//   };
//     this.pendingTransactions = [];
//     this.chain.push(newBlock);

//     return newBlock;
// };

// Blockchain.prototype.getLasBlock = function(){
//   return this.chain[this.chain.length-1];
// };

// Blockchain.prototype.createNewTransaction = function(
//   amount,
//   sender,
//   recipient
// ){
//   const newTransaction = {
//     amount: amount,
//     sender: sender,
//     recipient: recipient,
//     transactionId: uuid().split("-").join("")
//   };

//   return newTransaction;
// };


// //트랜잭션을 대기열에 추가
// Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
//   this.pendingTransactions.push(transactionObj);
//   return this.getLasBlock()['index'] +1;
// }

// //데이터 해싱
// Blockchain.prototype.hashBlock = function(previeousBlockHash, currentBlockData, nonce){
//   const dataAsString = previeousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
//   const hash = sha256(dataAsString);
//   return hash;
// }

// //proofOfWork(PoW)
// Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
//   let nonce = 0;
//   let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
//   while(hash.substring(0,4) != '0000'){
//     nonce++;
//     hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
//   }
//   return nonce;
// }



export default Blockchain;
