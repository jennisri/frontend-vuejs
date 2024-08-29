<script setup>
// import reactive and ref from vue
import { reactive, ref } from "vue";

// import useRouter from vue router
import { useRouter } from "vue-router";

// inisialisasi vue router on composition API
const router = useRouter();

// import services api
import api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

// state user
const user = reactive({
  email: "",
  password: "",
});

// state validation
const validation = ref([]);
const loginFailed = ref([]);

// methode login
const login = async () => {
  // call api login
  await api
    .post("/api/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      Cookies.set("token", response.data.data.token);
      Cookies.set("user", JSON.stringify(response.data.data.user));

      // verify the token is set before redirecting
      if (Cookies.get("token")) {
        // redirect to dashboard
        router.push({ name: "dashboard" });
      }
    })
    .catch((error) => {
      //assign validation value with error
      validation.value = error.response.data;

      //assign loginFailed value with error
      loginFailed.value = error.response.data;
    });
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card border-0 rounded shadow-sm">
          <div class="card-body">
            <h4>Login</h4>
            <hr />
            <div v-if="validation.errors" class="mt-2 alert alert-danger">
              <ul class="mt-0 mb-0">
                <li v-for="(error, index) in validation.errors" :key="index">
                  {{ `${error.path} : ${error.msg}` }}
                </li>
              </ul>
            </div>

            <div v-if="loginFailed.message" class="mt-2 alert alert-danger">
              {{ loginFailed.message }}
            </div>

            <form @submit.prevent="login">
              <div class="form-group">
                <label class="mb-1 fw-bold">Email</label>
                <input
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group mt-2">
                <label class="mb-1 fw-bold">Password</label>
                <input
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-primary w-100 mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
