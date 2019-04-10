<template>
  <div class="status" v-if="!apiAvailable">
    <span class="h-100 d-flex align-items-center">
      <i v-show="refreshing" class="fas fa-spinner fa-spin"></i>
      <a
        v-show="!refreshing"
        ref="tooltip"
        href="#"
        @click.prevent.stop="refreshNow"
        data-toggle="tooltip"
        data-placement="bottom"
        data-html="true"
        title="<b>Offline mode is on</b><div>Looks like you're not connected to the Internet. Changes you make in offline mode will be synced when you reconnect.</div>"
      >
        <i class="fas fa-exclamation-triangle"></i>
      </a>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavbarStatus",
  data() {
    return {
      refreshing: false
    };
  },
  computed: {
    ...mapState(["apiAvailable"])
  },
  watch: {
    apiAvailable(available) {
      // jQuery loaded from cdn in browser for Bootstrap
      // eslint-disable-next-line no-undef
      if (!available) this.$nextTick(() => $(this.$refs.tooltip).tooltip());
      // eslint-disable-next-line no-undef
      else $(this.$refs.tooltip).tooltip("hide");
    }
  },
  methods: {
    refreshNow() {
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      }, 3000);
    }
  },
  mounted() {
    if (!this.apiAvailable)
      // jQuery loaded from cdn in browser for Bootstrap
      // eslint-disable-next-line no-undef
      this.$nextTick(() => $(this.$refs.tooltip).tooltip());
  }
};
</script>

<style scopped>
i.fas {
  font-size: 1.4em;
}
i.fas.fa-exclamation-triangle {
  color: #de4c4a;
}
</style>
