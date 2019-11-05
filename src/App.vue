<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueJS Sequencer</span>
        <span style="padding:100px" class="font-weight-light">GABBAY | SABLON | DIABI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/raphaelgabbay/VueJS_Sequencer" target="_blank">
        <span class="mr-2">Github repo</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld /> -->
      <Buttons />
      <!-- <Sequencer /> -->
    </v-content>
  </v-app>
</template>
<!--
  </v-app>
</template>-->



<script>
// import HelloWorld from "./components/HelloWorld";
import Sequencer from "./components/Sequencer";
import MyLine from "./components/MyLine";
import Buttons from "./components/Buttons";
// import Hello from "./components/Hello";

export default {
  name: "App",
  components: {
    // HelloWorld
    Buttons,
    Sequencer,
    MyLine
    // Hello
  },
  data: () => ({
    // COUCOU
  })
};
</script>
