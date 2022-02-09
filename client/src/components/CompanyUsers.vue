<template>
  <div>
    <h3 class="text-2xl text-gray-50 mb-3 font-bold">Users</h3>
    <div>
      <UserItem v-for="user of users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script setup>
import UserItem from "./UserItem.vue";

defineProps({
  users: {
    type: Array,
  },
});
</script>