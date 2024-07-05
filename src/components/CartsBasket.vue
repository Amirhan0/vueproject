<template>
  <div class="border rounded-3xl relative flex p-5">
    <img class="w-[80px] h-[70px]" :src="props.img" alt="" />
    <div class="ml-5">
      <p>{{ props.title }}</p>
      <div class="flex justify-between">
        <div class="flex flex-col">
          <span class="font-bold">{{ props.price }}</span>
        </div>
        <div>
          <img @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

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

<style scoped></style>
