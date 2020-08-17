import { Commands } from "./commands/Commands";
import { elements,
    setDocLang,
    speeches,
    commandCollection,
    clear,
    testCommands } from "../base";
import { helpItem } from "../../view/helpItem";


export class RemoteControl {
    public state = {
        lang: 'en-US',
        speech: {},
        continous: false,
    };

    //@ts-ignore
    private speechRecognition = new webkitSpeechRecognition();
    private video = new Commands(elements.video);



    /**
     * Start speech recognition
     */
    public start() {

        console.log(this.state.lang);
        this.speechRecognition.continuous = this.state.continous;
        this.speechRecognition.interimResults = this.state.continous;
        this.speechRecognition.start();
        this.speechRecognition.onend = () => this.speechRecognition.start();

        //? Main thread
        this.speechRecognition.onresult = (e:any) => {
            console.log(e);
            for (let i = e.resultIndex; i < e.results.length; ++i) {
                if(e.results[i].isFinal) {
                    let res = e.results[i][0].transcript
                        .trim().toUpperCase();

                    //! remove
                    console.log(res);

                    // Commands parsers
                    this.matchLanguage(res);
                    if (this.state.lang == 'en-US') {

                        //* IF specific page return specific commandsparser
                        // this.matchEngilishCommand(res);
                        this.matchCommand(res, testCommands.EN.media);
                    } else {
                        this.matchCommand(res, testCommands.PL.media);
                    }


                }
            }

        }

    }


    /**
     * Switch Languages
     * @param code state.lang
     */
    private matchLanguage(code: string) {
        switch (code) {
            case 'ENGLISH':
                /**
                 * 1. Set state language
                 * 2. Set recognition language
                 * 3. Adds speeches to state
                 */
                this.state.lang = 'en-US';
                this.speechRecognition.lang = this.state.lang;
                this.state.speech = speeches.EN;

                //? Set document html language
                setDocLang(this.state.lang);

                //? Clear help list and add commands
                clear(null, elements.helpList);
                commandCollection.EN.media.map(elements => {
                    helpItem(elements);
                });
                break;

            case 'POLISH':
                /**
                 * 1. Set state language
                 * 2. Set recognition language
                 * 3. Adds speeches to state
                 */
                this.state.lang = 'pl-PL';
                this.speechRecognition.lang = this.state.lang;
                this.state.speech = speeches.PL;

                //? Set document html language
                setDocLang(this.state.lang);

                //? Clear help list and add commands
                clear(null, elements.helpList);
                commandCollection.PL.media.map(elements => {
                    helpItem(elements);
                });
                break;
            default:
                break;
        }
    }


    /**
     * 
     * @param command recognize command
     * @param comArr command array
     */
    private matchCommand(command: string, comArr: any) {
        switch (command) {
            case comArr[0]:
                elements.help.className == 'help' ?
                elements.help.className = 'help help__active':
                elements.help.className = 'help';
                break;
            case comArr[1]:
                this.video.play();
                break;
            case comArr[2]:
                this.video.stop();
                break;
            case comArr[3]:
                this.video.mute();
                break;
            case comArr[4]:
                this.video.unmute();
                break;
            default:
                break;
        }
    }

}