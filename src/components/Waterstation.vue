<template>
    <section :class="active ? 'active' : ''">
        <h3>{{ waterstation.fields.title }}</h3>
        <p>
            {{ waterstation.fields.description.content[0].content[0].value }}
        </p>
    </section>
</template>

<script>
export default {
    name: "Waterstation",
    props: {
        waterstation: Object,
        active: Boolean,
    },
    methods: {
        checkBounds() {
            let bounds = this.$el.getBoundingClientRect();
            if (bounds.top < window.innerHeight / 20 && bounds.bottom > 0) {
                this.$emit("set-active");
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.checkBounds);
    },
    mounted() {
        console.log("Waterstation");
    },
    unmounted() {
        window.removeEventListener("scroll", this.checkBounds);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    padding: 25px 50px;
    line-height: 25px;
    border-bottom: 1px solid #ddd;
    opacity: 0.25;
    font-size: 13px;
}
section.active {
    opacity: 1;
}
</style>
