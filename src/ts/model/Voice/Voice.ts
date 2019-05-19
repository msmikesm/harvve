export class Voice {
    lang: string;
    harvveVoice: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();

    constructor (lang: string) {
        this.lang = lang;
    }

    public speech(text: string, speed: number = .9) {

        this.harvveVoice.text = text;
        this.harvveVoice.lang = this.lang;
        this.harvveVoice.rate = speed;
        speechSynthesis.speak(this.harvveVoice);

    }

}