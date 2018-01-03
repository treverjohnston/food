<template>
    <q-layout>
        <q-btn @click="callback" color="black">Test</q-btn>
        <v-map ref="map" id="mapview" :zoom="zoom" :center="center" class="map">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-marker @l-click="test" :lat-lng="marker"></v-marker>
        </v-map>
        <!-- <button type="button" @click="initMap">Load Map</button> -->

        <!-- <div id="iw-container">
            <div class="iw-title">${place.name}</div>
            <div class="iw-content">'
                <div class="iw-subTitle">History</div>
                <img src="${place.photos[0].getUrl({maxWidth:100, maxHeight:100})}" alt="Photo Time!"
                    height="auto" width="100">
                <p>Rating: ${place.rating}</p>
            </div>
            <div class="iw-bottom-gradient"></div>
        </div> -->

    </q-layout>
</template>

<script>
    import $ from "jquery"
    // import { vmap, vtilelayer, vmarker } from 'Vue2-Leaflet'
    import {
        QLayout,
        QBtn
    } from 'quasar'

    export default {
        data() {
            return {
                map: {},
                infoWindow: 'hello',
                canvasHeight: '',
                service: '',
                zoom: 13,
                center: [47.413220, -1.219482],
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482)
            }
        },
        components: {
            QLayout,
            QBtn
        },
        computed: {
            places() {
                return this.$store.state.places
            }
        },
        mounted() {
            // this.initMap()
        },
        methods: {
            test(){
                console.log('test')
            },

            callback(results, status) {
                console.log('calling back')
                // if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('results', results)
                //     for (var i = 0; i < results.length; i++) {
                //         this.createMarker(results[i])
                //     }
                // }
                // if (this.places[0]) {

                //     for (var i = 0; i < this.places.length; i++) {
                //         this.createMarker(this.places[i])
                //     }
                // }
            },

            createMarker(place) {
                var _this = this
                // var encodedVic = encodeURI(place.location.address1 + place.location.address2 + place.location.address3 + ',' + place.location.city)
                var template = `        
                    <div id="iw-container">
                        <div class="iw-title">
                            <h3>${place.name}</h3>
                        </div>
                        <div class="iw-content">
                            <img src="${place.image_url}" alt="Photo Time!" height="auto" width="100">
                            <h4>Rating: ${place.rating}</h4>
                        </div>
                        <div class="iw-bottom-gradient"></div>
                    </div>
                `
                var obj = {
                    lat: place.coordinates.lat,
                    lng: place.coordinates.lng
                }
                var placeLoc = obj;
                var marker = new google.maps.Marker({
                    map: this.map,
                    position: obj
                })

                google.maps.event.addListener(marker, 'click', () => {
                    // console.log(place)
                    // console.log(place.photos[0].getUrl({ maxWidth: 100, maxHeight: 100 }))
                    _this.infoWindow.setContent(template)
                    _this.infoWindow.open(_this.map, marker)
                })
                console.log('marker created')


            },

            handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPos(pos);
                infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
                infoWindow.open(map)
            }
        }
    }

</script>

<style>
    #mapview {
        height: 100vh;
    }

    .map{
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