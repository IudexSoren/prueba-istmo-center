<template>
  <div class="text-gray-400">
    <span class="text-sm block">{{ label }}</span>
    <span class="text-gray-50">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
  },
  value: {
    type: String,
  },
});
</script>