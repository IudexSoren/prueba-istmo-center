<template>
  <div>
    <CompanyItem
      v-for="company of companies"
      :key="company.id"
      :company="company"
    />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { COMPANY__SET_COMPANIES } from "@/constants/COMPANY_ACTIONS";
import CompanyItem from "./CompanyItem.vue";

const STORE = useStore();

const companies = computed(() => [...STORE.getters.Company__companies]);

onMounted(async () => {
  await STORE.dispatch(COMPANY__SET_COMPANIES);
});
</script>