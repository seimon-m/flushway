<template>
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
    />
    <div id="map"></div>
    <div id="features">
        <!-- <h4>Deine Adresse: {{ adress }}</h4> -->
        <div
            v-bind:class="'waterstation w' + (index + 1)"
            v-for="(station, index) in waterstations"
            :key="station.fields.title"
        >
            <Waterstation
                :waterstation="station"
                :active="this.chapters[index].active"
                @set-active="this.setActiveChapter(index)"
            />
        </div>
        <!-- <h4 class="trigger">Deine Adresse: {{ adress }}</h4> -->
    </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/modules/contentful.js";
import Waterstation from "@/components/Waterstation.vue";

export default {
    props: ["adress"],
    name: "Map",
    components: {
        Waterstation,
    },
    data() {
        return {
            map: "",
            waterstations: [],
            activeChapterName: 0,
            waterstationSix: "",
            chapters: {
                "0": {
                    bearing: 27,
                    center: [8.305610426911699, 47.051771761813],
                    zoom: 20,
                    pitch: 20,
                    active: true,
                },
                "1": {
                    duration: 6000,
                    center: [8.301080283176134, 47.05100899798123],
                    bearing: 150,
                    zoom: 21,
                    pitch: 0,
                    active: false,
                },
                "2": {
                    bearing: 90,
                    center: [8.284618571908254, 47.065288103930754],
                    zoom: 13,
                    speed: 0.6,
                    pitch: 40,
                    active: false,
                },
                "3": {
                    bearing: 90,
                    center: [8.297262687704347, 47.07443410549294],
                    speed: 0.8,
                    zoom: 12.3,
                    active: false,
                },
                "4": {
                    bearing: 45,
                    center: [8.319048979161039, 47.08897580342486],
                    zoom: 15.3,
                    pitch: 20,
                    speed: 0.5,
                    active: false,
                },
                "5": {
                    bearing: 180,
                    center: [8.319344246396554, 47.090772123540916],
                    zoom: 12.3,
                    active: false,
                },
                "6": {
                    bearing: 90,
                    center: [8.326871402825304, 47.09063222719203],
                    zoom: 17.3,
                    pitch: 40,
                    active: false,
                },
                "7": {
                    bearing: 90,
                    center: [8.305610426911699, 47.051771761813],
                    zoom: 14.3,
                    pitch: 20,
                    active: false,
                },
            },
        };
    },
    methods: {
        setActiveChapter(chapterName) {
            if (chapterName === this.activeChapterName) return;

            this.map.flyTo(this.chapters[chapterName]);
            this.chapters[chapterName].active = true;
            this.chapters[this.activeChapterName].active = false;
            this.activeChapterName = chapterName;
        },
        async getContentful() {
            let result = await contentfulClient.getEntries({
                content_type: "flushway",
            });
            this.waterstations = result.items[0].fields.waterstation;
        },

        checkSlide() {
            if (
                window.scrollY - window.innerHeight >=
                this.waterstationSix.offsetTop
            ) {
                //console.log("fixed");
                document.getElementById("map").style.position = "absolute";
                document.getElementById("map").style.top = "600vh";
            } else {
                //console.log("scroll");
                document.getElementById("map").style.position = "fixed";
                document.getElementById("map").style.top = "0";
            }
        },
    },
    mounted() {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
        this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/chiarakuehne/ckhd8lp6y0bv119qmf354di65",
            center: [8.305610426911699, 47.04713072067631],
            zoom: 15.5,
            bearing: 27,
            pitch: 45,
        });

        window.addEventListener("scroll", this.checkSlide);
    },
    updated() {
        // Fixed Map
        this.waterstationSix = document.querySelector(".w6");
    },
    created() {
        this.getContentful();
    },
    unmounted() {
        window.removeEventListener("scroll", this.checkSlide);
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
#map {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
}

#features {
    width: 50%;
    margin-left: 50%;
    font-family: sans-serif;
    overflow-y: scroll;

    background-color: rgba(36, 36, 36, 0.5);
    backdrop-filter: blur(8px);
}

.waterstation {
    box-sizing: border-box;
    min-height: 100vh;
    border: 0px solid white;

    display: flex;
    align-items: center;
}
</style>
