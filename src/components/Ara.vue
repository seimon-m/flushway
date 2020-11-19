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
                        {{ station.fields.description.content[0].content[0].value }}
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
        <div class="end-wrapper">
            <div class="end">
                <h2>So wird der Kreislauf wieder geschlossen</h2>
                <p>
                    Möchtest du den Abwasserweg von einer weiteren Adresse
                    entdecken?
                </p>
                <button
                    class="end-button"
                    type="button"
                    @click="this.methodThatForcesUpdate()"
                >
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
        methodThatForcesUpdate() {
            this.$forceUpdate();
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
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                x: 1000,
                ease: "sine.inOut",
                scale: 0.3,
            });

            gsap.from(".s1", {
                scrollTrigger: {
                    trigger: ".s1",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: -500,
            });
            gsap.from(".s2", {
                scrollTrigger: {
                    trigger: ".s2",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 800,
            });
            gsap.from(".s3", {
                scrollTrigger: {
                    trigger: ".s3",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 1,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: -500,
            });
            gsap.from(".s4", {
                scrollTrigger: {
                    trigger: ".s4",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 800,
            });
            gsap.from(".s5", {
                scrollTrigger: {
                    trigger: ".s5",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: -500,
            });
            gsap.from(".s6", {
                scrollTrigger: {
                    trigger: ".s6",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 800,
            });
            gsap.from(".s7", {
                scrollTrigger: {
                    trigger: ".s7",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 600,
            });
            gsap.from(".s8", {
                scrollTrigger: {
                    trigger: ".s8",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 600,
            });
            gsap.from(".s9", {
                scrollTrigger: {
                    trigger: ".s9",
                    start: "top 100%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: true,
                    toggleActions: "restart pause resume pause",
                },
                ease: "sine.inOut",
                opacity: 0,
                x: 600,
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

.s1, .s3, .s5, .s7, .s9 {
    display: flex;
    align-items: center;
    flex-direction: row;
}

.s2, .s4, .s6, .s8 {
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
    /*margin: 40px;*/
    max-width: 500px;
    height: 500px;

}

.station-text {
    width: calc(100vw / 2 - 100px);
}

.station-text p{
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
    /* max-width: 1100px; */
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
    /*margin-left: -30px;*/
}

.end-button:hover {
    background-color: #5bd6d6;
}
</style>
