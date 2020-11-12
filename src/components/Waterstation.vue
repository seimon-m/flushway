<template>
    <section :ref="ref" :class="active ? 'active' : ''">
        <h3>{{ waterstation.fields.title }}</h3>
        <p>
            {{ waterstation.fields.description.content[0].content[0].value }}
        </p>
    </section>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        waterstation: Object,
        active: Boolean,
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
