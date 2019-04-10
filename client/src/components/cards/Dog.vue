<template>
  <div class="card dogCard">
    <img
      v-if="dog.imageUrl"
      :src="dog.imageUrl"
      class="card-img-top"
      :alt="dog.name"
    />
    <div class="card-body">
      <router-link :to="{ name: 'dog', params: { id: dog.id } }">
        <h5 class="card-title">{{ dog.name }}</h5>
      </router-link>
      <h6 class="card-subtitle mb-2 text-muted">{{ dog.breed }}</h6>
    </div>
    <div class="card-footer text-white bg-info" v-if="auction">
      <router-link :to="{ name: 'auction', params: { id: auction.id } }">
        {{ auction.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import head from "lodash/head";

export default {
  name: "DogCard",
  props: {
    dog: Object
  },
  computed: {
    ...mapGetters({
      auctionsByDog: "auctions/active/byDog"
    }),
    auction() {
      return head(this.auctionsByDog(this.dog.id));
    }
  }
};
</script>

<style>
.dogCard {
  width: 265px;
}
.dogCard img {
  min-height: 200px;
  max-height: 201px;
}
.dogCard a {
  color: inherit;
}
.dogCard .card-footer a {
  color: #ffffff;
}
</style>
