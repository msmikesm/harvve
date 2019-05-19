export const message = (elId: string, text: string, id: string) => {
  let markup = `<p id="${elId}" class="paragraph paragraph__first mt2">${text}</p>`;
  document.getElementById(id).insertAdjacentHTML("beforeend", markup);
};
