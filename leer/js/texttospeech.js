/**
 * Clase que pasa el texto a voz.
 */
export class TextToSpeech {
    constructor(texto) {
        this.synth = window.speechSynthesis;
        this.pause = document.getElementById('pause')
        this.pausar()
        this.resume = document.getElementById('resume')
        this.resumir()
        this.play = document.getElementById('play')
        window.onload = this.leer(texto)
    }

    textToSpeech(texto) {
        let utterance = new SpeechSynthesisUtterance(texto);
        var voices = window.speechSynthesis.getVoices();
        utterance.rate = 1.3;
        utterance.voice = voices[2]
        this.synth.speak(utterance);
    }

    leer(texto) {
        this.play.addEventListener('click', () => {
            this.textToSpeech(texto)
        })
    }

    pausar() {
        this.pause.addEventListener('click', () => {
            this.synth.pause()
        })
    }
    resumir(){
        this.resume.addEventListener('click', () => {
            this.synth.resume()
        })
    }
}

new TextToSpeech(document.getElementById('texto').textContent);