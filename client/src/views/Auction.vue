<template>
  <div class="container d-flex justify-content-center text-center">
    <div>
      <h1>{{ auction.name }}</h1>
      <template v-if="apiAvailable">
        <h3>${{ currentAmount }}</h3>
        <p>{{ endtimeString }}</p>
        <div class="d-flex justify-content-center">
          <BidForm v-if="loggedin" :auction="auction" />
          <p v-else>Please login to place bids</p>
        </div>
      </template>
      <template v-else>
        <p>Auction information unavailable offline</p>
      </template>
      <router-link :to="{ name: 'dog', params: { id: dog.id } }">
        <h2 class="mt-3">{{ dog.name }}</h2>
      </router-link>
      <img :src="dog.imageUrl" />
      <div class="mb-3 mt-4 d-flex justify-content-center">
        <button
          v-if="loggedin && dog.ownerId === userId"
          type="button"
          class="btn btn-primary"
          @click.prevent="$refs.editAuctionModal.showModal"
        >
          Edit Auction
        </button>
      </div>
      <Modal
        ref="editAuctionModal"
        title="Edit Auction"
        @hide="$refs.editAuctionForm.reset()"
      >
        <AuctionForm
          :auction="auction"
          ref="editAuctionForm"
          @submitSuccess="$refs.editAuctionModal.hideModal()"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
import Moment from "moment";
import { mapGetters, mapState } from "vuex";

import BidForm from "@/components/forms/Bid.vue";

import Modal from "@/components/Modal.vue";
import AuctionForm from "@/components/forms/Auction.vue";

export default {
  name: "auction",
  components: {
    BidForm,
    Modal,
    AuctionForm
  },
  computed: {
    ...mapState(["userId", "apiAvailable"]),
    ...mapGetters({
      auctionById: "auctions/active/byId",
      dogById: "dogs/byId",
      loggedin: "loggedin"
    }),
    auction() {
      return this.auctionById(Number(this.$route.params.id));
    },
    dog() {
      return this.dogById(this.auction.dogId);
    },
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

<style scopped>
a {
  color: inherit;
}
</style>
