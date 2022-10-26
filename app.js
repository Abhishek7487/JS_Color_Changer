const btn = document.getElementById("button");
btn.style.cursor = "pointer";
const canvas = document.getElementById("canvas");
const codeContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * codeContent.length);
    hexCode = hexCode + codeContent[index];
  }
  canvas.style.backgroundColor = hexCode;
  canvas.style.transition = "0.1s";
});
