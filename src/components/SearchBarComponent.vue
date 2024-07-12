<template>
  <div class="flex gap-3 mt-20 mb-2 justify-between" style="width: 1300px">
    <div class="ml-10 mr-4">
      <h1 class="font-bold text-4xl" style="width: 400px">Все кроссовки</h1>
    </div>
    <select
      @change="onChangeSelect"
      class="flex gap-3 border-gray-200 outline-none"
      style="width: 150px"
    >
      <option value="name">По названию</option>
      <option value="-price">По дешевле</option>
      <option value="price">По дороже</option>
    </select>
    <div class="flex items-center gap-1 h-10 relative" style="width: 250px">
      <img src="/search.svg" alt="" class="w-4 h-5 absolute left-3 cursor-pointer" />
      <form
        action=""
>
        <input
          @input="onChangeInput"
          type="text"
          placeholder="Поиск..."
          class="border border-gray-300 px-2 py-2 rounded-md w-15 h-10 placeholder-gray-500 focus:outline-none"
          style="padding-left: 40px"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.mr-custom {
  margin-right: 450px;
}
</style>

<script setup>
import { inject } from 'vue'

const onChangeInput = inject('onChangeInput')
const onChangeSelect = inject('onChangeSelect')
const fetchItems = inject('fetchItems')
const sneakers = inject('sneakers')
</script>
