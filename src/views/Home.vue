<template>
  <div>
    <div class="home">
      <h1>Loteria do Vitor!</h1>
      <div class="lottery">
        <div v-if="isLoading">
          <p>Your transaction is being confirmed, please wait!</p>
        </div>
        <div class="prize-bet">
          <Transfer desc="test1"/>
          <Transfer desc="test2"/>
          <Transfer desc="test3" />
        </div>
      </div>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Transfer from "../components/Transfer.vue";

export default {
  name: "Home",
  components: { Transfer: Transfer },
  data() {
    return {
      desc: "",
      number: 0,
      balance: 0,
      account: "",
      players: [],
    };
  },
  mounted() {
    this.$store.dispatch("getPlayers");
    this.$store.dispatch("getBalance");
  },
  computed: {
    ...mapGetters([
      "getAccount",
      "isConnected",
      "isLoading",
      "transactionData",
      "isConfirmed",
      "getBalance",
      "getPlayers",
    ]),
  },
  methods: {
    transfer() {
      this.$store.dispatch("transfer");
    },
  },
};
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #42b883;
  color: azure;
  text-align: center;
}

.players {
  margin-top: 50px;
}

.prize-bet {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1400px) {
  .prize-bet {
    padding: 0 10px;
  }
}

@media screen and (max-width: 768px) {
  .home {
    padding: 0 20px;
    overflow: auto;
  }

  .players {
    font-size: 10px;
  }

  .prize-bet {
    padding: 0;
    flex-direction: column;
  }
}
</style>
