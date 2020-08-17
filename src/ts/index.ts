import { RemoteControl } from "./model/RemoteControl/RemoteControl";


//@ts-ignore: Unreachable code error
if(window.chrome && (window.chrome.webstore || window.chrome.runtime)) {

    let control = new RemoteControl();
    control.start();

} else {
    //! INFO
    // hv.speech(`Your browser doesn't support speech recognition. Please use google chrome`, 0.7);
}