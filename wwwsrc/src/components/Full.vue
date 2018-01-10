<template>
    <q-layout>
        
                    <q-card>
                        <q-card-media overlay-position="full">
                            <img :src="chosen.image_url" alt="Business Picture">
                                <q-card-main slot="overlay">
                                <p>
                                    {{chosen.name}} - {{chosen.price}}
                                </p>
                                <p>Rating: {{chosen.rating}}</p>
                                <p slot="subtitle">Reviews: {{chosen.review_count}}</p>
    
                                <div slot="right" class="row items-center">
                                    <q-icon name="phone" /> {{chosen.phone}}
                                </div>
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
                            <q-btn @click="toMap" v-else flat color="primary">Go Now</q-btn>
                        </q-card-actions>
                    </q-card>
               

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
            return {}
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
        methods: {
            toMap(){
                this.$store.dispatch('getMap')
            }
        }
       
            
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

</style>