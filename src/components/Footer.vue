<template>
  <div
    class="flex w-full justify-between bg-gray-100 px-6 m-auto items-center"
    style="max-height: 680px"
  >
    <p
      class="inline mx-2 text-gray-400"
      v-for="link in links"
      v-bind:key="link"
    >
      {{ link }}
    </p>
    <ul class="flex text-right p-4 font-semibold">
      <li
        class="inline mx-2 text-gray-400 hover:text-gray-500 cursor-pointer"
        v-for="link1 in links1"
        v-bind:key="link1"
      >
        {{ link1 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: [String],
    links1: [String],
  },
};
</script>

<style>
</style>