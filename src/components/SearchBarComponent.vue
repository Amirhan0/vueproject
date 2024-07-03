<template>
  <div class="flex gap-3 mt-6 ml-5">
    <h1 class="font-bold text-4xl mr-custom">Все кроссовки</h1>
    <div class="flex items-center gap-2 ml-50 w-15 h-10 relative">
      <img src="/search.svg" alt="" class="w-4 h-5 absolute left-3 cursor-pointer" />
      <input
        type="text"
        placeholder="Поиск..."
        class="border border-gray-300 px-2 py-2 rounded-md w-17 h-10 placeholder-gray-500 focus:outline-none"
        style="padding-left: 40px"
      />
    </div>
  </div>
</template>

<style scoped>
.mr-custom {
  margin-right: 450px;
}
</style>
