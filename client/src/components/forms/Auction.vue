<template>
  <form ref="form" @submit.prevent="onSubmit" novalidate>
    <div class="form-group">
      <label for="auctionFormName">Name</label>
      <input
        type="text"
        class="form-control"
        id="auctionFormName"
        placeholder="Enter Name"
        v-model="name"
        required
      />
    </div>
    <div class="form-group" v-if="!auction">
      <label for="auctionFormDog">Dog</label>
      <DogPicker class="form-control" v-model="dogId" required />
    </div>
    <div class="form-group" v-if="!auction">
      <label for="auctionFormStartPrice">Start Price</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">$</div>
        </div>
        <input
          type="number"
          class="form-control"
          id="auctionFormStartPrice"
          value="0"
          min="0"
          step="0.01"
          v-model="startPrice"
          required
        />
      </div>
    </div>
    <div class="form-group">
      <label for="auctionFormEndTime">End Time</label>
      <VueCtkDateTimePicker
        :min-date="currentDate()"
        format="YYYY-MM-DDTHH:mm:ssZ"
        :value="expirationTime"
        @input="saveExpirationTimeUTC"
        noValueToCustomElem
      >
        <input
          id="auctionFormEndTime"
          placeholder="Select date &amp; time"
          type="text"
          @focus="setDateReadonly(true)"
          @blur="setDateReadonly(false)"
          class="form-control"
          :value="formattedExpirationTime"
          required
        />
      </VueCtkDateTimePicker>
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
import Moment from "moment";

import DogPicker from "@/components/DogPicker.vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

export default {
  name: "AuctionForm",
  components: {
    DogPicker,
    VueCtkDateTimePicker
  },
  props: {
    auction: {
      id: Number,
      dogId: Number,
      expirationTime: Number,
      startPrice: Number,
      name: String,
      completed: Boolean
    },
    dog: {
      id: Number
    },
    submitLabel: {
      type: String,
      default: "Save"
    }
  },
  data() {
    return {
      id: this.auction ? this.auction.id : null,
      dogId: this.auction ? this.auction.dogId : this.dog ? this.dog.id : null,
      expirationTime: this.auction ? this.auction.expirationTime : null,
      startPrice: this.auction ? this.auction.startPrice : 0,
      name: this.auction ? this.auction.name : null,
      completed: this.auction ? this.auction.completed : null,
      error: null
    };
  },
  computed: {
    formattedExpirationTime() {
      return this.expirationTime
        ? Moment(this.expirationTime).format("llll")
        : null;
    }
  },
  methods: {
    reset() {
      this.id = this.auction ? this.auction.id : null;
      this.dogId = this.auction
        ? this.auction.dogId
        : this.dog
        ? this.dog.id
        : null;
      this.expirationTime = this.auction ? this.auction.expirationTime : null;
      this.startPrice = this.auction ? this.auction.startPrice : 0;
      this.name = this.auction ? this.auction.name : null;
      this.completed = this.auction ? this.auction.completed : null;
      this.$refs.form.classList.remove("was-validated");
    },
    setDateReadonly(bool) {
      // jQuery loaded from cdn in browser for Bootstrap
      // eslint-disable-next-line no-undef
      $("#auctionFormEndTime").prop("readonly", bool);
    },
    currentDate() {
      return Moment().format("YYYY-MM-DD");
    },
    saveExpirationTimeUTC(value) {
      this.expirationTime = Moment.parseZone(value)
        .utc()
        .format();
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
    createAuction() {
      return this.$store.dispatch("auctions/create", {
        dogId: this.dogId,
        expirationTime: this.expirationTime,
        startPrice: this.startPrice,
        name: this.name
      });
    },
    updateAuction() {
      return this.$store.dispatch("auctions/update", {
        id: this.id,
        expirationTime: this.expirationTime,
        startPrice: this.startPrice,
        name: this.name
      });
    },
    onSubmit(e) {
      this.error = null;
      if (!this.checkForm(e)) return;
      let saveAction;
      if (this.auction && this.auction.id) {
        saveAction = this.updateAuction();
      } else {
        saveAction = this.createAuction();
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

<style>
#auctionFormEndTime {
  background-color: inherit;
  cursor: pointer;
}
</style>
