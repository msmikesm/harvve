export const message = (id: string, text: string, place: string) => {
  let markup = `<h1 id="${id}" class="heading heading__first">${text}</h1>`;
  document.getElementById(place).insertAdjacentHTML("beforeend", markup);
};
