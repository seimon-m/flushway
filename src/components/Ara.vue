<template>
    <div>
        <div class="ara-wrapper">
            <h2 ref="title" class="title-ara">
                Ablauf der Wasserreinigung in der ARA
            </h2>
            <div
                v-for="(station, index) in araStations"
                :key="index"
                v-bind:class="'station s' + (index + 1)"
            >
                <div class="station-text">
                    <h4>{{ station.fields.title }}</h4>
                    <p class="description">
                        {{
                            station.fields.description.content[0].content[0]
                                .value
                        }}
                    </p>
                </div>
                <div class="station-img">
                    <img
                        class="image i1"
                        v-if="station.fields.media"
                        :src="station.fields.media[0].fields.file.url"
                    />
                </div>
            </div>
        </div>
        <div class="fluss"></div>
        <div class="end-wrapper">
            <div class="end">
                <h2>So wird der Kreislauf wieder geschlossen</h2>
                <p>
                    Möchtest du den Abwasserweg von einer weiteren Adresse
                    entdecken?
                </p>
                <button class="end-button" type="button">
                    FLUSH AGAIN
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import contentfulClient from "@/modules/contentful.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    name: "Ara",
    data() {
        return {
            araStations: [],
        };
    },
    methods: {
        async getContentful() {
            let result = await contentfulClient.getEntries({
                content_type: "ara",
            });
            this.araStations = result.items[0].fields.araStation;
        },
    },
    mounted() {
        let endButton = document.querySelector(".end-button");

        endButton.onclick = function() {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        };

        setTimeout(() => {
            const { title } = this.$refs;
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 100%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                y: 60,
                opacity: 0,
                ease: "sine.inOut",
            });

            gsap.from(".s1", {
                scrollTrigger: {
                    trigger: ".s1",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s2", {
                scrollTrigger: {
                    trigger: ".s2",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s3", {
                scrollTrigger: {
                    trigger: ".s3",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s4", {
                scrollTrigger: {
                    trigger: ".s4",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s5", {
                scrollTrigger: {
                    trigger: ".s5",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s6", {
                scrollTrigger: {
                    trigger: ".s6",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s7", {
                scrollTrigger: {
                    trigger: ".s7",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s8", {
                scrollTrigger: {
                    trigger: ".s8",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
            gsap.from(".s9", {
                scrollTrigger: {
                    trigger: ".s9",
                    start: "top 70%",
                    end: "center 60%",
                    scrub: 3,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                y: 60,
            });
        }, 1000);
    },
    created() {
        this.getContentful();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ara-wrapper {
    min-height: 100vh;
    width: 100vw;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    height: auto;
    overflow: hidden;
}

.title-ara {
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 100px;
}

.station {
    padding-right: 100px;
    padding-left: 100px;
    margin-bottom: 50px;
}

.s1,
.s3,
.s5,
.s7,
.s9 {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.s2,
.s4,
.s6,
.s8 {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
}

.description {
    max-width: 440px;
    margin-left: 40px;
    margin-top: 10px;
}

.image {
    max-width: 100%;
    max-height: 100%;
}

.station-text {
    width: calc(100vw / 2 - 100px);
}

.station-text p {
    line-height: 1.5;
    margin-top: 20px;
}

.station-img {
    width: calc(100vw / 2 - 100px);
    display: flex;
    justify-content: center;
}

.end-wrapper {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
}

.end {
    max-width: 1200px;
    padding-right: 100px;
    padding-left: 100px;

    margin-left: auto;
    margin-right: auto;
}

h2 {
    margin-bottom: 20px;
}

.end-button {
    width: 200px;
    height: 60px;
    border-radius: 30px 30px 30px 30px;
    background-color: #5ff4f4;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 40px;
}

.end-button:hover {
    background-color: #5bd6d6;
}

.fluss {
    background-image: url("../assets/fluss-small.svg");
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 601px;
    margin-top: -300px;
}
.s1 .station-img img {
    width: 4905px;
    max-height: 3212px;
}

.s2 .station-img img {
    width: 446px;
    max-height: 156px;
}

.s3 .station-img img {
    width: 873px;
    max-height: 1094px;
}

.s4 .station-img img {
    width: 832px;
    max-height: 1082px;
}

.s5 .station-img img {
    width: 660px;
    max-height: 889px;
}

.s6 .station-img img {
    width: 547px;
    max-height: 729px;
}

.s7 .station-img img {
    width: 1033px;
    max-height: 924px;
}

.s8 .station-img img {
    width: 1126px;
    max-height: 1320px;
}
</style>
