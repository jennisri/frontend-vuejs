<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand"
          >EXPRESS-VUE JS</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'home' }"
                >Home</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--- render router view -->
    <!-- digunakan untuk merender setiap route pada layout -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
