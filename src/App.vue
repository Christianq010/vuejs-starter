<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* Import Fonts */
@charset "UTF-8";

@font-face {
  font-family: ProximaNovaregular;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ REGULAR.OTF")
    format("opentype");
}

@font-face {
  font-family: ProximaNovaLight;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ LIGHT.OTF")
    format("opentype");
}

@font-face {
  font-family: ProximaNovaBold;
  font-weight: bold;
  src: url("./assets/font/MARK\ SIMONSON\ -\ PROXIMA\ NOVA\ BOLD.OTF")
    format("opentype");
}

/* Global styles */
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
a:hover {
  cursor: pointer;
}
body {
  font-family: "ProximaNovaregular", Arial, Geneva, sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>
