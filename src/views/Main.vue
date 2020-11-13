<template @scroll="onScroll">
    <!-- <transition name="bounce">
        <Start
            v-if="!start && !showAra"
            @set-start="start = true"
            @handle-change="handleChange($event)"
        />
    </transition>
    <transition name="bounce">
        <FlyTo v-if="start && !showAra" :adress="adress" />
    </transition>
    <Ara v-if="showAra" /> -->
    <Start @set-start="start = true" @handle-change="handleChange($event)" />
    <FlyTo :adress="adress" />
    <Ara />
</template>

<script>
// @ is an alias to /src
import FlyTo from "../components/FlyTo.vue";
import Start from "../components/Start.vue";
import Ara from "../components/Ara.vue";

export default {
    name: "Main",
    data() {
        return {
            start: false,
            adress: "",
            showAra: false,
        };
    },
    components: {
        FlyTo,
        Start,
        Ara,
    },
    methods: {
        handleChange(payload) {
            this.adress = payload;
        },
        onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
            if (scrollTop + clientHeight >= scrollHeight) {
                this.showAra = true;
            }
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
