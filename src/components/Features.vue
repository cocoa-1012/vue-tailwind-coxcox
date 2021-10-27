<template>
  <ul
    class="
      flex
      justify-between
      p-4
      font-semibold
      grid grid-cols-3
      border-solid border-gray-400 border-b-2
    "
  >
    <li
      class="mx-2 text-center text-gray-800 cursor-pointer"
      v-for="data in data"
      v-bind:key="data"
    >
      <p class="text-gray-600">{{ data[0] }}</p>
      <p class="font-bold">{{ data[1] }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Features",
  props: {
    data: [Array],
  },
};
</script>
<style>
</style>