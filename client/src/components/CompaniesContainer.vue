<template>
  <div class="">
    <h1 class="text-yellow-500 font-bold text-3xl mb-3">Companies</h1>
    <CompaniesListAsync />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";

const CompaniesListAsync = defineAsyncComponent({
  loader: () => import("./CompaniesList.vue"),
  loadingComponent: Loading,
  delay: 500,
});
</script>
