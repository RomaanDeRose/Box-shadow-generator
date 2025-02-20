//  BACKGROUNDS DE LAS DOS CAJAS
const boxContainer = document.getElementById("box-background");
const boxReceivesShadow = document.getElementById("box-shadow");
const inputBoxContainer = document.getElementById("background-box");
const inputBoxReceivesShadow = document.getElementById("background-shadow-box");

// CODIGO CSS BOX SHADOW
//  despues

// BACKGROUND boxContainer
inputBoxContainer.addEventListener("input", (e) => {
  e.preventDefault();
  boxContainer.style.background = e.target.value;
});

// BACKGROUND boxReceivesShadow
inputBoxReceivesShadow.addEventListener("input", (e) => {
  e.preventDefault();
  boxReceivesShadow.style.background = e.target.value;
});

// INPUTS DE LAS SOMBRAS
const shadowX = document.getElementById("x-shadow");
const shadowY = document.getElementById("y-shadow");
const shadowBlur = document.getElementById("blur-shadow");
const shadowSpread = document.getElementById("spread-shadow");
const shadowColor = document.getElementById("color-shadow");
const shadowOpacity = document.getElementById("opacity-shadow");

function hex2rgb(hex) {
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  return { red, green, blue };
}

function textColor(color, opacity) {
  const colorHex = hex2rgb(color);
  const { red, green, blue } = colorHex;
  const colorFinal = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

  return colorFinal;
}

function actualizeShadow(el, x, y, blur, spread, color, opacity) {
  const colorShadow = textColor(color, opacity);

  return (el.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${colorShadow}`);
}

function actualizeCodeShadow(x, y, blur, color, opacity) {
  const colorShadow = textColor(color, opacity);

  return `box-shadow: ${x}px ${y}px ${blur}px ${colorShadow};`;
}

let x = shadowX.value;
let y = shadowY.value;
let blurShadow = shadowBlur.value;
let spread = shadowSpread.value;
let color = shadowColor.value;
let opacity = shadowOpacity.value;

// SETEO BOX-SHADOW
actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);

// SETEO CODIGO CSS BOX-SHADOW
const codeShadow = document.getElementById("code-box-shadow");
codeShadow.textContent = actualizeCodeShadow(x, y, blurShadow, color, opacity);

// MODIFICACION DE BOX-SHADOW
shadowX.addEventListener("input", (e) => {
  e.preventDefault();
  x = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});

shadowY.addEventListener("input", (e) => {
  e.preventDefault();
  y = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});

shadowBlur.addEventListener("input", (e) => {
  e.preventDefault();
  blurShadow = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});

shadowSpread.addEventListener("input", (e) => {
  e.preventDefault();
  spread = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});

shadowColor.addEventListener("input", (e) => {
  e.preventDefault();
  color = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});

shadowOpacity.addEventListener("input", (e) => {
  e.preventDefault();
  opacity = e.target.value;
  actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);
  codeShadow.textContent = actualizeCodeShadow(
    x,
    y,
    blurShadow,
    color,
    opacity
  );
});
