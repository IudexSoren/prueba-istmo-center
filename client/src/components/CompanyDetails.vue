<template>
  <div class="mb-5 pb-2 border-b border-gray-500 mb-3">
    <span class="mb-2 text-gray-50">Company details</span>
    <h2 class="text-3xl text-yellow-600 font-bold">
      {{ name }}
    </h2>
    <span class="text-gray-400 italic">"{{ catchphrase }}"</span>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
  },
  catchphrase: {
    type: String,
  },
});
</script>