import { Commands } from "./commands/Commands";
import { elements } from "../base";


export class RemoteControl {
    // @ts-ignore: Unreachable code error
    reco: webkitSpeechRecognition = new webkitSpeechRecognition();
    lang: string;

    constructor(language: string) {
        this.lang = language;
    }

    /**
     * startReco
     */
    public startReco() {

        this.reco.continuous = true;
        this.reco.interimResults = true;
        this.reco.lang = this.lang;
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
     * result
     */
    public result() {
        this.reco.addEventListener('result', (e: any) => {
            for (let i = e.resultIndex; i < e.results.length; ++i) {
                if(e.results[i].isFinal) {
                    let res = e.results[i][0].transcript.trim().toUpperCase();
                    //! TEST
                    console.log(res);
                    return res;
                }
            }
        });
    }

    /**
     * work
     */
    public work(a: boolean) {
        a ? this.reco.onend = () => this.reco.start() : null;
        // this.reco.onend = () => this.reco.start();
    }

}