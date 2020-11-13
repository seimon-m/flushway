<template>
    <transition name="bounce">
        <Start
            v-if="!start"
            @set-start="start = true"
            @handle-change="handleChange($event)"
        />
    </transition>
    <transition name="bounce">
        <FlyTo v-if="start" :adress="adress" />
    </transition>
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

.bounce-enter-active {
    animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
    animation: bounce-in 0.8s reverse ease-in both;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(3);
    }
    100% {
        transform: scale(1);
    }
}
</style>
