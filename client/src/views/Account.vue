<template>
  <div class="container">
    <h1>My Account</h1>
    <h3>My Dogs</h3>
    <CardList :items="dogs" v-slot="{ item }">
      <DogCard :dog="item" />
    </CardList>
    <button
      type="button"
      class="btn btn-primary"
      @click.prevent="$refs.addDogModal.showModal"
    >
      Add Dog
    </button>

    <Modal ref="addDogModal" title="Add Dog" @hide="$refs.addDogForm.reset()">
      <DogForm
        ref="addDogForm"
        @submitSuccess="$refs.addDogModal.hideModal()"
      />
    </Modal>

    <hr />
    <h3>My Auctions</h3>
    <CardList :items="auctions" v-slot:default="{ item }">
      <AuctionCard :auction="item" />
    </CardList>
    <button
      type="button"
      class="btn btn-primary"
      @click.prevent="$refs.addAuctionModal.showModal"
    >
      Add Auction
    </button>

    <Modal
      ref="addAuctionModal"
      title="Add Auction"
      @hide="$refs.addAuctionForm.reset()"
    >
      <AuctionForm
        ref="addAuctionForm"
        @submitSuccess="$refs.addAuctionModal.hideModal()"
      />
    </Modal>

    <hr />
    <h3>My Bids</h3>
    <CardList :items="bids" v-slot="{ item }">
      <BidCard :bid="item" />
    </CardList>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import flatMap from "lodash/flatMap";

import CardList from "@/components/CardList.vue";
import DogCard from "@/components/cards/Dog.vue";
import BidCard from "@/components/cards/Bid.vue";
import AuctionCard from "@/components/cards/Auction.vue";

import Modal from "@/components/Modal.vue";
import DogForm from "@/components/forms/Dog.vue";
import AuctionForm from "@/components/forms/Auction.vue";

export default {
  name: "account",
  components: {
    CardList,
    DogCard,
    AuctionCard,
    BidCard,
    Modal,
    DogForm,
    AuctionForm
  },
  computed: {
    ...mapState(["userId", "username"]),
    ...mapGetters({
      userById: "users/byId",
      dogsByOwner: "dogs/byOwner",
      auctionsByDog: "auctions/active/byDog",
      bidsAll: "bids/all"
    }),
    user() {
      return this.userById(this.userId);
    },
    bids() {
      return this.bidsAll;
    },
    dogs() {
      return this.dogsByOwner(this.userId);
    },
    auctions() {
      return flatMap(this.dogs, dog => this.auctionsByDog(dog.id));
    }
  }
};
</script>
