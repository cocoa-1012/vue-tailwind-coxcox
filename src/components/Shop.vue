<template>
  <div
    class="
      flex flex-col
      justify-between
      px-6
      w-screen
      bg-gray-100
      m-auto
      self-center
    "
    style="max-height: 680px"
  >
    <p class="font-bold text-gray-600 py-4">Shop By Category</p>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4 h-pxl w-full bg-gray-400 rounded-lg relative">
        <div class="absolute bottom-0 left-0 p-8 text-white">
          <p>New Arrivals</p>
          <p class="text-xs">Shop now</p>
        </div>
      </div>
      <div class="col-span-2 h-96 w-full">
        <div class="h-72 w-full bg-gray-400 rounded-lg relative">
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <p>New Arrivals</p>
            <p class="text-xs">Shop now</p>
          </div>
        </div>
        <div class="h-72 w-full bg-gray-400 rounded-lg mt-6 relative">
          <div class="absolute bottom-0 left-0 p-8 text-white">
            <p>New Arrivals</p>
            <p class="text-xs">Shop now</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-gray-100 pb-24 border-solid border-gray-200 border-b-2 m-auto"
    style="max-height: 680px"
  ></div>
</template>

<script>
export default {};
</script>
<style>
</style>