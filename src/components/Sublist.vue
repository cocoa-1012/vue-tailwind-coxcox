<template>
  <div class="flex w-full justify-between px-4">
    <ul class="flex flex-col text-right p-4 font-semibold">
      <li class="inline m-2 text-gray-800 font-bold text-left">
        {{ title }}
      </li>
      <li
        class="
          inline
          m-2
          text-gray-400 text-xs
          hover:text-gray-500
          text-left
          cursor-pointer
        "
        v-for="data in data"
        v-bind:key="data"
      >
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sublist",
  props: {
    title: [String],
    data: [String],
  },
};
</script>
<style>
</style>