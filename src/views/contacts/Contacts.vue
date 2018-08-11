<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div v-for="contact in contacts"> 
      <h3>{{ contact.first_name}} {{ contact.last_name}}</h3>
      <p>{{ contact.phone_number }}</p>
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
      contacts: []
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
  methods: {},
  computed: {}
};
</script>
