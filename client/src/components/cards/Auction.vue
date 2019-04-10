<template>
  <div class="card auctionCard">
    <div class="card-body">
      <router-link :to="{ name: 'auction', params: { id: auction.id } }">
        <h5 class="card-title">{{ auction.name }}</h5>
      </router-link>
      <h6 v-if="currentAmount" class="card-subtitle mb-2 text-muted">
        ${{ currentAmount }}
      </h6>
      <p v-if="!apiAvailable">Information Unavailable Offline</p>
    </div>
    <div v-if="apiAvailable" class="card-footer text-muted">
      {{ endtimeString }}
    </div>
  </div>
</template>

<script>
import Moment from "moment";
import { mapState } from "vuex";

export default {
  name: "AuctionCard",
  props: {
    auction: Object
  },
  computed: {
    ...mapState(["apiAvailable"]),
    currentAmount() {
      if (this.auction.highestBid && this.auction.highestBid.amount)
        return this.auction.highestBid.amount;
      else return this.auction.startPrice;
    },
    endtimeString() {
      if (!this.auction.expirationTime) return "Endtimes unavailable offline";
      const now = Moment();
      const endtime = Moment(this.auction.expirationTime);
      if (now.diff(endtime) > 0) return "Ended " + endtime.fromNow();
      else return "Ends " + endtime.fromNow();
    }
  }
};
</script>

<style>
.auctionCard {
  width: 265px;
}
.auctionCard a {
  color: inherit;
}
</style>
