export const helpItem = (command: string) => {
    let markup = `<li class="help__item">${command}</li>`;
    document.getElementById('helpList').insertAdjacentHTML('beforeend', markup);
};