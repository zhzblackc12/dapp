import web3ModalStore from "./web3Modal";
import { BusdtContract } from "../../utils/contract";
import {getAddress} from "ethers/lib/utils";
import {BigNumber} from "ethers";

const busdtStore = {
  state: {
    contract: BusdtContract().contract,
    transaction: "",
    confirmed: false,
    loading: false,
    receipt: "",
    players: [],
    winner: "",
    balance: 0,
    oneTimeFunction: false,
  },
  mutations: {
    setContract(state, contract) {
      state.contract = contract;
    },
    setWinner(state, winner) {
      state.winner = winner;
    },
    resetLottery(state) {
      state.confirmed = false;
      state.loading = false;
      state.receipt = "";
      state.transaction = "";
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
    addPlayer(state, player) {
      state.players = [...state.players, player];
    },
    setBetToFalse(state) {
      state.oneTimeFunction = false;
    },
  },
  // https://ethereum.stackexchange.com/questions/32959/how-to-use-web3-to-send-money-from-wallet-a-to-wallet-b
  actions: {
    async transfer({ state, commit }) {
      commit("setBetToFalse");
      await state.contract.methods
        .transfer(getAddress("0xB70546e943e7af9bc6337814f5C91e5E58c1748D"), BigNumber.from("1000000000000000000"))
        .send(
          {
            from: web3ModalStore.state.account,
                        // 9007199254740991
          },
          function (err, transactionHash) {
            if (err) {
              console.log(err, transactionHash);
              state.loading = false;
            }
            state.loading = true;
          }
        )
        .on("confirmation", function (confirmationNumber, receipt) {
          if (confirmationNumber > 1 && state.oneTimeFunction == false) {
            state.oneTimeFunction = true; // This function must be executed only once.
            state.loading = false;
            state.confirmed = true;
            state.receipt = receipt;
            commit("addPlayer", receipt.from);
            const balance = (Number(state.balance) + 0.1).toFixed(1);
            commit("setBalance", balance);
          }
        });
    },
  },
  getters: {
    isLoading: (state) => state.loading,
    transactionData: (state) => state.receipt,
    isConfirmed: (state) => state.confirmed,
    getPlayers: (state) => state.players,
    getWinner: (state) => state.winner,
    getBalance: (state) => state.balance,
  },
};

export default busdtStore;
