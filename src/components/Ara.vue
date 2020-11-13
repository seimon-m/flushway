<template>
    <div class="ara-wrapper">
        <div
            v-for="(station, index) in araStations"
            :key="station.fields.title"
            v-bind:class="'station s' + (index + 1)"
        >
            <h2>{{ station.fields.title }}</h2>
            <p class="description">
                {{ station.fields.description.content[0].content[0].value }}
            </p>
            <img
                class="image i1"
                v-if="station.fields.media"
                :src="station.fields.media[0].fields.file.url"
            />
            <img
                class="image i2"
                v-if="showSecondImg(index)"
                :src="station.fields.media[1].fields.file.url"
            />
            <img
                class="image i3"
                v-if="showThirdImg(index)"
                :src="station.fields.media[2].fields.file.url"
            />
        </div>
    </div>
</template>

<script>
import contentfulClient from "@/modules/contentful.js";

export default {
    name: "Ara",
    data() {
        return {
            araStations: [],
        };
    },
    computed: {},
    methods: {
        async getContentful() {
            let result = await contentfulClient.getEntries({
                content_type: "ara",
            });
            console.log(result);
            this.araStations = result.items[0].fields.araStation;
            console.log(this.araStations);
        },
        showSecondImg(index) {
            return index == 3 || index == 8;
        },
        showThirdImg(index) {
            return index == 8;
        },
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
    margin-top: 100px;
    display: flex;
    flex-direction: column;
}

.station {
    padding-right: 100px;
    padding-left: 100px;

    justify-content: flex-start;
}

.description {
    max-width: 440px;
    margin: 50px;
}

.image {
    margin: 50px;
    max-width: 500px;
}

.s2 {
    align-self: flex-end;
}

.s4 {
    align-self: flex-end;
}

.s6 {
    align-self: flex-end;
}

.s7 {
    align-self: flex-end;
}

.s8 {
    align-self: flex-end;
}

.s9 {
    align-self: flex-end;
}
</style>
