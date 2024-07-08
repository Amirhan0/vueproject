<template>
  <div id="app">
    <DrawerComponent />
    <div class="w-4/5 m-auto h-screen bg-white rounded-x1 shadow-x1 mt-14">
      <Headers />
      <div class="flex flex-row justify-between items-center mb-6">
        <MainBanner />
      </div>
      <SearchBarComponent />
      <CartsItemsComponents />
    </div>
  </div>
</template>

<script setup>
import CartsItemsComponents from './components/CartsItemsComponents.vue'
import SearchBarComponent from './components/SearchBarComponent.vue'
import MainBanner from './components/MainBannerComponents.vue'
import Headers from './components/HeadersComponents.vue'
import DrawerComponent from './components/DrawerComponent.vue'
</script>

<style scoped></style>
