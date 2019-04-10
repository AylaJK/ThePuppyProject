<template>
  <div class="container">
    <h1>Dogs List</h1>
    <portal to="searchbar">
      <SearchBar @searchResult="searchDogs = $event" />
    </portal>
    <CardList v-if="searchDogs" :items="searchDogs">
      <template v-slot:default="{ item }">
        <DogCard :dog="item" />
      </template>
    </CardList>
    <CardList v-else :items="dogs">
      <template v-slot:default="{ item }">
        <DogCard :dog="item" />
      </template>
    </CardList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardList from "@/components/CardList.vue";
import DogCard from "@/components/cards/Dog.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "doglist",
  components: {
    CardList,
    DogCard,
    SearchBar
  },
  data() {
    return {
      searchDogs: null
    };
  },
  computed: {
    ...mapGetters({
      dogs: "dogs/all"
    })
  }
};
</script>
