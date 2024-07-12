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

import { ref, onMounted, reactive, watch, provide } from 'vue'
import axios from 'axios'
const sneakers = ref([])
const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQuery) {
      params.searchQuery = filters.searchQuery
    }
    const { data } = await axios.get(`http://localhost:3000/api/items`, {
      params
    })
    sneakers.value = data
  } catch (error) {
    console.log(error)
  }
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
  console.log(filters.sortBy)
}

const onChangeInput = (event) => {
  filters.searchQuery = event.target.value
  console.log(filters.searchQuery)
}

onMounted(fetchItems)
watch(filters, fetchItems)

const onClickAdd = (sneaker) => {
  alert(`Добавлено в корзину`)
}

provide('onClickAdd', onClickAdd)
provide('onChangeSelect', onChangeSelect)
provide('onChangeInput', onChangeInput)
provide('fetchItems', fetchItems)
provide('sneakers', sneakers)
</script>

<style scoped></style>
