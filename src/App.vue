<template>
<HomeView />
</template>

<script lang="ts" setup>
import HomeView from './views/HomeView.vue';


</script>

<style lang="scss">
* {
  color: white;
}
body {
  background: $second-color !important;
  overflow-x: hidden;
}
body::-webkit-scrollbar {
  width: 6px;
}
body::-webkit-scrollbar-track {
  background-color: $second-color !important;
  border-left: 1px solid rgba($color: white, $alpha: 0.05);
}
body::-webkit-scrollbar-thumb {
  width: 10px;
  background-color: rgba($color: $primary-color, $alpha: 0.5);
  border-radius: 20px;
}
body::-webkit-scrollbar-thumb:hover {
  background-color: $primary-color !important;
}
.h-c {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
