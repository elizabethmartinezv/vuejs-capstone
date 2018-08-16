<template>
  <div class="routes">
    <h1>My Routes</h1>
    <div v-for="route in routes">
      <h3>{{ route.name }}</h3>
      <div>
        STARTING LOCATION: {{ route.starting_address }}
      </div>
      <div>
        DESTINATION: {{ route.ending_address }}
      </div>
      <div>
        {{ route.status}}
      </div>
      <a v-bind:href=" '/#/routes/' + route.id ">More info</a>
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
