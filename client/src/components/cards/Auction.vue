<template lang="pug">
  div.card.auctionCard
    div.card-body
      router-link(":to"="{ name: 'auction', params: { id: auction.id } }")
        h5.card-title {{ auction.name }}
      h6.card-subtitle.mb-2.text-muted("v-if"="currentAmount") ${{ currentAmount }}
      p("v-if"="!apiAvailable") Information Unavailable Offline
    div.card-footer.text-muted("v-if"="apiAvailable") {{ endtimeString }}
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
