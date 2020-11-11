<template>
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
    />
    <div id="map"></div>
    <div id="features">
        <section ref="first" :class="{ active: chapters.first.active }">
            <h3>first</h3>
            <p>
                November 1895. London is shrouded in fog and Sherlock Holmes and
                Watson pass time restlessly awaiting a new case. "The London
                criminal is certainly a dull fellow," Sherlock bemoans. "There
                have been numerous petty thefts," Watson offers in response.
                Just then a telegram arrives from Sherlock's brother Mycroft
                with a mysterious case.
            </p>
        </section>
        <section ref="second" :class="{ active: chapters.second.active }">
            <h3>second</h3>
            <p>
                Arthur Cadogan West was found dead, head crushed in on train
                tracks at Aldgate Station at 6AM Tuesday morning. West worked at
                Woolwich Arsenal on the Bruce-Partington submarine, a secret
                military project. Plans for the submarine had been stolen and
                seven of the ten missing papers were found in West's possession.
                Mycroft implores Sherlock to take the case and recover the three
                missing papers.
            </p>
        </section>
        <section ref="third" :class="{ active: chapters.third.active }">
            <h3>third</h3>
            <p>
                Holmes and Watson's investigations take them across London.
                Sherlock deduces that West was murdered elsewhere, then moved to
                Aldgate Station to create the illusion that he was crushed on
                the tracks by a train. On their way to Woolwich Sherlock
                dispatches a telegram to Mycroft at London Bridge: "Send list of
                all foreign spies known to be in England, with full address."
            </p>
        </section>
        <section ref="fourth" :class="{ active: chapters.fourth.active }">
            <h3>fourth</h3>
            <p>
                While investigating at Woolwich Arsenal Sherlock learns that
                West did not have the three keys&mdash;door, office, and
                safe&mdash;necessary to steal the papers. The train station
                clerk mentions seeing an agitated West boarding the 8:15 train
                to London Bridge. Sherlock suspects West of following someone
                who had access to the Woolwich chief's keyring with all three
                keys.
            </p>
        </section>
        <section ref="fifth" :class="{ active: chapters.fifth.active }">
            <h3>fifth</h3>
            <p>
                Mycroft responds to Sherlock's telegram and mentions several
                spies. Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's
                eye. He heads to the nearby Gloucester Road station to
                investigate and learns that the windows of Caulfield Gardens
                open over rail tracks where trains stop frequently.
            </p>
        </section>
        <section ref="sixth" :class="{ active: chapters.sixth.active }">
            <h3>sixth</h3>
            <p>
                Holmes deduces that the murderer placed West atop a stopped
                train at Caulfield Gardens. The train traveled to Aldgate
                Station before West's body finally toppled off. Backtracking to
                the criminal's apartment, Holmes finds a series of classified
                ads from
                <em>The Daily Telegraph</em> stashed away. All are under the
                name Pierrot: "Monday night after nine. Two taps. Only
                ourselves. Do not be so suspicious. Payment in hard cash when
                goods delivered."
            </p>
        </section>
        <section ref="seventh" :class="{ active: chapters.seventh.active }">
            <h3>seventh</h3>
            <p>
                Holmes and Watson head to The Daily Telegraph and place an ad to
                draw out the criminal. It reads: "To-night. Same hour. Same
                place. Two taps. Most vitally important. Your own safety at
                stake. Pierrot." The trap works and Holmes catches the criminal:
                Colonel Valentine Walter, the brother of Woolwich Arsenal's
                chief. He confesses to working for Hugo Oberstein to obtain the
                submarine plans in order to pay off his debts.
            </p>
        </section>
        <section ref="eighth" :class="{ active: chapters.eighth.active }">
            <h3>eighth</h3>
            <p>
                Walter writes to Oberstein and convinces him to meet in the
                smoking room of the Charing Cross Hotel where he promises
                additional plans for the submarine in exchange for money. The
                plan works and Holmes and Watson catch both criminals.
            </p>
        </section>
        <div class="spacer"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import mapboxgl from "mapbox-gl";

export default {
    name: "Map",
    data() {
        return {
            map: "",
            activeChapterName: "first",
            chapters: {
                first: {
                    bearing: 27,
                    center: [8.305610426911699, 47.051771761813],
                    zoom: 20,
                    pitch: 20,
                    active: true,
                },
                second: {
                    duration: 6000,
                    center: [8.301080283176134, 47.05100899798123],
                    bearing: 150,
                    zoom: 21,
                    pitch: 0,
                    active: false,
                },
                third: {
                    bearing: 90,
                    center: [8.284618571908254, 47.065288103930754],
                    zoom: 13,
                    speed: 0.6,
                    pitch: 40,
                    active: false,
                },
                fourth: {
                    bearing: 90,
                    center: [8.297262687704347, 47.07443410549294],
                    speed: 0.8,
                    zoom: 12.3,
                    active: false,
                },
                fifth: {
                    bearing: 45,
                    center: [8.319048979161039, 47.08897580342486],
                    zoom: 15.3,
                    pitch: 20,
                    speed: 0.5,
                    active: false,
                },
                sixth: {
                    bearing: 180,
                    center: [8.319344246396554, 47.090772123540916],
                    zoom: 12.3,
                    active: false,
                },
                seventh: {
                    bearing: 90,
                    center: [8.326871402825304, 47.09063222719203],
                    zoom: 17.3,
                    pitch: 40,
                    active: false,
                },
                eighth: {
                    bearing: 90,
                    center: [8.305610426911699, 47.051771761813],
                    zoom: 14.3,
                    pitch: 20,
                    active: false,
                },
            },
        };
    },
    methods: {
        onScroll() {
            var chapterNames = Object.keys(this.chapters);
            for (var i = 0; i < chapterNames.length; i++) {
                var chapterName = chapterNames[i];
                if (this.isElementOnScreen(chapterName)) {
                    this.setActiveChapter(chapterName);
                    break;
                }
            }
        },
        setActiveChapter(chapterName) {
            if (chapterName === this.activeChapterName) return;

            this.map.flyTo(this.chapters[chapterName]);
            this.chapters[chapterName].active = true;
            this.chapters[this.activeChapterName].active = false;
            this.activeChapterName = chapterName;
        },
        isElementOnScreen(id) {
            var element = this.$refs[id];
            var bounds = element.getBoundingClientRect();
            return bounds.top < window.innerHeight && bounds.bottom > 0;
        },
    },
    mounted: function() {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
        this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/seimon/ckh3f75gc09mu19nvgrieu4dj",
            center: [8.305610426911699, 47.04713072067631],
            zoom: 15.5,
            bearing: 27,
            pitch: 45,
        });
    },
    created() {
        window.addEventListener("scroll", this.onScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.onScroll);
    },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

#map {
    position: fixed;
    width: 50%;
}
#features {
    width: 50%;
    margin-left: 50%;
    font-family: sans-serif;
    overflow-y: scroll;
    background-color: #fafafa;
}
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
section:last-child {
    border-bottom: none;
    margin-bottom: 200px;
}
.spacer {
    padding: 400px;
}
</style>
