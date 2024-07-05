<template>
  <div class="z-10 top-0 left-0 w-full h-full bg-black fixed opacity-70"></div>
  <div class="fixed top-0 right-0 bg-white z-20 h-full w-96 p-4">
    <HeaderCartComponent />
    <CartBasket
      title="Мужские Кроссовки
          Nike Blazer Mid Suede"
      price="12.999"
      img="/sneakers-2.jpg"
    />
    <div class="container mt-2">
      <div class="result flex justify-between items-center p-2">
        <p>Итого:</p>
        <span class="font-bold">21 498 руб. </span>
      </div>
      <div class="tax flex justify-between items-center p-2">
        <p>Налог 5%:</p>
        <span class="font-bold">21 498 руб. </span>
      </div>
      <div class="btn flex p-2 items-center">
        <button class="btn flex items-center justify-center w-[325px] h-[55px] bg-9DD458 text-white rounded-xl">
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
</template>

<script setup>
import HeaderCartComponent from './HeaderCartComponent.vue'
import CartBasket from './CartsBasket.vue'
</script>

<style scoped>
.bg-9DD458 {
  background-color: #9dd458;
}
</style>
