<template>
  <div id="app">
  <header>
      <!-- nav -->
      <nav class="navbar navbar-default">
          <div class="container">
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  </button>
                 <!--  <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a> -->
              </div><!-- / navbar-header -->
              <div class="navbar-collapse collapse">
                  <ul class="nav navbar-nav">
                      <li class="active"><a href="/"><span>HOME</span></a></li>
                      <li v-if="loggedIn"><a href="/#/contacts"><span>CONTACTS</span></a></li>
                      <li v-if="loggedIn"><a href="/#/routes"><span>ROUTES</span></a></li>
                      <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>BLOG</span> <span class="dropdown-icon"></span></a>
                      <ul class="dropdown-menu animated zoomIn fast">
                          <li><a href="blog.html"><span>BLOG FULLWIDTH</span></a></li>
                          <li><a href="blog-masonry.html"><span>BLOG MASONRY</span></a></li>
                          <li><a href="blog-sidebar.html"><span>BLOG SIDEBAR</span></a></li>
                          <li><a href="single-post-full.html"><span>POST FULLWIDTH</span></a></li>
                          <li><a href="single-post.html"><span>POST SIDEBAR</span></a></li>
                      </ul>
                      </li>
                      <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>PORTFOLIO</span> <span class="dropdown-icon"></span></a>
                      <ul class="dropdown-menu animated zoomIn fast">
                          <li><a href="grid-2col.html"><span>GRID 2COL</span></a></li>
                          <li><a href="grid-3col.html"><span>GRID 3COL</span></a></li>
                          <li><a href="grid-4col.html"><span>GRID 4COL</span></a></li>
                          <li><a href="masonry-2col.html"><span>MASONRY 2COL</span></a></li>
                          <li><a href="masonry-3col.html"><span>MASONRY 3COL</span></a></li>
                          <li><a href="masonry-4col.html"><span>MASONRY 4COL</span></a></li>
                          <li><a href="single-project.html"><span>SINGLE PROJECT</span></a></li>
                          <li><a href="single-project-2.html"><span>SINGLE PROJECT 2</span></a></li>
                          <li><a href="single-project-3.html"><span>SINGLE PROJECT 3</span></a></li>
                      </ul>
                      </li>
                      <li v-if="!loggedIn"><a href="/#/login"><span>LOGIN</span></a></li>
                      <li v-if="!loggedIn"><a href="/#/signup"><span>SIGNUP</span></a></li>
                      <li v-if="loggedIn"><a href="/#/logout"><span>LOGOUT</span></a></li>
                  </ul>
              </div><!--/ nav-collapse -->
          </div><!-- / container -->
      </nav>
      <!-- / nav -->
  </header>
    <router-view/>
<!--   <footer>
      <div class="container">
          <p class="footer-info">© MP - MINIMAL PORTFOLIO
              <span class="social pull-right">
                  <a href="#x"><i class="fa fa-facebook"></i></a>
                  <a href="#x"><i class="fa fa-twitter"></i></a>
                  <a href="#x"><i class="fa fa-instagram"></i></a>
              </span>
          </p>
      </div><!-- / container -->
  <!-- </footer> !--> 

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loggedIn: false
    };
  },
  created: function() {
    this.loggedIn = localStorage.getItem("jwt");
  },
  methods: {},
  computed: {}
};
</script>
