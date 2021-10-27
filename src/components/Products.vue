<template>
  <div
    class="w-screen bg-gray-200 m-auto self-center pb-12"
    style="background-size: 100% 100%"
  >
    <Signin v-bind:links="['Sign in', 'Create an account']" />
    <Navbar
      v-bind:links="['Weight Loss', 'Energy', 'Mind & Body', 'Fertility']"
      v-bind:links1="['Search', 'Help']"
      v-bind:number="0"
    />
    <Features
      v-bind:data="[
        ['Download the app', 'Get an exclusive $5 off code'],
        ['Return when you’re ready', '60 days of free returns'],
        ['Sign up for our newsletter', '15% off your first order'],
      ]"
    />
    <Card v-bind:data="['a', 'b', 'c', 'd', 'e']" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import Features from "./Features.vue";
import Navbar from "./Navbar.vue";
import Signin from "./Signin.vue";
export default {
  components: { Signin, Navbar, Features, Card },
};
</script>

<style></style>
