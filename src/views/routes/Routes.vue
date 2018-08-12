<template>
  <div class="routes">
    <h1>My Routes</h1>
    <div v-for="route in routes">
      <h2>{{ route.name }}</h2>
      <div>STARTING LOCATION: {{ route.starting_address }}</div>
      DESTINATION: {{ route.ending_address }}
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
      routes: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/routes").then(
      function(response) {
        console.log(response.data);
        this.routes = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
