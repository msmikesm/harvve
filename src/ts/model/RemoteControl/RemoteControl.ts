import { Commands } from "./commands/Commands";
import { elements } from "../base";


export class RemoteControl {
    // @ts-ignore: Unreachable code error
    reco: webkitSpeechRecognition = new webkitSpeechRecognition();

    /**
     * startReco
     */
    public startReco() {

        // this.reco.continuous = true;
        // this.reco.interimResults = true;
        // this.reco.lang = 'en-US';
        this.reco.start();

        // reco.onresult = (e: any) => {
        //     for (let i = e.resultIndex; i < e.results.length; ++i) {
        //         if(e.results[i].isFinal) {
        //             let res = e.results[i][0].transcript.trim().toUpperCase();

        //             switch (res) {
        //                 case 'PLAY':
        //                     commands.play();
        //                     break;
        //                 case 'STOP':
        //                     commands.stop();
        //                     break;
        //                 case 'MUTE':
        //                     commands.mute();
        //                     break;
        //                 case 'UNMUTE':
        //                     commands.stop();
        //                     break;
        //                 case 'STOP':
        //                     commands.stop();
        //                     break;
        //                 case 'HELP':
        //                 case 'HOPE':
        //                     if(document.getElementById('helpInfo').className == 'help') {
        //                         document.getElementById('helpInfo').className = 'help help__active';
        //                     } else {
        //                         document.getElementById('helpInfo').className = 'help';
        //                     }
        //                     break;
        //                 default:
        //                     console.info(`I don't understan comend.`);
        //             }

        //             // test
        //             console.info(this.result);
        //         }
        //     }
        // };

        // reco.onend = () => {
        //     reco.start();
        // };
    }

    /**
     * work
     */
    public work(run: boolean) {
        run ? this.reco.onend = () => this.reco.start():
        this.reco.onend = () => this.reco.stop();
    }

    public language(code: string) {
        this.reco.lang = code;
    }
}