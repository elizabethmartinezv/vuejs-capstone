<template>
  <div class="contacts">
        <!-- header-banner -->
    <div id="header-banner">
        <div class="banner-content single-page text-center">
            <div class="banner-info">
                <h1>MY CONTACTS</h1>
            </div><!-- / banner-info -->
        </div><!-- / banner-content -->
    </div>
    <!-- / header-banner -->

    <div class="container">

      <section id="blog">
          <div class="container">
        
              <div class="row">

                  <!-- post-block -->
                  <div class="col-sm-4" v-for="contact in contacts">
                      <div class="post-block">
                          <a ><img src="images/post-img.jpg" alt=""></a>
                          <div class="small-post-text">
                              <h5><a>{{ contact.first_name}} {{ contact.last_name}}</a></h5>
                              <p class="small-post-meta"v-if="contact.primary === true">PRIMARY</p>
                              <p class="small-post-meta" v-else>EMERGENCY</p>
                              <p class="space-bottom">{{ contact.phone_number }}</p>
                              <p class="small-post-footer">
                                  <a v-on:click="contact.edit_visible = !contact.edit_visible">EDIT</a>
                                  <div v-if="contact.edit_visible">
                                    <div>
                                      <input type="text" v-model="updatedFirstName" :placeholder="contact.first_name">
                                    </div>
                                    <div>
                                      <input type="text" v-model="updatedLastName" :placeholder="contact.last_name">
                                    </div>
                                    <div>
                                      <input type="text" v-model="updatedPhoneNumber":placeholder="contact.phone_number"></div>
                                    <div>
                                      <button class="btn btn-primary" id="center-submit" v-on:click="updateContact(contact)">Save Changes</button>
                                    </div>
                                  </div>
                              </p>
                          </div><!-- / small-post-text -->
                      </div><!-- / post-block -->
                  </div><!-- / col-md-4 -->
                  <!-- / post-block -->
              </div><!-- / row -->
          </div><!-- / container -->
      </section>

    </div>

  </div>
</template>

<style>
#center-submit {
  margin-left: 83px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      contacts: [],
      updatedFirstName: "",
      updatedLastName: "",
      updatedPhoneNumber: "",
      edit_visible: ""
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
    updateContact: function(contact) {
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
