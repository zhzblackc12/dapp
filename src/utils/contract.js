import Web3 from "web3";
import lotteryABI from "../config/abi/Lottery.json";
import BusdtABI from "../config/abi/BscUsdt.json";


const CONTRACT_ADDRESS = "0xE155d696756ce133b592793bB5d5A4264337AB39";
const USDT_CONTRACT_ADDRESS = "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684";


export const LotteryContract = () => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(lotteryABI.abi, CONTRACT_ADDRESS);

  return { contract, web3 };
};


export const BusdtContract = () => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(BusdtABI.abi, USDT_CONTRACT_ADDRESS);

  return { contract, web3 };
};
