<script setup>
// import useRouter from vue-router
import { useRouter } from "vue-router";

// initializa router
const router = useRouter();

//import cookies from js-cookie
import Cookies from "js-cookie";

// method to handle logout
const logout = () => {
  // remove token and user on cookies
  Cookies.remove("token");
  Cookies.remove("user");

  // redirect to login
  router.push({ name: "login" });
};
</script>

<template>
  <div class="card border-0 rounded shadow-sm">
    <div class="card-header">Main Menu</div>
    <div class="card-body">
      <div class="list-group">
        <router-link
          :to="{ name: 'dashboard' }"
          class="list-group-item list-group-item-action"
          >Dashboard</router-link
        >
        <router-link
          href="#"
          :to="{ name: 'admin.users.index' }"
          class="list-group-item list-group-item-action"
          >Users</router-link
        >
        <a
          href="#"
          @click="logout"
          class="list-group-item list-group-item-action"
          >Logout</a
        >
      </div>
    </div>
  </div>
</template>
