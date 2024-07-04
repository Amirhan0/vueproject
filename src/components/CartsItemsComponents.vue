<template>
  <div class="flex flex-wrap justify-center bg-white">
    <SneakerGallery
      title="Мужские Кроссовки
          Nike Blazer Mid Suede"
      price="12 999"
      img="/sneakers-1.jpg"
      :isAdded="false"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Nike Air Max 270"
      price="12 999"
      img="/sneakers-2.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      price="12 999"
      img="/sneakers-3.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Кроссовки Puma X Aka Boku Future Ride"
      price="12 999"
      img="/sneakers-4.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Under Armour Curry 8"
      price="12 999"
      img="/sneakers-5.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Nike Kyrie 7"
      price="12 999"
      img="/sneakers-6.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Jordan Air Jordan 11"
      price="12 999"
      img="/sneakers-7.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
    <SneakerGallery
      title="Мужские Кроссовки Nike LeBron XVIII"
      price="12 999"
      img="/sneakers-8.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />

    <SneakerGallery
      title="Мужские Кроссовки Nike Lebron XVIII Low"
      price="12 999"
      img="/sneakers-9.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />

    <SneakerGallery
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      price="12 999"
      img="/sneakers-1.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />

    <SneakerGallery
      title="Кроссовки Puma X Aka Boku Future Rider"
      price="12 999"
      img="/sneakers-4.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />

    <SneakerGallery
      title="Мужские Кроссовки Nike Kyrie Flytrap IV"
      price="12 999"
      img="/sneakers-10.jpg"
      :isAdded="true"
      :isFavourite="true"
      :onClickAdd="onClickAdd"
    />
  </div>
</template>

<script setup>
import SneakerGallery from './SneakerGallery.vue'

const onClickAdd = () => {
  alert('Добавлен')
}
</script>

<style scoped></style>
