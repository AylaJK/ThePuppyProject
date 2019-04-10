<template>
  <div class="card userCard">
    <div class="card-body">
      <router-link :to="{ name: 'user', params: { id: user.id } }">
        <h5 class="card-title">{{ user.username }}</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: Object
  }
};
</script>

<style>
.userCard {
  width: 265px;
}
.userCard a {
  color: inherit;
}
</style>
