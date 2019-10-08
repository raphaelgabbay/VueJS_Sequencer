const app = new Vue({
    el: '#app',
    mounted: function() {
        let AudioContext = window.AudioContext || window.webkitAudioContext
        this.context = new AudioContext()
    }
})

window.addEventListener('mousemove', app.mousemoveFunction)
