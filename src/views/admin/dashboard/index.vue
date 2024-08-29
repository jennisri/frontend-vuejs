<script setup>
// import ref dan onMounted
import { ref, onMounted } from "vue";

//import sidebar component
import SidebarMenu from "../../../components/SidebarMenu.vue";

// import js cookies
import Cookies from "js-cookie";

// init user
const user = ref(null);

onMounted(() => {
  // get user data from cookies
  const userData = Cookies.get("user");
  if (userData) {
    user.value = JSON.parse(userData);
  }
});
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-3">
        <!-- memanggil template -->
        <SidebarMenu />
      </div>
      <div class="col-md-9">
        <div class="card border-0 rounded shadow-sm">
          <div class="card-header">DASHBOARD</div>
          <div class="card-body">
            Selamat Datang, <strong>{{ user?.name }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
