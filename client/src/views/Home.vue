<template>
  <div class="min-h-screen bg-gray-800 py-5 px-2 relative">
    <div class="w-5/6 lg:w-4/6 py-3 px-2 bg-gray-700 m-auto rounded">
      <Header />
      <CompaniesContainer />
      <CompanyModal />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import CompaniesContainer from "@/components/CompaniesContainer.vue";
import CompanyModal from "@/components/CompanyModal.vue";
</script>
