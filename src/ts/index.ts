import { RemoteControl } from "./model/RemoteControl/RemoteControl";
import { Voice } from "./model/Voice/Voice";
import { commands, speeches, elements } from "./model/base";

import { helpItem } from "./view/helpItem";



class Harvve {
    hv: Voice = new Voice('en-US');
    rc: RemoteControl = new RemoteControl();

    public state = {
        lang: 'en-US',
        speech: {}
    };

    /**
     * live - start app
     */
    public live() {

        console.log(this.state.lang);
        this.rc.startReco();
        this.rc.work(true);
        this.rc.reco.onresult = (e:any) => {
            if(e.results.length > 0) {
                let res: string = e.results[0][0].transcript.toUpperCase();

                //! remove
                console.log(this.state.lang);
                console.log(res);

                // Commands parsers
                this.matchLanguage(res);
                if (this.state.lang == 'en-US') {

                    //* IF specific page return specific commandsparser
                    this.matchEngilishCommand(res);
                } else {
                    this.matchPolishCommand(res);
                }

                //! REMOVE
                console.log(this.state.lang);
            }
        };

    }

    /**
     * Switch Languages
     * @param code state.lang
     */
    private matchLanguage(code: string) {
        switch (code) {
            case 'ENGLISH':
                this.state.lang = 'en-US';
                this.rc.reco.lang = this.state.lang;
                this.state.speech = speeches.EN;
                elements.helpList.innerHTML = '';

                commands.EN.media.map(element => {
                    helpItem(element);
                });
                break;

            case 'POLISH':
                this.state.lang = 'pl-PL';
                this.rc.reco.lang = this.state.lang;
                this.state.speech = speeches.PL;
                elements.helpList.innerHTML = '';

                commands.PL.media.map(element => {
                    helpItem(element);
                });
                break;
            default:
                break;
        }
    }


    /**
     * English commands parser
     * @param command recognition result
     */
    private matchEngilishCommand(command: string) {
        switch (command) {
            case 'HELP':
            case 'HOPE':
                if(document.getElementById('helpInfo').className == 'help') {
                    document.getElementById('helpInfo').className = 'help help__active';
                } else {
                    document.getElementById('helpInfo').className = 'help';
                }
                break;
            case 'BOY':
                window.location.replace('https://youtube.com');
                break;
            default:
                break;
        }
    }


    /**
     * Polish commands parser
     * @param command recognition result
     */
    private matchPolishCommand(command: string) {
        switch (command) {
            case 'POMOC':
                if(elements.help.className == 'help') {
                    elements.help.className = 'help help__active';
                } else {
                    elements.help.className = 'help';
                }
                break;
            case 'MUZYKA':
                window.location.replace('https://www.youtube.com/watch?v=333aTTWNa0A');
            default:
                break;
        }
    }
}

//@ts-ignore: Unreachable code error
if(window.chrome && (window.chrome.webstore || window.chrome.runtime)) {

    //? WELCOME MESSAGE
    // hv.speech(`Hey, I'm Harvve. To move around the site, talk to me. If you don't know what I can do, just say: HELP. Miłej zabawy.`);

    let harv = new Harvve();
    harv.live();

} else {
    //! INFO
    // hv.speech(`Your browser doesn't support speech recognition. Please use google chrome`, 0.7);
}