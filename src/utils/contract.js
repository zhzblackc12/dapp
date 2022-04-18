import Web3 from "web3";
import BusdtABI from "../config/abi/BscUsdt.json";

const USDT_CONTRACT_ADDRESS = "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684";


export const BusdtContract = () => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(BusdtABI.abi, USDT_CONTRACT_ADDRESS);

  return { contract, web3 };
};
