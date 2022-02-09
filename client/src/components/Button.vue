<template>
  <button
    class="
      bg-yellow-600
      hover:bg-yellow-500
      focus:bg-yellow-700
      text-gray-50
      px-4
      py-2
      rounded
      font-bold
      transition
    "
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>