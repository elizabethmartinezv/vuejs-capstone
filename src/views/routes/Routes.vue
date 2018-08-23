<template>
  <div class="routes">
        <!-- header-banner -->
    <div id="header-banner">
        <div class="banner-content single-page text-center">
            <div class="banner-info">
                <h1>MY ROUTES</h1>
            </div><!-- / banner-info -->
        </div><!-- / banner-content -->
    </div>
    <!-- / header-banner -->

      <section id="portfolio" class="w-shadow info-box four-col">
          <div class="container">
              <!-- portfolio filter -->
              <ul class="portfolio-filter list-inline text-center">
                  <li><a href="#" data-group="all" class="active">ALL</a></li>
                  <li><a href="/#/routes/create" data-group="new">NEW</a></li>
                  <li><a href="#" data-group="saved">SAVED</a></li>
                  <li><a href="#" data-group="branding">COMPLETED</a></li>
              </ul><!--end portfolio filter -->
              <ul class="row portfolio list-unstyled lightbox" id="grid">
                  <!-- project -->
                  <li v-for="route in routes" class="col-xs-6 col-md-3 project" data-groups='["all"]'>
                      <div class="img-bg-color primary">
                          <a href="single-project.html" class="project-link"></a>
                          <!-- / project-link -->
                          <img src="images/project.jpg" alt="">
                          <!-- / project-image -->

                          <!-- project-hover-tools -->
                          <div class="project-hover-tools">
                              <a v-bind:href=" '/#/routes/' + route.id " class="view-btn">
                                  <i class="lnr lnr-eye"></i>
                              </a>
                              <a href="images/project.jpg" class="open-gallery">
                                  <i class="lnr lnr-frame-expand"></i>
                              </a>
                          </div><!-- / project-hover-tools -->

                          <!-- project-details -->
                          <div class="project-details">
                              <h5 class="project-title">{{ route.name ? route.name : "NO NAME" }}</h5>
                              <p class="skill"><a v-bind:href=" '/#/routes/' + route.id ">MORE INFO</a></p>
                          </div><!-- / project-details -->
                      </div><!-- / img-bg-color -->
                  </li>
                  <!-- / project -->

                  <!-- sizer -->
                  <li class="col-xs-6 col-md-3 shuffle_sizer"></li>      
              </ul> <!-- / projects -->
          </div><!-- / container -->

      </section>
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
