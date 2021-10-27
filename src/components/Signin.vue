<template>
  <ul class="text-right p-4 font-semibold bg-gray-500 pr-8">
    <li
      class="inline mx-2 text-gray-50 hover:text-white cursor-pointer"
      v-for="link in links"
      v-bind:key="link"
    >
      {{ link }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Signin",
  props: {
    links: [String],
  },
};
</script>

<style>
</style>