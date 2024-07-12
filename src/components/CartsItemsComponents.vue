<template>
  <div class="flex flex-wrap justify-center bg-white">
    <SneakerGallery
      v-for="sneaker in sneakers"
      :key="sneaker.id"
      :title="sneaker.title"
      :price="sneaker.price"
      :img="sneaker.imageUrl"
      :isAdded="false"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>

<script setup>
import SneakerGallery from './SneakerGallery.vue'
import SearchBarComponent from './SearchBarComponent.vue'
import { inject } from 'vue'

const sneakers = inject('sneakers')
const fetchItems = inject('fetchItems')
const onClickAdd = inject('onClickAdd')
</script>

<style scoped></style>
