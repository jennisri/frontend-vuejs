<script setup>
//import sidebar component
import SidebarMenu from "../../../components/SidebarMenu.vue";

// import reactive dan ref from vue
import { reactive, ref } from "vue";

// import useRouter from vue router
import { useRouter } from "vue-router";

// inisialisasi vue router on composition api
const router = useRouter();

// import js cookie
import Cookies from "js-cookie";

import api from "../../../services/api";

const token = Cookies.get("token");

// state user
const user = reactive({
  name: "",
  email: "",
  password: "",
});

//state validation
const validation = ref([]);

// method storeuser
const storeUser = async () => {
  //call api store user
  api.defaults.headers.common["Authorization"] = token;
  await api
    .post("/api/admin/users", {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    .then(() => {
      //redirect ke halaman users index
      router.push({
        name: "admin.users.index",
      });
    })
    .catch((error) => {
      //assign validation value with error
      validation.value = error.response.data;
    });
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-3">
        <SidebarMenu />
      </div>
      <div class="col-md-9">
        <div class="card border-0 rounded shadow-sm">
          <div class="card-header">Add User</div>
          <div class="card-body">
            <div v-if="validation.errors" class="mt-2 alert alert-danger">
              <ul class="mt-0 mb-0">
                <li v-for="(error, index) in validation" :key="index">
                  {{ `${error.path} : ${error.msg}` }}
                </li>
              </ul>
            </div>
            <form @submit.prevent="storeUser">
              <div class="form-group mb-3">
                <label class="mb-1 fw-bold">Full Name</label>
                <input
                  type="text"
                  v-model="user.name"
                  class="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div class="form-group mb-3">
                <label class="mb-1 fw-bold">Email address</label>
                <input
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group mb-3">
                <label class="mb-1 fw-bold">Password</label>
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-sm btn-primary">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
