<template>
  <div class="border rounded-3xl relative flex p-5">
    <img class="w-[70px] h-[70px]" :src="image" alt="" />
    <div class="ml-5">
      <p>{{ name }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="font-bold">{{ price }}</span>
        </div>
        <div>
          <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function
})
</script>

<style scoped></style>
