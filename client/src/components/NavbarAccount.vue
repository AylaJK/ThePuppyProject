<template>
  <div class="account dropdown">
    <button
      class="btn btn-outline-secondary my-2 my-sm-0 dropdown-toggle"
      type="button"
      id="accountMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <template v-if="!loggedin">
        Login
      </template>
      <template v-else>
        {{ username }}
      </template>
    </button>
    <div
      class="dropdown-menu dropdown-menu-right"
      aria-labelledby="accountMenuButton"
    >
      <template v-if="!loggedin">
        <form class="px-4 py-3">
          <div class="form-group">
            <label for="loginDropdownFormUsername">Username</label>
            <input
              type="text"
              class="form-control"
              id="loginDropdownFormUsername"
              placeholder="username"
              v-model="signinUsername"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="onSigninSubmit"
          >
            Sign in
          </button>
        </form>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">New around here? Create an account</a>
      </template>
      <template v-else>
        <router-link
          class="dropdown-item"
          active-class="active"
          :to="`/account/${userID}`"
          >My Account</router-link
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" @click.prevent="onLogoutClick"
          >Log Out</a
        >
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navbaraccount",
  data() {
    return {
      signinUsername: null
    };
  },
  computed: {
    loggedin() {
      return this.userID !== null && this.userID !== undefined;
    },
    ...mapState(["userID", "username"])
  },
  methods: {
    onSigninSubmit() {
      this.$store.dispatch("signin", this.signinUsername).then(() => {
        this.signinUsername = null;
      });
    },
    onLogoutClick() {
      this.$store.dispatch("signout").then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style>
#accountMenuButton:after {
  border: none;
  content: none;
}
</style>