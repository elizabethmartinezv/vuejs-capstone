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
<!--                       <li v-if="loggedIn"><a href="/#/contacts"><span>CONTACTS</span></a></li> -->
                      <li class="dropdown" v-if="loggedIn">
                      <a href="/#/contacts" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span>CONTACTS</span> <span class="dropdown-icon"></span></a>
                      <ul class="dropdown-menu animated zoomIn fast">
                          <li><a href="/#/contacts"><span>MY CONTACTS</span></a></li>
                          <li><a href="/#/contacts/create"><span>NEW CONTACT</span></a></li>
                      </ul>
                      <li v-if="loggedIn"><a href="/#/routes"><span>ROUTES</span></a></li>
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
