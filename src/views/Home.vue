<template>
  <div class="home">
    <!-- header-banner -->
    <div id="header-banner" class="demo-4">
        <div class="banner-content text-center">
            <div class="banner-border">
                <div class="banner-info">
                    <h1>VIVID</h1>
                </div><!-- / banner-info -->
            </div><!-- / banner-border -->
        </div><!-- / banner-content -->
    </div>


    <div id="page-content" class="container">
        
        <div class="row">
            <div class="col-sm-4">
                <div class="contact-info text-center space-bottom"></div>
                    <div class="contact-icon" id="phone-icon">
                    <i class="lnr lnr-smartphone"></i>
                </div>
                <h5>SET UP CONTACTS</h5>
            </div>
            <div class="col-sm-8">
                <div class="page-header text-right space-top-30"></div>
                <blockquote class="blockquote-reverse">
                    <p>Your <strong>primary contact</strong> is the person that will be reciving all of your whereabout's - such as the starting and ending details of your route. In case of an <strong>emergency</strong>, the person(s) set in this cateogry will be notified.</p>
                </blockquote>
            </div>
        </div><!-- / row -->
    </div><!-- / container -->


    <div id="page-content" class="container">
        <div class="row">
            <div class="col-sm-8">
                <div class="page-header text-left space-top-30"></div>
                    <blockquote>
                        <p>Quisque ut lorem tristique, vehicula nunc eget, semper mi. Proin urna ipsum, pulvinar et turpis et, malesuada vehicula urna. Sed eget venenatis nunc.</p>
                    </blockquote>
            </div>

            <div class="col-sm-4">
                <div class="page-header text-right space-top-30"></div>
                    <div class="contact-icon" id="route-icon">
                    <i class="lnr lnr-map-marker"></i>
                </div>
                <h5 id="route-box">CREATE A ROUTE</h5>
            </div>
        </div><!-- / row -->
    </div><!-- / container -->

    <div id="page-content" class="container">
        
        <div class="row">
            <div class="col-sm-4">
                <div class="contact-info text-center space-bottom"></div>
                    <div class="contact-icon" id="world-icon">
                    <i class="lnr lnr-earth"></i>
                </div>
                <h5>WORRY LESS</h5>
            </div>
            <div class="col-sm-8">
                <div class="page-header text-right space-top-30"></div>
                <blockquote class="blockquote-reverse">
                    <p>Your <strong>primary contact</strong> is the person that will be reciving all of your whereabout's - such as the starting and ending details of your route. In case of an <strong>emergency</strong>, the person(s) set in this cateogry will be notified.</p>
                </blockquote>
            </div>
        </div><!-- / row -->
    </div><!-- / container -->

  </div><!-- / home -->


</template>

<style>
#route-icon {
    margin-left: 255px;
}

#phone-icon {
    margin-left: 80px;
}

#world-icon {
    margin-left: 55px;
}

#route-box {
    margin-left: 182px;
}
</style>

<script>
export default {
    data: function() {
        return {
            message: "Hello"
        };
    },
    created: function() {},
    methods: {},
    computed: {}
};
</script>
