<template>
    <q-layout>
        <v-map v-if="chosen" ref="map" id="mapview" :zoom="zoom" :center="chosen.coordinates" class="map">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-marker :lat-lng="chosen.coordinates">
                <v-popup :min-width="400">
                    <q-card>
                        <q-card-media overlay-position="full">
                            <img :src="chosen.image_url" alt="Business Picture">
                            <!-- <q-card-title slot="overlay"> -->
                                <q-card-main slot="overlay">
                                <p>
                                    {{chosen.name}} - {{chosen.price}}
                                </p>
                                <p>Rating: {{chosen.rating}}</p>
                                <p slot="subtitle">Reviews: {{chosen.review_count}}</p>
    
                                <div slot="right" class="row items-center">
                                    <q-icon name="phone" /> {{chosen.phone}}
                                </div>
                            <!-- </q-card-title> -->
                                <div v-for="cat in chosen.categories">
                                    <p>
                                        {{cat.title}}
                                    </p>
                                </div>
                            </q-card-main>
                        </q-card-media>
                        <q-card-separator />
                        <q-card-actions>
                            <q-btn @click="launch(chosen.url)" flat round small>
                                <q-icon name="launch" /></q-btn>
                            <div v-if="chosen.is_closed">Closed Now</div>
                            <q-btn v-else flat color="primary">Go Now</q-btn>
                        </q-card-actions>
                    </q-card>
                </v-popup>
            </v-marker>

        </v-map>

    </q-layout>
</template>

<script>
    import $ from "jquery";
    // import { vmap, vtilelayer, vmarker } from 'Vue2-Leaflet'
    import {
        QLayout,
        QBtn,
        QCard,
        QCardTitle,
        QCardSeparator,
        QCardMain,
        QCardMedia,
        QIcon,
        QCardActions,
        openURL
    } from "quasar";

    export default {
        data() {
            return {
                map: {},
                infoWindow: "hello",
                canvasHeight: "",
                service: "",
                zoom: 13,
                // center: [47.41322, -1.219482],
                url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.41322, -1.219482)
            };
        },
        components: {
            QLayout,
            QBtn,
            QCard,
            QCardTitle,
            QCardSeparator,
            QCardMain,
            QCardMedia,
            QIcon,
            QCardActions
        },
        computed: {
            places() {
                return this.$store.state.places;
            },
            chosen() {
                return this.$store.state.chosen
            },
            center() {
                return this.$store.state.center
            }
        },
       
            
    };
</script>

<style>
    #mapview {
        height: 100vh;
    }

    .map {
        height: 100vh;
        width: 100vw;
        margin: 0;
    }

    /* .gm-style-iw {
        width: 350px !important;
        top: 15px !important;
        left: 0px !important;
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(178, 178, 178, 0.6);
        border: 1px solid rgba(72, 181, 233, 0.6);
        border-radius: 2px 2px 10px 10px;
    }

    #iw-container {
        margin-bottom: 10px;
    }

    #iw-container .iw-title {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 22px;
        font-weight: 400;
        padding: 10px;
        background-color: #48b5e9;
        color: white;
        margin: 0;
        border-radius: 2px 2px 0 0;
    }

    #iw-container .iw-content {
        font-size: 13px;
        line-height: 18px;
        font-weight: 400;
        margin-right: 1px;
        padding: 15px 5px 20px 15px;
        max-height: 140px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .iw-content img {
        float: right;
        margin: 0 5px 5px 10px;
    }

    .iw-subTitle {
        font-size: 16px;
        font-weight: 700;
        padding: 5px 0;
    }

    .iw-bottom-gradient {
        position: absolute;
        width: 326px;
        height: 25px;
        bottom: 10px;
        right: 18px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    } */
</style>