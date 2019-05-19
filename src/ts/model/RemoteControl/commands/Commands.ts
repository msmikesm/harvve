export class Commands {
    mediaElement: any;

    constructor(element: any) {
        this.mediaElement = element;
    }

    /**
     * play
     */
    public play() {
        this.mediaElement.play();
    }

    /**
     * stop
     */
    public stop() {
        this.mediaElement.pause();
    }

    /**
     * mute
     */
    public mute() {
        this.mediaElement.muted = true;
    }

    /**
     * unmute
     */
    public unmute() {
        this.mediaElement.muted = false;
    }
}