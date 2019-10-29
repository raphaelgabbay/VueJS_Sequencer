<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueJS Sequencer</span>
        <span style="border:1px solid red;" class="font-weight-light">GABBAY | SABLON | DIABI</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/raphaelgabbay/VueJS_Sequencer" target="_blank">
        <span class="mr-2">Github repo</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld /> -->
      <Sequencer />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Sequencer from "./components/Sequencer";
import MyLine from "./components/MyLine";
// import Hello from "./components/Hello";

export default {
  name: "App",
  components: {
    // HelloWorld
    Sequencer,
    MyLine
    // Hello
  },
  data: () => ({
    // COUCOU
  })
};
</script>
