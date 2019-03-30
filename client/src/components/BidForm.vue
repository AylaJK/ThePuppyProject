<template>
  <form ref="form" @submit="onSubmit" class="form-inline" novalidate>
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
      </div>
    </div>
    <button type="submit" class="btn btn-primary mb-2">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BidForm",
  props: {
    auction: {
      id: Number,
      startPrice: Number
    },
    submitLabel: {
      type: String,
      default: "Place Bid"
    }
  },
  data() {
    return {
      amount: null
    };
  },
  computed: {
    ...mapState(["userId"]),
    minimumBid() {
      return this.auction.startPrice;
    }
  },
  methods: {
    reset() {
      this.amount = null;
      this.$refs.form.classList.remove("was-validated");
    },
    checkForm(e) {
      // Do bootstrap's form validation
      if (this.$refs.form.checkValidity() === false) {
        this.$refs.form.classList.add("was-validated");
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      return true;
    },
    createBid() {
      return this.$store.dispatch("bids/create", {
        auctionId: this.auction.id,
        bidderId: this.userId,
        amount: this.amount
      });
    },
    onSubmit(e) {
      if (!this.checkForm(e)) return;
      this.createBid().then(() => {
        this.$emit("sumbitSuccess");
        this.reset();
      });
    }
  }
};
</script>