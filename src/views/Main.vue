<template>
    <FlyTo />
</template>

<script>
// @ is an alias to /src
import FlyTo from "../components/FlyTo.vue";

export default {
    name: "Main",
    components: {
        FlyTo,
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
</style>
