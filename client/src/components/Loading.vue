<template>
  <div class="w-full p-5 flex items-center justify-center">
    <div class="spinner border-4 border-yellow-600"></div>
  </div>
</template>


<style scoped>
.spinner {
  animation: spin 1s infinite linear;
  border-left-color: transparent;
  border-radius: 50%;
  height: 76px;
  width: 76px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
