<template>
  <div class="w-4/5 m-auto h-screen bg-white rounded-x1 shadow-x1 mt-14">
    <Headers />
    <div class="flex flex-row justify-between items-center mb-6">
      <MainBanner />
    </div>
    <SearchBarComponent />
    <div class="flex flex-wrap justify-center bg-white">
      <SneakerGallery
        title="Мужские Кроссовки
          Nike Blazer Mid Suede"
        price="12 999"
        img="/sneakers-1.jpg"
      />
      <SneakerGallery
        title="Мужские Кроссовки Nike Air Max 270"
        price="12 999"
        img="/sneakers-2.jpg"
      />
      <SneakerGallery
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        price="12 999"
        img="/sneakers-3.jpg"
      />
      <SneakerGallery
        title="Кроссовки Puma X Aka Boku Future Ride"
        price="12 999"
        img="/sneakers-4.jpg"
      />
      <SneakerGallery
        title="Мужские Кроссовки Under Armour Curry 8"
        price="12 999"
        img="/sneakers-5.jpg"
      />
      <SneakerGallery title="Мужские Кроссовки Nike Kyrie 7" price="12 999" img="/sneakers-6.jpg" />
      <SneakerGallery
        title="Мужские Кроссовки Jordan Air Jordan 11"
        price="12 999"
        img="/sneakers-7.jpg"
      />
      <SneakerGallery
        title="Мужские Кроссовки Nike LeBron XVIII"
        price="12 999"
        img="/sneakers-8.jpg"
      />

      <SneakerGallery
        title="Мужские Кроссовки Nike Lebron XVIII Low"
        price="12 999"
        img="/sneakers-9.jpg"
      />

      <SneakerGallery
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        price="12 999"
        img="/sneakers-1.jpg"
      />

      <SneakerGallery
        title="Кроссовки Puma X Aka Boku Future Rider"
        price="12 999"
        img="/sneakers-4.jpg"
      />

      <SneakerGallery
        title="Мужские Кроссовки Nike Kyrie Flytrap IV"
        price="12 999"
        img="/sneakers-10.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import SneakerGallery from './components/SneakerGallery.vue'
import SearchBarComponent from './components/SearchBarComponent.vue'
import MainBanner from './components/MainBannerComponents.vue'
import Headers from './components/HeadersComponents.vue'
</script>

<style lang="scss" scoped></style>
