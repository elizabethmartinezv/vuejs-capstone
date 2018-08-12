<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div v-for="contact in contacts"> 
      <div v-if="contact.primary === true">
        <h1>Primary</h1>
      </div>
      <div v-else>
        <h1>Emergency</h1>
      </div>
      <h3>{{ contact.first_name}} {{ contact.last_name}}</h3>
      <p>{{ contact.phone_number }}</p>
      <h2>Edit:</h2>
      <div>
        <input type="text" v-model="updatedFirstName" :placeholder="contact.first_name">
      </div>
      <div>
        <input type="text" v-model="updatedLastName" :placeholder="contact.last_name">
      </div>
      <div>
        <input type="text" v-model="updatedPhoneNumber":placeholder="contact.phone_number"></div>
      <div>
        <button v-on:click="updatePrimaryContact(contact)">Save Changes</button>
      </div>
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
      contacts: [],
      updatedFirstName: "",
      updatedLastName: "",
      updatedPhoneNumber: ""
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/contacts").then(
      function(response) {
        console.log(response.data);
        this.contacts = response.data;
      }.bind(this)
    );
  },
  methods: {
    updatePrimaryContact: function(contact) {
      var params = {
        first_name: this.updatedFirstName,
        last_name: this.updatedLastName,
        phone_number: this.updatedPhoneNumber
      };
      Object.keys(params).forEach(key => !params[key] && delete params[key]);
      axios
        .patch("http://localhost:3000/api/contacts/" + contact.id, params)
        .then(
          function(response) {
            console.log(response.data);
            contact.first_name = response.data.first_name;
            contact.last_name = response.data.last_name;
            contact.phone_number = response.data.phone_number;
            this.updatedFirstName = "";
            this.updatedLastName = "";
            this.updatedPhoneNumber = "";
          }.bind(this)
        );
    }
  },
  computed: {}
};
</script>
