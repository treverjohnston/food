<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Quasar App
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    <router-view />
    <div v-if="this.$route.path == '/'">
      <q-input v-model="text" float-label="Text"></q-input>
      <q-btn @click="toFull">Pick</q-btn>
    </div>

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
    QItemMain,
    QInput
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
      QItemMain,
      QInput
    },
    data() {
      return {
        text: ''
      }
    },
    computed: {

    },
    mounted() {
      this.initMap();
    },
    methods: {
      toFull(){
        this.$store.dispatch('getFull')
      },
      launch(url) {
        openURL(url)
      },
      initMap() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              this.$store.dispatch("getPlaces", pos);
              var LatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              this.marker = L.latLng(
                position.coords.latitude,
                position.coords.longitude
              );
              this.$store.state.center = [position.coords.latitude, position.coords.longitude];
            //   var popup = L.popup()
            //     .setLatLng(this.marker)
            //     .setContent("<p>You are here</p>")
            //     .openOn(this.$refs.map.mapObject);
            },
            () => {
              handleLocationError(true, this.infoWindow, this.map.getCenter());
            }
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
      }
    }

  }
</script>

<style scoped>
</style>