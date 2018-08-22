<template>
  <div class="routesShow">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
            <div class="page-header text-left space-top-30"></div>
        </div>
        <div class="col-sm-4">
            <div class="page-header text-center space-top-30">
                <h2>{{ route.name }}</h2>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="page-header text-right space-top-30"></div>
        </div>
      </div><!-- / row -->

      <div id="map"></div>

      <button id="change-position" type="button" class="btn btn-default" v-on:click="sendStartingMessage()">START ROUTE</button>
    </div>
  </div>
</template>

<style>
#map {
  height: 500px;
  padding: 50px;
  /*  width: 70%;*/
}

#change-position {
  margin-left: 500px;
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
    L.mapquest.key = process.env.VUE_APP_MAPQUEST_CONSUMER_KEY;

    var map = L.mapquest.map("map", {
      center: [41.881832, -87.623177],
      layers: L.mapquest.tileLayer("light"),
      zoom: 13
    });

    var directions = L.mapquest.directions();
    directions.setLayerOptions({
      startMarker: {
        icon: "circle",
        iconOptions: {
          size: "sm",
          primaryColor: "#8fc9d7",
          secondaryColor: "#8fc9d7",
          symbol: "A"
        }
      },
      endMarker: {
        icon: "circle",
        iconOptions: {
          size: "sm",
          primaryColor: "#8fc9d7",
          secondaryColor: "#8fc9d7",
          symbol: "B"
        }
      },
      routeRibbon: {
        color: "#555",
        opacity: 1.0,
        showTraffic: false
      }
    });

    directions.route({
      start: "215 W Ohio St, Chicago, IL",
      end: "500 W Madison St,Chicago, IL",
      options: {
        routeType: "pedestrian"
      }
    });
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
