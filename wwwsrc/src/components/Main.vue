<template>
  <q-layout >
    
    <input type="text">

  </q-layout>
</template>

<script>
  import {
    dom,
    event,
    openURL,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'
  export default {
    name: 'index',
    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain
    },
    data() {
      return {
      }
    },
    computed: {
      
    },
    methods: {
      launch(url) {
        openURL(url)
      }
    },
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style scoped >

</style>