<template>
    <section :class="active ? 'active' : ''">
        <h3>{{ waterstation.fields.title }}</h3>
        <p>
            {{ waterstation.fields.description.content[0].content[0].value }}
        </p>
        <div class="waterstation-img">
            <img
                class="image"
                v-if="waterstation.fields.images"
                :src="waterstation.fields.images[0].fields.file.url"
            />
        </div>
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
            if (bounds.top < window.innerHeight / 2 && bounds.bottom > 0) {
                this.$emit("set-active");
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.checkBounds);
    },
    unmounted() {
        window.removeEventListener("scroll", this.checkBounds);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
    padding: 25px 80px;
    border-bottom: 0px solid #ddd;
    opacity: 0.25;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
}
section.active {
    opacity: 1;
}

h3 {
    margin-bottom: 20px;
    line-height: 1.1;
}

p {
    line-height: 1.5;
}

.waterstation-img {
    display: flex;
    justify-content: center;
}

.image {
    width: 100%;
    height: auto;
}
</style>
