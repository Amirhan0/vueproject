<template>
  <div
    class="sneaker-gallery-container flex flex-wrap justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer"
  >
    <div class="flex flex-col rounded-lg bg-white p-4 shadow-lg ml-6 mt-7" style="max-width: 200px">
      <div class="flex justify-center relative">
        <img src="/heart.svg" alt="" class="absolute left-3 cursor-pointer opacity-20" />
        <img :src="props.img" class="w-133 h-118" alt="Nike Blazer Mid Suede" />
      </div>
      <div class="mt-2">
        <p class="font-medium">
          {{ props.title }}
        </p>
      </div>
      <div class="flex flex-row justify-between items-center mt-2">
        <p class="text-gray-600 font-medium">
          ЦЕНА: <br />
          <span class="text-black font-bold">{{ props.price }}.тг</span>
        </p>
        <div class="rounded-lg w-8 h-8 border flex justify-center items-center cursor-pointer">
          <span class="text-center">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  gap: 1rem;
}
.sneaker-gallery-container {
  gap: 1rem;
}
</style>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})
</script>
