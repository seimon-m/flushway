<template>
    <Start />
    <FlyTo />
    <Ara />
</template>

<script>
// @ is an alias to /src
import FlyTo from "../components/FlyTo.vue";
import Start from "../components/Start.vue";
import Ara from "../components/Ara.vue";

export default {
    name: "Main",
    components: {
        FlyTo,
        Start,
        Ara,
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
</style>
