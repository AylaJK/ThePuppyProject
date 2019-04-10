<template>
  <form ref="form" @submit.prevent="onSubmit" class="form-inline" novalidate>
    <div class="form-group">
      <label class="sr-only" for="bidFormInput">Bid Amount</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">$</div>
        </div>
        <input
          type="number"
          class="form-control"
          id="bidFormInput"
          :placeholder="minimumBid"
          :min="minimumBid"
          step="0.01"
          v-model="amount"
          required
        />
        <div v-if="amountError" class="invalid-feedback">
          {{ amountError }}
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mb-2">
      {{ submitLabel }}
    </button>
    <div v-if="serverError" class="alert alert-danger fade show" role="alert">
      {{ serverError }}
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BidForm",
  props: {
    auction: {
      id: Number,
      startPrice: Number,
      highestBid: Object
    },
    submitLabel: {
      type: String,
      default: "Place Bid"
    }
  },
  data() {
    return {
      amount: null,
      amountError: null,
      serverError: null
    };
  },
  computed: {
    ...mapState(["userId"]),
    minimumBid() {
      if (this.auction.highestBid && this.auction.highestBid.amount)
        return this.auction.highestBid.amount + 0.01;
      else return this.auction.startPrice + 0.01;
    }
  },
  methods: {
    reset() {
      this.amount = null;
      this.$refs.form.classList.remove("was-validated");
    },
    checkForm() {
      // Do bootstrap's form validation
      if (this.$refs.form.checkValidity() === false) {
        this.$refs.form.classList.add("was-validated");
        if (this.amount < this.minimumBid)
          this.amountError = "Minimum bid is $" + this.minimumBid;
        return false;
      }
      return true;
    },
    createBid() {
      return this.$store.dispatch("auctions/placeBid", {
        auctionId: this.auction.id,
        bidderId: this.userId,
        amount: this.amount
      });
    },
    onSubmit(e) {
      this.serverError = null;
      if (!this.checkForm(e)) return;
      this.createBid()
        .then(() => {
          this.$emit("sumbitSuccess");
          this.reset();
        })
        .catch(error => {
          if (
            error.data &&
            error.data.details &&
            typeof error.data.details === "string"
          )
            this.serverError = error.data.details;
          else if (
            error.data &&
            error.data.errors &&
            typeof error.data.errors[0] === "string"
          )
            this.serverError = error.data.errors[0];
          else this.serverError = error.msg;
        });
    }
  }
};
</script>
