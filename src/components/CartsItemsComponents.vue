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
import { ref, onMounted } from 'vue'

const sneakers = ref([])

const loadSneakers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/items')
    const data = await response.json()
    sneakers.value = data
  } catch (error) {
    console.log(error)
  }
}

const onClickAdd = (sneaker) => {
  alert(`Добавлено в корзину: ${sneaker.title}`)
}

onMounted(() => {
  loadSneakers()
})
</script>

<style scoped></style>
