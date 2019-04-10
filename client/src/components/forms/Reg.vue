<template>
  <form ref="form" @submit.prevent="onSubmit" novalidate>
    <div class="form-group">
      <label for="regFormUser">Username</label>
      <input
        type="text"
        class="form-control"
        id="regFormUser"
        placeholder="Enter Username"
        v-model="username"
        required
      />
      <span id="errorMsg" style="color:red; display: none"
        >Username already taken, please enter another Username.</span
      >
    </div>
    <button type="submit" class="btn btn-primary">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script>
export default {
  name: "RegForm",
  props: {
    user: {
      username: String
    },
    submitLabel: {
      type: String,
      default: "Sign Up"
    }
  },
  data() {
    return {
      username: this.user ? this.user.username : null
    };
  },
  methods: {
    reset() {
      this.username = this.user ? this.user.username : null;
      this.$refs.form.classList.remove("was-validated");
    },
    checkForm(e) {
      // Do bootstrap's form validation
      if (this.$refs.form.checkValidity() === false) {
        this.$refs.form.classList.add("was-validated");
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      return true;
    },
    createUser() {
      return this.$store.dispatch("users/create", {
        username: this.username
      });
    },
    onSubmit(e) {
      if (!this.checkForm(e)) return;
      let saveAction;
      saveAction = this.createUser();
      saveAction
        .then(() => {
          this.$emit("submitSuccess");
          this.reset();
        })
        .catch(error => {
          console.log(error);
          var x = document.getElementById("errorMsg");
          x.style.display = "block";
        });
    }
  }
};
</script>
