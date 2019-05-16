import { Comends } from "./comends/Comends";

export class RemoteControl {

    /**
     * startReco
     */
    public startReco() {

        // @ts-ignore: Unreachable code error
        if(window.chrome && (window.chrome.webstore || window.chrome.runtime)) {
            const video = document.querySelector('#video');
            const comends = new Comends(video);
            // @ts-ignore: Unreachable code error
            const reco = new webkitSpeechRecognition();

            reco.continous = true;
            reco.interimResults = true;
            reco.lang = "en-US";
            reco.continous = true;
            reco.start();

            reco.onresult = e => {
                for (let i = e.resultIndex; i < e.results.length; ++i) {
                    if(e.results[i].isFinal) {

                        if(e.results[i][0].transcript.trim() == 'play') {
                            comends.play();
                        } else if(e.results[i][0].transcript.trim() == 'stop') {
                            comends.stop();
                        } else if(e.results[i][0].transcript.trim() == 'mute') {
                            comends.mute();
                        } else if(e.results[i][0].transcript.trim() == 'unmute') {
                            comends.unmute();
                        }

                        // test
                        console.info(`You said: ${e.results[i][0].transcript}`);
                    }
                }
            };
        } else {
            console.info('Sorry your browser does not support voice recognition');
        }

    }

}