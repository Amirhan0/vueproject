<template>
  <div v-if="isVisible">
    <div class="z-10 top-0 left-0 w-full h-full bg-black fixed opacity-70" @click="toggleVisibility"></div>
    <div class="fixed justify-between top-0 right-0 bg-white z-20 h-full w-96 p-4">
      <div class="flex items-center gap-3 pb-5">
        <svg
          @click="toggleVisibility"
          class="rotate rotate-180 transition hover:rotate-0 cursor-pointer"
          width="13"
          height="13"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H14.7143"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 class="font-bold text-2xl">Корзина</h2>
      </div>
      <CartBasket
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        price="12.999"
        img="/sneakers/sneakers-2.jpg"
      />

      <div class="container absolute bottom-4">
        <div class="result flex justify-between items-center p-1">
          <p>Итого:</p>
          <span class="font-bold pr-5">21 498 руб. </span>
        </div>
        <div class="tax flex justify-between items-center p-1">
          <p>Налог 5%:</p>
          <span class="font-bold pr-5">21 498 руб.</span>
        </div>
        <div class="btn flex p-2 items-center">
          <button
            class="btn flex items-center justify-center w-[325px] h-[55px] bg-9DD458 text-white rounded-xl transition hover:scale-105"
          >
            Оформить заказ
            <svg
              class="flex items-center ml-3"
              width="8"
              height="10"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.999999L6 6L1 11"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartBasket from './CartsBasket.vue'
import { isDrawerVisible, toggleDrawerVisibility } from '../assets/basket'
const isVisible = isDrawerVisible
const toggleVisibility = toggleDrawerVisibility

</script>

<style scoped>
.bg-9DD458 {
  background-color: #9dd458;
}
</style>
