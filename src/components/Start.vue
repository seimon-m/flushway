<template>
    <div class="start-wrapper">
        <div class="start">
            <h1>
                WOHIN FLIESST DEIN <span class="font-color">ABWASSER</span>,
                WENN DU SPÜHLST?
            </h1>
            <form class="demo" role="adress">
                <label for="search" class="hidden-visually">Adresse: </label>
                <input
                    type="text"
                    name="adress"
                    id="adress"
                    placeholder="Gib deine Adresse ein ..."
                    @input="handleChange"
                />
                <button id="button" type="button" @click="$emit('set-start')">
                    Flush
                </button>
            </form>
        </div>
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
    mounted() {
        let button = document.getElementById("button");
        //console.log(button);

        let waterstationOne = document.querySelector(".w1");
        console.log(this.waterstationOne);

        button.onclick = function() {
            //window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
            waterstationOne.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        }
    },
    updated() {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-wrapper {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;

    background-color: rgba(36, 36, 36, 0.5);
    backdrop-filter: blur(8px);
}

.start {
    /* max-width: 1100px; */
    max-width: 1200px;
    padding-right: 100px;
    padding-left: 100px;

    margin-left: auto;
    margin-right: auto;
}

h1 {
    margin-bottom: 30px;
}

.font-color {
    color: #5ff4f4;
}

input {
    width: 380px;
    height: 60px;
    border-radius:30px 0px 0px 30px;
    padding-left: 30px;
    font-weight: 600;
}

button {
    width: 200px;
    height: 60px;
    border-radius:30px 30px 30px 30px;
    background-color: #5ff4f4;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: -30px;
}

button:hover{
    background-color: #5BD6D6;
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
