<template>
  <form ref="form" @submit.prevent="onSubmit" novalidate>
    <div class="form-group">
      <label for="dogFormName">Name</label>
      <input
        type="text"
        class="form-control"
        id="dogFormName"
        placeholder="Enter Name"
        v-model="name"
        required
      />
    </div>
    <div class="form-group">
      <label for="dogFormBreed">Breed</label>
      <input
        type="text"
        class="form-control"
        id="dogFormBreed"
        placeholder="Breed"
        v-model="breed"
        required
      />
    </div>
    <div class="form-group">
      <label for="dogFormAge">Age</label>
      <input
        type="number"
        class="form-control"
        id="dogFormAge"
        value="0"
        min="0"
        step="1"
        v-model="age"
        required
      />
    </div>
    <div class="form-group">
      <label for="dogFormImageUrl">Image URL</label>
      <input
        type="text"
        class="form-control"
        id="dogFormImageUrl"
        placeholder="url"
        v-model="imageUrl"
      />
    </div>
    <div v-if="error" class="alert alert-danger fade show" role="alert">
      {{ error }}
    </div>
    <button type="submit" class="btn btn-primary">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script>
export default {
  name: "DogForm",
  props: {
    dog: {
      id: Number,
      name: String,
      breed: String,
      age: Number,
      ownerId: Number,
      imageUrl: String
    },
    submitLabel: {
      type: String,
      default: "Save"
    }
  },
  data() {
    return {
      name: this.dog ? this.dog.name : null,
      breed: this.dog ? this.dog.breed : null,
      age: this.dog ? this.dog.age : 0,
      imageUrl: this.dog ? this.dog.imageUrl : null,
      error: null
    };
  },
  methods: {
    reset() {
      this.name = this.dog ? this.dog.name : null;
      this.breed = this.dog ? this.dog.breed : null;
      this.age = this.dog ? this.dog.age : 0;
      this.imageUrl = this.dog ? this.dog.imageUrl : null;
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
    createDog() {
      return this.$store.dispatch("dogs/create", {
        name: this.name,
        breed: this.breed,
        age: this.age,
        ownerId: this.$store.state.userId,
        imageUrl: this.imageUrl
      });
    },
    updateDog() {
      return this.$store.dispatch("dogs/update", {
        id: this.dog.id,
        name: this.name,
        breed: this.breed,
        age: this.age,
        imageUrl: this.imageUrl
      });
    },
    onSubmit(e) {
      this.error = null;
      if (!this.checkForm(e)) return;
      let saveAction;
      if (this.dog && this.dog.id) {
        saveAction = this.updateDog();
      } else {
        saveAction = this.createDog();
      }
      saveAction
        .then(() => {
          this.$emit("submitSuccess");
          this.reset();
        })
        .catch(error => {
          if (
            error.data &&
            error.data.details &&
            typeof error.data.details === "string"
          )
            this.error = error.data.details;
          else if (
            error.data &&
            error.data.errors &&
            typeof error.data.errors[0] === "string"
          )
            this.error = error.data.errors[0];
          else this.error = error.msg;
        });
    }
  }
};
</script>
