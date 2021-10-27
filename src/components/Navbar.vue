<template>
  <div class="flex w-full justify-between bg-gray-300 px-4">
    <ul class="text-right p-4 font-semibold">
      <li
        class="inline mx-2 text-gray-800 hover:text-gray-500 cursor-pointer"
        v-for="link in links"
        v-bind:key="link"
      >
        {{ link }}
      </li>
    </ul>
    <ul class="flex text-right p-4 font-semibold bg-gray-300">
      <li
        class="inline mx-2 text-gray-800 hover:text-gray-500 cursor-pointer"
        v-for="link1 in links1"
        v-bind:key="link1"
      >
        {{ link1 }}
      </li>
      <li>
        <img
          v-bind:src="`/assets/images/cart.png`"
          class="ml-4 mr-4 cursor-pointer"
        />
      </li>
      <li class="font-bold">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: [String],
    links1: [String],
    number: [Number],
  },
};
</script>

<style>
</style>