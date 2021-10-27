<template>
  <div
    class="flex flex-col justify-between px-6 bg-gray-100 m-auto items-center"
    style="max-height: 680px"
  >
    <div class="my-12">
      <img v-bind:src="`/assets/images/image 2.png`" class="ml-10" />
    </div>

    <div class="w-full grid grid-cols-4 gap-4">
      <Sublist
        v-bind:title="'Products'"
        v-bind:data="['Bags', 'Tees', 'Objects', 'Home Goods', 'Accessories']"
      />
      <Sublist
        v-bind:title="'Customer Service'"
        v-bind:data="[
          'Contact',
          'Shipping',
          'Returns',
          'Warranty',
          'Secure Payments',
          'FAQ',
          'Find a store',
        ]"
      />
      <Sublist
        v-bind:title="'Products'"
        v-bind:data="[
          'Who we are',
          'Sustainability',
          'Press',
          'Careers',
          'Terms & Conditions',
          'Privacy',
        ]"
      />
      <Sublist
        v-bind:title="'Legal'"
        v-bind:data="[
          'Terms of Service',
          'Return Policy',
          'Privacy Policy',
          'Shipping Policy',
        ]"
      />
    </div>
  </div>
</template>

<script>
import Sublist from "./Sublist.vue";
export default {
  components: { Sublist },
  name: "Contact",
  props: {
    data: [String],
  },
};
</script>
<style>
</style>