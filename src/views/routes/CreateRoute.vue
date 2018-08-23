<template>
  <div class="createRoute">
    <div class="container">
      <h1>NEW ROUTE</h1>
      <form v-on:submit.prevent="submit()">
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>NAME (OPTIONAL)</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="form-group">
            <label>STARTING ADDRESS</label> 
            <input type="text" class="form-control" v-model="startingAddress">
          </div>
          <div class="form-group">
            <label>ENDING ADDRESS</label>
            <input type="text" class="form-control" v-model="endingAddress">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      name: "",
      startingAddress: "",
      endingAddress: ""
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        starting_address: this.startingAddress,
        ending_address: this.endingAddress,
        name: this.name,
        status: "created"
      };
      axios
        .post("http://localhost:3000/api/routes", params)
        .then(response => {
          this.$router.push("/routes");
          console.log(response.data);
          this.startingAddress = "";
          this.endingAddress = "";
          this.name = "";
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  computed: {}
};
</script>
