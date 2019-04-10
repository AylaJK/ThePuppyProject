<template>
  <div class="container">
    <h1>Auction List</h1>
    <portal to="searchbar">
      <SearchBar @searchResult="searchAuctions = $event" />
    </portal>
    <CardList v-if="searchAuctions" :items="searchAuctions">
      <template v-slot:default="{ item }">
        <AuctionCard :auction="item" />
      </template>
    </CardList>
    <CardList v-else :items="auctions">
      <template v-slot:default="{ item }">
        <AuctionCard :auction="item" />
      </template>
    </CardList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardList from "@/components/CardList.vue";
import AuctionCard from "@/components/cards/Auction.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "auctionlist",
  components: {
    CardList,
    AuctionCard,
    SearchBar
  },
  data() {
    return {
      searchAuctions: null
    };
  },
  computed: {
    ...mapGetters({
      auctions: "auctions/active/all"
    })
  }
};
</script>
