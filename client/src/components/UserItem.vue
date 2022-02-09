<template>
  <div class="px-2 py-3 last:pb-0 border-b last:border-0 border-gray-500">
    <div class="md:flex" :class="show && 'mb-3'">
      <div class="flex-grow mb-2 md:mb-0">
        <h3 class="text-gray-50 font-bold">
          {{ user.name }}
        </h3>
        <div class="text-gray-400">
          <span>@{{ user.username }}</span>
        </div>
      </div>
      <div>
        <Button
          :text="show ? 'Show less' : 'Show more'"
          class="w-full md:w-auto"
          @click="toggleShow"
        />
      </div>
    </div>
    <div class="flex flex-col lg:grid grid-cols-2 gap-2" v-show="show">
      <UserInfoItem label="Email" :value="user.email" />
      <UserInfoItem label="Phone" :value="user.phone" />
      <UserInfoItem label="Website" :value="user.website" />
      <UserAddress :address="user.address" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import UserInfoItem from "./UserInfoItem.vue";
import UserAddress from "./UserAddress.vue";

defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const show = ref(false);

const toggleShow = () => (show.value = !show.value);
</script>