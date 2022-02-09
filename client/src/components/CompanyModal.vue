<template>
  <div
    class="h-screen w-screen absolute top-0 left-0 py-5 px-2 z-10"
    v-if="company.id"
  >
    <div
      class="
        top-0
        left-0
        w-full
        h-full
        absolute
        opacity-50
        bg-black
        backdrop-filter
      "
      @click="CloseModal"
    ></div>
    <span
      class="
        absolute
        text-5xl text-gray-50
        right-10
        cursor-pointer
        z-20
        rounded-full
        border border-gray-500
        bg-gray-800
        w-10
        h-10
        flex
        items-center
        justify-center
      "
      title="Close"
      @click="CloseModal"
      >&times;</span
    >
    <div
      class="
        w-5/6
        lg:w-4/6
        bg-gray-700
        m-auto
        rounded
        py-5
        px-4
        relative
        z-10
        max-h-full
        overflow-auto
      "
    >
      <CompanyDetails :name="company.name" :catchphrase="company.catchphrase" />
      <CompanyUsers :users="company.users" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import CompanyDetails from "./CompanyDetails.vue";
import CompanyUsers from "./CompanyUsers.vue";
import { COMPANY__UNSET_CURRENT_COMPANY } from "@/constants/COMPANY_ACTIONS";

const STORE = useStore();

const company = computed(() => ({ ...STORE.getters.Company__currentCompany }));

const CloseModal = async () => {
  await STORE.dispatch(COMPANY__UNSET_CURRENT_COMPANY);
};
</script>