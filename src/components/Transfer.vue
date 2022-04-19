<script src="../../node_modules/web3-eth-contract/types/tests/contract-test.ts"></script>
<template>
  <div class="transfer">
    <div v-if="isConnected">
      <p>{{this.desc}}</p>
      <button @click="transfer" class="transfer-button">transfer !</button>
    </div>
    <div v-else>
      <div class="bet-error">
        <span>You need to connect your wallet</span>
      </div>
      <p>Transfer Amount:{{num}}USDT</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "transfer",
  methods: {
    transfer() {
      this.$store.dispatch("transfer", this.num);
    },
  },
  props: {
     desc: "",
     num:1
  },
  computed: {
    ...mapGetters(["isConnected"]),
  },
};
</script>

<style>
.transfer {
  height: 100px;
  width: 400px;
  background: #eff4ff;
  border-radius: 25px;
  font-size: 18px;
}

.bet-error {
  background: linear-gradient(317deg, #ff4d4d, #ff1e7c 96.35%);
  width: 100%;
}

.bet-error {
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  padding-left: 0px;
  width: 100%;
  border-radius: 18px 18px 0 0;
}

.transfer-button {
  cursor: pointer;
  border-radius: 16px;
  font-size: 16px;
  font-weight: bold;
  opacity: 1;
  background-color: transparent;
  border: 2px solid rgb(31, 199, 212);
  box-shadow: none;
  color: rgb(31, 199, 212);
  padding: 0 21px;
}

@media screen and (max-width: 768px) {
  .transfer {
    width: 100%;
    margin-top: 25px;
  }
}
</style>
