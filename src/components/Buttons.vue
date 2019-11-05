<template lang="pug">
  #app
      h1 Sequenc'ESIEA
      div
        button(@click='togglePlay') Play / Stop
      div
        button(@click='sequencers++') Add Instrument
      label BPM:
      input(type="text" v-model.number='bpm')
      hr

      sequencer(v-for="i in sequencers", :res = "res", :time = "time")

</template>

<script>
var Sequencer, MyLine;

// Hello = require("./components/Hello");

MyLine = require("./MyLine").default;
Sequencer = require("./Sequencer").default;

module.exports = {
  name: "buttons",
  components: {
    MyLine: MyLine,
    Sequencer: Sequencer
  },
  data: function() {
    return {
      time: -1,
      res: 16,
      isPlaying: false,
      sequencers: 1,
      bpm: 120
    };
  },
  methods: {
    nextTick: function() {
      var self, timeBetweenBeats;
      if (!this.isPlaying) {
        this.time = -1;
        return;
      }
      timeBetweenBeats = (60 * 1000) / (this.bpm * this.res);
      this.time = this.time + 1;
      self = this;
      return setTimeout(function() {
        return self.nextTick();
      }, timeBetweenBeats);
    },
    togglePlay: function() {
      if (this.time === -1) {
        this.isPlaying = true;
        return this.nextTick();
      } else {
        this.time === -1;
        return (this.isPlaying = false);
      }
    }
  }
};
</script>

<style>
#buttons {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
input,
select,
button {
  margin: 10px;
}
</style>
