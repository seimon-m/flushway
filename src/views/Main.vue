<template>
    <Start
        v-if="!start"
        @set-start="start = true"
        @handle-change="handleChange($event)"
    />
    <FlyTo v-if="start" :adress="adress" />
</template>

<script>
// @ is an alias to /src
import FlyTo from "../components/FlyTo.vue";
import Start from "../components/Start.vue";

export default {
    name: "Main",
    data() {
        return {
            start: false,
            adress: "",
        };
    },
    components: {
        FlyTo,
        Start,
    },
    methods: {
        handleChange(payload) {
            this.adress = payload;
        },
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
</style>
