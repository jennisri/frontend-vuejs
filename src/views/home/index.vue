<script setup></script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3 shadow-sm">
    <div class="container-fuild py-5">
      <h1 class="display-5 fw-bold">Fullstack javascript developer</h1>
      <p class="col-md-12 fs-4">
        Belajar Full Stack JavaScript Developer dengan Express dan Vue 3 di
        SantriKoding.com
      </p>
      <hr />
      <router-link
        :to="{ name: 'register' }"
        class="btn btn-primary btn-lg me-3"
        >Register</router-link
      >
      <router-link :to="{ name: 'login' }" class="btn btn-primary btn-lg me-3"
        >Login</router-link
      >
    </div>
  </div>
</template>
