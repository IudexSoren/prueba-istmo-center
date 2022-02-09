<template>
  <div class="text-gray-50 col-span-2 p-2 rounded bg-gray-600">
    <span class="block mb-2">Address</span>
    <div class="px-2 flex flex-col lg:grid grid-cols-2 gap-2">
      <UserInfoItem label="Zipcode" :value="address.zipcode" />
      <UserInfoItem label="City" :value="address.city" />
      <UserInfoItem label="Street" :value="address.street" />
      <UserInfoItem label="Suite" :value="address.suite" />
    </div>
  </div>
</template>

<script setup>
import UserInfoItem from "./UserInfoItem.vue";

defineProps({
  address: {
    type: Object,
    required: true,
  },
});
</script>
