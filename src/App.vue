<template>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
    />
    <router-view />
</template>

<!-- Global Style -->
<style>
/* RESET CSS */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input,
button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* OTHER CSS */

*:focus {
    outline: none;
}

body {
    background-color: #242424;
}

#app {
    font-family: "Raleway", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

/* Fonts */

body {
    color: #ffffff;
    line-height: 1.1;
}

h1 {
    font-weight: 800;
    font-size: 100px;
}

h2 {
    font-weight: 800;
    font-size: 70px;
}

h3 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
}

h4 {
    font-weight: 800;
    font-size: 40px;
}

p {
    font-weight: 500;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
}

/* MAP */

.mapboxgl-ctrl-bottom-left {
    display: none !important;
}

.mapboxgl-ctrl-bottom-right {
    display: none !important;
}
</style>
