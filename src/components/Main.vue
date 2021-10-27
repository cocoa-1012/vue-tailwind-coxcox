<template>
  <div
    class="
      w-screen
      bg-main-texture bg-gray-300 bg-left-top bg-no-repeat
      grid grid-cols-2
      px-12
      py-10
      m-auto
      self-center
    "
    style="background-size: 100% 100%; max-height: 680px"
  >
    <img v-bind:src="`/assets/images/goodlife.png`" />
    <div class="ml-4">
      <div class="grid grid-cols-5">
        <div></div>
        <div></div>
        <div></div>
        <img v-bind:src="`/assets/images/Group 2.png`" class="ml-16" />
        <div></div>
      </div>
      <div class="flex justify-end">
        <img
          v-bind:src="`/assets/images/Vector.png`"
          class="mt-44 mr-40 mb-12"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
