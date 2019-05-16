const colors = [
  "rgb(100, 214, 0)",
  "rgb(255, 251, 0)",
  "rgb(255, 38, 0)",
  "rgb(0, 119, 255)"
];
export const animLetters = (
  id: string,
  duration: number,
  direction: any = "normal",
  easing: string = "ease"
) => {
  let ran = Math.floor(Math.random() * Math.floor(4));
  let steps = new KeyframeEffect(
    document.getElementById(id),
    [
      { color: "#fff", opacity: 0 },
      { color: colors[ran] },
      { color: "#fff", opacity: 1 }
    ],
    { duration: duration, direction: direction, easing: easing }
  );
  let anim = new Animation(steps, document.timeline);
  anim.play();
};
