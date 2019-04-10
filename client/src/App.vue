<template>
  <div id="app">
    <header class="sticky-top">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <router-link class="navbar-brand" to="/">The Puppy Project</router-link>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav mr-auto">
            <NavbarLink to="/" exact>Home</NavbarLink>
            <NavbarLink to="/auctions">Auctions</NavbarLink>
            <NavbarLink to="/dogs">Dogs</NavbarLink>
          </ul>
          <div style="margin: auto; width: 50%; ">
            <portal-target name="searchbar" />
          </div>
          <div class="d-flex">
            <NavbarStatus class="ml-3" />
            <NavbarAccount class="ml-3" />
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="text-muted">
      <div class="container">
        <div class="d-flex justify-content-center">
          <small>CPSC 559 - Group 2</small>
        </div>
      </div>
    </footer>

    <portal-target name="modals" multiple />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import { Auctions, Bids, Dogs, Ping, Users, setStore } from "@/api_polling";

// @ is an alias to /src
import NavbarAccount from "@/components/navbar/Account.vue";
import NavbarStatus from "@/components/navbar/Status.vue";
import NavbarLink from "@/components/navbar/Link.vue";

export default {
  components: {
    NavbarAccount,
    NavbarStatus,
    NavbarLink
  },
  data() {
    return {
      searchResult: null
    };
  },
  computed: {
    ...mapState(["apiAvailable"]),
    ...mapGetters(["loggedin"])
  },
  watch: {
    apiAvailable(available) {
      if (available) this.apiIsAvailable();
      else this.apiIsUnavailable();
    },
    loggedin() {
      if (this.loggedin && this.apiAvailable) Bids.startPolling();
      else Bids.stopPolling();
    }
  },
  methods: {
    apiIsAvailable() {
      Ping.stopPolling();
      Auctions.startPolling();
      Dogs.startPolling();
      Users.startPolling();
      if (this.loggedin) Bids.startPolling();
    },
    apiIsUnavailable() {
      Ping.startPolling();
      Auctions.stopPolling();
      Bids.stopPolling();
      Dogs.stopPolling();
      Users.stopPolling();
    }
  },
  mounted() {
    setStore(this.$store);
    if (this.apiAvailable) this.apiIsAvailable();
    else this.apiIsUnavailable();
  },
  beforeDestroy() {
    Auctions.stopPolling();
    Bids.stopPolling();
    Dogs.stopPolling();
    Ping.stopPolling();
    Users.stopPolling();
  }
};
</script>

<style></style>
