import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/users/Signup.vue";
import Login from "./views/users/Login.vue";
import Logout from "./views/users/Logout.vue";
import CreateContact from "./views/contacts/CreateContact.vue";
import Contacts from "./views/contacts/Contacts.vue";
import CreateRoute from "./views/routes/CreateRoute.vue";
import Routes from "./views/routes/Routes.vue";
import RoutesShow from "./views/routes/RoutesShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/contacts/create",
      name: "createContact",
      component: CreateContact
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/routes/create",
      name: "createRoute",
      component: CreateRoute
    },
    {
      path: "/routes",
      name: "routes",
      component: Routes
    },
    {
      path: "/routes/:id",
      name: "routes-show",
      component: RoutesShow
    }
  ]
});
