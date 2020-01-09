<template>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
export default {
//   components: {
//     appHeader: Header,
//     appFooter: Footer
//   }
}
</script>

<style lang="scss">
@import 'style/base.scss';
</style>
