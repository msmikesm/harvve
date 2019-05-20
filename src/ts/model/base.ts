export const elements = {
    video: document.getElementById('video'),
    help: document.getElementById('helpInfo'),
    helpList: document.getElementById('helpList')
}

export const commands = {
    PL: {
        media: ['Pomoc: otwiera / zamyka', 'Start: rozpoczyna', 'Stop: zatrzymuje', 'Wycisz: wycisza dźwięk', 'Przywróć: przywraca dźwięk']
    },
    EN: {
        media: [ 'Help: open / closed', 'Play', 'Stop', 'Mute', 'Unmute']
    }
}

export const speeches = {
    PL: {
        welcome: `Cześć, jestem Harvve. Aby poruszać się po stronie, oglądać filmy, słuchać muzyki, wysłać wiadomość - mów do mnie. Jeśli będziesz potrzebował pomocy, powiedz "POMOC", a wyświetli się menu.`,
    },

    EN: {
        welcome: `Hey, I'm Harvve. To move around the site, watch movies, listen to music, send a message to the creator, talk to me. If you don't know what I can do for you on the page, just say: HELP`,
    }
}


/**
 * Remove element or Clear element
 * @param removedElement element to be removed
 * @param clearElement element for cleaning (nodes)
 */
export const clear = (removedElement: any = null, clearElement: any = null) => {
    if(removedElement) {
        removedElement.replaceWitch('');
    }

    if(clearElement) {
        clearElement.innerHTML = '';
    }
};


/**
 * Set document language
 * @param code language code ex 'en-US'
 */
export const setDocLang = (code: string) => {
    document.documentElement.lang = code;
};