<template>
  <div class="container d-flex justify-content-center text-center">
    <div>
      <h1>{{ dog.name }}</h1>
      <img :src="dog.imageUrl" />
      <h4>Age: {{ dog.age }}</h4>
      <h4>Breed: {{ dog.breed }}</h4>
      <div class="d-flex justify-content-center mt-3 text-left">
        <AuctionCard v-if="auction" :auction="auction" />
      </div>
      <div class="d-flex justify-content-center mt-3 text-left">
        <UserCard :user="owner" />
      </div>
      <div class="mb-3 mt-4 d-flex justify-content-center">
        <button
          v-if="loggedin && dog.ownerId === userId"
          type="button"
          class="btn btn-primary"
          @click.prevent="$refs.editDogModal.showModal"
        >
          Edit Dog
        </button>
      </div>
      <Modal
        ref="editDogModal"
        title="Edit Dog"
        @hide="$refs.editDogForm.reset()"
      >
        <DogForm
          :dog="dog"
          ref="editDogForm"
          @submitSuccess="$refs.editDogModal.hideModal()"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import head from "lodash/head";

import AuctionCard from "@/components/cards/Auction.vue";
import UserCard from "@/components/cards/User.vue";

import Modal from "@/components/Modal.vue";
import DogForm from "@/components/forms/Dog.vue";

export default {
  name: "dog",
  components: {
    AuctionCard,
    UserCard,
    Modal,
    DogForm
  },
  computed: {
    ...mapState(["userId"]),
    ...mapGetters({
      dogById: "dogs/byId",
      userById: "users/byId",
      auctionsByDog: "auctions/active/byDog",
      loggedin: "loggedin"
    }),
    dog() {
      return this.dogById(this.$route.params.id);
    },
    owner() {
      return this.userById(this.dog.ownerId);
    },
    auction() {
      return head(this.auctionsByDog(this.$route.params.id));
    }
  }
};
</script>
