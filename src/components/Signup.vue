<template>
  <div
    class="grid grid-cols-2 gap-4 mx-auto bg-gray-100 px-6 pt-12"
    style="max-height: 680px"
  >
    <div class="bg-gray-200 rounded-xl py-12 px-24">
      <h1 class="text-gray-600 font-bold font-sans text-md text-left pb-4">
        Sign up for our newsletter
      </h1>
      <p class="text-gray-600 text-sm w-80 pb-4">
        The latest news, articles, and resources, sent to your inbox weekly
      </p>
      <div class="h-0.5 bg-gray-200 w-36 mx-auto mt-2.5"></div>
      <form action="" method="post">
        <div class="flex justify-between">
          <input
            type="text"
            id="uname"
            name="uname"
            class="
              shadow-md
              border-none
              focus:ring-transparent
              rounded-md
              bg-white
              w-80
            "
          />
          <button
            class="px-7 pt-0 font-semibold text-white bg-blue-500 rounded"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
    <div
      class="
        bg-signup-texture bg-cover bg-no-repeat
        text-white text-center
        py-16
        px-32
      "
      style="background-size: 100% 100%"
    >
      <p class="font-bold pb-4">Get early access</p>
      <p class="">
        Did you sign up to the newsletter? If so, use the keyword we sent you to
        get access.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    links: [String],
  },
};
</script>

<style>
</style>