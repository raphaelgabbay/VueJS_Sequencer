<template lang="pug">
div
    .sequencer
        .controls
            div
                label Steps:
                input(type="text", v-model.number='steps')
            div
                label Measures:
                input(type="text", v-model.number='measures')
            div
                label Transpose (semitones):
                input(type="text", v-model.number='transpose')
            div
                label Velocity (%):
                input(type="text", v-model.number='volume')
            div
                label Synth type:
                select(v-model="synth")
                    option sine
                    option sawtooth
                    option square
                    option triangle
            div
                label Attack (seconds):
                input(type="text", v-model.number='attack')
            div
                label Decay (seconds):
                input(type="text", v-model.number='decay')
            div
                label Filter cutoff (hz):
                input(type="text", v-model.number='filterCutoff')
            //div
                //label Reverb %:
                //input(type="text", v-model.number='reverbWet')
        div.boxes
            myLine-c(:beats = "steps", :current-note="currentStep", v-for="(onNotes, pitch) in notes", :pitch = "pitch", :on-notes="onNotes", @toggle-box = "handleToggleBox")

    hr
</template>

<script>
var Hello,
  MyLineC,
  Tone,
  indexOf =
    [].indexOf ||
    function(item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };

MyLineC = require("./MyLine").default;

Tone = require("tone");

module.exports = {
  name: "sequencer",
  components: {
    MyLineC: MyLineC
  },
  props: ["time", "res"],
  data: function() {
    return {
      notes: {
        C5: [],
        B4: [],
        A4: [],
        G4: [],
        F4: [],
        E4: [],
        D4: [],
        C4: []
      },
      steps: 16,
      measures: 4,
      synth: "sine",
      transpose: 0,
      filterCutoff: 3000,
      volume: 100,
      attack: 0.01,
      decay: 2.0
    };
  },
  computed: {
    currentStep: function() {
      var ticksPerStep;
      ticksPerStep = (this.measures * this.res) / this.steps;
      return Math.floor(this.time / ticksPerStep) % this.steps;
    }
  },
  watch: {
    currentStep: function() {
      return this.playNextStep();
    },
    steps: function() {
      var key, results;
      results = [];
      for (key in this.notes) {
        results.push((this.notes[key] = []));
      }
      return results;
    },
    synth: function(val) {
      return this.player.set({
        oscillator: {
          type: val
        }
      });
    },
    transpose: function(val) {
      if (isNaN(parseInt(val))) {
        val = 0;
      }
      return this.player.set({
        oscillator: {
          detune: val * 100
        }
      });
    },
    filterCutoff: function(val) {
      if (!isNaN(parseInt(val))) {
        return this.filter.set({
          frequency: val
        });
      }
    },
    volume: function(val) {
      if (!isNaN(parseInt(val))) {
        return this.player.set({
          volume: val / 100
        });
      }
    },
    attack: function(val) {
      if (!isNaN(parseInt(val))) {
        return this.player.set({
          envelope: {
            attack: val
          }
        });
      }
    },
    decay: function(val) {
      if (!isNaN(parseInt(val))) {
        return this.player.set({
          envelope: {
            decay: val,
            release: val
          }
        });
      }
    }
  },
  methods: {
    playNextStep: function() {
      var onNotes, pitch, ref, ref1, results, self;
      self = this;
      ref = this.notes;
      results = [];
      for (pitch in ref) {
        onNotes = ref[pitch];
        if (((ref1 = this.currentStep), indexOf.call(onNotes, ref1) >= 0)) {
          results.push(
            this.player.triggerAttackRelease(
              pitch,
              "8n",
              "+0",
              this.volume / 100
            )
          );
        } else {
          results.push(void 0);
        }
      }
      return results;
    },
    handleToggleBox: function(pitch, pos) {
      var index;
      if (indexOf.call(this.notes[pitch], pos) >= 0) {
        index = this.notes[pitch].indexOf(pos);
        if (index !== -1) {
          return this.notes[pitch].splice(index, 1);
        }
      } else {
        this.notes[pitch].push(pos);
        return this.player.triggerAttackRelease(
          pitch,
          "8n",
          "+0",
          this.volume / 100
        );
      }
    }
  },
  created: function() {
    var defaultEnv, synth;
    synth = new Tone.PolySynth(4, Tone.OmniSynth);
    synth.set({
      oscillator: {
        type: this.synth,
        detune: this.transpose * 100
      }
    });
    defaultEnv = {
      envelope: {
        attack: this.attack,
        decay: this.decay,
        sustain: 0.0,
        release: this.decay
      }
    };
    synth.set(defaultEnv);
    this.filter = new Tone.Filter(this.filterCutoff, "lowpass");
    this.synthPlayer = synth;
    synth.connect(this.filter);
    this.filter.connect(Tone.Master);
    this.player = synth;
    return this.player.set({
      volume: this.volume / 100
    });
  }
};
</script>

<style lang="stylus">
.sequencer {
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
}

input, select {
  margin: 10px;
}

.controls {
  width: 25%;
  height: 100%;
}

.boxes {
  width: 75%;
}
</style>
