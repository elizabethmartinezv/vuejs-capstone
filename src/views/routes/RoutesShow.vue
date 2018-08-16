<template>
  <div class="routesShow">
    <div class="container">
      <h1> {{ route.name }} </h1>
      <div>
        <button v-on:click="sendStartingMessage()">START ROUTE</button>
      </div>
      <div id="map"></div>

    </div>
  </div>
</template>

<style>
#map {
  height: 430px;
  /*  width: 70%;*/
}
</style>

<script>
/* global L */
import axios from "axios";

export default {
  data: function() {
    return {
      route: {}
    };
  },
  created: function() {
    axios
      .get("http://localhost:3000/api/routes/" + this.$route.params.id)
      .then(response => {
        console.log(response);
        this.route = response.data;
      });
  },
  mounted: function() {
    L.mapquest.key = "process.env.VUE_APP_MAPQUEST_CONSUMER_KEY";

    var map = L.mapquest.map("map", {
      center: [41.881832, -87.623177],
      layers: L.mapquest.tileLayer("dark"),
      zoom: 13
    });

    map.addControl(L.mapquest.control());
  },
  methods: {
    sendStartingMessage: function() {
      var params = {
        status: "started"
      };

      axios
        .get("http://localhost:3000/api/starting_message")
        .then(function(response) {
          console.log(response.data);
        });

      axios
        .patch("http://localhost:3000/api/routes/" + this.route.id, params)
        .then(function(response) {
          console.log(response.data);
        });
    }
  },
  computed: {}
};
</script>
