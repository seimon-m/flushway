<template>
    <div id="map"></div>
    <div id="features">
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
    </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";
import contentfulClient from "@/modules/contentful.js";
import Waterstation from "@/components/Waterstation.vue";

export default {
    name: "FlyTo",
    components: {
        Waterstation,
    },
    data() {
        return {
            map: "",
            marker: "",
            waterstations: [],
            activeChapterName: 0,
            lastWaterstation: "",
            chapters: {
                "0": {
                    bearing: -179,
                    center: [8.336115 - 0.008, 47.022332],
                    zoom: 15,
                    speed: 0.2,
                    pitch: 0,
                    active: true,
                },
                "1": {
                    bearing: 0,
                    center: [8.311214 + 0.035, 47.012611],
                    zoom: 13,
                    speed: 0.2,
                    pitch: 0,
                    active: false,
                },
                "2": {
                    bearing: 0,
                    center: [8.302653 + 0.0175, 47.050819],
                    zoom: 14,
                    speed: 0.2,
                    pitch: 0,
                    active: false,
                },
                "3": {
                    bearing: -15,
                    center: [8.286918 + 0.0175, 47.056064],
                    zoom: 14,
                    speed: 0.2,
                    pitch: 0,
                    active: false,
                },
                "4": {
                    bearing: 90,
                    center: [8.284386, 47.067621 - 0.012],
                    zoom: 14,
                    speed: 0.2,
                    pitch: 0,
                    active: false,
                },
                "5": {
                    bearing: 50,
                    center: [8.319887 + 0.01, 47.0896 - 0.007],
                    zoom: 14,
                    speed: 0.2,
                    pitch: 0,
                    active: false,
                },
                "6": {
                    bearing: 0,
                    center: [8.286918 + 0.125, 47.056064],
                    zoom: 11.5,
                    speed: 0.2,
                    pitch: 0,
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
                window.scrollY - window.innerHeight * 1 >=
                this.lastWaterstation.offsetTop
            ) {
                document.getElementById("map").style.position = "absolute";
                document.getElementById("map").style.top = "600vh";
                document.querySelectorAll(".marker").forEach((el) => {
                    el.style.opacity = "0";
                });
                document.querySelectorAll(".marker").forEach((el) => {
                    el.style.transition = "opacity 1s";
                });
            } else {
                document.getElementById("map").style.position = "fixed";
                document.getElementById("map").style.top = "0";
                document.querySelectorAll(".marker").forEach((el) => {
                    el.style.opacity = "1";
                });
                document.querySelectorAll(".marker").forEach((el) => {
                    el.style.transition = "opacity 1s";
                });
            }
        },
    },
    mounted() {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;

        var geojson = {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: {
                        message: "0min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.336115, 47.022332],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "55min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.311214, 47.012611],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "2h 15min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.302653, 47.050819],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "2h 40min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.286918, 47.056064],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "2h 55min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.284386, 47.067621],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "4h 20min",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.319887, 47.0896],
                    },
                },
                {
                    type: "Feature",
                    properties: {
                        message: "Ausfluss Reuss",
                        iconSize: [35, 35],
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [8.326256, 47.089994],
                    },
                },
            ],
        };

        this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/chiarakuehne/ckhd8lp6y0bv119qmf354di65",
            center: [8.336115 - 0.008, 47.022332],
            zoom: 15,
            bearing: -179,
            pitch: 0,
        });

        // add markers to map
        geojson.features.forEach((marker) => {
            // create a DOM element for the marker
            var el = document.createElement("div");
            el.className = "marker";
            el.style.backgroundImage = `url(${require("../assets/marker.svg")})`;
            el.style.width = marker.properties.iconSize[0] + "px";
            el.style.height = marker.properties.iconSize[1] + "px";
            el.style.backgroundSize = marker.properties.iconSize[1] + "px";
            let child = document.createElement("p");
            child.innerHTML = marker.properties.message;
            child.style.marginTop = "-30px";
            child.style.textShadow =
                "0px 0px 2px #242424, 0px 0px 5px #242424, 0px 0px 10px #242424";
            child.style.color = "#5bd6d6";
            child.style.width = "160px";
            child.style.marginLeft = "-62px";
            child.style.textAlign = "center";
            el.appendChild(child);

            // add marker to map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .addTo(this.map);
        });

        window.addEventListener("scroll", this.checkSlide);
    },
    updated() {
        // Fixed Map
        this.lastWaterstation = document.querySelector(".w7");
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
    min-height: 80vh;
    border: 0px solid white;

    display: flex;
    align-items: center;
}

.w1 {
    min-height: 100vh;
}

.w7 {
    min-height: 100vh;
}

.marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
    background-size: 35px;
}

.marker {
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}
</style>
