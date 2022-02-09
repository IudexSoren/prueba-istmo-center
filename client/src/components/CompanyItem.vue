<template>
  <div
    class="
      px-2
      py-3
      last:pb-0
      border-b
      last:border-0
      border-gray-500
      md:flex
      items-center
    "
  >
    <div class="flex-grow mb-2 md:mb-0">
      <h3 class="text-gray-50 font-bold mb-1">
        {{ company.name }}
      </h3>
      <span class="block text-gray-400">{{ company.bs }}</span>
    </div>
    <div>
      <Button
        text="Check details"
        class="w-full md:w-auto"
        @click="CheckCompanyDetails(company)"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Button from "./Button.vue";
import { COMPANY__SET_CURRENT_COMPANY } from "@/constants/COMPANY_ACTIONS";

const STORE = useStore();

defineProps({
  company: {
    type: Object,
    required: true,
  },
});

const CheckCompanyDetails = async (company) => {
  await STORE.dispatch(COMPANY__SET_CURRENT_COMPANY, company);
};
</script>