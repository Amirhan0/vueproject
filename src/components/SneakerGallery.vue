<template>
  <div
    class="sneaker-gallery-container flex flex-wrap justify-center transition-transform duration-300 transform hover:scale-105 cursor-pointer"
  >
    <div class="flex flex-col rounded-lg bg-white p-4 shadow-lg ml-6 mt-7" style="max-width: 200px">
      <div class="flex justify-center relative">
        <div
          class="absolute left-3 border opacity-2 w-6 h-6 p-1 flex items-center"
          style="border-radius: 6px"
          :class="{ 'bg-FEF0F0': isHeartClick }"
          @click="toggleHeart"
        >
          <img
            :src="heartIcon"
            alt=""
            class="cursor-pointer heart-icon"
            :class="{ clicked: isHeartClick }"
          />
        </div>

        <img :src="props.img" class="w-133 h-118" alt="Snicker" />
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
import { ref, computed } from 'vue'

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

const isHeartClick = ref(false)

const toggleHeart = () => {
  isHeartClick.value = !isHeartClick.value
}

const heartIcon = computed(() => (isHeartClick.value ? '/heart-red.svg' : '/heart.svg'))

console.log(heartIcon.value)
</script>
