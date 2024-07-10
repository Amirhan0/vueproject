<template>
  <div
    class="sneaker-gallery-container flex flex-wrap justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer"
  >
    <div class="flex flex-col rounded-lg bg-white p-4 shadow-lg mx-4 my-4" style="max-width: 250px">
      <div class="flex justify-center relative">
        <div class="absolute left-3 top-3 p-1 flex items-center rounded-full bg-white shadow-md">
          <img :src="isFavourite ? '/like-2.svg' : '/like-1.svg'" alt="Favorite" />
        </div>
        <img :src="img" class="w-full h-auto object-cover rounded-lg" alt="Sneaker" />
      </div>
      <div class="mt-2">
        <p class="font-medium text-center">
          {{ title }}
        </p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <p class="text-gray-600 font-medium">
          ЦЕНА: <br />
          <span class="text-black font-bold">{{ price }} тг</span>
        </p>
        <div class="rounded-lg w-8 h-8 flex justify-center items-center cursor-pointer">
          <img
            @click="onClickAdd"
            :src="isAdded ? '/checked.svg' : '/plus.svg'"
            alt="Add to cart"
          />
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

.heart-icon {
  opacity: 0.2;
  cursor: pointer;
}

.heart-icon.clicked {
  opacity: 1;
  filter: hue-rotate(0deg) saturate(10) brightness(1.5);
}
.bg-FEF0F0 {
  background-color: #fef0f0;
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
  },
  isAdded: {
    type: Boolean
  },
  isFavourite: {
    type: Boolean
  },
  onClickAdd: {
    type: Function
  }
})
</script>
