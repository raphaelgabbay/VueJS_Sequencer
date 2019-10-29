<template lang="pug">
    .box-container
        .box(v-for="(elem, index) in beatsArray", :class="{active: elem, played: index == currentNote}", @click="handleClick(index)")
</template>

<script>
module.exports = {
  name: "myLine",
  props: ["beats", "currentNote", "onNotes", "pitch"],
  computed: {
    beatsArray: function() {
      var i, it, len, onNote, ref;
      it = new Array(this.beats);
      ref = this.onNotes;
      for (i = 0, len = ref.length; i < len; i++) {
        onNote = ref[i];
        if (onNote < this.beats) {
          it[onNote] = true;
        }
      }
      return it;
    }
  },
  methods: {
    handleClick: function(index) {
      return this.$emit("toggle-box", this.pitch, index);
    }
  }
};
</script>

<style lang="stylus">
.box-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box {
  background-color: alpha(black, 0.05);
  margin: 10px;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &.active {
    background-color: alpha(black, 0.25);
  }

  &.played {
    background-color: alpha(green, 0.25);
  }
}
</style>
