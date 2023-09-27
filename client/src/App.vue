<script >
import { RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue';
import FooterItem from './components/FooterItem.vue';

export default {
  components : {
    RouterView,
    NavbarItem,
    FooterItem
  }
}

</script>

<template>
  <NavbarItem/>
  <RouterView />
  <FooterItem />

</template>

<style scoped>

</style>
