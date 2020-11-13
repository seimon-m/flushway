<template>
    <div class="start">
        <h1>WOHIN FLIESST DEIN ABWASSER, WENN DU SPÜHLST?</h1>
        <form class="demo" role="adress">
            <label for="search" class="hidden-visually">Adresse: </label>
            <input
                type="text"
                name="adress"
                id="adress"
                @input="handleChange"
            />
            <button type="button" @click="$emit('set-start')">
                Flush
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Start",
    props: ["value"],
    methods: {
        handleChange(e) {
            this.$emit("handle-change", e.target.value);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    margin-bottom: 1000px;
}
.hidden-visually {
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    height: 1px;
    width: 1px;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
}
</style>
