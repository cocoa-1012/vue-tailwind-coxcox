<template>
  <Main />
  <Products />
  <Shop />
  <Contact />
  <Signup />
  <Footer
    v-bind:links="['2021 All Rights Reserved.']"
    v-bind:links1="['Weight Loss', 'Energy', 'Mind & Body', 'Fertility']"
  />
</template>

<script>
import Main from "./components/Main";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Shop from "./components/Shop.vue";
import Contact from "./components/Contact.vue";
import Signup from "./components/Signup.vue";

export default {
  name: "App",
  components: {
    Main,
    Footer,
    Products,
    Shop,
    Contact,
    Signup,
  },
};
</script>

<style src="./index.css" />