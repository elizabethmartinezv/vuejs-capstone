<template>
  <div class="createContact">
    <div class="container">
      <form v-on:submit.prevent="submitPrimary()">
        <h1>Add Contacts</h1>
        <h1>Primary:</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="primaryFirstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="primaryLastName">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="primaryPhoneNumber">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

      <form v-on:submit.prevent="submitEmergency()">
        <h1>Emergency:</h1>
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="emergencyFirstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" v-model="emergencyLastName">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="emergencyPhoneNumber">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      primaryFirstName: "",
      primaryLastName: "",
      primaryPhoneNumber: "",
      emergencyFirstName: "",
      emergencyLastName: "",
      emergencyPhoneNumber: ""
    };
  },
  methods: {
    submitPrimary: function() {
      var params = {
        first_name: this.primaryFirstName,
        last_name: this.primaryLastName,
        phone_number: this.primaryPhoneNumber,
        primary: true
      };
      axios
        .post("http://localhost:3000/api/contacts", params)
        .then(response => {
          // this.$router.push("/contacts/create");
          console.log(response.data);
          this.primaryFirstName = "";
          this.primaryLastName = "";
          this.primaryPhoneNumber = "";
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitEmergency: function() {
      var params = {
        first_name: this.emergencyFirstName,
        last_name: this.emergencyLastName,
        phone_number: this.emergencyPhoneNumber,
        primary: false
      };
      axios
        .post("http://localhost:3000/api/contacts", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>



