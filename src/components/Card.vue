<template>
  <div class="flex w-full justify-between px-8">
    <p class="font-bold text-gray-600 pt-4">Popular Products</p>
    <p class="font-bold text-blue-700 pt-4 underline text-xs cursor-pointer">
      Browse all categories
    </p>
  </div>
  <ul class="flex justify-between p-4 font-semibold grid grid-cols-5 gap-4">
    <li
      class="mx-2 text-center text-gray-800 cursor-pointer"
      v-for="data in data"
      v-bind:key="data"
    >
      <div class="h-72 bg-gray-400 rounded-lg"></div>
      <p class="text-gray-400 text-sm pt-4">Black</p>
      <p class="text-sm text-black">Machined Pen</p>
      <p class="text-xl mt-2 mb-4">$35</p>
      <div class="flex justify-center">
        <div class="h-3 w-3 bg-black rounded-full mx-1"></div>
        <div class="h-3 w-3 bg-yellow-900 rounded-full mx-1"></div>
        <div
          class="
            h-3
            w-3
            bg-yellow-200
            rounded-full
            mx-1
            border border-solid border-gray-400
          "
        ></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: [String],
  },
};
</script>
<style>
</style>