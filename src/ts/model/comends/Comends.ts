export class Comends {
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
        this.mediaElement.currentTime = 0;
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