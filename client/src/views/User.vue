<template>
  <div class="container">
    <h1>{{ user.username }}</h1>
    <h3>Dogs</h3>
    <CardList :items="dogs" v-slot="{ item }">
      <DogCard :dog="item" />
    </CardList>
    <h3>Auctions</h3>
    <CardList :items="auctions" v-slot:default="{ item }">
      <AuctionCard :auction="item" />
    </CardList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import flatMap from "lodash/flatMap";

import CardList from "@/components/CardList.vue";
import DogCard from "@/components/cards/Dog.vue";
import AuctionCard from "@/components/cards/Auction.vue";

export default {
  name: "user",
  components: {
    CardList,
    DogCard,
    AuctionCard
  },
  computed: {
    ...mapGetters({
      userById: "users/byId",
      dogsByOwner: "dogs/byOwner",
      auctionsByDog: "auctions/active/byDog"
    }),
    user() {
      return this.userById(this.$route.params.id);
    },
    dogs() {
      return this.dogsByOwner(this.$route.params.id);
    },
    auctions() {
      return flatMap(this.dogs, dog => this.auctionsByDog(dog.id));
    }
  }
};
</script>
