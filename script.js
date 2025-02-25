//  BACKGROUNDS DE LAS DOS CAJAS
const boxContainer = document.getElementById("box-background");
const boxReceivesShadow = document.getElementById("box-shadow");
const inputBoxContainer = document.getElementById("background-box");
const inputBoxReceivesShadow = document.getElementById("background-shadow-box");

// BACKGROUND boxContainer
inputBoxContainer.addEventListener(
  "input",
  (e) => (boxContainer.style.background = e.target.value)
);

// BACKGROUND boxReceivesShadow
inputBoxReceivesShadow.addEventListener(
  "input",
  (e) => (boxReceivesShadow.style.background = e.target.value)
);

// INPUTS DE LAS SOMBRAS
const shadowX = document.getElementById("x-shadow");
const shadowY = document.getElementById("y-shadow");
const shadowBlur = document.getElementById("blur-shadow");
const shadowSpread = document.getElementById("spread-shadow");
const shadowColor = document.getElementById("color-shadow");
const shadowOpacity = document.getElementById("opacity-shadow");
const shadowInputs = document.querySelectorAll(".input-range");

// CODIGO CSS BOX SHADOW
const codeShadow = document.getElementById("code-box-shadow");

// VALORES PROPIEDAS DE BOX SHADOW

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

function actualizeCodeShadow(x, y, blur, spread, color, opacity) {
  const colorShadow = textColor(color, opacity);

  return `box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${colorShadow};`;
}

// SETEO BOX-SHADOW
let x = shadowX.value;
let y = shadowY.value;
let blurShadow = shadowBlur.value;
let spread = shadowSpread.value;
let color = shadowColor.value;
let opacity = shadowOpacity.value;

actualizeShadow(boxReceivesShadow, x, y, blurShadow, spread, color, opacity);

// SETEO VALORES CSS BOX-SHADOW

// SETEO CODIGO CSS BOX-SHADOW
codeShadow.textContent = actualizeCodeShadow(
  x,
  y,
  blurShadow,
  spread,
  color,
  opacity
);

// MODIFICACION DE BOX-SHADOW
shadowInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const textValue = input.previousElementSibling.children[1];

    x = shadowX.value;
    y = shadowY.value;
    blurShadow = shadowBlur.value;
    spread = shadowSpread.value;
    color = shadowColor.value;
    opacity = shadowOpacity.value;

    input.getAttribute("type") === "range"
      ? (textValue.textContent = e.target.value + "px")
      : null;

    input.getAttribute("id") === "opacity-shadow"
      ? (textValue.textContent = e.target.value)
      : null;

    actualizeShadow(
      boxReceivesShadow,
      x,
      y,
      blurShadow,
      spread,
      color,
      opacity
    );

    codeShadow.textContent = actualizeCodeShadow(
      x,
      y,
      blurShadow,
      spread,
      color,
      opacity
    );
  });
});

// COPIAR CODIGO CSS BOX-SHADOW (elemento codeShadow)
const alertCopy = document.querySelector(".alert-copy");
codeShadow.addEventListener("click", (e) => {
  navigator.clipboard.writeText(e.target.textContent).then(
    () => {
      alertCopy.style.transform = "translateY(0)";
      setTimeout(() => {
        alertCopy.style.transform = "translateY(-100px)";
      }, 2000);
    },
    (err) => {
      console.error("No se pudo copiar el texto: ", err);
    }
  );
});
