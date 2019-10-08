var app = new Vue({
    el: '#app',
    data: {
        effects: [],
        knobs: [
            {
                id: 0,
                label: 'Test Knob 3',
                rotation: -132,
                color: '#ffc145',
                active: true,
                selected: false,
                style: 3
            }
        ],
        currentY: 0,
        mousemoveFunction: function(e) {
            var selectedEffect = app.effects.filter(function(i) {
                return i.selected === true
            })[0]
            if (selectedEffect) {
                var selectedKnob = selectedEffect.knobs.filter(function(i) {
                    return i.selected === true
                })[0]
            } else {
                var selectedKnob = app.knobs.filter(function(i) {
                    return i.selected === true
                })[0]
            }
            if (selectedKnob) {
                // Knob Rotation
                if (e.pageY - app.currentY !== 0) {
                    selectedKnob.rotation -= e.pageY - app.currentY
                }
                app.currentY = e.pageY

                // Setting Max rotation
                if (selectedKnob.rotation >= 132) {
                    selectedKnob.rotation = 132
                } else if (selectedKnob.rotation <= -132) {
                    selectedKnob.rotation = -132
                }

                // Knob method to update parameters based on the know rotation
                // selectedKnob.method(selectedKnob.rotation, selectedKnob.modifier);
            }
        }
    },
    methods: {
        unselectKnobs: function() {
            for (var i in this.knobs) {
                this.knobs[i].selected = false
            }
            for (var i in this.effects) {
                for (var j in this.effects[i].knobs) {
                    this.effects[i].knobs[j].selected = false
                }
                this.effects[i].selected = false
            }
        }
    }
})

window.addEventListener('mousemove', app.mousemoveFunction)
