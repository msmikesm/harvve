import { RemoteControl } from "./model/RemoteControl/RemoteControl";
import { Voice } from "./model/Voice/Voice";
import { tabsCommands } from "./model/base";

import { helpItem } from "./view/helpItem";


//? APP STATE
const state = {};

const hv = new Voice('en-US');
//? Check if chrome
//@ts-ignore: Unreachable code error
if(window.chrome && (window.chrome.webstore || window.chrome.runtime)) {


    const rc = new RemoteControl('en-US');
    rc.startReco();
    rc.work(true);
    //@ts-ignore: Unreachable code error
    state.r = rc.result();
    //@ts-ignore: Unreachable code error
    if (state.r == 'HELP') {
        if(document.getElementById('helpInfo').className == 'help') {
            document.getElementById('helpInfo').className = 'help help__active';
        } else {
            document.getElementById('helpInfo').className = 'help';
        }
    }


    // hv.speech(`Hey, I'm Harvve. To move around the site, watch movies, listen to music, send a message to the creator, talk to me. If you don't know what I can do for you on the page, just say: HELP.
    // Let's try:`);
    // hv.speech('Say help');

    //? Render commends for specific page
    tabsCommands.media.map(element => {
        helpItem(element);
    })

} else {
    //! INFO
    // hv.speech(`Your browser doesn't support speech recognition. Please use google chrome`, 0.7);
}
