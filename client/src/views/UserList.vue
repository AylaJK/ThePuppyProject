<template>
  <div class="container">
    <h1>Users List</h1>
    <CardList :items="users">
      <template v-slot:default="{ item }">
        <UserCard :user="item" />
      </template>
    </CardList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CardList from "@/components/CardList.vue";
import UserCard from "@/components/cards/User.vue";

export default {
  name: "userlist",
  components: {
    CardList,
    UserCard
  },
  computed: {
    ...mapGetters({
      users: "users/all"
    })
  }
};
</script>
